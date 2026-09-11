import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Code, Palette } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProfessionalJourney.css";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: 0,
    num: "01",
    sub: "Identity",
    title: "Who I Am",
    desc: "I'm Tanu Shri, a Software Developer who loves building complete products — from database to UI. With a strong foundation in React.js, Node.js, Java, and SQL, I enjoy owning the full stack and shipping things that actually work.",
    tags: ["Software Developer", "Full Stack", "React.js"],
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    orbColor: "rgba(59, 130, 246, 0.55)",
    icon: User,
  },
  {
    id: 1,
    num: "02",
    sub: "Projects",
    title: "What I Build",
    desc: "I've shipped full-stack products like Mentora — an AI mental wellness platform with Gemini-powered companions, mood tracking, and community features — plus a cross-platform mobile reading app (React Native), a hotel booking platform, an e-commerce storefront, and more.",
    tags: ["Full-Stack Apps", "Mobile (React Native)", "AI Integration"],
    bgImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    orbColor: "rgba(139, 92, 246, 0.55)",
    icon: Code,
  },
  {
    id: 2,
    num: "03",
    sub: "Approach",
    title: "How I Work",
    desc: "I think in systems — designing the data model and API contracts before writing a single line of UI. I keep code clean, APIs consistent, and UIs responsive. Whether it's a REST endpoint or a React component, I care about the details at every layer.",
    tags: ["System Design", "REST APIs", "Clean Code"],
    bgImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    orbColor: "rgba(236, 72, 153, 0.5)",
    icon: Palette,
  },
];

// Each panel occupies 1/3 of the scroll range (0–0.33, 0.33–0.66, 0.66–1)
const PANEL_SCROLL_STOPS = [0, 1 / 3, 2 / 3];

const ProfessionalJourney = () => {
  const [activePanel, setActivePanel] = useState(0);
  const sectionRef = useRef(null);
  const pinProxyRef = useRef(null); // invisible scroll space
  const activePanelRef = useRef(0); // keep latest value accessible in GSAP cb

  useEffect(() => {
    activePanelRef.current = activePanel;
  }, [activePanel]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // On mobile the accordion is already vertical, skip the pin
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    // Extra scroll distance = 2 * 100vh so the user has to scroll through
    // 3 "steps" while the section is pinned.
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        // Pin exactly when the section's top hits the viewport top
        // (cards are fully visible at this point)
        start: "top top",
        // pin for 2 extra viewports (one per extra card)
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        scrub: false,
        onUpdate(self) {
          // progress: 0 → 1 over the pinned scroll range
          const p = self.progress;

          // Determine which panel should be active
          let next = 0;
          if (p >= PANEL_SCROLL_STOPS[2]) next = 2;
          else if (p >= PANEL_SCROLL_STOPS[1]) next = 1;
          else next = 0;

          if (next !== activePanelRef.current) {
            activePanelRef.current = next;
            setActivePanel(next);
          }
        },
      });
    }, section);

    return () => {
      ctx.revert();
      // Belt-and-suspenders: clear any leftover pin styles on unmount
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <>
      {/* ── Pinned accordion section (GSAP controls this) ── */}
      <section className="professional-journey" id="about" ref={sectionRef}>
        <div className="journey-background">
          <div className="journey-blob journey-blob-1" />
          <div className="journey-blob journey-blob-2" />
        </div>

        <div className="journey-container">
          <motion.div
            className="journey-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="journey-label">Get to know me</span>
            <h2 className="journey-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="journey-subtitle">
              Software Developer &amp; Full Stack Engineer — building complete
              products from database to deployment.
            </p>
          </motion.div>

          {/* Subtle scroll hint — hides once card 2 is reached */}
          {activePanel === 0 && (
            <motion.div
              className="journey-scroll-hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span>Scroll to explore</span>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <rect
                  x="5.5"
                  y="0.5"
                  width="5"
                  height="9"
                  rx="2.5"
                  stroke="currentColor"
                />
                <line
                  x1="8"
                  y1="3"
                  x2="8"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 14l4 5 4-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}

          {/* Step dots */}
          <div className="journey-dots">
            {panels.map((p) => (
              <div
                key={p.id}
                className={`journey-dot ${activePanel === p.id ? "active" : ""} ${
                  activePanel > p.id ? "done" : ""
                }`}
              />
            ))}
          </div>

          <div className="journey-accordion">
            {panels.map((panel) => {
              const Icon = panel.icon;
              const isActive = activePanel === panel.id;

              return (
                <motion.div
                  key={panel.id}
                  className={`journey-panel ${isActive ? "active" : ""}`}
                  style={{ flexGrow: 0.5, flexShrink: 1, flexBasis: "0%" }}
                  animate={{ flexGrow: isActive ? 1.5 : 0.5 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="journey-panel-bg">
                    <img src={panel.bgImage} alt={panel.title} />
                  </div>
                  <div className="journey-panel-overlay" />
                  <div
                    className="journey-panel-orb"
                    style={{ background: panel.orbColor }}
                  />

                  <div className="journey-panel-inner">
                    {isActive ? (
                      <motion.div
                        className="journey-expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                      >
                        <div className="journey-glass">
                          <div className="journey-glass-header">
                            <span className="journey-num">{panel.num}</span>
                            <div className="journey-glass-titles">
                              <span className="journey-glass-sub">
                                {panel.sub}
                              </span>
                              <h3>{panel.title}</h3>
                            </div>
                          </div>
                          <p className="journey-desc">{panel.desc}</p>
                          <div className="journey-tags">
                            {panel.tags.map((tag) => (
                              <span key={tag} className="journey-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="journey-collapsed">
                        <div className="journey-panel-icon">
                          <Icon size={20} />
                        </div>
                        <h3 className="journey-panel-title-vert">{panel.title}</h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats bar — completely outside the pinned section ── */}
      <motion.section
        className="journey-stats-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="journey-stats-inner">
          <div className="journey-stat">
            <span className="journey-stat-value">6+</span>
            <span className="journey-stat-label">Projects Built</span>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <span className="journey-stat-value">Full Stack</span>
            <span className="journey-stat-label">Web &amp; Mobile</span>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <span className="journey-stat-value">End-to-End</span>
            <span className="journey-stat-label">DB to Deployment</span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ProfessionalJourney;
