import { motion } from "framer-motion";
import FloatingImageStrip from "./FloatingImageStrip";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="hero-content container">
        <div className="headline-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <h1 className="title-main">
              Hi, I&apos;m <span style={{ fontWeight: 700 }}>Tanu Shri</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            style={{ display: "inline-block" }}
          >
            <h2 className="title-role text-gradient">Software Developer</h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ width: "100%" }}
        >
          <FloatingImageStrip />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
