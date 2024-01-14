import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ClassArticle.css"

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
        <article className="class-article">
            {/* <h1 onClick={handleExtraDetail}>{characterClass.name}</h1> */}
            <h1 onClick={handleExtraDetail}>
                <Link className={"link-text"} to={`/classes/${characterClass.index}`}>{characterClass.name}</Link>
            </h1>
            {/* {classClicked ? <ClassInformation classInformation={classInformation} /> : null} */}
        </article>
    );
}

export default CharacterClass;