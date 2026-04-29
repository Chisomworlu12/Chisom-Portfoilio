import type { Project } from '../../types';

const tagStyle: Record<string, { bg: string; text: string }> = {
  fullstack: { bg: 'rgba(99,102,241,0.1)',  text: '#818cf8' },
  frontend:  { bg: 'rgba(34,197,94,0.08)',  text: '#4ade80' },
  backend:   { bg: 'rgba(249,115,22,0.08)', text: '#fb923c' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const tag = tagStyle[project.tag];

  return (
    <div className="relative flex flex-col h-full border border-[#1E1E1E] rounded-xl bg-[#0F0F0F] p-6 overflow-hidden transition-all duration-250 group hover:border-accent/18 hover:-translate-y-1">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badges */}
      {project.featured && !project.wip && (
        <span className="absolute top-4 right-4 font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.1em] uppercase text-accent border border-accent/25 px-2 py-0.5 rounded-sm">
          Featured
        </span>
      )}
      {project.wip && (
        <span className="absolute top-4 right-4 font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.1em] uppercase text-[#f59e0b] border border-[#f59e0b]/30 px-2 py-0.5 rounded-sm">
          In Progress
        </span>
      )}

      {/* Title */}
      <h3 className="font-[family-name:var(--font-syne)] font-bold text-[1rem] text-[#F5F0E8] tracking-[-0.01em] mb-3 pr-24 leading-snug">
        {project.name}
      </h3>

      {/* Tag + stack row */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className="font-[family-name:var(--font-mono)] text-[0.58rem] px-2 py-0.5 rounded tracking-[0.08em] uppercase"
          style={{ background: tag.bg, color: tag.text }}
        >
          {project.tag}
        </span>
      </div>

      {/* Stack */}
      <p className="font-[family-name:var(--font-mono)] text-[0.65rem] text-accent/80 tracking-[0.03em] mb-4 leading-relaxed">
        {project.stack}
      </p>

      {/* Description */}
      <p className="font-[family-name:var(--font-mono)] text-[0.8rem] text-[#909090] leading-[1.7] flex-1 mb-5">
        {project.desc}
      </p>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] text-accent no-underline tracking-[0.05em] hover:opacity-60 transition-opacity"
          >
            Live ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] text-[#6B6B6B] no-underline tracking-[0.05em] hover:text-[#F5F0E8] transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {!project.url && !project.github && (
          <span className="font-[family-name:var(--font-mono)] text-[0.68rem] text-[#444]">
            Private repo
          </span>
        )}
      </div>
    </div>
  );
}
