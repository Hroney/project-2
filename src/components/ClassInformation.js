import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "../styles/ClassStyle.css"

function ClassInformation() {
    const [classInformation, setClassInformation] = useState([])
    const nameOfClass = useParams();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${nameOfClass.id}`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [nameOfClass])
    console.log(classInformation)

    function loading(indexLookup) {
        return classInformation.starting_equipment_options === undefined ? <p>Loading...</p> : indexLookup
    }

    return (
        <aside className="border">
            <div>
                <h1>{classInformation.name}</h1>
                <p>Hit dice: {classInformation.hit_die}</p>
            </div>
            <div>
                {loading(classInformation.saving_throws.map((savingThrow) => <p className="proficiency">{savingThrow.name}</p>))}
            </div>
            <ul className="class-list">
                Proficiencies:
                {loading(classInformation.proficiencies.map((proficiency) => {
                    if (proficiency.name.includes("Saving")) { return null } else {
                        return (<li className="proficiency" key={proficiency.index}>{proficiency.name}</li>)
                    }
                }))}
            </ul>
            <div>
                Starting Equipment Options:
                {loading(classInformation.starting_equipment_options.map((option) => <p className="proficiency">{option.desc}</p>))}
            </div>
            <div>

            </div>
        </aside>
    )
}

export default ClassInformation