import { Download } from 'lucide-react';
import FadeUp from '../ui/FadeUp';
import SectionLabel from '../ui/SectionLabel';
import { contact, meta } from '../../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-275 mx-auto px-6 md:px-16 py-24">
      <SectionLabel>Get in touch</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <FadeUp>
          <p
            className="font-serif italic text-[#888] leading-normal"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
          >
            Have a project in mind or just want to talk code?
            <br /><br />
            <strong className="text-cream not-italic font-syne font-bold">
              Let's build something great.
            </strong>
          </p>
        </FadeUp>

        {/* Right — links */}
        <FadeUp delay={120} className="flex flex-col gap-4">
          {contact.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? '_self' : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-4 px-5 py-4 border border-[#1E1E1E] rounded-xl bg-[#0F0F0F] no-underline text-[#C0C0C0] font-mono text-[0.8rem] transition-all duration-200 hover:border-accent/25 hover:text-cream group"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-md bg-[#1A1A1A] text-accent text-[0.8rem] shrink-0 group-hover:bg-accent/10 transition-colors">
                {c.icon}
              </span>
              <span>{c.label}</span>
            </a>
          ))}

          {/* CV download — highlighted row */}
          <a
            href={`/${meta.cvFilename}`}
            download
            className="flex items-center gap-4 px-5 py-4 border border-accent/15 rounded-xl bg-accent/4 no-underline text-accent font-mono text-[0.8rem] transition-all duration-200 hover:bg-accent/8 hover:border-accent/30 group"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
              <Download size={14} />
            </span>
            <span>Download CV — {meta.cvFilename}</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
