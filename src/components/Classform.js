import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";

function Classform() {
    const [classInformation, setClassInformation] = useState(undefined)
    const [partyList, setPartyList] = useState([])

    const [formData, setFormData] = useState({
        characterClass: "barbarian",
        id: "",
        proficiencyOne: "",
        proficiencyTwo: "",
        proficiencyThree: "",
        proficiencyFour: "",
        equipmentOptionOne: "",
        equipmentOptionTwo: "",
        equipmentOptionThree: "",
        equipmentOptionFour: "",
        equipmentOptionFive: "",
    });

    const classList = useOutletContext();
    const equipmentList = [
        "equipmentOptionOne",
        "equipmentOptionTwo",
        "equipmentOptionThree",
        "equipmentOptionFour",
        "equipmentOptionFive"
    ]

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${formData.characterClass}`)
            .then((r) => r.json())
            .then(setClassInformation);

    }, [formData])


    function handleChange(event) {
        if (event.target.name === "characterClass") {
            setFormData({
                characterClass: event.target.value,
                id: "",
                proficiencyOne: "",
                proficiencyTwo: "",
                proficiencyThree: "",
                proficiencyFour: "",
                equipmentOptionOne: "",
                equipmentOptionTwo: "",
                equipmentOptionThree: "",
                equipmentOptionFour: "",
                equipmentOptionFive: "",
            })
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const arrayOfProficiencies = [
            formData.proficiencyOne,
            formData.proficiencyTwo,
            formData.proficiencyThree,
            formData.proficiencyFour]
        const arrayOfEquipment = [
            formData.equipmentOptionOne,
            formData.equipmentOptionTwo,
            formData.equipmentOptionThree,
            formData.equipmentOptionFour,
            formData.equipmentOptionFive]
        const bodyReturn = {
            "id": formData.id,
            "characterClass": formData.characterClass,
            "proficiences": arrayOfProficiencies,
            "equipment": arrayOfEquipment
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyReturn),
        }
        fetch("http://localhost:3001/party", configObj)
            .then((r) => r.json())
            .then(character => addPartyMember(character))
        setFormData({
            characterClass: formData.characterClass,
            id: "",
            proficiencyOne: "",
            proficiencyTwo: "",
            proficiencyThree: "",
            proficiencyFour: "",
            equipmentOptionOne: "",
            equipmentOptionTwo: "",
            equipmentOptionThree: "",
            equipmentOptionFour: "",
            equipmentOptionFive: "",
        })
    }

    const addPartyMember = (newCharacter) => {
        setPartyList([newCharacter])
    }

    const profOptions = (
        classInformation === undefined ? "loading..." :
            classInformation.proficiency_choices[0].from.options.map((profOption) => {
                return <option
                    disabled={Object.values(formData).includes(profOption.item.index) ? true : false}
                    value={profOption.item.index}
                    key={profOption.item.index}>
                    {profOption.item.name}
                </option>
            })
    )

    function equipmentChoiceFunction(choice) {
        const choiceCheck = choice.from.option_set_type;
        if (choiceCheck === "equipment_category") {
            return <option value={choice.from.equipment_category.index}>{choice.from.equipment_category.index}</option>
        } else if (choiceCheck === "options_array") {
            return choice.from.options.map((optionChoice) => {
                if (optionChoice.option_type === "counted_reference") {
                    return <option value={optionChoice.of.index}>{optionChoice.of.index}</option>
                } else if (optionChoice.option_type === "multiple") {
                    let returnString = optionChoice.items.map((item) => {
                        if (item.option_type === "choice") {
                            return item.choice.from.equipment_category.index
                        } else if (item.option_type === "counted_reference") {
                            return item.of.index
                        } else { return "" }
                    })
                    return <option value={returnString.join(", ")}>{returnString.join(" and ")}</option>
                } else if (optionChoice.option_type === "choice") {
                    return (
                        <option
                            value={optionChoice.choice.from.equipment_category.index}>
                            {optionChoice.choice.from.equipment_category.index}
                        </option>
                    )
                }
                else { return null }
            })
        }

    }

    return (
        <main>
            {classInformation === undefined ? <>Loading..</> : <form onSubmit={handleSubmit}>
                <label>
                    Character Class:
                    <select
                        value={formData.characterClass}
                        name="characterClass"
                        onChange={handleChange}
                    >
                        {classList.map((selectableClass) =>
                            <option
                                value={selectableClass.index}
                                key={selectableClass.index}>
                                {selectableClass.name}
                            </option>)}
                    </select>
                </label>
                <br />
                <label>
                    Character name:
                    <input
                        type="text"
                        name="id"
                        onChange={handleChange}
                        value={formData.id}
                    ></input>
                </label>
                <br />
                <label>
                    First Proficiency:
                    <select
                        name="proficiencyOne"
                        value={formData.proficiencyOne}
                        onChange={handleChange}
                    >
                        {formData.proficiencyOne !== "" ?
                            <option disabled value=""> -- select an option -- </option> :
                            <option value=""> -- select an option -- </option>}
                        {profOptions}
                    </select>
                    <br />
                </label>
                {(classInformation.proficiency_choices[0].choose >= 2) ? <label>
                    Second Proficiency:
                    <select
                        name="proficiencyTwo"
                        value={formData.proficiencyTwo}
                        onChange={handleChange}
                    >
                        {formData.proficiencyTwo !== "" ?
                            <option disabled value=""> -- select an option -- </option> :
                            <option value=""> -- select an option -- </option>}
                        {profOptions}
                    </select>
                    <br />
                </label> : null}
                {(classInformation.proficiency_choices[0].choose >= 3) ? <label>
                    Third Proficiency:
                    <select
                        name="proficiencyThree"
                        value={formData.proficiencyThree}
                        onChange={handleChange}
                    >
                        {formData.proficiencyThree !== "" ?
                            <option disabled value=""> -- select an option -- </option> :
                            <option value=""> -- select an option -- </option>}
                        {profOptions}
                    </select>
                    <br />
                </label> : null}
                {(classInformation.proficiency_choices[0].choose >= 4) ? <label>
                    Fourth Proficiency:
                    <select
                        name="proficiencyFour"
                        value={formData.proficiencyFour}
                        onChange={handleChange}
                    >
                        {formData.proficiencyFour !== "" ?
                            <option disabled value=""> -- select an option -- </option> :
                            <option value=""> -- select an option -- </option>}
                        {profOptions}
                    </select>
                    <br />
                </label> : null}
                {classInformation.starting_equipment_options.map((choice, index) => {
                    return <>
                        {choice.desc}
                        <br />
                        <select
                            name={equipmentList[index]}
                            value={formData[equipmentList[index]]}
                            onChange={handleChange}
                        >
                            {formData[equipmentList[index]] ?
                                <option disabled value=""> -- select an option -- </option> :
                                <option value=""> -- select an option -- </option>}
                            {equipmentChoiceFunction(choice)}
                        </select>
                        <br />
                    </>
                }
                )}
                <button type="submit" >Add Character</button>
            </form>}
            {<ul>{partyList.map(c => <CharacterCard {...c} />)}</ul>}
        </main>
    );
}

export default Classform;