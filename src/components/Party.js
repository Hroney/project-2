import { useOutletContext } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "../styles/PartyList.css"

function Party() {
    const [partyList, setPartyList] = useOutletContext();

    return (
        <aside className="partylist">
            <ul>{partyList.map(c => <CharacterCard {...c} />)}</ul>
        </aside>
    );
}

export default Party;