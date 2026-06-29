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
    <section id="about" className="mx-auto w-full max-w-[1100px] px-6 py-24 md:px-16">
      <SectionLabel>Who I am</SectionLabel>
      <h2
        className="mb-16 font-[family-name:var(--font-syne)] font-black leading-[1.0] tracking-normal"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
      >
        About me.
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FadeUp className="flex flex-col gap-5">
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] leading-[1.85] text-[#A0A0A0]">
            I'm a <strong className="font-medium text-[#F5F0E8]">software engineer</strong> based in Lagos, Nigeria.
            I build web products that solve practical problems, from verification platforms to AI-powered dashboards.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] leading-[1.85] text-[#A0A0A0]">
            At <strong className="font-medium text-[#F5F0E8]">vworka</strong>, I lead product and frontend architecture,
            turning feedback into clearer flows, faster iteration, and a more trustworthy verification experience.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[0.88rem] leading-[1.85] text-[#A0A0A0]">
            I care about sharp interfaces, maintainable systems, performance, and product decisions that make sense
            beyond the code editor.
          </p>
        </FadeUp>

        <FadeUp delay={150} className="grid gap-3">
          {skillCategories.map(({ label, key }) => (
            <div key={key} className="rounded-lg border border-[#1E1E1E] bg-[#0F0F0F] p-5">
              <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-accent">
                {label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills[key].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-accent/10 bg-accent/5 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.68rem] text-[#B0B0B0]"
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
