import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CertImage from "./CertImage";
import { featuredCertifications } from "../data/certifications";
import { killScrollTrigger } from "../utils/killScrollTrigger";
import "./Certifications.css";

const STACK_COUNT = featuredCertifications.length + 1;

const Certifications = () => {
  const navigate = useNavigate();

  const goToCertificationsPage = async () => {
    await killScrollTrigger();
    navigate("/certifications");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="cert-stack-section" id="certifications">
      <div className="cert-stack-container">
        <header className="cert-stack-header">
          <h2 className="cert-section-title">Verified Certifications</h2>
        </header>

        <div className="cert-stack-wrapper">
          {featuredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`cert-card-stack-item${
                index === featuredCertifications.length - 1
                  ? " cert-card-stack-item-penultimate"
                  : ""
              }`}
              style={{ zIndex: index + 1 }}
            >
              <div
                className="cert-main-card"
                onClick={goToCertificationsPage}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goToCertificationsPage();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className="cert-visual-container"
                  style={{ "--card-bg": cert.cardBg }}
                >
                  <CertImage
                    cert={cert}
                    className="cert-image-mockup cert-image-photo"
                  />
                </div>

                <div className="cert-content-details">
                  <div className="cert-org-header">
                    <div className="cert-org-logo">{cert.org}</div>
                    <div className="cert-duration">{cert.duration}</div>
                  </div>

                  <h3 className="cert-title-stack">{cert.title}</h3>
                  <p className="cert-description-stack">{cert.desc}</p>

                  <div className="cert-skills-wrap">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="cert-card-stack-item cert-card-stack-item-last"
            style={{ zIndex: STACK_COUNT }}
          >
            <div className="cert-main-card last-card">
              <div className="last-card-content">
                <h3 className="cert-title-stack">
                  Wanna see more <br />
                  <span className="text-gradient">certifications?</span>
                </h3>
                <p className="cert-description-stack">
                  I have a collection of other technical honors and professional
                  credentials waiting for you.
                </p>
                <button
                  type="button"
                  className="cert-see-more-btn explore-btn"
                  onClick={goToCertificationsPage}
                >
                  Explore All Credentials <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
