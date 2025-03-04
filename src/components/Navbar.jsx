import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToHero, scrollToAbout, scrollToWork, scrollToContact, scrollToEducation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">TANU SHRI</div>

        {/* Hamburger Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToHero(); }}>HOME</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>ABOUT</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToEducation(); }}>EDUCATION</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToWork(); }}>WORK</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
