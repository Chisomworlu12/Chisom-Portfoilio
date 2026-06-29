import type { Project, Experience, Education, Certification, ContactLink, Skills } from '../types';

export const meta = {
  name: 'Chisom Worlu',
  title: 'Software Engineer | Frontend & Full-Stack',
  location: 'Lagos, Nigeria',
  summary:
    'Software engineer building fast, reliable web products for real users. Lead developer of vworka, a worker verification platform in Lagos, with hands-on ownership across product architecture, frontend systems, authentication, SEO, and backend integrations.',
  cvFilename: 'Chisom_Worlu_CV.pdf',
};

export const contact: ContactLink[] = [
  { icon: 'mail', label: 'worluchisom4real@gmail.com', href: 'mailto:worluchisom4real@gmail.com' },
  { icon: 'GH', label: 'github.com/Chisomworlu12', href: 'https://github.com/Chisomworlu12' },
  { icon: 'in', label: 'linkedin.com/in/Chisomworlu', href: 'https://linkedin.com/in/Chisomworlu' },
  { icon: 'phone', label: '+234 703-802-3888', href: 'tel:+2347038023888' },
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
    period: 'Mar 2026 - Present',
    bullets: [
      { label: 'Product ownership', text: 'Led 3 major product redefinitions in a fast-moving startup, improving the worker verification flow and supporting 30+ active users.' },
      { label: 'Frontend architecture', text: 'Refactored state management around Zustand and clearer feature boundaries to keep delivery fast through product pivots.' },
      { label: 'Growth and SEO', text: 'Implemented structured metadata, indexable pages, and localized content strategy with the Next.js Metadata API.' },
      { label: 'Full-stack delivery', text: 'Built core verification logic, trust signals, protected routes, and Supabase-backed authentication flows.' },
    ],
  },
  {
    role: 'Frontend Intern',
    company: 'Tracmedy',
    location: 'Lagos, Nigeria',
    period: 'May 2026 - Present',
    bullets: [
      { text: 'Built login, registration, and session management flows for the web platform.' },
      { text: `Developed the waitlist page and lead capture flow for the platform's pre-launch sign-ups.` },
      { text: 'Built clinician dashboard screens that give hospitals visibility into patient recovery data.' },
      { text: 'Collaborated with backend and design teams to deliver seamless, well-integrated user experiences.' },
      { text: 'Translated wireframes into responsive interfaces using Next.js, TypeScript, and Tailwind CSS.' },
    ],
  },
  {
    role: 'Frontend Intern',
    company: 'Bondah',
    location: 'Lagos, Nigeria',
    period: 'May 2026 - June 2026',
    bullets: [
      { text: 'Redesigned the marketing website to improve user experience and attract more visitors.' },
      { text: `Built the company's first full website from scratch, currently in development.` },
      { text: 'Audited and resolved all dead links across the website, improving SEO and user experience.' },
      { text: 'Delivered pixel-perfect UI implementations with high attention to design accuracy.' },
    ],
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Rudratek',
    location: 'Bengaluru, India',
    period: 'Feb 2026 - Present',
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
    stack: 'Next.js 15 / Zustand / Supabase / PostgreSQL / TypeScript',
    desc: 'Worker verification platform for Lagos. Led product architecture, secure auth, trust-based verification flows, and SEO foundations while scaling to 30+ active users.',
    url: 'https://vworka.com/',
    github: null,
    featured: true,
    tag: 'fullstack',
  },
  {
    name: 'FinTrack',
    stack: 'React / TypeScript / Vite / Tailwind CSS v4 / Zustand / Recharts',
    desc: 'Interactive finance dashboard for tracking income, expenses, and spending patterns with role-based UI, dark mode, export tools, and layered store-to-component architecture.',
    url: 'https://fin-track-five-psi.vercel.app/',
    github: 'https://github.com/Chisomworlu12/FinTrack.git',
    featured: false,
    tag: 'frontend',
  },
  {
    name: 'FastAPI Issue Tracker',
    stack: 'FastAPI / Python / PostgreSQL / SQLAlchemy / Pydantic',
    desc: 'RESTful issue tracking API with full CRUD, status workflows, user assignment, and filtering. Clean layered architecture with dependency injection and async endpoints.',
    url: null,
    github: 'https://github.com/Chisomworlu12/Fastapi-issue-tracker.git',
    featured: false,
    tag: 'backend',
  },
  {
    name: 'Python Data Analysis',
    stack: 'Python 3 / PostgreSQL / psycopg2 / statistics / collections',
    desc: 'Technical assessment covering statistical analysis of staff dress color data, PostgreSQL storage via psycopg2, binary-to-decimal conversion, and Fibonacci sequence calculation.',
    url: null,
    github: 'https://github.com/Chisomworlu12/python-data-analysis-task.git',
    featured: false,
    tag: 'backend',
  },
  {
    name: 'News Summarizer',
    stack: 'Redux Toolkit / Supabase Edge / OpenAI / PostgreSQL',
    desc: 'AI-powered news platform cutting reading time by 50%. Refactored from Context API to Redux Toolkit for high-frequency data handling.',
    url: 'https://news-summarizer-hazel.vercel.app',
    github: 'https://github.com/Chisomworlu12/news-summarizer.git',
    featured: false,
    tag: 'fullstack',
  },
  {
    name: 'TrendBoard AI',
    stack: 'React / Firebase / OpenAI API / Recharts / TypeScript',
    desc: 'Financial dashboard with 0ms API latency via a cache-first architecture. Real-time AI-driven visualizations and sentiment analysis.',
    url: 'https://trend-board-ai.vercel.app/',
    github: 'https://github.com/Chisomworlu12/TrendBoard-ai.git',
    featured: false,
    tag: 'frontend',
  },
];

export const education: Education[] = [
  { school: 'The Engineer Network', detail: 'Frontend Development Bootcamp', year: '2025' },
  { school: 'Chymall Software Development Learning Center', detail: 'IT Certificate', year: '2021-2023' },
  { school: 'Deeper Life High School', detail: 'West African Senior School Certificate', year: '2014-2020' },
];

export const certifications: Certification[] = [
  { name: 'React Frameworks', issuer: 'Udemy', year: '2025' },
  { name: 'JavaScript Modern Essentials', issuer: 'Udemy', year: '2025' },
  { name: 'Tailwind CSS Mastery', issuer: 'Udemy', year: '2025' },
];
