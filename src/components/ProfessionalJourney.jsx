import React from "react";
// import profileImage from "../assets/image1.gif";
import "./ProfessionalJourney.css";

const ProfessionalJourney = () => {
  return (
    <section className="professional-journey">
      <div className="content">
        <h2 className="title">ABOUT ME</h2>
        <p className="subtitle"><i>Showcasing skills and achievements</i></p>
        <div className="underline"></div>

        <ul className="journey-list">
          <li>
          Dedicated Computer Science Engineering student with expertise in Python, C, C++, and Java, specializing in web development, cybersecurity, computer architecture, and high-performance computing.
          </li>
          <li>
          Experienced in developing projects like Book Management Application, E-Commerce Store, and an Image Gallery Application, with internships at EduSkills and IBM Skillsbuild.
          </li>
          <li>
            Proficient in tools like Git, Figma, and Canva and
            certified in Cybersecurity, Generative AI, AWS Cloud.
          </li>
          <li>
          Skilled in problem-solving, teamwork, and creating efficient, user-centric technical solutions.
          </li>
        </ul>

      </div>

      <div className="profile-image">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVvcXI2bXg1NXh5Y3c0d2lrM29mb3ZsejgxbHp5bGE5eTFzcDZieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RfT7W8lXpSSYbXbakl/giphy.gif" alt="Profile" />
      </div>
    </section>
  );
};

export default ProfessionalJourney;
