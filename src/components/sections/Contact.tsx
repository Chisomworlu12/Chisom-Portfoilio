import { Download, Link, Mail, Phone, UserRound } from 'lucide-react';
import FadeUp from '../ui/FadeUp';
import SectionLabel from '../ui/SectionLabel';
import { contact, meta } from '../../data/resume';

function ContactIcon({ icon }: { icon: string }) {
  if (icon === 'mail') return <Mail size={15} />;
  if (icon === 'phone') return <Phone size={15} />;
  if (icon === 'GH') return <Link size={15} />;
  if (icon === 'in') return <UserRound size={15} />;
  return <Mail size={15} />;
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1100px] px-6 py-24 md:px-16">
      <SectionLabel>Get in touch</SectionLabel>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
        <FadeUp>
          <p
            className="font-[family-name:var(--font-serif)] italic leading-normal text-[#888]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
          >
            Have a product, role, or collaboration in mind?
            <br />
            <br />
            <strong className="font-[family-name:var(--font-syne)] not-italic font-bold text-cream">
              Let's build something useful.
            </strong>
          </p>
        </FadeUp>

        <FadeUp delay={120} className="flex flex-col gap-4">
          {contact.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_self' : '_blank'}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-[#1E1E1E] bg-[#0F0F0F] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.8rem] text-[#C0C0C0] no-underline transition-all duration-200 hover:border-accent/25 hover:text-cream"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1A1A1A] text-accent transition-colors group-hover:bg-accent/10">
                <ContactIcon icon={item.icon} />
              </span>
              <span className="break-all">{item.label}</span>
            </a>
          ))}

          <a
            href={`/${meta.cvFilename}`}
            download
            className="group flex items-center gap-4 rounded-lg border border-accent/15 bg-accent/4 px-5 py-4 font-[family-name:var(--font-mono)] text-[0.8rem] text-accent no-underline transition-all duration-200 hover:border-accent/30 hover:bg-accent/8"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Download size={15} />
            </span>
            <span className="break-all">Download CV - {meta.cvFilename}</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
