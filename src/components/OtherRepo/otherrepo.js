import React, {useEffect, useState} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import options from 'materialize-css';
import { FaGithub } from "react-icons/fa";
import "./otherrepo.css";
import axios from "axios";

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
}); 

function OtherRepo() {
  //    Getter     Setter
  const [repos, setrepos] = useState([]);
  useEffect(async ()=>{
    const result = await axios(
      'https://api.github.com/users/HernandezDerekJ/repos',
    );
    setrepos((result.data));
  },[])
  console.log(repos);
  const renderCard = (x) => { 
    const languageNotNull = x.language;
    return (
      <a className=" carousel-item center ">
          <div className="card otherCard">
            <div className="card-content">
              <span className="card-title">{x.name}</span> 
                {languageNotNull ? (
                  <p>Language: {x.language}</p>
                ) : (
                  <p>Language: MIT</p>
                )}
            </div>
            <div className="card-action">
              <p><a href={x.url}><FaGithub /></a></p> 
            </div>
          </div>
      </a>
      );
  };
  
  return (
    <div className="carousel container center otherRepos">
      {repos.map(x => (
      renderCard(x)
      ))}
    </div>
  );
}

export default OtherRepo;
 