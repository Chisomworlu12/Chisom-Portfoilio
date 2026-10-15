import { about } from '@/content';

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_380px] lg:gap-20">
        <div className="reveal">
          <h2 className="mb-5 font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2rem]">
            {about.title}
          </h2>
          <div className="flex flex-col gap-4 text-[0.98rem] leading-[1.7] text-body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mb-3 mt-8 font-mono text-[0.72rem] uppercase tracking-wider text-muted">{about.coreStackLabel}</p>
          <ul className="flex list-none flex-wrap gap-2">
            {about.coreStack.map((tag) => (
              <li key={tag} className="border border-line bg-surface px-2.5 py-1 font-mono text-[0.75rem] text-ink">
                {tag}
              </li>
            ))}
          </ul>

          <details className="group mt-6">
            <summary className="cursor-pointer font-mono text-[0.75rem] text-accent">{about.allToolsLabel}</summary>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{about.allTools.join(' · ')}</p>
          </details>
        </div>

        <div className="reveal">
          <dl className="flex flex-col gap-6 border border-line bg-surface/60 p-6 md:p-7">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="mb-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted">{fact.label}</dt>
                <dd className="font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
