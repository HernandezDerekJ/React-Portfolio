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

          <a href="https://www.linkedin.com/in/derekhernandez19/" target="_blank" className="tooltipped" data-position="top" data-tooltip="LinkedIn "><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/HernandezDerekJ" target="_blank" className="tooltipped" data-position="top" data-tooltip="GitHub "><FaGithub /></a>
        </li>
        <li>
          <a href="assests/Derek_James_Hernandez.pdf" target="_blank" className="tooltipped" data-position="top" data-tooltip="Resume "> <FaFileAlt /></a>
        </li>
      </ul>
    </aside>
  </div>);
}

export default leftside_bar;
