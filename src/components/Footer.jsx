import { Copyright, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-mark">
              <span className="footer-logo-icon">T</span>
              <span className="footer-logo-name">Tanu Shri</span>
            </div>
            <p>
              Frontend developer crafting responsive, user-focused web
              experiences with React and modern UI practices.
            </p>

            <div className="footer-social-row">
              <a
                href="https://github.com/tanushri0804"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanu-shri-76b7a1242/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/certifications">Certifications</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:tanushri98371@gmail.com">
                  <Mail size={16} />
                  tanushri98371@gmail.com
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                >
                  Send a message
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/tanushri0804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub profile
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Availability</h4>
            <ul className="footer-links">
              <li className="footer-status">
                <span className="footer-status-dot" />
                Open to opportunities
              </li>
              <li>Uttarakhand, India</li>
              <li>Remote friendly</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            <Copyright size={14} />
            {currentYear} Tanu Shri. Built with care.
          </p>
          <p className="footer-tagline">
            Frontend Developer <span className="text-gradient">Portfolio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
