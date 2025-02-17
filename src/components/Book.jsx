import React from "react";
import "../styles/book.css";

const Book = () => {
    return (
        <div className="home-container">
          <section className="hero">
            <h1 className="fade-in">
              Hi, I'm <span className="highlight">Tanu Shri</span>
            </h1>
            <p className="slide-in">A passionate Frontend Developer 🚀</p>
          </section>
        </div>
    );
};

export default Book