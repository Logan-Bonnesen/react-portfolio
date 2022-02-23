import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Footer(props) {
  return (
    <div style= {{backgroundColor: "aqua"}}>
      
      <a target="_blank" rel="noopener noreferrer" href="mailTo:lbonnesen@gmail.com">Email</a> &nbsp;&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Logan-Bonnesen" target="_blank">
        Github
      </a> &nbsp;&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/logan-bonnesen-333ab257/">
        LinkedIn
      </a> &nbsp;&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1HNwZmOgf8xpeJY05dfeIkjEeoDy0hXxJ3Tlvrqv8hLQ/edit?usp=sharing">
        Resume
      </a>
      <p>&copy; Logan Bonnesen 2022</p>
    </div>
    
  );
}

export default Footer;