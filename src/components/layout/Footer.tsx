import { contact, site, writing } from '@/content';

const links = [
  { label: 'Email', href: `mailto:${contact.email}` },
  { label: 'Phone', href: `tel:${contact.phone.replace(/[^\d+]/g, '')}` },
  { label: 'GitHub', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Medium', href: writing.mediumProfile },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-20 md:px-10">
        <h2 className="reveal mb-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2rem]">
          {contact.heading}
        </h2>
        <p className="mb-14 text-[0.98rem] text-muted">
          {contact.text}{' '}
          <a href={`mailto:${contact.email}`} className="text-accent underline underline-offset-4">
            {contact.email}
          </a>
        </p>

        <div className="flex flex-col gap-4 border-t border-line pt-8 text-[0.85rem] text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. {contact.footerNote}
          </span>
          <ul className="flex list-none flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-muted no-underline transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`/${site.cvFile}`} download className="text-muted no-underline transition-colors hover:text-ink">
                {site.resumeButton}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
