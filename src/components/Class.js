import { Link } from "react-router-dom";
import "../styles/ClassArticle.css"

function CharacterClass({ characterClass, linkInfo }) {

    return (
        <article className="class-article">
            <h1>
                <Link className={"link-text"} to={`${linkInfo}${characterClass.index}`}>{characterClass.name}</Link>
            </h1>
        </article>
    );
}

export default CharacterClass;