export type ProjectTag = 'all' | 'fullstack' | 'frontend' | 'backend';

export interface Project {
  name: string;
  stack: string;
  desc: string;
  url: string | null;
  github: string | null;
  featured: boolean;
  tag: Exclude<ProjectTag, 'all'>;
  wip?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: { label?: string; text: string }[];
}

export interface Education {
  school: string;
  detail: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  devops: string[];
}
