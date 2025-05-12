import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "VogueVault",
    details: "This is an online shopping platform exclusively for clothing, offering a wide range of traditional and modern outfits for men, women, and kids. Features include account creation, login, wishlist, shopping cart, and category-based navigation.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "User Authentication", "Glitch"],
    githubLink: "https://github.com/tanushri0804/VogueVault",
    liveLink: "https://tanushri0804.github.io/VogueVault/",
  },
  {
    id: 2,
    title: "Veldora",
    details: "A hotel booking platform that allows users to search and book accommodations in various locations. Features an easy-to-use interface with filters for price, location, amenities, and customer ratings.",
    skills: ["HTML", "CSS", "JavaScript", "Glitch"],
    githubLink: "https://github.com/tanushri0804/Veldora",
    liveLink: "https://tanushri0804.github.io/Veldora/",
  },
  {
    id: 3,
    title: "Image Gallery",
    details: "A responsive image gallery built with HTML, CSS, and JavaScript. Features grid layout, modal image preview, and sorting/filtering options with hover effects and smooth transitions.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
    githubLink: "https://github.com/tanushri0804/Image-Gallery",
    liveLink: "https://tanushri0804.github.io/Image-Gallery/",
  },
  {
    id: 4,
    title: "Calculator",
    details: "Web-based calculator with two modes: Standard Calculation for basic arithmetic and Date Calculation to find differences between dates. Features responsive design and interactive buttons.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
    githubLink: "https://github.com/tanushri0804/Calculator",
    liveLink: "https://tanushri0804.github.io/Calculator/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="tech-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--x': Math.random() * 100 + 'vw',
            '--y': Math.random() * 100 + 'vh',
            '--delay': Math.random() * 5 + 's',
            '--duration': Math.random() * 10 + 10 + 's',
            '--size': Math.random() * 0.5 + 0.5 + 'rem'
          }}></div>
        ))}
      </div>
      
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">PROJECTS</span>
          </h2>
          <p className="section-subtitle">My Development Work</p>
          <div className="title-decoration"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-details">{project.details}</p>
                
                <div className="skills-container">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-footer">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FaGithub className="link-icon" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <FaExternalLinkAlt className="link-icon" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="github-button-container">
          <a
            href="https://github.com/tanushri0804"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;