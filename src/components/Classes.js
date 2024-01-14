import { useEffect, useState } from "react";
import CharacterClass from "./Class"
import { Outlet, useOutletContext } from "react-router-dom";

function Classes() {
    const classList = useOutletContext();
    console.log(classList)


    const renderClasses = (
        classList.map((characterClass) => { return <CharacterClass key={characterClass.name} characterClass={characterClass} /> })
    )


    return (
        <main>
            <Outlet context={classList} />
            {renderClasses}
        </main>
    );
}

export default Classes;