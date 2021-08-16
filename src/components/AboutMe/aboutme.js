import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./aboutme.css";

function AboutMe() {
  return (
    <section id = "about_me_section" className = " container section_one_about_me">
    <div>
      <h1 id = "about_me_header">About Me</h1>
      <div className="divider"></div>
    </div>
    <div >
      <p id = "about_me_first_summery"> Hello, I'm Derek Hernandez an aspiring Engineer/Developer. 
        My intrest in Engineering field has spanned from High School thought out College.
        Even after College I continued to pursue my passion for coding by enrolling in an intensive Bootcamp. 
      </p>
      <p id = "about_me_second_summery"> 
      I graduated college from Texas State with a Bachelors in Computer Science and currrently 
      entrolled in a Full-Stack Bootcamp at The University of Texas at Austin. 
      </p>
    </div>
    <div>
      <h2 className = " container" id = "about_me_recent_tech"> Recent tech</h2>
      <ul className = "about_me_recent_skills">
        <li>React</li>
        <li>NoSQL</li>
        <li>Node</li>
        <li>Java</li>
        <li>Python</li>
        <li>C++</li>
        <li>C</li>
        <li>SQL</li>

      </ul>
    </div>
  </section>
  );
}

export default AboutMe;
