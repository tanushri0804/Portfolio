import { useState } from "react";
import { getSkillsForTab, skillTabs } from "../data/skills";
import "./Technology.css";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("all");
  const visibleSkills = getSkillsForTab(activeTab);

  return (
    <section className="tech-section" id="technologies">
      <div className="tech-accent-bar" />

      <div className="tech-wrapper container">
        <div className="tech-side-label">
          <span className="tech-side-line" />
          <span className="tech-side-text">Skills</span>
        </div>

        <div className="tech-main">
          <div className="tech-header">
            <h2 className="tech-heading">What I Do</h2>
            <p className="tech-intro">
              Frontend developer building responsive web and mobile experiences
              with React, TypeScript, and modern tooling — from Figma wireframes
              to production-ready UIs backed by REST APIs and solid databases.
            </p>
          </div>

          <div className="tech-tabs" role="tablist" aria-label="Skill categories">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tech-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            key={activeTab}
            className="tech-featured-grid"
            role="tabpanel"
          >
            {visibleSkills.map(({ Icon, name, color }) => (
              <div
                key={name}
                className="tech-card"
                style={{ "--tech-color": color }}
              >
                <div className="tech-card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <span className="tech-card-name">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-scroll-indicator" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`tech-dash ${i === 1 ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
