import React from "react";
import "../styles/footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Icons

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Tanu Shri. All Rights Reserved.</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tanu-shri-76b7a1242/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/tanushri0804" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="mailto:tanushri98371@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
