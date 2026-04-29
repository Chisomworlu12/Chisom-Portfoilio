import FadeUp from '../ui/FadeUp';
import SectionLabel from '../ui/SectionLabel';
import { skills } from '../../data/resume';

const skillCategories = [
  { label: 'Frontend', key: 'frontend' as const },
  { label: 'Backend & Databases', key: 'backend' as const },
  { label: 'DevOps & Tools', key: 'devops' as const },
];

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-24">
      <SectionLabel>Who I am</SectionLabel>
      <h2
        className="font-[family-name:var(--font-syne)] font-black tracking-[-0.03em] leading-[1.0] mb-16"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
      >
        About me.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Bio */}
        <FadeUp className="flex flex-col gap-5">
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] text-[#A0A0A0] leading-[1.85]">
            I'm a <strong className="text-[#F5F0E8] font-medium">software engineer</strong> based in Lagos, Nigeria.
            I build web products that solve real problems — from verification platforms to AI-powered dashboards.
            I care deeply about performance, iterative thinking, and shipping fast.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] text-[#A0A0A0] leading-[1.85]">
            At <strong className="text-[#F5F0E8] font-medium">vworka</strong>, I've led three major architectural
            redefinitions, each time learning from user feedback and aligning the product closer to market needs.
            That experience taught me how to move fast without breaking things (too badly).
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] text-[#A0A0A0] leading-[1.85]">
            Outside of work, I explore frontend DX improvements and stay deep in the Next.js & TypeScript
            ecosystem. I also build backend systems with FastAPI and Django across the full stack.
          </p>
        </FadeUp>

        {/* Skills */}
        <FadeUp delay={150} className="flex flex-col gap-3">
          {skillCategories.map(({ label, key }) => (
            <div key={key} className="border border-[#1E1E1E] rounded-xl p-5 bg-[#0F0F0F]">
              <p className="font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.14em] uppercase text-accent mb-3">
                {label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills[key].map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-mono)] text-[0.68rem] px-2.5 py-1 rounded bg-accent/5 border border-accent/10 text-[#B0B0B0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
