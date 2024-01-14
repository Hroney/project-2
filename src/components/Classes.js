import { useEffect, useState } from "react";
import CharacterClass from "./Class"
import { Outlet, useOutletContext } from "react-router-dom";
import "../styles/Classes.css"

function Classes() {
    const classList = useOutletContext();
    console.log(classList)


    const renderClasses = (
        classList.map((characterClass) => { return <CharacterClass key={characterClass.name} characterClass={characterClass} /> })
    )


    return (
        <main className="main-style">
            <Outlet context={classList} />
            {renderClasses}
        </main>
    );
}

export default Classes;