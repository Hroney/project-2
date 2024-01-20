import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "../styles/ClassStyle.css"

function ClassInformation() {
    const [classInformation, setClassInformation] = useState([])
    const nameOfClass = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${nameOfClass.id}`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [nameOfClass])

    return (
        <aside className="border">
            <h1>{classInformation.name}</h1>
            <h3 className="pointer" onClick={() => navigate(`/spells/${nameOfClass.id}`)}>
                Click here for {nameOfClass.id} Spells
            </h3>
            <div>
                Hit dice:
                <p className="proficiency" key={classInformation.index}>{classInformation.hit_die}</p>
            </div>
            <div>
                Saving Throws:
                {classInformation.starting_equipment_options === undefined ? <>Loading...</> :
                    classInformation.saving_throws.map((savingThrow) =>
                        <p className="proficiency" key={savingThrow.name}>{savingThrow.name}</p>)}
            </div>
            <ul className="class-list">
                Proficiencies:
                {classInformation.starting_equipment_options === undefined ? <>Loading...</> :
                    classInformation.proficiencies.map((proficiency) => {
                        if (proficiency.name.includes("Saving")) { return null } else {
                            return (<li className="proficiency" key={proficiency.index}>{proficiency.name}</li>)
                        }
                    })}
            </ul>
            <div>
                Additional Proficiencies:
                <br />
                <p className="additional-proficiency">{classInformation.starting_equipment_options === undefined ? <>Loading...</> :
                    classInformation.proficiency_choices[0].desc}
                </p>

                {classInformation.starting_equipment_options === undefined ? <>Loading...</> :
                    classInformation.proficiency_choices[0].from.options.map((option) =>
                        <p className="proficiency" key={option.item.name}>{option.item.name}</p>)}
            </div>
            <div>
                Starting Equipment Options:
                {classInformation.starting_equipment_options === undefined ? <>Loading...</> :
                    classInformation.starting_equipment_options.map((option) =>
                        <p className="proficiency" key={option.desc}>{option.desc}</p>)}
            </div>
        </aside>
    )
}

export default ClassInformation