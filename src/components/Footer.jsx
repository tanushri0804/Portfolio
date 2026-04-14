import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2 className="logo-title">TANU SHRI</h2>
          <h3 className="logo-subtitle">PORTFOLIO</h3>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Reach out :</h3>
          <a href="mailto:tanushri98371@gmail.com">tanushri98371@gmail.com</a>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Connect :</h3>
          <div className="social-icons">
            <a href="https://github.com/tanushri0804" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tanu-shri-76b7a1242/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/tanu_shrii.08/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;