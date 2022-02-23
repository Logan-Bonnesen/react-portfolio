import React from "react";
import { NavLink } from "react-router-dom";
import "./Component.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function NavBar() {
  return (
    <nav style={{backgroundColor: "aqua", display: "flex", margin: 30 }}>
      <div style={{  position: "sticky" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "content-start",
            margin: 30,
          }}
        >
          Logan Bonnesen
        </h1>
      </div>
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <li>
          <NavLink
            className="headerLink"
            activeClassName="active"
            isActive={() => window.location.pathname === "/about"}
            to="/about"
          >
            About 
            &nbsp;&nbsp;
          </NavLink>
        </li>
        <li>
          <NavLink
            className="headerLink"
            activeClassName="active"
            isActive={() => window.location.pathname === "/contact"}
            to="/contact"
          >
            Contact
            &nbsp;&nbsp;
          </NavLink>
        </li>
        <li>
          <NavLink
            className="headerLink"
            activeClassName="active"
            isActive={() => window.location.pathname === "/projects"}
            to="/projects"
          >
            Projects
            &nbsp;&nbsp;
          </NavLink>
          </li>
          <li>
          <NavLink
            className="headerLink"
            activeClassName="active"
            isActive={() => window.location.pathname === "/resume"}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
