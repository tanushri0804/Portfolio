import React from 'react';
import utuLogo from '../assets/utu.png';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="education-title">EDUCATIONAL QUALIFICATIONS</h1>
        <div className="title-decoration"></div>
      </div>
      
      {/* B.Tech Section */}
      <div className="education-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="education-card">
              <div className="education-details">
                <h1 className="degree">Bachelor of Technology</h1>
                <h2 className="specialization">Computer Science and Engineering</h2>
                <div className="education-meta">
                  <span className="duration">2021-2025</span>
                  <span className="institution">
                    <strong>INSTITUTION:</strong> <a href="https://huroorkee.ac.in/" target="_blank" rel="noopener noreferrer">Roorkee College Of Engineering, Roorkee</a>
                  </span>
                  <span className="university">
                    <strong>UNIVERSITY:</strong> <a href="https://uktech.ac.in/en" target="_blank" rel="noopener noreferrer">Uttarakhand Technical University, Dehradun</a>
                  </span>
                  <span className="grade">
                    <strong>CGPA:</strong> <span className="highlight">7.9</span>
                  </span>
                </div>
              </div>
              <div className="education-logo">
                <div className="logo-container">
                  <img src={utuLogo} alt="University Logo" className="university-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intermediate Section */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="education-card">
              <div className="education-details">
                <h1 className="degree">Intermediate</h1>
                <div className="education-meta">
                  <span className="duration">2020-2021</span>
                  <span className="institution">
                    <strong>INSTITUTION:</strong> <a href="#" target="_blank" rel="noopener noreferrer">Chandra Shaikhar Sr. Sec. Public School, Roorkee</a>
                  </span>
                  <span className="board">
                    <strong>BOARD:</strong> C.B.S.E
                  </span>
                  <span className="grade">
                    <strong>PERCENTAGE:</strong> <span className="highlight">81%</span>
                  </span>
                </div>
              </div>
              <div className="education-logo">
                <div className="logo-container">
                  <img src="https://yt3.googleusercontent.com/Irgi7ybSY9dkcwEbRhSURtgJfO_pSVKwbRIif7NF8p6nAej5ah9pAiZLiJQJZ24Ew-_U3Efggg=s900-c-k-c0x00ffffff-no-rj" alt="School Logo" className="school-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;