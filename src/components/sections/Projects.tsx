import { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import ProjectCard from '../ui/ProjectCard';
import FadeUp from '../ui/FadeUp';
import { projects } from '../../data/resume';
import type { ProjectTag } from '../../types';

const filters: { label: string; value: ProjectTag }[] = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectTag>('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="projects" className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-24">
      <SectionLabel>Selected work</SectionLabel>
      <h2
        className="font-[family-name:var(--font-syne)] font-black tracking-[-0.03em] leading-[1.0] mb-12"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
      >
        Projects.
      </h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full border cursor-pointer transition-all duration-200 ${
              active === f.value
                ? 'bg-accent border-accent text-[#0D0D0D] font-semibold'
                : 'border-[#252525] text-[#6B6B6B] bg-transparent hover:border-accent/30 hover:text-[#C0C0C0]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <FadeUp key={p.name} delay={i * 60}>
            <ProjectCard project={p} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
