import {
  FaComments,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLightbulb,
  FaNodeJs,
  FaReact,
  FaSync,
  FaUsers,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAmazonwebservices,
  SiAmazons3,
  SiC,
  SiCanva,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiMysql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrain, TbLayout, TbPalette, TbPencil } from "react-icons/tb";

export const skillTabs = [
  { id: "all", label: "Highlights" },
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" },
  { id: "design", label: "Design" },
  { id: "data", label: "Database" },
  { id: "soft", label: "Soft Skills" },
];

/** @type {{ name: string; Icon: import("react").ComponentType; color: string; category: string }[]} */
export const skillItems = [
  { name: "C", Icon: SiC, color: "#A8B9CC", category: "languages" },
  { name: "Python", Icon: SiPython, color: "#3776AB", category: "languages" },
  { name: "Java", Icon: FaJava, color: "#007396", category: "languages" },

  { name: "HTML", Icon: FaHtml5, color: "#E34F26", category: "web" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6", category: "web" },
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E", category: "web" },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#38BDF8",
    category: "web",
  },

  { name: "React.js", Icon: FaReact, color: "#61DAFB", category: "frameworks" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933", category: "frameworks" },
  {
    name: "React Native",
    Icon: SiReact,
    color: "#61DAFB",
    category: "frameworks",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    category: "frameworks",
  },
  { name: "REST API", Icon: TbApi, color: "#8b5cf6", category: "frameworks" },

  { name: "Figma", Icon: SiFigma, color: "#F24E1E", category: "tools" },
  { name: "Adobe XD", Icon: SiAdobexd, color: "#FF61F6", category: "tools" },
  { name: "Canva", Icon: SiCanva, color: "#00C4CC", category: "tools" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032", category: "tools" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff", category: "tools" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", category: "tools" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900", category: "tools" },
  { name: "Amazon S3", Icon: SiAmazons3, color: "#569A31", category: "tools" },

  { name: "UI/UX", Icon: TbPalette, color: "#f472b6", category: "design" },
  {
    name: "Prototyping",
    Icon: TbPencil,
    color: "#a78bfa",
    category: "design",
  },
  {
    name: "Wireframing",
    Icon: TbLayout,
    color: "#60a5fa",
    category: "design",
  },

  { name: "MySQL", Icon: SiMysql, color: "#4479A1", category: "data" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57", category: "data" },
  { name: "Prisma ORM", Icon: SiPrisma, color: "#2D3748", category: "data" },

  {
    name: "Communication",
    Icon: FaComments,
    color: "#34d399",
    category: "soft",
  },
  {
    name: "Team Collaboration",
    Icon: FaUsers,
    color: "#38bdf8",
    category: "soft",
  },
  { name: "Adaptability", Icon: FaSync, color: "#fbbf24", category: "soft" },
  {
    name: "Problem-solving",
    Icon: FaLightbulb,
    color: "#fb923c",
    category: "soft",
  },
  {
    name: "Critical Thinking",
    Icon: TbBrain,
    color: "#e879f9",
    category: "soft",
  },
];

const highlightNames = [
  "React.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React Native",
  "REST API",
  "GitHub",
  "Git",
  "Canva",
  "Firebase",
  "Prisma ORM",
  "SQLite",
  "AWS",
];

export function getSkillsForTab(tabId) {
  if (tabId === "all") {
    return skillItems.filter((item) => highlightNames.includes(item.name));
  }
  return skillItems.filter((item) => item.category === tabId);
}
