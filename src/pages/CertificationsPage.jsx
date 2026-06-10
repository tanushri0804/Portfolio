import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  X,
  ZoomIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CertImage from "../components/CertImage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { certifications } from "../data/certifications";
import "./CertificationsPage.css";

const CertificationsPage = () => {
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [detailsCert, setDetailsCert] = useState(null);

  const backToShowcase = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("certifications")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const isOpen = lightboxImage || detailsCert;
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { style: htmlStyle } = document.documentElement;
    const { style: bodyStyle } = document.body;

    htmlStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";

    return () => {
      htmlStyle.overflow = "";
      bodyStyle.overflow = "";
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [lightboxImage, detailsCert]);

  return (
    <>
      <Navbar />

      <section className="certs-page">
        <div className="certs-page-container">
          <header className="certs-page-header">
            <a href="/#certifications" className="certs-back-link" onClick={backToShowcase}>
              <ArrowLeft size={16} /> Back to Showcase
            </a>
            <motion.h1
              className="certs-page-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Verified Credentials
            </motion.h1>
          </header>

          <div className="certs-interactive-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="cert-card-interactive"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  type="button"
                  className="interactive-image-zone"
                  onClick={() => setLightboxImage(cert.image)}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <CertImage cert={cert} />
                  <div className="image-overlay-hint">
                    <ZoomIn size={24} />
                    <span>View Certificate</span>
                  </div>
                </button>

                <div className="interactive-content-zone">
                  <div className="cert-info-main">
                    <span className="cert-org-tiny">{cert.org}</span>
                    <h3 className="cert-title-small">{cert.title}</h3>
                  </div>

                  <button
                    type="button"
                    className="detail-expand-trigger"
                    onClick={() => setDetailsCert(cert)}
                  >
                    <span>Read Details</span>
                    <ChevronDown size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {createPortal(
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="cert-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
            >
              <motion.img
                src={lightboxImage}
                alt="Certificate preview"
                className="cert-lightbox-image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {createPortal(
        <AnimatePresence>
          {detailsCert && (
            <motion.div
              className="cert-details-sheet-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsCert(null)}
            >
              <motion.div
                className="cert-details-sheet"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="cert-close-sheet-btn"
                  onClick={() => setDetailsCert(null)}
                  aria-label="Close details"
                >
                  <X size={24} />
                </button>

                <span className="cert-sheet-org">{detailsCert.org}</span>
                <h2 className="cert-sheet-title">{detailsCert.title}</h2>
                <p className="cert-sheet-desc">{detailsCert.desc}</p>

                <div className="cert-sheet-skills">
                  {detailsCert.skills.map((skill) => (
                    <span key={skill} className="cert-sheet-skill">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-sheet-meta-grid">
                  <div className="cert-meta-item">
                    <label>ACQUIRED IN</label>
                    <span>{detailsCert.duration}</span>
                  </div>
                  <div className="cert-meta-item">
                    <label>VERIFICATION</label>
                    <span className="cert-meta-verified">
                      <ShieldCheck size={14} /> SECURED
                    </span>
                  </div>
                </div>

                <a
                  href={detailsCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-sheet-verify-btn"
                >
                  Verify Credential <ExternalLink size={20} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default CertificationsPage;
