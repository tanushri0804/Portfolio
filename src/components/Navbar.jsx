import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Home, GraduationCap, Briefcase, Mail, FolderOpen, FileText } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { killScrollTrigger } from "../utils/killScrollTrigger";
import "./Navbar.css";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: FolderOpen, label: "Projects", id: "projects", path: "/projects" },
  { icon: GraduationCap, label: "Education", id: "education", path: "/education" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Mail, label: "Contact", id: "contact" },
  { icon: FileText, label: "Resume", id: "resume", path: "/resume" },
];

const Navbar = ({
  heroRef,
  scrollToHero,
  scrollToExperience,
  scrollToContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollHandlers = {
    home: scrollToHero,
    experience: scrollToExperience,
    contact: scrollToContact,
  };

  useEffect(() => {
    if (location.pathname === "/education") {
      setActiveSection("education");
    } else if (location.pathname === "/projects") {
      setActiveSection("projects");
    } else if (location.pathname === "/resume") {
      setActiveSection("resume");
    } else if (location.pathname === "/certifications") {
      setActiveSection("certifications");
    }
  }, [location.pathname]);

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

    let observer;
    if (isHome && heroRef?.current) {
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
      observer?.disconnect();
    };
  }, [heroRef, isHome]);

  const handleLogoClick = () => {
    setActiveSection("home");
    if (!isHome) {
      navigate("/");
    } else {
      scrollToHero?.();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = async (item) => {
    setActiveSection(item.id);

    if (item.path) {
      await killScrollTrigger();
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const scrollToSection = scrollHandlers[item.id];

    if (!isHome) {
      await killScrollTrigger();
      navigate("/", { state: { scrollTo: item.id } });
      return;
    }

    scrollToSection?.();
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
          onClick={handleLogoClick}
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
    path: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Navbar.propTypes = {
  heroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  scrollToHero: PropTypes.func,
  scrollToExperience: PropTypes.func,
  scrollToContact: PropTypes.func,
};

export default Navbar;
