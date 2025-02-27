import React from "react";
import "./Badges.css";

import aiBadge from "../assets/ai.png";
import androidBadge from "../assets/android.jpg";
import awsBadge from "../assets/aws.png";
import blockchainBadge from "../assets/block.png";
import cybersecurityBadge from "../assets/cybersecurity.png";
import generativeBadge from "../assets/generative.png";
import informationBadge from "../assets/information.png";
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
          <img src={generativeBadge} alt="android Development" />
          <p>Android Development</p>
          <a href="https://drive.google.com/file/d/13pMjZ3wdqvB415wUtMqqnAWGQ-zLHK6y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" alt="JavaScript & jQuery " />
          <p>JavaScript & jQuery </p>
          <a href="https://drive.google.com/file/d/1CLcvTGAJepVaqNVDj1pq0I-7XcKxrFQd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={generativeBadge} alt="Generative AI" />
          <p>Generative AI</p>
          <a href="https://drive.google.com/file/d/1_qwUMQxaUppyaEEAWmcGBS3_yk-4kVVe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={informationBadge} alt="Information Technology" />
          <p>Information Technology</p>
          <a href="https://drive.google.com/file/d/1QCMZQmq69Vqv_BF5ZtcVqZgU32MGA2ct/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={webBadge} alt="Web Development" />
          <p>Web Development</p>
          <a href="https://drive.google.com/file/d/13sTZ7CA9Ct2zcJa5IIW13BexhddJ6NrJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>

        <div className="badge-card">
          <img src={awsBadge} alt="AWS Cloud" />
          <p>AWS Cloud</p>
          <a href="https://drive.google.com/file/d/1Qr9Qfa8e9C4_PVxbgz3KBG-isifBhkhv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
        </div>
      </div>
    </section>
  );
};

export default Badges;
