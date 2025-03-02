import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  return (
    <header className="hero" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/08/21/16/18/laptop-4421417_1280.jpg")` }}>
      <div className="overlay">
        <h1>TANU SHRI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success."</p>

        <div className="button-container">
          <a 
            href="https://drive.google.com/file/d/14wCXi6Gjigimb0QloksqvHMzBaWToCxW/view?usp=sharing"
            className="btn" target="_blank" rel="noopener noreferrer"
          >
            Download CV
          </a>
          <button className="btn" onClick={scrollToContact}>
            Let's Connect <FaPaperPlane className="iconn" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
