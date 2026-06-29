import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Certifications from "../components/Certifications";
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
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle scroll-to-section when navigating from another page
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    const refMap = {
      experience: experienceRef,
      contact: contactRef,
      home: heroRef,
    };

    const targetRef = refMap[scrollTo];
    if (!targetRef) return;

    // Wait for the page to fully render before scrolling
    const timer = setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Navbar
        heroRef={heroRef}
        scrollToHero={scrollToHero}
        scrollToExperience={scrollToExperience}
        scrollToContact={scrollToContact}
      />

      <div ref={heroRef}>
        <Hero />
      </div>

      <ProfessionalJourney />

      <Technology />
      <BrandTicker />

      <div ref={experienceRef}>
        <Experience />
      </div>

      <Projects />
      <Certifications />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
