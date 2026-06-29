import { useState } from "react";
import { motion } from "framer-motion";
import "./FloatingImageStrip.css";

const cards = [
  {
    id: 1,
    color: "#3b82f6",
    title: "Creative",
    subtitle: "Coding",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    color: "#8b5cf6",
    title: "UI/UX",
    subtitle: "Design",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    color: "#ec4899",
    title: "Interactive",
    subtitle: "Motion",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 4,
    color: "#10b981",
    title: "Frontend",
    subtitle: "Arch",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 5,
    color: "#f59e0b",
    title: "Web",
    subtitle: "Experiences",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=300",
  },
];

const FloatingImageStrip = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="strip-container">
      <div className="cards-wrapper">
        {cards.map((card, index) => {
          const isHovered = hoveredCard === card.id;
          const defaultRotate = (index - 2) * 5;

          return (
            <motion.div
              key={card.id}
              className="strip-card"
              style={{
                zIndex: isHovered ? 50 : index,
                marginLeft: index === 0 ? 0 : "-60px",
              }}
              initial={{
                rotate: defaultRotate,
                y: 0,
                scale: 1,
              }}
              animate={{
                rotate: isHovered ? 0 : defaultRotate,
                y: isHovered ? -20 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              whileHover={{
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={card.img} alt={card.title} />

              <div className="card-overlay">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.8,
                    y: isHovered ? 0 : 0,
                  }}
                >
                  <p className="card-subtitle">{card.subtitle}</p>
                  <h3 className="card-title">{card.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingImageStrip;
