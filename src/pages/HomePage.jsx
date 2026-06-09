import { useRef } from "react";
import Badges from "../components/Badges";
import BrandTicker from "../components/BrandTicker";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProfessionalJourney from "../components/ProfessionalJourney";
import Projects from "../components/Projects";
import Technology from "../components/Technology";

const HomePage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        heroRef={heroRef}
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={aboutRef}>
        <ProfessionalJourney />
      </div>

      <Technology />
      <BrandTicker />

      <div ref={workRef}>
        <Experience />
      </div>

      <Projects />
      <Badges />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
