import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./intro.css";

function Intro() {
  return (
<section className = "container col s1 quick_intro">
    <div >
      <h2 > Hello, I'm</h2>
      <h3> Derek Hernandez</h3>
      <h4>I'm an aspiring Engineer/Developer</h4>
    </div>
    <div>
      <p>I enjoy learning new skills and utilizing them. 
        Hence, I like to build things for computers</p>
      <p id = 'WhoAmI_Summery'> I'm an Austin-based aspiring Engineer, that has a broad acadeimic expereicne, ranging from Computer Security
        to full stack development. 
      </p>
    </div>
    <div id = "'contact_button'">
      <a class="light-green-text btn"  href="mailto:hernandez.derek19@outlook.com">Contact</a>
    </div>
</section>
  

  );
}

export default Intro;
