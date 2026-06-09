import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredCertifications } from "../data/certifications";
import "./Certifications.css";

const STACK_ITEMS = [...featuredCertifications, { id: "explore" }];

const Certifications = () => {
  const navigate = useNavigate();

  const goToCertificationsPage = () => {
    navigate("/certifications");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              className="cert-card-stack-item"
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
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image-mockup"
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
            style={{ zIndex: STACK_ITEMS.length }}
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
