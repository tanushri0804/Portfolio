import React from "react";
import { FaPaperPlane, FaCode, FaServer, FaPalette } from "react-icons/fa";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-gradient">TANU SHRI</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="subtitle-decoration">Frontend Developer</span>
          </h2>
          <p className="hero-description">
            "Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success"
          </p>

          <div className="tech-icons">
            <div className="tech-icon">
              <FaCode className="icon" />
              <span>React</span>
            </div>
            <div className="tech-icon">
              <FaPalette className="icon" />
              <span>UI/UX</span>
            </div>
            <div className="tech-icon">
              <FaServer className="icon" />
              <span>Java</span>
            </div>
          </div>

          <div className="button-container">
            <a 
              href="https://drive.google.com/file/d/14wCXi6Gjigimb0QloksqvHMzBaWToCxW/view?usp=sharing"
              className="btn btn-cv" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <button className="btn btn-connect" onClick={scrollToContact}>
              Let`s Connect <FaPaperPlane className="iconn" />
            </button>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="code-cube">
            <div className="cube-face cube-front">React</div>
            <div className="cube-face cube-back">JS</div>
            <div className="cube-face cube-right">CSS3</div>
            <div className="cube-face cube-left">HTML5</div>
            <div className="cube-face cube-top">UI/UX</div>
            <div className="cube-face cube-bottom">Java</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;