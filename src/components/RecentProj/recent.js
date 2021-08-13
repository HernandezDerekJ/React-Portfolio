import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import options from 'materialize-css';
import { FaGithub } from "react-icons/fa";
import { FaWindowClose } from  "react-icons/fa";
import "./recent.css";


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
function Recent() {


  return (    
  <div>
    <div className='container'> 
      <h1 className = "about_me_header">Recent Projects</h1>
      <div className="divider"></div>
    </div>
    <div className="carousel center-align">
      <a className="carousel-item ">
        <div className="card ">
          <div className="card-image waves-effect waves-green waves-light">
            <img className="activator" src="./img/Win95.png" alt="logo"/>
          </div>
          <div className="card-content">
            <span className="card-title activator">Windows 95</span>
            <p><a href="https://github.com/HernandezDerekJ/Windows-95"><FaGithub /></a></p>
          </div>
          <div className="card-reveal grey darken-1">
            <span className="card-title grey darken-1 waves-effect waves-red waves-light">Windows 95</span>
            <div className="divider"></div>

            <p className="grey darken-1 flow-text">A Full-Stack Web Application done as a group project. The Windows Emulator will check is user exists
            and then log in. From there the User will be able to play classic custom games and check highscores and create a text file that is always saved.</p>
            <p className="grey darken-1 flow-text">The web App utilizes databases, routes and handlebars to layout a functional application. Due to time contrants there are still 
            areas that could use updates.</p>
            <div className="divider"></div>

            <ul className = "featured_project_skills grey darken-1">
                <li className = " grey darken-1">HTML5</li>
                <li className = " grey darken-1">CSS</li>
                <li className = " grey darken-1">JavaScript</li>
                <li className = " grey darken-1">Handlebars</li>
                <li className = " grey darken-1">SQL</li>
                <li className = " grey darken-1">GIT</li>
            </ul>
          </div>
        </div>
      </a>
      <a className="carousel-item" >
      <div className="card ">
          <div className="card-image waves-effect waves-green waves-light">
            <img className="activator" src="./img/screenshotProject1.png" alt="logo"/>
          </div>
          <div className="card-content">
            <span className="card-title activator">This Day in Space</span>
            <p><a href="https://github.com/HernandezDerekJ/This-Day-In-Space"><FaGithub /></a></p>
          </div>
          <div className="card-reveal grey darken-1">
            <span className="card-title grey darken-1 waves-effect waves-red waves-light"> This Day in Space</span>
            <div className="divider"></div>
                <p className="grey darken-1 flow-text">A Front-End group project. That will ask the user to select a date from the past to see NASA Offical content for that Day.</p>
                <p className="grey darken-1 flow-text">The Application utilizes API calls to get information based on the user and will display that data. Also, saveing the date selected.</p>
                <div className="divider"></div>

                <ul className = "featured_project_skills grey darken-1">
                    <li className = " grey darken-1">Bulma</li>
                    <li className = " grey darken-1">HTML5</li>
                    <li className = " grey darken-1">JavaScript</li>
                    <li className = " grey darken-1">API</li>
                    <li className = " grey darken-1">CSS</li>
                </ul>
          </div>
        </div>
      </a>
      <a className="carousel-item" href="#three!">
      <div className="card ">
        <div className="card-image waves-effect waves-green waves-light">
              <img className="activator" src="./img/portPic.png" alt="logo"/>
            </div>
            <div className="card-content">
              <span className="card-title activator">Portfolio React</span>
              <p><a href="https://github.com/HernandezDerekJ/"><FaGithub /></a></p>
            </div>
            <div className="card-reveal grey darken-1">
              <span className="card-title grey darken-1 waves-effect waves-red waves-light">Portfolio React</span>
                <div className="divider"></div>
                <p className="grey darken-1 flow-text">A completly new and revamped custom Portfolio. The first version was constructed in pure HTML5 and CSS.</p>
                <p className="grey darken-1 flow-text">This new version is contrsucted from React and uses Materialize UI to help out with renderings.</p>
                <div className="divider"></div>

                <ul className = "featured_project_skills grey darken-1">
                    <li className = " grey darken-1">React</li>
                    <li className = " grey darken-1">HTML5</li>
                    <li className = " grey darken-1">JavaScript</li>
                    <li className = " grey darken-1">Materialize UI</li>
                    <li className = " grey darken-1">CSS</li>
                </ul>
            </div>
        </div>
      </a>
    </div>
  </div>
  );
}

export default Recent;