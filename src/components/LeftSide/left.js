import React from "react";
import "./left.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


function leftside_bar(props) {
  return (    
    
  <div className = 'left_sidebar hide-on-med-and-down'>
    <aside orientation = "left" className = "sidebar_links">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/derekhernandez19/" target="_blank" className="tooltipped" data-position="top" data-tooltip="LinkedIn " rel="noopener noreferrer"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/HernandezDerekJ" target="_blank" className="tooltipped" data-position="top" data-tooltip="GitHub " rel="noopener noreferrer"><FaGithub /></a>
        </li>
        <li>
          <a href="files/Derek_James_Hernandez_Resume.pdf" target="_blank" className="tooltipped" data-position="top" data-tooltip="Resume " rel="noopener noreferrer"> <FaFileAlt /></a>
        </li>
      </ul>
    </aside>
  </div>);
}

export default leftside_bar;
