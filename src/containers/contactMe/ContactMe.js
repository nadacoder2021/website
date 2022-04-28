import React from "react";
import "./ContactMe.css";
import { Feature } from "../../components";

function ContactMe(props) {
  return (
    <div id="contact">
      <Feature title="Contact Me" />
      <form method="POST" name="contactform" className="contactForm">
        <input type="hidden" name="form-name" value="contactForm" />

        <input type="text" name="name" placeholder="Enter your name" />

        <input type="email" name="email" placeholder="Enter your email" />

        <textarea name="message" placeholder="Messaage"></textarea>

        <button className="button" type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default ContactMe;
