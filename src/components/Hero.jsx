import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Hero.css";

const Hero = ({ scrollToContact }) => {
  const handleViewAndDownload = () => {
    const viewUrl = "https://drive.google.com/file/d/1e1edRmTbDz0y-Trfdsy8mEUoPxA8Z_k_/view";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1e1edRmTbDz0y-Trfdsy8mEUoPxA8Z_k_";

    // Open the resume in a new tab for viewing
    window.open(viewUrl, "_blank");

    // Create a hidden link to trigger automatic download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Tanu_Sri_Resume.pdf"); // Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="hero" style={{ backgroundImage: `url("https://www.jotscroll.com/wp-content/uploads/2023/07/word-image-17791-1-e1690348326450.png")` }}>
      <div className="overlay">
        <h1>TANU SHRI</h1>
        <h2><i>Frontend Developer</i></h2>
        <p>"Driven to apply technical expertise and project experience to develop cutting-edge solutions and support organizational success."</p>

        <div className="button-container">
          <button className="btn" onClick={handleViewAndDownload}>
            Download Resume
          </button>
          <button className="btn" onClick={scrollToContact}>
            Let's Connect <FaPaperPlane className="iconn" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
