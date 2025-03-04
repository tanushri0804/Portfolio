import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import backgroundImage from "../assets/image.png";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  return (
    <header className="hero" style={{ backgroundImage: `url("https://www.jotscroll.com/wp-content/uploads/2023/07/word-image-17791-1-e1690348326450.png")` }}>
      <div className="overlay">
        <h1>TANU SHRI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success."</p>

        <div className="button-container">
          <a 
            href="https://drive.google.com/file/d/14wCXi6Gjigimb0QloksqvHMzBaWToCxW/view?usp=sharing"
            className="btn" target="_blank" rel="noopener noreferrer"
          >
            Download Resume
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
