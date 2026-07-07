import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaGlobe, FaAndroid, FaTimes, FaExpand } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import expoQr from "../assets/soulbook-expo-qr.png";
import "./ProjectsPage.css";

const categories = ["All", "Web App", "Full Stack", "Full Stack · AI", "Mobile · Full Stack", "Tool"];

/* ── QR fullscreen ── */
const QrOverlay = ({ onClose }) => (
  <div className="sb-qr-overlay" onClick={onClose}>
    <button className="sb-qr-overlay-close" type="button" aria-label="Close"><FaTimes /></button>
    <div className="sb-qr-big-card" onClick={e => e.stopPropagation()}>
      <img src={expoQr} alt="Expo QR large" />
      <p>Open <strong>Expo Go</strong> and scan to launch SoulBook</p>
    </div>
  </div>
);

/* ── Bottom sheet ── */
const SoulBookSheet = ({ project, onClose }) => {
  const [qrBig, setQrBig] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {qrBig && <QrOverlay onClose={() => setQrBig(false)} />}
      <div className="sb-sheet-backdrop" onClick={onClose} />

      <div className="sb-sheet">
        <div className="sb-sheet-handle" />

        {/* header */}
        <div className="sb-sheet-header">
          <div className="sb-sheet-identity">
            <div className="sb-sheet-app-badge"><span>📚</span></div>
            <div>
              <p className="sb-sheet-app-name">SoulBook</p>
              <p className="sb-sheet-app-tag">React Native · Expo · Cross-platform</p>
            </div>
          </div>
          <button className="sb-sheet-close" onClick={onClose} type="button" aria-label="Close">
            <FaTimes />
          </button>
        </div>

        {/* body — QR left, actions right */}
        <div className="sb-sheet-body">

          {/* QR panel */}
          <div className="sb-qr-panel">
            <button
              type="button"
              className="sb-qr-thumb"
              onClick={() => setQrBig(true)}
              aria-label="Enlarge QR"
            >
              <img src={expoQr} alt="Expo QR" />
              <div className="sb-qr-thumb-overlay">
                <FaExpand size={16} />
                <span>Tap to enlarge</span>
              </div>
            </button>
            <p className="sb-qr-label">Scan with Expo Go</p>
            <a
              href={project.expoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-qr-link"
            >
              or open link →
            </a>
          </div>

          {/* divider */}
          <div className="sb-body-divider" />

          {/* action rows */}
          <div className="sb-actions">
            <p className="sb-actions-label">Other ways</p>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-action-row"
            >
              <div className="sb-action-icon"><FaGlobe size={15} /></div>
              <div className="sb-action-text">
                <span className="sb-action-name">Web Version</span>
                <span className="sb-action-desc">Open in browser, no install</span>
              </div>
              <FaExternalLinkAlt size={11} className="sb-action-arrow" />
            </a>

            <div className="sb-action-row sb-action-row-muted">
              <div className="sb-action-icon"><FaAndroid size={15} /></div>
              <div className="sb-action-text">
                <span className="sb-action-name">Android APK</span>
                <span className="sb-action-desc">Direct install on device</span>
              </div>
              <span className="sb-action-soon">Soon</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [soulbookModal, setSoulbookModal] = useState(false);
  const location = useLocation();
  const fromHome = location.state?.fromHome === true;

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      {soulbookModal && (
        <SoulBookSheet
          project={projects.find((p) => p.isMobile)}
          onClose={() => setSoulbookModal(false)}
        />
      )}

      <main className="projects-page">
        <div className="projects-page-bg">
          <div className="projects-page-glow projects-page-glow-1" />
          <div className="projects-page-glow projects-page-glow-2" />
        </div>

        <div className="projects-page-inner">
          {fromHome && (
            <Link to="/" className="projects-back-link">
              <FaArrowLeft />
              Back to Home
            </Link>
          )}

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
                className={`projects-filter-btn ${activeFilter === cat ? "active" : ""}`}
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
                className={`projects-page-card ${project.isMobile ? "projects-page-card-mobile" : ""}`}
                style={{ "--project-accent": project.color }}
              >
                <div className="projects-page-card-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="projects-page-card-overlay" />
                  <span className="projects-page-card-num">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  {project.isMobile && (
                    <span className="projects-page-card-mobile-badge">📱 Mobile App</span>
                  )}
                </div>

                <div className="projects-page-card-content">
                  <div className="projects-page-card-meta">
                    <span className="projects-page-card-cat">{project.category}</span>
                    <span className="projects-page-card-sub">{project.subtitle}</span>
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

                    {project.isMobile ? (
                      <button
                        type="button"
                        className="projects-page-link projects-page-link-primary"
                        onClick={() => setSoulbookModal(true)}
                      >
                        <FaExternalLinkAlt /> Try the App
                      </button>
                    ) : project.liveLink ? (
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
