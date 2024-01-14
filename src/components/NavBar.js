import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"

function NavBar() {

    return (
        <nav>
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

        </nav>
    );
};

export default NavBar;