// All site copy lives in the JSON files in this folder — edit those, not the components.
import type { About, Contact, Education, Experience, Hero, Projects, Site, Writing } from '../types';
import siteJson from './site.json';
import heroJson from './hero.json';
import aboutJson from './about.json';
import experienceJson from './experience.json';
import projectsJson from './projects.json';
import writingJson from './writing.json';
import contactJson from './contact.json';
import educationJson from './education.json';

export const site: Site = siteJson;
export const hero: Hero = heroJson;
export const about: About = aboutJson;
export const experience: Experience = experienceJson;
export const projects: Projects = projectsJson;
export const writing: Writing = writingJson;
export const contact: Contact = contactJson;
// Not shown on the site; kept for reference.
export const education: Education = educationJson;
