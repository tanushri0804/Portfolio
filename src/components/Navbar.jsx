import  { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ scrollToHero, scrollToAbout, scrollToWork, scrollToContact, scrollToEducation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">TANU SHRI</div>

        {/* Hamburger Menu Button */}
        <div 
          className={`menu-icon ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToHero(); setMenuOpen(false); }}>HOME</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout(); setMenuOpen(false); }}>ABOUT</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToEducation(); setMenuOpen(false); }}>EDU</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToWork(); setMenuOpen(false); }}>WORK</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); setMenuOpen(false); }}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  scrollToHero: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToWork: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
  scrollToEducation: PropTypes.func.isRequired
};

export default Navbar;