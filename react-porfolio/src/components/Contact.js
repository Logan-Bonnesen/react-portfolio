import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Contact(props) {
  return (
    <div>
      <h3>Contact</h3>
      <p>Phone: 602-602-1602</p>
      <a href="mailTo:lbonnesen@gmail.com">Email </a>
      <a href="https://github.com/Logan-Bonnesen" target="_blank">
        Github
      </a>
      <a href="https://www.linkedin.com/in/logan-bonnesen-333ab257/">
        LinkedIn
      </a>
      <a href="https://docs.google.com/document/d/1HNwZmOgf8xpeJY05dfeIkjEeoDy0hXxJ3Tlvrqv8hLQ/edit?usp=sharing">
        Resume
      </a>
    </div>
  );
}

export default Contact;
