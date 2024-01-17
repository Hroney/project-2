import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Classform() {
    const [classInformation, setClassInformation] = useState(undefined)
    const classList = useOutletContext();
    const [formData, setFormData] = useState({
        characterClass: "barbarian",
        proficiencyOne: "",
        proficiencyTwo: "",
        proficiencyThree: "",
        proficiencyFour: "",
        equipmentOptionOne: "",
        equipmentOptionTwo: "",
        equipmentOptionThree: "",
        equipmentOptionFour: "",
    });
    console.log("classInformation", classInformation)


    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${formData.characterClass}`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [formData])


    function handleChange(event) {
        console.log("name: ", event.target.name)
        console.log("value: ", event.target.value)
        if (event.target.name === "characterClass") {
            console.log("event.target.value:", event.target.value)
            setFormData({
                characterClass: event.target.value,
                proficiencyOne: "",
                proficiencyTwo: "",
                proficiencyThree: "",
                proficiencyFour: "",
                equipmentOptionOne: "",
                equipmentOptionTwo: "",
                equipmentOptionThree: "",
                equipmentOptionFour: "",
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
        // const arrayOfStrings = [formData.proficiencyOne, formData.answer2, formData.answer3, formData.answer4]
        const bodyReturn = {
            "characterClass": formData.characterClass
            // "prompt": formData.prompt,
            // "answers": arrayOfStrings,
            // "correctIndex": formData.correctIndex
        }
        console.log("BodyReturn: ", bodyReturn)
        console.log("Formdata: ", formData)
    }

    //         fetch("http://localhost:3001/party", {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(bodyReturn),
    //         })
    //           .then((r) => r.json())
    //           .then((newQuestion) => updateQuestionList(newQuestion));
    //       }

    // function profChoiceLabel() {
    //     // let jsxReturn;
    //     console.log("hello")
    //     for (let i = 0; i < classInformation.proficiency_choices[0].choose; i++) {
    //         return (<label>
    //             First Proficiency:
    //             <select>
    //                 {classInformation.proficiency_choices[0].from.options.map((profOption) => <option value={profOption.item.index} key={profOption.item.index}>{profOption.item.name}</option>)}
    //             </select>
    //         </label>)
    //     }
    //     // console.log("jsxReturn: ", jsxReturn)
    //     // return jsxReturn
    // }

    // // let profChoiceLabels = (

    // // )
    const profOptions = (
        classInformation === undefined ? "loading..." :
            classInformation.proficiency_choices[0].from.options.map((profOption) => { return <option value={profOption.item.index} key={profOption.item.index}>{profOption.item.name}</option> })
    )
    const equipOptions = (
        classInformation === undefined ? "loading..." : classInformation.starting_equipment_options.map((choice) => console.log("choice: ", choice))
        // classInformation.starting_equipment_options.map((profOption) => { return <option value={profOption.item.index} key={profOption.item.index}>{profOption.item.name}</option> })
    )

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
                        {classList.map((selectableClass) => <option value={selectableClass.index} key={selectableClass.index}>{selectableClass.name}</option>)}
                    </select>
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
                {classInformation === undefined ? "loading..." :
                    classInformation.starting_equipment_options.map((choice) =>
                        <>
                            {choice.desc}
                            <br />

                            <br />
                        </>)}
                {/* {(classInformation.proficiency_choices[0].choose >= 4) ? <label>
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
                </label> : null} */}
                <br />

                {/* 
        //         <label>
        //         Answer 2:
        //         <input
        //             type="text"
        //             name="answer2"
        //             value={formData.answer2}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Answer 3:
        //         <input
        //             type="text"
        //             name="answer3"
        //             value={formData.answer3}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Answer 4:
        //         <input
        //             type="text"
        //             name="answer4"
        //             value={formData.answer4}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Correct Answer:
        //         <select
        //             name="correctIndex"
        //             value={formData.correctIndex}
        //             onChange={handleChange}
        //         >
        //             <option value="0">{formData.answer1}</option>
        //             <option value="1">{formData.answer2}</option>
        //             <option value="2">{formData.answer3}</option>
        //             <option value="3">{formData.answer4}</option>
        //         </select>
        //         </label> */}
                <button type="submit" >Add Question</button>
            </form>}
        </main>
    );
}

export default Classform;