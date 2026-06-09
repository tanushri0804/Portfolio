import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { featuredProjects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg">
        <div className="projects-blob projects-blob-1" />
        <div className="projects-blob projects-blob-2" />
      </div>

      <div className="projects-inner">
        <div className="projects-header">
          <span className="projects-label">Selected work</span>
          <h2 className="projects-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A glimpse of what I&apos;ve built — from e-commerce to interactive
            web experiences.
          </p>
        </div>

        <div className="projects-bento">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === 0 ? "project-card-hero" : ""}`}
              style={{ "--project-accent": project.color }}
            >
              <div className="project-card-visual">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-tint" />
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-card-body">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.skills.slice(0, 4).map((skill) => (
                    <span key={skill} className="project-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-ghost"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="projects-explore-btn">
            <span>Explore All Projects</span>
            <span className="projects-explore-icon">
              <FaArrowRight />
            </span>
          </Link>
          <a
            href="https://github.com/tanushri0804"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
