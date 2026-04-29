import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { meta } from '../../data/resume';

const stats = [
  { num: '3+', label: 'Arch. redefs at vworka' },
  { num: '30+', label: 'Active users' },
  { num: '50%', label: 'Reading time saved' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,255,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,255,0,0.03) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 65%)',
          top: '50%', left: '40%',
          transform: 'translate(-50%,-50%)',
        }}
      />

      {/* Content wrapper — same max-width as all sections */}
      <div className="relative w-full max-w-[1100px] mx-auto px-6 md:px-16 pt-32 pb-24">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/6 text-accent font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="font-[family-name:var(--font-syne)] font-black leading-[0.9] tracking-[-0.04em] mb-6"
          style={{
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {meta.name.split(' ')[0]}
          <br />
          <span className="text-accent font-[family-name:var(--font-serif)] italic font-normal">
            {meta.name.split(' ')[1]}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-[family-name:var(--font-mono)] text-[0.95rem] text-[#6B6B6B] leading-[1.8] max-w-[540px] mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.15s',
          }}
        >
          Software engineer shipping products with real users — specialized in{' '}
          <span className="text-[#F5F0E8]">Next.js</span>,{' '}
          <span className="text-[#F5F0E8]">Zustand</span> &{' '}
          <span className="text-[#F5F0E8]">SEO</span>. Lead dev of{' '}
          <strong className="text-[#F5F0E8]">vworka</strong>, a worker verification platform scaling in Lagos.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 mb-16"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.25s' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-[#0D0D0D] px-6 py-3 rounded-md font-[family-name:var(--font-syne)] font-bold text-[0.82rem] tracking-wide no-underline transition-all duration-200 hover:bg-[#d4ff1a] hover:-translate-y-0.5"
          >
            View Projects ↓
          </a>
          <a
            href="https://github.com/Chisomworlu12"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#303030] text-[#F5F0E8] px-6 py-3 rounded-md font-[family-name:var(--font-syne)] font-semibold text-[0.82rem] no-underline transition-all duration-200 hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href={`/${meta.cvFilename}`}
            download
            className="inline-flex items-center gap-2 border border-[#303030] text-[#F5F0E8] px-6 py-3 rounded-md font-[family-name:var(--font-syne)] font-semibold text-[0.82rem] no-underline transition-all duration-200 hover:border-accent hover:text-accent"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-10 pt-8 border-t border-[#1E1E1E]"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.35s' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-syne)] font-black text-[2.5rem] text-accent leading-none">
                {s.num}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[0.62rem] text-[#6B6B6B] tracking-[0.12em] uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
