import { useOutletContext, useParams } from "react-router-dom"
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

    return (
        <aside>
            <h3>Hit dice: {classInformation.hit_die}</h3>
            <ul className="class-list">
                Proficiencies:
                {classInformation.proficiencies === undefined ? <li>Loading...</li> :
                    classInformation.proficiencies.map((proficiency) => (<li className="proficiency" key={proficiency.index}>{proficiency.name}</li>))}
            </ul>
        </aside>
    )
}

export default ClassInformation