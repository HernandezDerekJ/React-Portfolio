import React, {useEffect, useState, Component} from "react";
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
 
function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/HernandezDerekJ/repos')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  {
    setTimeout(() => {
      M.AutoInit()
    }, 500)
  }
  console.log(repos);
    return (
      <div>
        <div className='container'> 
            <h1 className = "about_me_header">Other Projects</h1>
            <div className="divider"></div>
        </div>
      <div className="carousel card-card container">
      { repos.map(x => (
          <a className=" carousel-item center">
            <div className="card otherCard grey darken-3">
              <div className="card-content otherCard-title grey darken-3">
                <span className="card-title grey darken-3">{x.name}</span> 
                <div className="divider split-div"></div>
                  {x.language ? (
                    <p className= " lang grey darken-3"> <span className='underline grey darken-3'>Language: </span>{x.language}</p>
                  ) : (
                    <p className= "lang grey darken-3"><span className='underline grey darken-3'>Language: </span> MIT</p>
                  )}
              </div>
                  <div className="card-action otherCard-action gitLogo grey darken-3">
                      <a className="" target="_blank" href={x.html_url}>Git: <FaGithub/></a>
                  </div>
            </div>
          </a>
      ))} 
    </div>
  </div>
    );
  }

export default MyComponent;