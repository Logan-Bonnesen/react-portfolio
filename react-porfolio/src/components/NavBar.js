import React from "react";
import { NavLink } from "react-router-dom";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function NavBar() {
  return (
    <div>
        <nav>
            <ul style={{listStyleType: "none"}}>
                <li>
                    <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/about"}
                    to="/about"
                    >About</NavLink>
                </li>
                <li>
                    <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/contact"}
                    to="/contact"
                    >Contact</NavLink>
                </li>
                <li>
                    <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/projects"}
                    to="/projects"
                    >Projects</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;