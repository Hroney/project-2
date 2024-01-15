import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Spell.css"
import "../styles/ClassStyle.css"

function Spell() {
    const [spellInfo, setSpellInfo] = useState(undefined)
    const info = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells/${info.id}`)
            .then((r) => r.json())
            .then(setSpellInfo)
    }, [])
    console.log(spellInfo)


    return (
        <>
            {spellInfo === undefined ? <>Loading...</> :
                <>
                    <h1 className="align-center">{spellInfo.name}</h1>
                    <p className="spell-desc">School - {spellInfo.school.name}</p>
                    <p className="spell-desc">Range - {spellInfo.range}</p>
                    <p className="spell-desc">{spellInfo.concentration ? "Requires concentration" : "Does not require concentration."}</p>

                    {spellInfo.desc.map((desc) => <p className="spell-desc">{desc}</p>)}
                    <>
                        <p className="spell-desc">Classes</p>
                        {spellInfo.classes.map((castingClass) =>
                            <p className="spell-desc-pointer" key={castingClass.index} onClick={() => navigate(`../../classes/${castingClass.index}`)}> {castingClass.name}
                            </p>)}
                    </>
                    <></>
                </>
            }
        </>
    );
}

export default Spell;