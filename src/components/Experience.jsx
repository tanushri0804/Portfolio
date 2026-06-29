import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import "./Experience.css";

const workExperience = [
  {
    id: "creditor",
    company: "Creditor Academy",
    role: "Software Developer",
    duration: "May 2025 – Present",
    highlights: [
      "Developed and maintained responsive user interfaces using React.js, ensuring cross-device compatibility and smooth user experience.",
      "Contributed to Athena LMS website, implementing real-time features and optimizing performance to enhance usability.",
      "Integrated REST APIs with frontend components, streamlining data flow and improving overall application functionality.",
    ],
    tags: ["React.js", "REST APIs", "Athena LMS", "Performance"],
  },
  {
    id: "agenix",
    company: "AgenixAI",
    role: "Front-End Developer Intern",
    duration: "Mar 2025 – May 2025",
    location: "Remote",
    highlights: [
      "Developed responsive web interfaces using React.js, Tailwind CSS, HTML, and JavaScript.",
      "Worked with Firebase for authentication, real-time database, and cloud storage.",
    ],
    tags: ["React.js", "Tailwind CSS", "Firebase", "JavaScript"],
  },
];

const trainings = [
  {
    id: "masai",
    title: "Masai School",
    duration: "October 2024 – June 2025",
    description:
      "Ongoing 6-month internship at Masai School in full-stack web development.",
    details:
      "Hands-on learning experience building real-world projects with HTML, CSS, JavaScript, React, Glitch, and Firebase. Focus on problem-solving, collaboration, and industry-relevant skills including responsive design, state management, and backend integration.",
    skills: "HTML, CSS, JavaScript, React, Glitch, Firebase, Git",
    grade: "Performance evaluation ongoing with consistent progress and positive feedback.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNckH5q7N4sJXIllDAKUsBdO8jwmxaNMVrrw&s",
  },
  {
    id: "eduskills-ai",
    title: "EduSkills",
    duration: "July 2024 – Sep 2024",
    description:
      "Successfully completed a 10-week Generative AI Virtual Internship.",
    details:
      "Internship under AICTE NEAT, supported by Google for Developers. Worked on AI-driven content creation, fine-tuning language models, and integrating generative AI into applications.",
    skills: "Python, TensorFlow, PyTorch, Generative AI, NLP",
    grade: "Achieved an Excellent grade.",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate:
      "https://drive.google.com/file/d/1_qwUMQxaUppyaEEAWmcGBS3_yk-4kVVe/view?usp=sharing",
  },
  {
    id: "eduskills-android",
    title: "EduSkills",
    duration: "Apr 2024 – Jun 2024",
    description:
      "Successfully completed a 10-week Android Developer Virtual Internship.",
    details:
      "Provided by EduSkills Foundation under AICTE NEAT, supported by Google for Developers. Built efficient Android applications with hands-on projects in Java and Kotlin.",
    skills: "Android Studio, Kotlin, Java, Firebase",
    grade: "Achieved an Excellent grade.",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate:
      "https://drive.google.com/file/d/13pMjZ3wdqvB415wUtMqqnAWGQ-zLHK6y/view?usp=sharing",
  },
  {
    id: "ibm",
    title: "IBM SkillsBuild | AICTE",
    duration: "June 12, 2023 – July 24, 2023",
    description:
      "Successfully completed a 6-week internship in Front-End Development.",
    details:
      "Conducted in collaboration with AICTE and Edunet Foundation. Gained expertise in building interactive web applications using modern web technologies and industry best practices.",
    skills: "HTML, CSS, JavaScript, React, IBM SkillsBuild",
    grade: "Certificate of Completion awarded by Edunet Foundation.",
    image:
      "https://mlmzwlxpr5yp.i.optimole.com/cb:wJGC.2dace/w:864/h:540/q:mauto/f:best/https://www.muonline.ac.in/blog/wp-content/uploads/2023/10/AICTE-Accreditation.jpg",
    certificate:
      "https://drive.google.com/file/d/1gF5cWixJOMSHbNwieYCTJGnfDvgR2Wvk/view?usp=sharing",
  },
];

const Experience = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);

  useEffect(() => {
    if (!selectedTraining) return;

    // Save the current scroll position
    const scrollY = window.scrollY;

    // Lock scrolling without moving the page (no position:fixed needed)
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.scrollbarGutter = "stable";

    return () => {
      // Restore scroll lock — position never changed so no jump
      document.documentElement.style.overflow = "";
      document.documentElement.style.scrollbarGutter = "";
      // Ensure we stay exactly where we were (belt-and-suspenders)
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [selectedTraining]);

  return (
    <section className="experience-section" id="experience">
      <div className="exp-background">
        <div className="exp-blob exp-blob-1" />
        <div className="exp-blob exp-blob-2" />
      </div>

      <div className="experience-container">
        <div className="exp-header">
          <span className="exp-label">Career journey</span>
          <h2 className="exp-title">
            Experience <span className="text-gradient">Highlights</span>
          </h2>
          <p className="exp-subtitle">
            Professional roles and hands-on training that shaped my skills.
          </p>
        </div>

        <div className="exp-block">
          <div className="exp-block-header">
            <Briefcase size={20} />
            <h3>Professional Experience</h3>
          </div>

          <div className="work-timeline">
            {workExperience.map((job, index) => (
              <article className="work-card" key={job.id}>
                <div className="work-card-marker">
                  <span className="work-dot" />
                  {index < workExperience.length - 1 && (
                    <span className="work-line" />
                  )}
                </div>

                <div className="work-card-body">
                  <div className="work-card-top">
                    <div>
                      <h4 className="work-company">{job.company}</h4>
                      <p className="work-role">{job.role}</p>
                    </div>
                    <div className="work-meta">
                      <span className="work-duration">{job.duration}</span>
                      {job.location && (
                        <span className="work-location">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="work-highlights">
                    {job.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="work-tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="exp-block">
          <div className="exp-block-header">
            <GraduationCap size={20} />
            <h3>Training &amp; Internships</h3>
          </div>

          <div className="training-grid">
            {trainings.map((item) => (
              <button
                type="button"
                className="training-card"
                key={item.id}
                onClick={() => setSelectedTraining(item)}
              >
                <div className="training-card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="training-card-content">
                  <h4>{item.title}</h4>
                  <p className="training-duration">{item.duration}</p>
                  <p className="training-desc">{item.description}</p>
                  <span className="training-link">View Details</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedTraining &&
          createPortal(
            <div
              className="exp-modal-overlay"
              onClick={() => setSelectedTraining(null)}
              role="presentation"
            >
              <div
                className="exp-modal"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="exp-modal-title"
              >
                <button
                  type="button"
                  className="exp-modal-close"
                  onClick={() => setSelectedTraining(null)}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                <div className="exp-modal-header">
                  <img
                    src={selectedTraining.image}
                    alt={selectedTraining.title}
                    className="exp-modal-logo"
                  />
                  <div>
                    <h3 id="exp-modal-title">{selectedTraining.title}</h3>
                    <p className="exp-modal-duration">
                      {selectedTraining.duration}
                    </p>
                  </div>
                </div>

                <div className="exp-modal-body">
                  <div className="exp-modal-section">
                    <h4>About</h4>
                    <p>{selectedTraining.details}</p>
                  </div>
                  <div className="exp-modal-section">
                    <h4>Skills Gained</h4>
                    <p>{selectedTraining.skills}</p>
                  </div>
                  {selectedTraining.grade && (
                    <div className="exp-modal-section">
                      <h4>Achievements</h4>
                      <p className="exp-modal-highlight">
                        {selectedTraining.grade}
                      </p>
                    </div>
                  )}
                  {selectedTraining.certificate && (
                    <a
                      href={selectedTraining.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-certificate-btn"
                    >
                      View Certificate <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
};

export default Experience;
