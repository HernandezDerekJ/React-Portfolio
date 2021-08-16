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
import Load from "./components/LoadingScreen/loader";
import Space from "./components/Spacer/spacer";


function App() {
  const [done, setDone] = useState(undefined);

  setTimeout(() => {
    console.log("Refresh")
    setDone(true)
  }, 2000)
  return (
  <div>
    {!done ? (
        <Load />
    ) : (
        <Fade bottom>      
          <Right_bar/>
          <Left_bar/>
          <Header/>
          <Intro/>
            <Space/>
          <AboutMe/>  
            <Space/>   
          <Recent/>
          <OtherRepo/>
            <Space/>   
          <Contact/>
            <Space/>   
          <Footer/>
        </Fade>
    )}
  </div>
  )
}
export default App;
