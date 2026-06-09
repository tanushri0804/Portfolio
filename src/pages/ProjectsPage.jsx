import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import "./ProjectsPage.css";

const categories = ["All", "Web App", "Full Stack", "Tool"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      <main className="projects-page">
        <div className="projects-page-bg">
          <div className="projects-page-glow projects-page-glow-1" />
          <div className="projects-page-glow projects-page-glow-2" />
        </div>

        <div className="projects-page-inner">
          <Link to="/" className="projects-back-link">
            <FaArrowLeft />
            Back to Home
          </Link>

          <header className="projects-page-hero">
            <span className="projects-page-label">Full archive</span>
            <h1>
              All <span className="text-gradient">Projects</span>
            </h1>
            <p>
              Every build — from shipped demos to academic full-stack work and
              tools I&apos;ve crafted along the way.
            </p>
          </header>

          <div className="projects-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`projects-filter-btn ${
                  activeFilter === cat ? "active" : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-page-grid">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="projects-page-card"
                style={{ "--project-accent": project.color }}
              >
                <div className="projects-page-card-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="projects-page-card-overlay" />
                  <span className="projects-page-card-num">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="projects-page-card-content">
                  <div className="projects-page-card-meta">
                    <span className="projects-page-card-cat">
                      {project.category}
                    </span>
                    <span className="projects-page-card-sub">
                      {project.subtitle}
                    </span>
                  </div>

                  <h2>{project.title}</h2>
                  <p>{project.details}</p>

                  <div className="projects-page-tags">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="projects-page-links">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-page-link"
                      >
                        <FaGithub /> Source
                      </a>
                    ) : (
                      <span className="projects-page-soon">Source private</span>
                    )}
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-page-link projects-page-link-primary"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    ) : (
                      <span className="projects-page-soon">Demo unavailable</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
