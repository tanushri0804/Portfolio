import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiFirebase, SiGlitch, SiMongodb, SiMysql } from "react-icons/si";
import "./Technology.css";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  const technologies = [
    { icon: <FaHtml5 className="icon" />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt className="icon" />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs className="icon" />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact className="icon" />, name: "React", color: "#61DAFB" },
    { icon: <SiMysql className="icon" />, name: "MySQL", color: "#4479A1" },
    { icon: <FaNodeJs className="icon" />, name: "Node.js", color: "#339933" },
    { icon: <SiMongodb className="icon" />, name: "MongoDB", color: "#47A248" },
    { icon: <FaJava className="icon" />, name: "Java", color: "#007396" },
    { icon: <SiCplusplus className="icon" />, name: "C++", color: "#00599C" },
    { icon: <SiGlitch className="icon" />, name: "Glitch", color: "#3333FF" },
    { icon: <SiFirebase className="icon" />, name: "Firebase", color: "#FFCA28" },
  ];

  return (
    <div className="technology-section" id="technologies">
      <div className="technology-container">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="technology-title"
        >
          TECHNOLOGIES
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="technology-grid"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={iconVariants(2 + index * 0.3)}
              initial="initial"
              animate="animate"
              className="technology-card"
              whileHover={{ scale: 1.1 }}
              style={{ "--tech-color": tech.color }}
            >
              <div className="icon-container">
                {tech.icon}
              </div>
              <div className="tech-name">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;