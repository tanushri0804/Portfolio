import {
  FaDownload, FaGithub, FaLinkedin, FaEnvelope,
  FaMapMarkerAlt, FaTrophy, FaExternalLinkAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import resumePDF from "../assets/Tanu_resume_26.pdf";
import "./ResumePage.css";

const quickStats = [
  { value: "8.3", label: "CGPA" },
  { value: "2+", label: "Years Coding" },
  { value: "4+", label: "Internships" },
  { value: "9+", label: "Projects" },
];

const topSkills = [
  "React.js", "TypeScript", "React Native",
  "Node.js", "Firebase", "REST APIs",
  "Tailwind CSS", "Git", "AWS",
];

const roles = [
  { company: "Creditor Academy", role: "Software Developer", duration: "May 2025 – Present", color: "#3b82f6" },
  { company: "AgenixAI",         role: "Front-End Intern",   duration: "Mar – May 2025",      color: "#8b5cf6" },
  { company: "Masai School",     role: "Full-Stack Training", duration: "Oct 2024 – Jun 2025", color: "#10b981" },
  { company: "IBM SkillsBuild",  role: "Front-End Intern",   duration: "Jun – Jul 2023",      color: "#f59e0b" },
];

const achievements = [
  { icon: "🥇", text: "1st Prize — International Conference paper on AI-Chatbot in Mental Health (SDMEL-2024)" },
  { icon: "🥈", text: "2nd Prize — TechWizard 24-Hour Hackathon, Haridwar University (Bill Bird app)" },
  { icon: "🎯", text: "Workshop Coordinator at IIT Roorkee's Design Innovation Center" },
];

const ResumePage = () => (
  <>
    <Navbar />

    <main className="rp-page">
      <div className="rp-bg">
        <div className="rp-glow rp-glow-1" />
        <div className="rp-glow rp-glow-2" />
      </div>

      <div className="rp-outer">

        {/* ── Hero strip ── */}
        <div className="rp-hero">
          <div className="rp-hero-left">
            <div className="rp-avatar">T</div>
            <div>
              <p className="rp-eyebrow">Resume</p>
              <h1 className="rp-name">Tanu <span className="rp-grad">Shri</span></h1>
              <p className="rp-role">Software Developer · React · TypeScript · React Native</p>
              <div className="rp-links">
                <a href="mailto:tanushri0804@gmail.com" className="rp-link"><FaEnvelope /> tanushri0804@gmail.com</a>
                <a href="https://github.com/tanushri0804" target="_blank" rel="noopener noreferrer" className="rp-link"><FaGithub /> GitHub</a>
                <a href="https://linkedin.com/in/tanushri" target="_blank" rel="noopener noreferrer" className="rp-link"><FaLinkedin /> LinkedIn</a>
                <span className="rp-link"><FaMapMarkerAlt /> Roorkee, India</span>
              </div>
            </div>
          </div>
          <a href={resumePDF} download="Tanu_Shri_Resume.pdf" className="rp-download-btn">
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* ── Stats row ── */}
        <div className="rp-stats">
          {quickStats.map((s) => (
            <div className="rp-stat" key={s.label}>
              <span className="rp-stat-value">{s.value}</span>
              <span className="rp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── 3-col grid ── */}
        <div className="rp-grid">

          {/* Skills */}
          <div className="rp-card">
            <h2 className="rp-card-title">Top Skills</h2>
            <div className="rp-pills">
              {topSkills.map((s) => <span key={s} className="rp-pill">{s}</span>)}
            </div>
          </div>

          {/* Education */}
          <div className="rp-card">
            <h2 className="rp-card-title">Education</h2>
            <div className="rp-edu-block">
              <p className="rp-edu-degree">B.Tech — Computer Science</p>
              <p className="rp-edu-inst">Roorkee College of Engineering</p>
              <p className="rp-edu-meta">2021 – 2025 · CGPA 8.3</p>
            </div>
            <div className="rp-edu-divider" />
            <div className="rp-edu-block">
              <p className="rp-edu-degree">Intermediate (12th)</p>
              <p className="rp-edu-inst">Chandra Shaikhar Sr. Sec. School</p>
              <p className="rp-edu-meta">2020 – 2021 · C.B.S.E · 86%</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="rp-card">
            <h2 className="rp-card-title"><FaTrophy className="rp-card-title-icon" /> Achievements</h2>
            <div className="rp-ach-list">
              {achievements.map((a, i) => (
                <div className="rp-ach-row" key={i}>
                  <span className="rp-ach-icon">{a.icon}</span>
                  <p className="rp-ach-text">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Experience timeline ── */}
        <div className="rp-card rp-exp-card">
          <h2 className="rp-card-title">Experience</h2>
          <div className="rp-exp-list">
            {roles.map((r, i) => (
              <div className="rp-exp-row" key={i}>
                <span className="rp-exp-dot" style={{ background: r.color, boxShadow: `0 0 8px ${r.color}88` }} />
                <div className="rp-exp-info">
                  <span className="rp-exp-role">{r.role}</span>
                  <span className="rp-exp-company" style={{ color: r.color }}>{r.company}</span>
                </div>
                <span className="rp-exp-duration">{r.duration}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </>
);

export default ResumePage;
