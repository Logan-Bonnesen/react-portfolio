import React from "react";
import programmerIcon from "../img/programmer-icon.jpg";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function About(props) {
  return (
    <div>
      <img className="img-responsive" src={programmerIcon} />
      <p>
        Hi, I'm Logan and I'm learning how to make things for the Internet.
      </p>
    </div>
  );
}

export default About;
