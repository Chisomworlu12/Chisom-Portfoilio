import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, SquareArrowOutUpRight } from 'lucide-react';
import { meta } from '../../data/resume';

const stats = [
  { num: '3+', label: 'Product pivots led' },
  { num: '30+', label: 'Active users supported' },
  { num: '50%', label: 'Reading time saved' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,255,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(200,255,0,0.035) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_35%_45%,rgba(200,255,0,0.10),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.045),transparent_28%)]" />

      <div className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 pt-32 md:px-16 md:pb-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/6 px-4 py-1.5 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          Available for product teams
        </div>

        <p
          className="mb-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.18em] text-[#8A8A8A]"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease' }}
        >
          {meta.title} - {meta.location}
        </p>

        <h1
          className="mb-6 font-[family-name:var(--font-syne)] font-black leading-[0.9] tracking-normal"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {meta.name.split(' ')[0]}
          <br />
          <span className="font-[family-name:var(--font-serif)] font-normal italic text-accent">
            {meta.name.split(' ')[1]}
          </span>
        </h1>

        <p
          className="mb-10 max-w-[650px] font-[family-name:var(--font-mono)] text-[0.95rem] leading-[1.8] text-[#A0A0A0]"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.15s' }}
        >
          {meta.summary}
        </p>

        <div
          className="mb-16 flex flex-wrap gap-3"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.25s' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-[family-name:var(--font-syne)] text-[0.82rem] font-bold tracking-wide text-[#0D0D0D] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4ff1a]"
          >
            View Projects
            <ArrowDown size={15} />
          </a>
          <a
            href="mailto:worluchisom4real@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-[#303030] px-6 py-3 font-[family-name:var(--font-syne)] text-[0.82rem] font-semibold text-[#F5F0E8] no-underline transition-all duration-200 hover:border-accent hover:text-accent"
          >
            <Mail size={15} />
            Hire Me
          </a>
          <a
            href="https://github.com/Chisomworlu12"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#303030] px-6 py-3 font-[family-name:var(--font-syne)] text-[0.82rem] font-semibold text-[#F5F0E8] no-underline transition-all duration-200 hover:border-accent hover:text-accent"
          >
            <SquareArrowOutUpRight size={15} />
            GitHub
          </a>
          <a
            href={`/${meta.cvFilename}`}
            download
            className="inline-flex items-center gap-2 rounded-md border border-[#303030] px-6 py-3 font-[family-name:var(--font-syne)] text-[0.82rem] font-semibold text-[#F5F0E8] no-underline transition-all duration-200 hover:border-accent hover:text-accent"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        <div
          className="grid max-w-[720px] grid-cols-1 gap-4 border-t border-[#1E1E1E] pt-8 sm:grid-cols-3"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.35s' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-accent/25 pl-4">
              <span className="block font-[family-name:var(--font-syne)] text-[2.25rem] font-black leading-none text-accent">
                {stat.num}
              </span>
              <span className="mt-2 block font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.12em] text-[#7A7A7A]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
