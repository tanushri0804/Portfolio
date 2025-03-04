import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaMinus, FaPlus } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "VogueVault",
    details: "This is an online shopping platform exclusively for clothing, offering a wide range of traditional and modern outfits for men, women, and kids. Features include account creation, login, wishlist, shopping cart, and category-based navigation. Users can explore beautifully designed clothing collections and easily add items to their cart or wishlist for a smooth checkout experience. Built with HTML, CSS, and JavaScript, the website ensures a seamless, visually appealing, and responsive shopping experience.",
    skills: "HTML, CSS, JavaScript, Responsive Design, User Authentication, Glitch.",
    githubLink: "https://github.com/tanushri0804/VogueVault",
    liveLink: "https://tanushri0804.github.io/VogueVault/",
  },
  {
    id: 2,
    title: "Veldora",
    details: "This is a hotel booking platform that allows users to search and book accommodations in various locations. Whether for vacations, business trips, or weekend getaways, users can explore a wide range of hotels, resorts, and homestays. The website features an easy-to-use interface with filters for price, location, amenities, and customer ratings. Users can create an account, save favorite hotels, and securely complete bookings. Built with HTML, CSS, and JavaScript, the platform offers a seamless and responsive experience, ensuring hassle-free travel planning.",   
    skills: "HTML, CSS, JavaScript, Glitch.",
    githubLink: "https://github.com/tanushri0804/Veldora",
    liveLink: "https://tanushri0804.github.io/Veldora/",
  },
  {
    id: 3,
    title: "Image Gallery",
    details: "This project is a responsive image gallery built with HTML, CSS, and JavaScript. It features a grid layout, modal image preview, and sorting/filtering options. Users can browse images with hover effects and smooth transitions. The gallery is lightweight, fast, and mobile-friendly.",
    skills: "HTML, CSS, JavaScript, Responsive Design, DOM Manipulation.",
    githubLink: "https://github.com/tanushri0804/Image-Gallery",
    liveLink: "https://tanushri0804.github.io/Image-Gallery/",
  },
  {
    id: 4,
    title: "Calculator",
    details: "This web-based calculator, built with HTML, CSS, and JavaScript, offers two modes: Standard Calculation for basic arithmetic and Date Calculation to find differences between dates. It features a responsive design, clear/reset options, and interactive buttons.",
    skills: "HTML, CSS, JavaScript, Responsive Design, DOM Manipulation.",
    githubLink: "https://github.com/tanushri0804/Calculator",
    liveLink: "https://tanushri0804.github.io/Calculator/",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleProject = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">PROJECTS</h2>
      <p className="projects-subtitle"><em>My Work Showcase</em></p>
      <div className="underline"></div>

      {projects.map((project) => (
        <div key={project.id} className="project">
          <div className="project-header" onClick={() => toggleProject(project.id)}>
            <h3 className="project-title">{project.title}</h3>
            {activeId === project.id ? <FaMinus className="icoon" /> : <FaPlus className="icoon" />}
          </div>
          {activeId === project.id && (
            <div className="project-details">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <p>{project.details}</p>
              {project.skills && (
                <p className="project-skills">
                  <strong>Skills Used:</strong> {project.skills}
                </p>
              )}
              {/* GitHub and Live Server Icons */}
              {project.githubLink && project.liveLink && (
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub className="link-icon" /> GitHub Repo
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt className="link-icon" /> Live Server
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* GitHub Button */}
      <a
        href="https://github.com/tanushri0804"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github-btn">Git Hub</button>
      </a>
    </div>
  );
};

export default Projects;