import { useState } from "react";

export const usePortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "AI News Summarizer",
      image: "/news-summarizer.jpeg",
      description:
        "AI-powered news summarization platform with 12 active users. Architected state management solutions and implemented advanced serverless processing for content extraction and intelligent analysis.",
      link: "https://news-summarizer-hazel.vercel.app/",
      github: "https://github.com/Chisomworlu12/News-Summarizer.git",
      tech: [
        "React",
        "Typescript",
        "OpenAI",
        "supabase",
        "PostgreSQL",
        "RSS Parsing",
        "Tailwind CSS",
        "Redux Toolkit",
        "Framer Motion",
        "Supabase Edge Functions",
        "GitHub Actions",
        "Vercel",
      ],
      achievements: [
        "Redux Toolkit migration from Context API",
        "Deno-based Edge Functions for serverless processing",
        "Custom DOMParser reducing reading time by 50%",
        "PostgreSQL rate-limiting system",
        "CI/CD pipeline with 100% build reliability",
      ],
    },
    {
      title: "TrendBoard Ai",
      description:
        "High-performance financial intelligence dashboard with cache-first AI strategy. Automatically generates 1-sentence summaries and sentiment analysis for live financial news.",
      tech: [
        "React",
        "Typescript",
        "Firbase",
        "OpenAi",
        "Recharts",
        "shadcn ui",
      ],
      achievements: [
        "Cache-first architecture reducing latency to 0ms",
        "Automatic 1-sentence summaries with sentiment analysis",
        "Real-time topic frequency tracking",
        "Market trend analysis visualization",
        "Cost-effective LLM integration strategy",
        "Professional financial dashboard design",
      ],
      link: "https://trend-board-ai.vercel.app/",
      github: "https://github.com/Chisomworlu12/TrendBoard-ai.git",
      image: "/TrendBoardAi.jpeg",
    },
    {
      name: "Weather Dashboard",
      image: "/ople-weather.png",
      description:
        "Real-time weather app with clean API handling and UI state management. Features location search and forecast visualization.",
      link: "https://weather-dashbord-one.vercel.app/",
      github: "https://github.com/Chisomworlu12/Weather-dashbord.git",
      tech: ["React", "OpenWeather API", "Tailwind CSS", "Geo location"],
    },
  ];

  const experience = [
    {
      title: "Frontend Developer (Freelance)",
      company: "Rudratek",
      location: "Bengaluru, India",
      duration: "Feb 2026 – Present",
      description:
        "Activated for high-priority client projects requiring rapid frontend scaling. Translating complex Figma wireframes into responsive, pixel-perfect UI components while managing APIs and application state.",
      highlights: [
        "Next.js 15",
        "React",
        "Figma to Code",
        "RESTful APIs",
        "State Management",
        "Responsive Design",
      ],
      achievements: [
        "Delivered production-ready features using Next.js 15",
        "Translated complex Figma wireframes with 100% design accuracy",
        "Integrated RESTful APIs with complex state management",
        "Managed full project lifecycles from milestone execution to post-launch support",
        "Ensured seamless data flow and performance optimization",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "The Engineer Network",
      location: "Lagos, Nigeria",
      duration: "Sep 2025 – Nov 2025",
      description:
        "Developed responsive web applications and contributed to improving team UI/UX practices. Built weather and recipe applications with advanced React patterns and error handling strategies.",
      highlights: [
        "React",
        "OpenWeather API",
        "React Portals",
        "LocalStorage",
        "Error Boundaries",
        "Offline Detection",
      ],
      achievements: [
        "Developed responsive Ople Weather App with OpenWeather API integration",
        "Implemented complex 7-day forecast data visualization",
        "Built Recipe Finder app with React Portals and LocalStorage",
        "Achieved 60% reduction in state-loss errors",
        "Implemented custom Error Boundaries and offline detection",
        "Maintained 100% app uptime during connectivity drops",
        "Presented weekly demos to senior engineers on UI/UX best practices",
      ],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "HTML",
        "CSS",
        "Recharts",
      ],
    },
    {
      category: "Backend",
      items: [
        "Supabase (PostgreSQL)",
        " REST APIs",
        "Python",
        "ETL Pipelines",
        "Deno (Edge Functions)",
      ],
    },
    {
      category: "Testing & Tools",
      items: [
        "Git",
        "React Testing Library",
        "Git/GitHub",
        "Chrome DevTool",
        "CI/CD",
        "Jest",
      ],
    },
    {
      category: "Design & AI Implementation",
      items: [
        "Web Design",
        "Accessibility",
        "Design Systems",
        "Prompt Engineering",
        "Google Gemini AI Integration",
        "AI-assisted development (GitHub Copilot, Claude)",
      ],
    },
  ];

  // Theme colors
  const bgColor = isDark ? "bg-slate-950" : "bg-white";
  const textColor = isDark ? "text-white" : "text-slate-950";
  const navBg = isDark
    ? "bg-slate-950/80 border-slate-800"
    : "bg-white/80 border-slate-200";
  const cardBg = isDark
    ? "bg-slate-800/50 border-slate-700"
    : "bg-slate-100/50 border-slate-300";
  const sectionBg = isDark
    ? "bg-slate-900/50 border-slate-800"
    : "bg-slate-100/50 border-slate-200";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-600";
  const textTertiary = isDark ? "text-slate-300" : "text-slate-700";
  const hoverBg = isDark ? "hover:bg-slate-800" : "hover:bg-slate-200";

  return {
    // State
    menuOpen,
    setMenuOpen,
    activeSection,
    setActiveSection,
    isDark,
    setIsDark,
    // Functions
    scrollToSection,
    // Data
    projects,
    skills,
    experience,
    // Theme colors
    bgColor,
    textColor,
    navBg,
    cardBg,
    sectionBg,
    textSecondary,
    textTertiary,
    hoverBg,
  };
};
