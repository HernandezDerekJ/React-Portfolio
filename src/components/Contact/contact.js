import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./contact.css";

function Contact() {
  return (
    <section id = "contact_info" className = "container section_four_contact_me">
      <h1 id = "small_num_header"> Whats Next?</h1>
      <h2 id = "large_header"> How to get in touch?</h2>
      <p> I am activley seeking new oppertunities, ranging from freelance to open positions.
        The best way to get in touch is by email. 
        Feel free to email reguarding opportunities, questions or critiques. 
      </p>
      <a className = "email_button btn" href= "mailto:hernandez.derek19@outlook.com" rel = "noopener noreferrer" target= "_blank">Email</a>
  </section>
  );
}

export default Contact;
