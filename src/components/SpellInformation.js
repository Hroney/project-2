import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "../styles/ClassStyle.css"

function SpellInformation() {
    const [classInformation, setClassInformation] = useState(undefined)
    const nameOfClass = useParams();
    const navigate = useNavigate();
    const noSpellClasses = ['fighter', 'barbarian', 'monk', 'rogue']

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${nameOfClass.id}/spells`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [nameOfClass])

    return (
        <aside className="border">
            {classInformation === undefined ?
                <>Loading...</> : noSpellClasses.includes(nameOfClass.id) ? <>This class has no spells</> :
                    classInformation.results.map((spell) =>
                        <p className="spell-style" key={spell.index} onClick={() => navigate(`./${spell.index}`)}>{spell.name}</p>)
            }
            <Outlet />
        </aside>
    )
}

export default SpellInformation