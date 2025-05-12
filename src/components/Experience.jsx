import React, { useEffect, useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    id: 4,
    title: "Masai School",
    duration: "October, 2024 - Ongoing",
    description: "Ongoing 6-month internship at Masai School in full-stack web development.",
    details: "This Masai School internship is a hands-on learning experience where I am working on building real-world projects using HTML, CSS, JavaScript, React, Glitch, and Firebase. The program emphasizes problem-solving, collaboration, and industry-relevant skills. I am gaining expertise in front-end development, responsive design, state management in React, and backend integration with Firebase.",
    skills: "HTML, CSS, JavaScript, React, Glitch, Firebase, Responsive Design, Version Control (Git)",
    grade: "Performance evaluation is ongoing, with consistent progress and positive feedback on project submissions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNckH5q7N4sJXIllDAKUsBdO8jwmxaNMVrrw&s",
  },
  {
    id: 1,
    title: "EduSkills",
    duration: "July, 2024 - Sep, 2024",
    description: "Successfully completed a 10-week Generative AI Virtual Internship from July to September 2024.",
    details: "This EduSkills internship under AICTE NEAT, supported by Google for Developers, provided hands-on experience in Generative AI. I worked on AI-driven content creation, fine-tuning language models, and integrating generative AI into applications, gaining expertise in prompt engineering, deep learning, and AI ethics.",
    skills: "Python, TensorFlow, PyTorch, Generative AI, NLP, Deep Learning",
    grade: "Achieved an 'Excellent' grade, reflecting my dedication and proficiency throughout the program.",
    image: "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate: "https://drive.google.com/file/d/1_qwUMQxaUppyaEEAWmcGBS3_yk-4kVVe/view?usp=sharing"
  },
  {
    id: 2,
    title: "EduSkills",
    duration: "Apr, 2024 - Jun, 2024",
    description:
      "Successfully completed a 10-week Android Developer Virtual Internship from April to June 2024.",
    details:
      "This internship, provided by EduSkills Foundation under the AICTE NEAT program and supported by Google for Developers, equipped me with advanced Android development skills. I worked on hands-on projects to design and build efficient Android applications, further solidifying my expertise in Java and Kotlin.",
    skills: "Android Studio, Kotlin, Java, Firebase",
    grade:
      "Achieved an 'Excellent' grade, reflecting my dedication and proficiency throughout the program.",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQH827651PNzYw/company-logo_200_200/company-logo_200_200/0/1630649828607/eduskillsfoundation_logo?e=2147483647&v=beta&t=TSHlzoiIAkJVOP2IHchTTU7VB-1gWWsrq0utokz8B4w",
    certificate: "https://drive.google.com/file/d/13pMjZ3wdqvB415wUtMqqnAWGQ-zLHK6y/view?usp=sharing"
  },
  {
    id: 3,
    title: "IBM SkillsBuild | AICTE ",
    duration: "June 12, 2023 - July 24, 2023",
    description: "Successfully completed a 6-week internship in Front-End Development using IBM SkillsBuild.",
    details: "This internship, conducted in collaboration with AICTE and Edunet Foundation, provided hands-on training in Front End Development. I gained expertise in building interactive web applications using modern web technologies and industry best practices.",
    skills: "HTML, CSS, JavaScript, React, IBM SkillsBuild",
    grade: "Certificate of Completion awarded by Edunet Foundation.",
    image: "https://mlmzwlxpr5yp.i.optimole.com/cb:wJGC.2dace/w:864/h:540/q:mauto/f:best/https://www.muonline.ac.in/blog/wp-content/uploads/2023/10/AICTE-Accreditation.jpg",
    certificate: "https://drive.google.com/file/d/1gF5cWixJOMSHbNwieYCTJGnfDvgR2Wvk/view?usp=sharing"
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedExperience]);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">EXPERIENCE HIGHLIGHTS</h2>
          <p className="section-subtitle">Showcasing my professional journey</p>
          <div className="title-decoration"></div>
        </div>

        <div className="experience-grid">
          {experiences.map((exp) => (
            <div 
              className="experience-card" 
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="card-image-container">
                <img src={exp.image} alt={exp.title} className="card-image" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-duration">{exp.duration}</p>
                <p className="card-description">{exp.description}</p>
                <button className="learn-more-btn">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedExperience && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-header">
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="modal-logo"
                />
                <button 
                  className="close-btn"
                  onClick={() => setSelectedExperience(null)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
                <h2 className="modal-title">{selectedExperience.title}</h2>
                <p className="modal-duration">{selectedExperience.duration}</p>
                <div className="modal-section">
                  <h4 className="section-heading">About the Experience</h4>
                  <p className="modal-text">{selectedExperience.details}</p>
                </div>
                <div className="modal-section">
                  <h4 className="section-heading">Skills Gained</h4>
                  <p className="modal-text">{selectedExperience.skills}</p>
                </div>
                {selectedExperience.grade && (
                  <div className="modal-section">
                    <h4 className="section-heading">Achievements</h4>
                    <p className="modal-text highlight-text">{selectedExperience.grade}</p>
                  </div>
                )}
                
                {selectedExperience.certificate && (
                  <a 
                    href={selectedExperience.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-btn"
                  >
                    View Certificate <FaExternalLinkAlt className="external-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;