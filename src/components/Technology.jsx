import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiGithub, SiMongodb, SiMysql } from "react-icons/si";
import "./Technology.css";

const technologies = [
  { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: FaReact, name: "React JS", color: "#61DAFB" },
  { Icon: FaJava, name: "Java", color: "#007396" },
  { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { Icon: FaNodeJs, name: "Node JS", color: "#339933" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
];

const Technology = () => {
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
              I&apos;m a Frontend Developer focused on crafting clean, responsive
              web experiences. I work with React.js, Java, and SQL databases —
              and I care deeply about UI/UX, from Figma wireframes to polished
              production code.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map(({ Icon, name, color }) => (
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
