import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Contact(props) {
  return (
    <div>
     <form action="https://formsubmit.co/980ffcdcf9e873d5165d009deb26ffff" method="POST">
     <input type="text" name="name" placeholder="Your name" required></input>
     <br></br>
     <input type="email" name="email" placeholder="Your email" required></input>
     <br></br>
     <textarea type="text" name="message" placeholder="Your message"required></textarea>
     <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
