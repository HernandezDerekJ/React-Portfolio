import React from "react";
import "./left.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


function leftside_bar(props) {
  return (    
    
  <div className = 'left_sidebar'>
    <aside orientation = "left" className = "sidebar_links">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/derekhernandez19/" target="_blank"><i className="FaLinkedin"></i><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/HernandezDerekJ" target="_blank"> <i className="FaGithub"><FaGithub /></i></a>
        </li>
        <li>
          <a href="assests/Derek_James_Hernandez.pdf" target="_blank"> <i className="FaFileAlt"><FaFileAlt /></i></a>
        </li>
      </ul>
    </aside>
  </div>);
}

export default leftside_bar;
