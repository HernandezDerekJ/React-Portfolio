import React, { useState, Component } from "react";
import Fade from 'react-reveal/Fade';
import Header from "./components/Header/header";
import Left_bar from "./components/LeftSide/left";
import Right_bar from "./components/RightSide/right";
import Intro from "./components/Intro/intro";
import AboutMe from "./components/AboutMe/aboutme";
import Recent from "./components/RecentProj/recent";
import Contact from "./components/Contact/contact";
import OtherRepo from "./components/OtherRepo/otherrepo";
import Footer from "./components/Footer/foot";

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

};
function App() {
  const [done, setDone] = useState(undefined);

  setTimeout(() => {
    console.log("Refresh")
    setDone(true)
  }, 5000)
  return (
    
  
  <div>
    {!done ? (
    <h1>This pen is 
    <span
       class="txt-rotate"
       data-period="2000"
       data-rotate='[ " nerdy.", " simple.", " pure JS.", " pretty.", " fun!" ]'></span>
  </h1>
            
    ) : (
        <Fade bottom>      
          <Header/>
          <Right_bar/>
          <Left_bar/>
          <Intro/>
          <AboutMe/>     
          <Recent/>
          <OtherRepo/>
          <Contact/>
          <Footer/>
        </Fade>
    )}
  
  </div>
  )
}

export default App;
