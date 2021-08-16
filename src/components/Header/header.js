import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./header.css";

function Header() {
  return (
<header>
  <nav>
    <div className="nav-wrapper headernav head">
      <a href="#" className="brand-logo "> &#60;DJH /&#62;</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a id = "link_Contact" href="assests/Derek_James_Hernandez.pdf" target="_blank">4) Resume</a></li>
        <li><a id = "link_Project" href="#contact_info">3) Contact</a></li>
        <li><a id = "link_Project" href="#project_section">2) Projects</a></li>
        <li><a id = "link_Me" href="#about_me_header">1) About Me</a></li>

      </ul>
    </div>
  </nav>  
</header>
  );
}

export default Header;
