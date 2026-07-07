export const projects = [
  {
    id: 0,
    title: "Mentora",
    subtitle: "AI Mental Wellness Platform",
    description:
      "Full-stack wellness platform with AI chat companions, mood tracking, self-care activities, and community storytelling — built on React, Node.js, PostgreSQL, and Gemini AI.",
    details:
      "Mentora pairs users with specialized AI mentors (Mood Mentor, Stress Buster, Anxiety Ally, and more), each with distinct personalities powered by Google Gemini. Users can also build custom chatbots with their own prompts, avatars, and visibility settings. Beyond chat, the platform includes daily mood check-ins with trend visualization, timer-based self-care sessions, a community story space tagged by emotion, and deep profile personalization — all backed by JWT + Google OAuth auth, Prisma ORM on PostgreSQL, and deployed on Railway + Vercel.",
    skills: ["React 18", "Node.js", "PostgreSQL", "Prisma", "Gemini AI", "JWT", "Google OAuth", "Express", "Vercel"],
    githubLink: "https://github.com/tanushri0804/Mentora",
    liveLink: "https://mentora-mental-wellness.vercel.app",
    image: new URL("../assets/projects/Mentora.png", import.meta.url).href,
    color: "#6366f1",
    category: "Full Stack · AI",
    featured: true,
  },
  {
    id: 1,
    title: "VogueVault",
    subtitle: "Fashion E-Commerce Platform",
    description:
      "Multi-page fashion retail platform covering the full user journey — browse, sign in, and shop across Men, Women, Kids, Ethnic, and Casual categories with a polished editorial UI.",
    details:
      "Built from scratch with semantic HTML5, CSS3 (Grid, Flexbox, custom properties), and vanilla JavaScript. Features a split-screen landing page with scrolling marquee, full auth flow (sign in/up with API integration), a post-login shop dashboard, 5 dedicated category pages with filter chips, product cards with hover zoom and slide-up actions, client-side bag and wishlist with toast notifications, and a fixed/frosted-glass responsive navbar. Consistent design system across all pages using a purple/violet brand palette with Playfair Display + Inter typography.",
    skills: ["HTML5", "CSS3", "JavaScript", "REST API", "Responsive Design", "CSS Grid", "Flexbox"],
    githubLink: "https://github.com/tanushri0804/VogueVault",
    liveLink: "https://tanushri0804.github.io/VogueVault/",
    image: new URL("../assets/projects/vogue-vault.png", import.meta.url).href,
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
    title: "SoulBook",
    subtitle: "Mobile Book Tracking App",
    description:
      "Cross-platform mobile reading companion built with React Native + Expo — track, discover, and review books with a personal reading diary experience.",
    details:
      "SoulBook is a full-stack mobile app (iOS, Android, Web) built on React Native 0.81 + Expo 54. Features a visual bookshelf with colored spines, book discovery with genre filters, reading stats, a Fate Wheel to pick your next read, a Book Matchmaker, reading progress tracking, JWT auth with secure storage, dark/light themes, and localization in English, Spanish, French, and Hindi. Architecture is cleanly separated across api.js, authService.js, booksService.js, and a global ThemeContext.",
    skills: ["React Native", "Expo", "Node.js", "REST API", "JWT", "SQLite", "Lottie", "React Navigation"],
    githubLink: "https://github.com/tanushri0804/SoulBook",
    liveLink: "https://soul-book-one.vercel.app/",
    expoLink: "https://expo.dev/preview/update?message=api&updateRuntimeVersion=1.0.0&createdAt=2026-07-06T10%3A47%3A03.216Z&slug=exp&projectId=10fbd696-65b5-4728-adb8-e20d7bd52f2c&group=973464f5-76ed-4b2d-9d4c-57f3bb2136af",
    apkLink: null,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    color: "#f97316",
    category: "Mobile · Full Stack",
    featured: false,
    isMobile: true,
  },
  {
    id: 6,
    title: "TypeFlare",
    subtitle: "Typing Speed Test App",
    description:
      "A clean, distraction-free typing speed test web app with live WPM tracking, accuracy feedback, multiple content modes, and a full results history — a focused alternative to MonkeyType.",
    details:
      "TypeFlare presents a continuous stream of text and measures your speed and accuracy in real time. Choose from four timer durations (15s / 30s / 60s / 120s) and three content modes — Words (programming & science paragraphs), Quotes (longer passages), and Code (real JavaScript snippets). Letters turn green as you type correctly and red on mistakes; the current word is underlined in purple and the box shakes on a wrong confirmation. Tab restarts, Space confirms each word — fully keyboard-driven. After each test a results overlay shows WPM, accuracy, correct/wrong word counts, and every result is persisted to localStorage so you can track progress over time on the Results page.",
    skills: ["HTML5", "CSS3", "JavaScript", "localStorage", "DOM Manipulation", "Responsive Design"],
    githubLink: "https://github.com/tanushri0804/TypeFlare",
    liveLink: "https://tanushri0804.github.io/TypeFlare/",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    color: "#a855f7",
    category: "Tool",
    featured: true,
  },
  {
    id: 7,
    title: "Weather Prediction App",
    subtitle: "Real-time Weather App",
    description:
      "Single-page weather app that fetches live forecast data from a weather API and displays it through a clean, responsive interface.",
    details:
      "A single-page weather application built with Python and Flask that integrates a weather API to fetch and display real-time forecasts. Users can look up current conditions by location with a simple, clean UI rendered via HTML templates. Deployed to Heroku via Procfile.",
    skills: ["Python", "Flask", "Weather API", "HTML", "CSS", "Heroku"],
    githubLink: "https://github.com/tanushri0804/Weather-Prediction",
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f008b4b?q=80&w=1200&auto=format&fit=crop",
    color: "#38bdf8",
    category: "Web App",
    featured: false,
  },
  {
    id: 8,
    title: "Myntra Clone",
    subtitle: "Fashion E-Commerce Clone",
    description:
      "A fully responsive Myntra clone built with HTML, CSS, and JavaScript, featuring a modern UI and smooth user experience.",
    details:
      "A frontend-only replica of the popular fashion e-commerce platform Myntra, built entirely with vanilla HTML, CSS, and JavaScript. The project captures the essence of the original site with a clean, modern design system, responsive layout that adapts to all screen sizes, and interactive elements like hover effects, product cards, and navigation menus. Demonstrates strong fundamentals in semantic HTML, CSS Grid/Flexbox layouts, and DOM manipulation without relying on frameworks.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox", "DOM Manipulation"],
    githubLink: "https://github.com/tanushri0804/Myntra-clone",
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    color: "#ff3f6c",
    category: "Web App",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
