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
  return (
    <div className="technology-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        className="technology-title"
      >
        TECHNOLOGIES
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="technology-icons"
      >
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="icon-box">
          <FaHtml5 className="icon html" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="icon-box">
          <FaCss3Alt className="icon css" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="icon-box">
          <FaJs className="icon javascript" />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="icon-box">
          <FaReact className="icon react" />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="icon-box">
          <SiMysql className="icon mysql" />
        </motion.div>

        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="icon-box">
          <FaNodeJs className="icon nodejs" />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="icon-box">
          <SiMongodb className="icon mongodb" />
        </motion.div>

        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="icon-box">
          <FaJava className="icon java" />
        </motion.div>

        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="icon-box">
          <SiCplusplus className="icon cplusplus" />
        </motion.div>

        <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className="icon-box">
          <SiGlitch className="icon glitch" />
        </motion.div>

        <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className="icon-box">
          <SiFirebase className="icon firebase" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
