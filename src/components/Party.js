import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

function Party() {
    const [partyList, setPartyList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/party")
            .then((r) => r.json())
            .then(setPartyList)
    }, [])

    return (
        <main>
            <ul>{partyList.map(c => <CharacterCard {...c} />)}</ul>
        </main>
    );
}

export default Party;