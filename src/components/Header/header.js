import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./header.css";

function Header() {
  return (
<header>
  <nav rel="noopener noreferrer">
    <div className="nav-wrapper headernav head " id='intro_header'>
      <a href="#intro_header" className="brand-logo " rel="noopener noreferrer"> &#60;DJH /&#62;</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li ><a id = "link_Contact" href="files/Derek_James_Hernandez_Resume.pdf"  rel="noopener noreferrer" target="_blank" className="tooltipped" data-position="bottom" data-tooltip="Up-To date Resume "> Resume</a></li>
        <li><a id = "link_Project" href="#contact_info"  rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Jump to Contact "> Contact</a></li>
        <li><a id = "link_Project" href="#other_project_header"  rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Jump to Repos "> Projects</a></li>
        <li><a id = "link_Me" href="#about_me_header" rel="noopener noreferrer" className="tooltipped " data-position="bottom" data-tooltip="Jump to Intro "> About Me</a></li>
      </ul>
    </div>
  </nav>  
</header>
  );
}

export default Header;
