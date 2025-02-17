import React from "react";
import "../styles/Home.css";
import "../styles/education.css";
import "../styles/work.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="fade-in">
          Hi, I'm <span className="highlight">Tanu Shri</span>
        </h1>
        <p className="slide-in">A passionate Frontend Developer 🚀</p>
      </section>

      <section id="journey" className="journey fade-in">
        <h2>📌 Professional Journey</h2>
        <p>
          I am a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React.js, and UI/UX design. 
          With hands-on experience in building dynamic, responsive web applications, I specialize in crafting seamless and visually appealing user interfaces.
        </p>
        <p>
          I have worked on full-stack projects using Django and Python, integrating backend functionality with intuitive front-end designs. 
          My expertise extends to prototyping and wireframing using Figma and Adobe XD, ensuring user-centric designs that enhance engagement and usability.
        </p>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="work-container">
        <h1 className="page-title">💼 My Work Experience</h1>
        
        <div className="work-cards">
          {[{
              role: "Front End Development (FED)",
              company: "Edunet Foundation and AICTE",
              duration: "June - July 2023",
              description: "Worked extensively on Front-End development, focusing on creating responsive and user-friendly website.",
              certificateLink: "https://drive.google.com/file/d/1gF5cWixJOMSHbNwieYCTJGnfDvgR2Wvk/view?usp=sharing",
            },
            {
              role: "Android Development Virtual Internship",
              company: "Eduskills",
              duration: "April - June 2024",
              description: "A 10-week internship in Android Development offered by EduSkills, focused on hands-on training and skill development in AI technologies.",
              certificateLink: "https://drive.google.com/file/d/13pMjZ3wdqvB415wUtMqqnAWGQ-zLHK6y/view?usp=sharing",
            },
            {
              role: "Generative AI Virtual Internship",
              company: "Eduskills",
              duration: "July - September 2024",
              description: "Explored large language models, responsible AI principles, and prompt design in Vertex AI. Gained insights into application development, cloud architecture, and data science, with hands-on experience in developing GenAI apps with Gemini and Streamlit.",
              certificateLink: "https://drive.google.com/file/d/1_qwUMQxaUppyaEEAWmcGBS3_yk-4kVVe/view?usp=sharing",
            }
          ].map((work, index) => (
            <div key={index} className="work-card fade-in">
              <h3>{work.role}</h3>
              <h4>{work.company}</h4>
              <p className="duration">{work.duration}</p>
              <p className="description">{work.description}</p>
              {work.certificateLink && (
                <a 
                  href={work.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-container">
        <h1 className="page-title">🚀 My Projects</h1>
        <div className="projects-grid">
          {[
            {
              title: "Book Review Website",
              description: "A full-stack application for book enthusiasts to add, review, and explore books.",
              technologies: "HTML, CSS, JavaScript, Django",
              link: "book.jsx",
            },
            {
              title: "Music Player Website",
              description: "A visually appealing music player with custom themes and playlists.",
              technologies: "React.js, Tailwind CSS",
              link: "#",
            },
            {
              title: "Expense Sharing App",
              description: "A web app for tracking expenses and splitting bills among friends.",
              technologies: "Django, JavaScript, Bootstrap",
              link: "#",
            }
          ].map((project, index) => (
            <div key={index} className="project-card fade-in">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Used:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section with Technology Cards */}
      <section className="skills slide-in">
        <h2>📚 Chronicle of My Learning Experiences</h2>
        <div className="tech-cards">
          <div className="tech-card frontend">Frontend <br /> (HTML, CSS, JavaScript, React.js)</div>
          <div className="tech-card backend">Backend <br /> (Python, Django, Node.js)</div>
          <div className="tech-card uiux">UI/UX <br /> (Figma, Adobe XD, Wireframing)</div>
          <div className="tech-card more">More <br /> (Git, Cloud, Databases)</div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-container">
        <h1 className="page-title">📚 My Education Journey</h1>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2025</div>
            <div className="timeline-content fade-in">
              <h3>B.Tech in Computer Science</h3>
              <p>Roorkee College Of Engineering, Roorkee</p>
              <p>Specialized in Computer Science</p>
              <p>74.8%</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 - 2021</div>
            <div className="timeline-content slide-in">
              <h3>Higher Secondary Education</h3>
              <p>Chandra Shaikhar Sr. Sec. Public School</p>
              <p>Science</p>
              <p>81.33%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
