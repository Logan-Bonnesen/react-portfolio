import React from "react";
import { NavLink } from "react-router-dom";
import "./Component.css"

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function NavBar() {
  return (
    <nav style={{display: "flex", margin: 30}}>
    
        <div style= {{backgroundColor: "white", position: "sticky"}}>
    <h1 style={{display: "flex", justifyContent: "content-start", margin: 30}}>Logan Bonnesen</h1>
    
    </div>
        
            <ul style={{listStyleType: "none", display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                <li>
                    <NavLink 
                    className="headerLink"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/about"}
                    to="/about"
                    >About</NavLink>
                </li>
                <li>
                    <NavLink 
                    className="headerLink"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/contact"}
                    to="/contact"
                    >Contact</NavLink>
                </li>
                <li>
                    <NavLink 
                    className="headerLink"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/projects"}
                    to="/projects"
                    >Projects</NavLink>
                </li>
            </ul>
        
    
    </nav>
  );
}

export default NavBar;