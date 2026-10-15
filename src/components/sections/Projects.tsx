import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import { projects } from '@/content';

function displayUrl(href: string) {
  return href.replace(/^https?:\/\//, '').replace(/\.git$/, '').replace(/\/$/, '');
}

function ProjectLink({ href, label }: { href: string; label?: string }) {
  return (
    <a
      aria-label={label ? `${label}: ${displayUrl(href)}` : undefined}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 break-all font-mono text-[0.8rem] text-ink transition-colors hover:text-accent"
    >
      {label && <span className="mr-1 inline-block text-[0.7rem] uppercase tracking-wider text-muted">{label}</span>}
      <span className="underline decoration-muted/60 underline-offset-4 group-hover:decoration-accent">{displayUrl(href)}</span>
      <ArrowUpRight size={14} className="shrink-0" />
    </a>
  );
}

export default function Projects() {
  return (
    <Section id="work" title={projects.title}>
      <ol className="list-none">
        {projects.projects.map((project) => (
          <li
            key={project.name}
            className="reveal grid grid-cols-1 gap-3 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr_auto] lg:gap-10"
          >
            <p className="pt-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-accent">
              {project.category}
              {project.featured && <span className="text-muted"> · {projects.featuredLabel}</span>}
            </p>

            <div className="max-w-[640px]">
              <h3 className="mb-2 font-display text-[1.2rem] font-semibold text-ink">{project.name}</h3>
              <p className="mb-4 text-[0.93rem] leading-[1.65] text-muted">{project.description}</p>
              <ul className="flex list-none flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="bg-chip px-2 py-0.5 font-mono text-[0.7rem] text-body">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 md:col-start-2 lg:col-start-auto lg:items-end">
              {project.liveUrl && <ProjectLink href={project.liveUrl} />}
              {project.githubUrl && <ProjectLink href={project.githubUrl} />}
              {project.repos?.map((repo) => (
                <ProjectLink key={repo.url} href={repo.url} label={repo.label} />
              ))}
              {!project.liveUrl && !project.githubUrl && !project.repos?.length && (
                <span className="font-mono text-[0.8rem] text-muted">{projects.privateRepoLabel}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
