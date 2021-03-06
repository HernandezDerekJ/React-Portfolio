import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./intro.css";

function Intro() {
  return (
<section className = "container  quick_intro">
    <div >
      <h2>Hello, I'm</h2>
      <h3>Derek Hernandez</h3>
      <h4>I'm an aspiring Engineer/Developer</h4>
    </div>
    <div>
      <p>I enjoy learning new skills and building apon them. 
        Hence, I like to build things for computers</p>
      <p id = 'WhoAmI_Summery'> I'm an Austin-based aspiring Engineer, that has a broad range of academic experience, ranging from Networks, Computer-Security, Data Mining
        to Full-Stack Development. 
      </p>
    </div>
    <div className= "button_wrapper "id = "contact_button">
      <a className="first_button light-green-text btn"  href="mailto:hernandez.derek19@outlook.com" rel="noopener noreferrer">Contact</a>
    </div>
</section>
  

  );
}

export default Intro;
