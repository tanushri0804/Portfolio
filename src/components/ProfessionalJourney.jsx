import { useState } from "react";
import { motion } from "framer-motion";
import { User, Code, Palette } from "lucide-react";
import "./ProfessionalJourney.css";

const panels = [
  {
    id: 0,
    num: "01",
    sub: "Identity",
    title: "Who I Am",
    desc: "I'm Tanu Shri, a Frontend Developer who loves turning ideas into clean, responsive interfaces. With strengths in React.js, Java backend development, and SQL databases, I enjoy building products that feel as good to use as they look.",
    tags: ["Frontend Dev", "React.js", "UI/UX"],
    bgImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
    orbColor: "rgba(59, 130, 246, 0.55)",
    icon: User,
  },
  {
    id: 1,
    num: "02",
    sub: "Projects",
    title: "What I Build",
    desc: "I've designed and shipped 6+ web applications — including a Mental Health Chatbot, College Management Dashboard, Interactive Text Editor, Weather Prediction App, and a Book Reading Platform with auth and personalized stats.",
    tags: ["Full-Stack Apps", "Real-time Data", "Dashboards"],
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
    desc: "I start with wireframes and prototypes in Figma, then bring them to life with responsive layouts, solid state management, and RESTful API integration. Every detail — from hover states to loading flows — matters to me.",
    tags: ["Figma", "Responsive Design", "REST APIs"],
    bgImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    orbColor: "rgba(236, 72, 153, 0.5)",
    icon: Palette,
  },
];

const ProfessionalJourney = () => {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section className="professional-journey" id="about">
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
            Frontend Developer &amp; UI/UX enthusiast — building thoughtful
            digital experiences from concept to code.
          </p>
        </motion.div>

        <div className="journey-accordion">
          {panels.map((panel) => {
            const Icon = panel.icon;
            const isActive = activePanel === panel.id;

            return (
              <motion.div
                key={panel.id}
                className={`journey-panel ${isActive ? "active" : ""}`}
                onClick={() => setActivePanel(panel.id)}
                animate={{ flex: isActive ? 1.5 : 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                            <span className="journey-glass-sub">{panel.sub}</span>
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

        <motion.div
          className="journey-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="journey-stat">
            <span className="journey-stat-value">6+</span>
            <span className="journey-stat-label">Projects Built</span>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <span className="journey-stat-value">React</span>
            <span className="journey-stat-label">Primary Stack</span>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <span className="journey-stat-value">UI/UX</span>
            <span className="journey-stat-label">Design First</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
