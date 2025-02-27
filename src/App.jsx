import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useRef } from "react";
import "./App.css";
import Badges from "./components/Badges";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from './components/Experience';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef =useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation =()=>{
    educationRef.current.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
      <Navbar 
        scrollToHero={scrollToHero} 
        scrollToAbout={scrollToAbout} 
        scrollToWork={scrollToWork} 
        scrollToContact={scrollToContact} 
        scrollToEducation={scrollToEducation}
      />
      
      <div ref={heroRef}>
        <Hero scrollToContact={scrollToContact} />
      </div>
      
      
      <div ref={aboutRef}>
        <ProfessionalJourney />
      </div>
      
      <div ref={educationRef}>
        <Education/>
      </div>
      <Technology/>

      <div ref={workRef}>
        <Experience />
      </div>
      <Projects/>

      <Badges />

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default App;
