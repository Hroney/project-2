export const CharacterCard = character => (
    <li key={character.id} className="character-card">
        <div>{character.id}</div>
        <div>Class: {character.characterClass}</div>
        <div>Proficiencies</div>
        <ul>
            {character.proficiences.map(p => p && <li>{p}</li>)}
        </ul>
        <div>Equipment</div>
        <ul>
            {character.equipment.map(e => e && <li>{e}</li>)}
        </ul>
    </li>
)