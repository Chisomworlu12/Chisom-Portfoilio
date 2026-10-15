import { about, contact, site, writing } from '@/content';

/**
 * The site's public address. Set "url" in src/content/site.json once you have a domain;
 * until then a Vercel deployment's production address is used automatically.
 */
export const siteUrl = (
  site.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  'http://localhost:3000'
).replace(/\/$/, '');

const isPlaceholder = (url: string) => !url || url.includes('your-');

/** Profiles that identify you to search engines (placeholders are skipped). */
export const profileLinks = [contact.github, contact.linkedin, writing.mediumProfile].filter((url) => !isPlaceholder(url));

/** schema.org structured data so Google understands who the site is about. */
export function structuredData() {
  const [firstName, ...rest] = site.name.split(' ');
  const person = {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: site.name,
    givenName: firstName,
    familyName: rest.join(' '),
    jobTitle: site.jobTitle,
    description: site.description,
    url: siteUrl,
    email: `mailto:${contact.email}`,
    address: { '@type': 'PostalAddress', addressLocality: site.location.split(',')[0], addressCountry: 'NG' },
    sameAs: profileLinks,
    knowsAbout: about.coreStack,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: site.description,
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.pageTitle,
        mainEntity: { '@id': `${siteUrl}/#person` },
      },
    ],
  };
}
