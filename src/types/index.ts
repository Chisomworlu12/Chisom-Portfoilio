export interface Site {
  name: string;
  /** Live address, e.g. "https://chisomworlu.com" — used for SEO links and the sitemap */
  url: string;
  jobTitle: string;
  location: string;
  pageTitle: string;
  description: string;
  keywords: string[];
  cvFile: string;
  resumeButton: string;
  nav: { label: string; href: string }[];
}

export interface Hero {
  eyebrow: string;
  headline: string;
  /** Word in the headline that types itself out on a loop (optional) */
  typedWord?: string;
  tagline: string;
  currentlyBuildingLabel: string;
  currentlyBuilding: string;
}

export interface About {
  title: string;
  paragraphs: string[];
  coreStackLabel: string;
  coreStack: string[];
  allToolsLabel: string;
  allTools: string[];
  facts: { label: string; value: string }[];
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  /** One-sentence highlight shown on the site */
  summary: string;
  /** Full detail, kept for the CV (not shown on the site) */
  bullets?: { label?: string; text: string }[];
}

export interface Experience {
  title: string;
  /** Mobile-only button that reveals each job's summary */
  showDetailsLabel: string;
  hideDetailsLabel: string;
  jobs: Job[];
}

export interface Project {
  name: string;
  category: string;
  featured: boolean;
  description: string;
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  /** Extra labelled repos, e.g. separate Backend / Frontend repos */
  repos?: { label: string; url: string }[] | null;
}

export interface Projects {
  title: string;
  featuredLabel: string;
  privateRepoLabel: string;
  projects: Project[];
}

export interface Article {
  title: string;
  /** ISO date, e.g. "2026-03-14" */
  date: string;
  /** Minutes */
  readTime: number;
  url: string;
}

export interface Writing {
  title: string;
  mediumProfile: string;
  allArticlesLink: string;
  articles: Article[];
}

export interface Contact {
  heading: string;
  text: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  footerNote: string;
}

export interface Education {
  education: { school: string; detail: string; year: string }[];
  certifications: { name: string; issuer: string; year: string }[];
}
