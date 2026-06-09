export const projects = [
  {
    id: 1,
    title: "VogueVault",
    subtitle: "E-Commerce Platform",
    description:
      "Online shopping platform for clothing with wishlist, cart, and category-based navigation.",
    details:
      "A full-featured e-commerce experience for traditional and modern outfits across men, women, and kids. Includes account creation, login, wishlist, shopping cart, and smooth category browsing with a responsive storefront.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Glitch"],
    githubLink: "https://github.com/tanushri0804/VogueVault",
    liveLink: "https://tanushri0804.github.io/VogueVault/",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    color: "#8b5cf6",
    category: "Web App",
    featured: true,
  },
  {
    id: 2,
    title: "Veldora",
    subtitle: "Hotel Booking Platform",
    description:
      "Search and book accommodations with filters for price, location, and amenities.",
    details:
      "A hotel booking platform with an intuitive interface for discovering stays. Users can filter by price, location, amenities, and ratings to find the right accommodation quickly.",
    skills: ["HTML", "CSS", "JavaScript", "Glitch"],
    githubLink: "https://github.com/tanushri0804/Veldora",
    liveLink: "https://tanushri0804.github.io/Veldora/",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    color: "#3b82f6",
    category: "Web App",
    featured: true,
  },
  {
    id: 3,
    title: "Image Gallery",
    subtitle: "Interactive Gallery",
    description:
      "Responsive gallery with modal preview, sorting, and smooth hover transitions.",
    details:
      "A responsive image gallery built with vanilla JavaScript featuring grid layout, modal image preview, sorting and filtering options, and polished hover effects.",
    skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    githubLink: "https://github.com/tanushri0804/Image-Gallery",
    liveLink: "https://tanushri0804.github.io/Image-Gallery/",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    color: "#ec4899",
    category: "Web App",
    featured: true,
  },
  {
    id: 4,
    title: "Calculator",
    subtitle: "Utility Web App",
    description:
      "Dual-mode calculator for arithmetic and date difference calculations.",
    details:
      "Web-based calculator with Standard Calculation for basic arithmetic and Date Calculation to find differences between dates. Features responsive design and interactive button feedback.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/tanushri0804/Calculator",
    liveLink: "https://tanushri0804.github.io/Calculator/",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    color: "#10b981",
    category: "Tool",
    featured: false,
  },
  {
    id: 5,
    title: "Mental Health Chatbot",
    subtitle: "AI Support Assistant",
    description:
      "Conversational interface designed to provide supportive mental health interactions.",
    details:
      "An empathetic chatbot experience focused on accessible mental health support with a clean UI, guided conversation flows, and a calming visual design language.",
    skills: ["React.js", "JavaScript", "UI/UX", "API Integration"],
    githubLink: null,
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    color: "#6366f1",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 6,
    title: "College Management Dashboard",
    subtitle: "Admin Dashboard",
    description:
      "Dashboard for managing academic records, students, and institutional data.",
    details:
      "A management dashboard concept for colleges with organized data views, role-based sections, and a structured interface for academic administration workflows.",
    skills: ["React.js", "JavaScript", "SQL", "Dashboard UI"],
    githubLink: null,
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    color: "#f59e0b",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 7,
    title: "Weather Prediction App",
    subtitle: "Real-time Weather",
    description:
      "Full-stack weather app with React frontend and Java backend processing live API data.",
    details:
      "Weather prediction application integrating real-time API data with a React frontend and Java backend, delivering location-based forecasts and clean data visualization.",
    skills: ["React.js", "Java", "REST APIs", "Real-time Data"],
    githubLink: null,
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f008b4b?q=80&w=1200&auto=format&fit=crop",
    color: "#38bdf8",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 8,
    title: "Book Reading Platform",
    subtitle: "Reading & Analytics",
    description:
      "Platform with authentication and personalized reading statistics.",
    details:
      "A book reading platform featuring user authentication, personalized reading stats, and a library-style interface for tracking reading habits over time.",
    skills: ["React.js", "SQL", "Authentication", "UI/UX"],
    githubLink: null,
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    color: "#a855f7",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 9,
    title: "Interactive Text Editor",
    subtitle: "Rich Text Tool",
    description:
      "Browser-based editor with formatting controls and live preview.",
    details:
      "An interactive text editor with formatting tools, live preview, and a minimal writing-focused interface built for smooth in-browser editing.",
    skills: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    githubLink: null,
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop",
    color: "#14b8a6",
    category: "Tool",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
