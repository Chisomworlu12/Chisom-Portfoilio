import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeUp from '../ui/FadeUp';
import SectionLabel from '../ui/SectionLabel';
import { experience } from '../../data/resume';
import type { Experience as ExperienceType } from '../../types';

function ExpCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <FadeUp delay={index * 100}>
      <article
        className={`overflow-hidden rounded-lg border bg-[#0F0F0F] transition-colors duration-200 ${
          open ? 'border-accent/25' : 'border-[#1E1E1E] hover:border-[#2A2A2A]'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer flex-col gap-4 border-none bg-transparent px-5 py-6 text-left sm:flex-row sm:items-start sm:justify-between sm:px-7"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-syne)] text-[1.05rem] font-bold leading-snug text-[#F5F0E8]">
              {exp.role}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[0.75rem]">
              <span className="font-[family-name:var(--font-mono)] text-accent">{exp.company}</span>
              <span className="text-[#3A3A3A]">/</span>
              <span className="font-[family-name:var(--font-mono)] text-[#6B6B6B]">{exp.location}</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end sm:gap-2">
            <span className="whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.68rem] text-[#7A7A7A]">
              {exp.period}
            </span>
            <ChevronDown
              size={16}
              className="text-[#777] transition-transform duration-300"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </button>

        <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: open ? 620 : 0 }}>
          <div className="px-5 pb-7 pt-1 sm:px-7">
            <ul className="flex list-none flex-col gap-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 font-[family-name:var(--font-mono)] text-[0.82rem] leading-[1.7] text-[#909090]">
                  <span className="mt-0.5 shrink-0 text-[0.75rem] text-accent">-&gt;</span>
                  <span>
                    {bullet.label && <strong className="font-medium text-[#C8C8C8]">{bullet.label}: </strong>}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-[1100px] px-6 py-24 md:px-16">
      <SectionLabel>Career</SectionLabel>
      <h2
        className="mb-16 font-[family-name:var(--font-syne)] font-black leading-[1.0] tracking-normal"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
      >
        Experience.
      </h2>
      <div className="flex flex-col gap-3">
        {experience.map((exp, i) => (
          <ExpCard key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
