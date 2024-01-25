import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"

function NavBar() {

    return (
        <nav className="navBar">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/classes"
                className="nav-link"
            >
                Classes
            </NavLink>
            <NavLink
                to="/spells"
                className="nav-link"
            >
                Spells
            </NavLink>
            <NavLink
                to="/pick-a-class"
                className="nav-link"
            >
                Create a Character
            </NavLink>
            <NavLink
                to="/pick-a-class/party"
                className="nav-link"
            >
                Party List
            </NavLink>
        </nav>
    );
};

export default NavBar;