import React, { Component } from "react";
import Header from "./components/Header/header";
import Left_bar from "./components/LeftSide/left";
import Right_bar from "./components/RightSide/right";
import Intro from "./components/Intro/intro";
import AboutMe from "./components/AboutMe/aboutme";
import Recent from "./components/RecentProj/recent";
import Contact from "./components/Contact/contact";
import OtherRepo from "./components/OtherRepo/otherrepo";
import Footer from "./components/Footer/foot";

function App() {
  return (
    
  <div>
    <Header/>
    <Right_bar/>
    <Left_bar/>
    <Intro/>
    <AboutMe/>
    <Recent/>
    <Contact/>
    <OtherRepo/>
    <Footer/>
  </div>
  )
}

export default App;
