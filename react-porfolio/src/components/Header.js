import React from "react";
import NavBar from "./NavBar";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header(props) {
  return (
      <div>
    <h1>Logan Bonnesen</h1>
    <NavBar />
    </div>
  );
}

export default Header;
