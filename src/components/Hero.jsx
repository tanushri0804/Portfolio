import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCode, FaServer, FaPalette } from "react-icons/fa";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="hero-title">
              <span className="title-gradient">TANU SHRI</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            style={{ display: "inline-block" }}
          >
            <h2 className="hero-subtitle">
              <span className="subtitle-decoration">Frontend Developer</span>
            </h2>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Driven to apply technical expertise and project experience to develop
            cutting-edge solutions and support organizational success
          </motion.p>

          <motion.div
            className="tech-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
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
          </motion.div>

          <motion.div
            className="button-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a
              href="https://drive.google.com/file/d/14wCXi6Gjigimb0QloksqvHMzBaWToCxW/view?usp=sharing"
              className="btn btn-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <button className="btn btn-connect" onClick={scrollToContact}>
              Let&apos;s Connect <FaPaperPlane className="iconn" />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="code-cube">
            <div className="cube-face cube-front">React</div>
            <div className="cube-face cube-back">JS</div>
            <div className="cube-face cube-right">CSS3</div>
            <div className="cube-face cube-left">HTML5</div>
            <div className="cube-face cube-top">UI/UX</div>
            <div className="cube-face cube-bottom">Java</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
