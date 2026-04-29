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
      <div
        className={`border rounded-xl bg-[#0F0F0F] overflow-hidden transition-colors duration-200 ${
          open ? 'border-accent/20' : 'border-[#1E1E1E] hover:border-[#2A2A2A]'
        }`}
      >
        {/* Header button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left bg-transparent border-none cursor-pointer px-7 py-6 flex justify-between items-start gap-6"
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-syne)] font-bold text-[1.05rem] text-[#F5F0E8] leading-snug">
              {exp.role}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[0.75rem]">
              <span className="text-accent font-[family-name:var(--font-mono)]">{exp.company}</span>
              <span className="text-[#3A3A3A]">·</span>
              <span className="text-[#6B6B6B] font-[family-name:var(--font-mono)]">{exp.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="font-[family-name:var(--font-mono)] text-[0.68rem] text-[#6B6B6B] whitespace-nowrap">
              {exp.period}
            </span>
            <ChevronDown
              size={15}
              className="text-[#555] transition-transform duration-300"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </button>

        {/* Collapsible body */}
        <div
          className="overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: open ? 600 : 0 }}
        >
          <div className="px-7 pb-7 pt-1">
            <ul className="flex flex-col gap-3 list-none">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 font-[family-name:var(--font-mono)] text-[0.82rem] text-[#909090] leading-[1.7]">
                  <span className="text-accent shrink-0 mt-0.5 text-[0.75rem]">→</span>
                  <span>
                    {b.label && (
                      <strong className="text-[#C8C8C8] font-medium">{b.label}: </strong>
                    )}
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-24">
      <SectionLabel>Career</SectionLabel>
      <h2
        className="font-[family-name:var(--font-syne)] font-black tracking-[-0.03em] leading-[1.0] mb-16"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
      >
        Experience.
      </h2>
      <div className="flex flex-col gap-3">
        {experience.map((exp, i) => (
          <ExpCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
