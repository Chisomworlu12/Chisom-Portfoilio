import { ExternalLink, SquareArrowOutUpRight } from 'lucide-react';
import type { Project } from '../../types';

const tagStyle: Record<string, { bg: string; text: string }> = {
  fullstack: { bg: 'rgba(99,102,241,0.1)', text: '#818cf8' },
  frontend: { bg: 'rgba(34,197,94,0.08)', text: '#4ade80' },
  backend: { bg: 'rgba(249,115,22,0.08)', text: '#fb923c' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const tag = tagStyle[project.tag];

  return (
    <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#1E1E1E] bg-[#0F0F0F] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/20">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {project.featured && !project.wip && (
        <span className="absolute right-4 top-4 rounded-sm border border-accent/25 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.1em] text-accent">
          Featured
        </span>
      )}
      {project.wip && (
        <span className="absolute right-4 top-4 rounded-sm border border-[#f59e0b]/30 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.1em] text-[#f59e0b]">
          In Progress
        </span>
      )}

      <h3 className="mb-3 pr-24 font-[family-name:var(--font-syne)] text-[1rem] font-bold leading-snug tracking-normal text-[#F5F0E8]">
        {project.name}
      </h3>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.08em]"
          style={{ background: tag.bg, color: tag.text }}
        >
          {project.tag}
        </span>
      </div>

      <p className="mb-4 font-[family-name:var(--font-mono)] text-[0.65rem] leading-relaxed tracking-[0.03em] text-accent/80">
        {project.stack}
      </p>

      <p className="mb-5 flex-1 font-[family-name:var(--font-mono)] text-[0.8rem] leading-[1.7] text-[#909090]">
        {project.desc}
      </p>

      <div className="mt-auto flex items-center gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.05em] text-accent no-underline transition-opacity hover:opacity-70"
          >
            Live
            <ExternalLink size={13} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.05em] text-[#7A7A7A] no-underline transition-colors hover:text-[#F5F0E8]"
          >
            <SquareArrowOutUpRight size={13} />
            GitHub
          </a>
        )}
        {!project.url && !project.github && (
          <span className="font-[family-name:var(--font-mono)] text-[0.68rem] text-[#444]">Private repo</span>
        )}
      </div>
    </article>
  );
}
