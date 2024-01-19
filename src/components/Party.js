import { useEffect, useState } from "react";

function Party() {
    const [partyList, setPartyList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/party")
            .then((r) => r.json())
            .then(setPartyList)
    }, [])




    function characterBuilder(character) {
        console.log("character:", character)
        return (
            <div className="character-card">
                <p>
                    {character.id} <br />
                    {character.characterClass} <br />
                    {character.proficiences.map((proficiency) => {
                        if (proficiency !== "") {
                            return <>{proficiency}<br /></>
                        }
                    })}
                    {character.equipment.map((equipPiece) => {
                        if (equipPiece !== "") {
                            return <>{equipPiece}<br /></>
                        }
                    })}

                </p>
            </div>
        )

    }

    return (
        <main>
            {partyList === undefined ? <>Loading</> :
                <ul>
                    {partyList.map((character) => characterBuilder(character))}
                    Hello
                    {console.log(partyList)}
                </ul>}
        </main>
    );
}

export default Party;