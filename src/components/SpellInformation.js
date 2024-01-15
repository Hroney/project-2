import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "../styles/ClassStyle.css"

function SpellInformation() {
    const [classInformation, setClassInformation] = useState([])
    const nameOfClass = useParams();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${nameOfClass.id}/spells`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [nameOfClass])

    console.log(classInformation)

    return (
        <aside className="border">
            Hello
        </aside>
    )
}

export default SpellInformation