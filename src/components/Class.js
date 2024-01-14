import { useEffect, useState } from "react";
import ClassInformation from "./ClassInformation";
import { Link } from "react-router-dom";

function CharacterClass({ characterClass }) {
    const [classInformation, setClassInformation] = useState([])
    const [classClicked, setClassClicked] = useState(false)

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${characterClass.index}`)
            .then((r) => r.json())
            .then(setClassInformation)
    }, [])

    function handleExtraDetail() {
        setClassClicked(!classClicked)
        console.log(classInformation)
    }


    return (
        <article>
            <h1 onClick={handleExtraDetail}>{characterClass.name}</h1>
            <p><Link to={`/classes/${characterClass.index}`}>Info</Link></p>
            {/* {classClicked ? <ClassInformation classInformation={classInformation} /> : null} */}
        </article>
    );
}

export default CharacterClass;