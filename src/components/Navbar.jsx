import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Mail } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: GraduationCap, label: "Edu", id: "education" },
  { icon: Briefcase, label: "Work", id: "work" },
  { icon: Mail, label: "Contact", id: "contact" },
];

const Navbar = ({
  heroRef,
  scrollToHero,
  scrollToAbout,
  scrollToWork,
  scrollToContact,
  scrollToEducation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollHandlers = {
    home: scrollToHero,
    about: scrollToAbout,
    education: scrollToEducation,
    work: scrollToWork,
    contact: scrollToContact,
  };

  useEffect(() => {
    const updateScrolled = () => {
      const scrollTop = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      setScrolled(scrollTop > 50);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    document.addEventListener("scroll", updateScrolled, { passive: true });

    let observer;
    if (heroRef?.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      document.removeEventListener("scroll", updateScrolled);
      observer?.disconnect();
    };
  }, [heroRef]);

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    scrollHandlers[item.id]?.();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-center-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          onClick={scrollToHero}
          style={{ cursor: "pointer" }}
        >
          <span className="logo-icon">T</span>
          <span>Tanu Shri</span>
        </motion.div>

        <div className="nav-separator" />

        <div className="nav-items">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => handleNavClick(item)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ item, onClick, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className={`nav-item ${isActive ? "active" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        animate={{
          scale: hovered || isActive ? 1.2 : 1,
          color: hovered || isActive ? "#ffffff" : "#a1a1aa",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -5 }}
            className="nav-tooltip"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Navbar.propTypes = {
  heroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  scrollToHero: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToWork: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
  scrollToEducation: PropTypes.func.isRequired,
};

export default Navbar;
