import React from "react";
import "./ProfessionalJourney.css";

const ProfessionalJourney = () => {
  return (
    <section className="professional-journey" id="about">
      <div className="container">
        <div className="profile-image">
          <div className="image-wrapper">
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVvcXI2bXg1NXh5Y3c0d2lrM29mb3ZsejgxbHp5bGE5eTFzcDZieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RfT7W8lXpSSYbXbakl/giphy.gif" 
              alt="Profile" 
              className="floating-image"
            />
            <div className="tech-stack">
              <span>REACT</span>
              <span>UI/UX</span>
              <span>JAVA</span>
              <span>SQL</span>
              <span>FIGMA</span>
              <span>NODE.js</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="title">
            <span className="title-highlight">ABOUT</span> ME
          </h2>
          <p className="subtitle">Frontend Developer & UI/UX Enthusiast</p>
          <div className="underline"></div>

          <ul className="journey-list">
            <li>
              <span className="highlight">Frontend Developer</span> specializing in React.js with strong skills in Java backend development and SQL database design.
            </li>
            <li>
              Designed and built <span className="highlight">6+ web applications</span> including a <span className="highlight">Mental Health Chatbot</span>, <span className="highlight">College Management Dashboard</span>, and <span className="highlight">Interactive Text Editor</span>.
            </li>
            <li>
              Created a full-stack <span className="highlight">Weather Prediction App</span> with React frontend and Java backend, processing real-time API data.
            </li>
            <li>
              Developed a <span className="highlight">Book Reading Platform</span> with user authentication and personalized reading statistics using React and SQL.
            </li>
            <li>
              Passionate about <span className="highlight">UI/UX design principles</span>, with experience creating wireframes and prototypes in Figma before implementation.
            </li>
            <li>
              Strong understanding of <span className="highlight">responsive design</span>, <span className="highlight">state management</span>, and <span className="highlight">RESTful APIs</span> integration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;