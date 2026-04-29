import type { Project, Experience, Education, Certification, ContactLink, Skills } from '../types';

export const meta = {
  name: 'Chisom Worlu',
  title: 'Software Engineer',
  location: 'Lagos, Nigeria',
  summary:
    'Software engineer who ships products with real users. Lead Developer of vworka, a worker verification platform. Expert at rapid prototyping and iterative development — led three major architectural redefinitions of vworka to align with market needs. Specialized in Next.js, Zustand, and SEO.',
  cvFilename: 'Chisom_Worlu_CV.docx',
};

export const contact: ContactLink[] = [
  { icon: '✉', label: 'worluchisom4real@gmail.com', href: 'mailto:worluchisom4real@gmail.com' },
  { icon: 'GH', label: 'github.com/Chisomworlu12', href: 'https://github.com/Chisomworlu12' },
  { icon: 'in', label: 'linkedin.com/in/Chisomworlu', href: 'https://linkedin.com/in/Chisomworlu' },
  { icon: '☎', label: '+234 703-802-3888', href: 'tel:+2347038023888' },
];

export const skills: Skills = {
  frontend: ['React', 'Next.js 15', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Redux Toolkit', 'TanStack Query'],
  backend: ['Supabase', 'Firebase', 'PostgreSQL', 'NextAuth', 'REST APIs', 'FastAPI', 'Django', 'Deno', 'Python'],
  devops: ['Git', 'GitHub', 'Vercel', 'GitHub Actions', 'Jest', 'React Testing Library'],
};

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'vworka',
    location: 'Lagos, Nigeria',
    period: 'Mar 2026 – Present',
    bullets: [
      { label: 'Iterative Product Development', text: 'Led 3 major application redefinitions in a fast-paced startup to optimize user verification flow, scaling to 30+ active users.' },
      { label: 'Architectural Refactoring', text: 'Migrated tech stacks and state management strategies (Zustand) to improve performance and developer velocity during rapid pivots.' },
      { label: 'Growth & SEO', text: 'Implemented comprehensive SEO strategy using Next.js Metadata API, driving organic traffic for localized worker verification.' },
      { label: 'Full-Stack Ownership', text: 'Developed core business logic, trust-based verification model, and secure authentication using Supabase.' },
    ],
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Rudratek',
    location: 'Bengaluru, India',
    period: 'Feb 2026 – Present',
    bullets: [
      { text: 'Delivered production-ready features using Next.js 15 with 100% design accuracy from Figma wireframes.' },
      { text: 'Optimized application performance and Core Web Vitals, focusing on high-retention user experiences.' },
      { text: 'Integrated RESTful APIs and managed complex application state for seamless data flow.' },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'vworka',
    stack: 'Next.js 15 · Zustand · Supabase · PostgreSQL · TypeScript',
    desc: 'Worker verification platform for Lagos. Led 3 full architectural redefinitions. Built trust-based verification model with secure auth. 30+ active users.',
    url: null,
    github: 'https://github.com/Chisomworlu12/vworka',
    featured: true,
    tag: 'fullstack',
  },
  {
    name: 'FinTrack',
    stack: 'React · TypeScript · Vite · Tailwind CSS v4 · Zustand · Recharts',
    desc: 'Interactive finance dashboard for tracking income, expenses, and spending patterns. Role-based UI (Admin/Viewer), dark mode, CSV/JSON export, and a layered store → hooks → components architecture.',
    url: 'https://fin-track-five-psi.vercel.app/',
    github: 'https://github.com/Chisomworlu12/FinTrack.git',
    featured: false,
    tag: 'frontend',
  },
  {
    name: 'Shoe Ecommerce',
    stack: 'Next.js 15 · Django · PostgreSQL · TypeScript · Tailwind CSS',
    desc: 'Full-stack shoe ecommerce platform with Django REST API backend and Next.js 15 storefront. Product catalogue, cart, checkout flow, and admin dashboard.',
    url: null,
    github: null,
    featured: false,
    tag: 'fullstack',
    wip: true,
  },
  {
    name: 'FastAPI Issue Tracker',
    stack: 'FastAPI · Python · PostgreSQL · SQLAlchemy · Pydantic',
    desc: 'RESTful issue tracking API with full CRUD, status workflows, user assignment, and filtering. Clean layered architecture with dependency injection and async endpoints.',
    url: null,
    github: 'https://github.com/Chisomworlu12/Fastapi-issue-tracker.git',
    featured: false,
    tag: 'backend',
  },
  {
    name: 'Python Data Analysis',
    stack: 'Python 3 · PostgreSQL · psycopg2 · statistics · collections',
    desc: 'Technical assessment covering statistical analysis of staff dress color data (mean, mode, median, variance, probability), PostgreSQL storage via psycopg2, binary-to-decimal conversion, and Fibonacci sequence calculation.',
    url: null,
    github: 'https://github.com/Chisomworlu12/python-data-analysis-task.git',
    featured: false,
    tag: 'backend',
  },
  {
    name: 'News Summarizer',
    stack: 'Redux Toolkit · Supabase Edge · OpenAI · PostgreSQL',
    desc: 'AI-powered news platform cutting reading time by 50%. Refactored from Context API to Redux Toolkit for high-frequency data handling.',
    url: 'https://news-summarizer-hazel.vercel.app',
    github: 'https://github.com/Chisomworlu12/news-summarizer.git',
    featured: false,
    tag: 'fullstack',
  },
  {
    name: 'TrendBoard AI',
    stack: 'React · Firebase · OpenAI API · Recharts · TypeScript',
    desc: 'Financial dashboard with 0ms API latency via a cache-first architecture. Real-time AI-driven visualizations and sentiment analysis.',
    url: "https://trend-board-ai.vercel.app/",
    github: 'https://github.com/Chisomworlu12/TrendBoard-ai.git',
    featured: false,
    tag: 'frontend',
  },
];

export const education: Education[] = [
  { school: 'The Engineer Network', detail: 'Frontend Development Bootcamp', year: '2025' },
  { school: 'Chymall Software Development Learning Center', detail: 'IT Certificate', year: '2021–2023' },
  { school: 'Deeper Life High School', detail: 'West African Senior School Certificate', year: '2014–2020' },
];

export const certifications: Certification[] = [
  { name: 'React Frameworks', issuer: 'Udemy', year: '2025' },
  { name: 'JavaScript Modern Essentials', issuer: 'Udemy', year: '2025' },
  { name: 'Tailwind CSS Mastery', issuer: 'Udemy', year: '2025' },
];
