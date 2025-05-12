import React from "react";
import "./Badges.css";

import aiBadge from "../assets/ai.png";
import androidBadge from "../assets/android.jpg";
import awsBadge from "../assets/aws.png";
import blockchainBadge from "../assets/block.png";
import cybersecurityBadge from "../assets/cybersecurity.png";
import ethicalBadge from "../assets/ethical.jpeg";
import generativeBadge from "../assets/generative.png";
import informationBadge from "../assets/information.png";
import internetBadge from "../assets/internet.png";
import webBadge from "../assets/web.png";

const Badges = () => {
  return (
    <section className="badges-section">
      <h2 className="badges-title">CERTIFICATIONS AND BADGES</h2>
      <p className="badges-subtitle">
        <i>Celebrating my achievements and milestones</i>
      </p>
      <div className="underline"></div>

      <div className="badges-container">
        <div className="badge-card">
          <img src={aiBadge} alt="Introduction to Data Science" />
          <p>Introduction to Data Science</p>
          <a href="https://drive.google.com/file/d/1oFWpBN-VWonNMp9lDod_R8fSyI0fdTFS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={androidBadge} alt="Android Application" />
          <p>Android Application</p>
          <a href="https://drive.google.com/file/d/1uwnLfYCQ-2ZIKt93DjeEb0s1cCMU4iC7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={blockchainBadge} alt="Blockchain" />
          <p>Blockchain</p>
          <a href="https://drive.google.com/file/d/1Ch5dS2iFT9DdN8QBxkNhjNjiKD4I5h4p/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={cybersecurityBadge} alt="Google Ads for Beginners" />
          <p>Google Ads for Beginners</p>
          <a href="https://drive.google.com/file/d/1lIBnYeUyoZy3WKfWM4AbuE3i8TDVlR1E/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={ethicalBadge} alt="Ethical Hacking" />
          <p>Ethical Hacking</p>
          <a href="https://drive.google.com/file/d/1EMql6NGU6ClJrU7_yFjPH3xVcap9Qh5B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={internetBadge} alt="Internet of Things" />
          <p>Internet of Things</p>
          <a href="https://drive.google.com/file/d/1SPU0wQQ4I9agunlbWqVmN2NJa_76K2YA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={generativeBadge} alt="Generative AI" />
          <p>Generative AI</p>
          <a href="https://drive.google.com/file/d/1TREPbCKQ7DoJELIw8jgE3moDWigSwOSj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={informationBadge} alt="Information Technology" />
          <p>Information Technology</p>
          <a href="https://drive.google.com/file/d/1Fio1KgV-LGLKk_QThqMdieKZL_Q3ccbE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={webBadge} alt="Web Development" />
          <p>Web Development</p>
          <a href="https://drive.google.com/file/d/1TfLGAEDvDm_2yCSo4VfDHKTvwYqh3erZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={awsBadge} alt="AWS Cloud" />
          <p>AWS Cloud</p>
          <a href="https://drive.google.com/file/d/15iorOjc-jpS1p-oIXBczy4inwWtfXwX2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>
      </div>

      {/* View More Button that opens LinkedIn in a new tab */}
      <div className="view-more-container">
        <a href="https://www.linkedin.com/in/tanu-shri-76b7a1242/" target="_blank" rel="noopener noreferrer" className="view-more-btn">
          View More
        </a>
      </div>
    </section>
  );
};

export default Badges;
