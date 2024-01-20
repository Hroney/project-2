import CharacterClass from "./Class"
import { Outlet, useOutletContext } from "react-router-dom";
import "../styles/Classes.css"

function Spells() {
    const classList = useOutletContext();
    console.log("classlist:", classList)

    const renderClasses = (
        classList.map((characterClass) => <CharacterClass key={characterClass.name} characterClass={characterClass} linkInfo="/spells/" />)
    )

    return (
        <main className="main-style">
            <Outlet context={classList} />
            {renderClasses}
        </main>
    );
}

export default Spells;