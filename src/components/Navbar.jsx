import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">T</span> TANU SHRI
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <a href="#journey">ABOUT</a>
        <a href="#education">EDU</a>
        <a href="#work">WORK</a>
        <a href="#footer">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
