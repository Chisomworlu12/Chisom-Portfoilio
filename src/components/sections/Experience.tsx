import ExpandableSummary from '../ui/ExpandableSummary';
import Section from '../ui/Section';
import { experience } from '@/content';

export default function Experience() {
  return (
    <Section id="experience" title={experience.title}>
      <ol className="list-none">
        {experience.jobs.map((exp) => (
          <li
            key={`${exp.company}-${exp.role}`}
            className="reveal grid grid-cols-1 gap-3 border-b border-line py-7 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr_auto] md:gap-10"
          >
            <div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink">{exp.company}</h3>
              <p className="text-[0.85rem] text-muted">{exp.role}</p>
            </div>
            <div className="order-last md:order-none">
              <ExpandableSummary
                text={exp.summary}
                showLabel={experience.showDetailsLabel}
                hideLabel={experience.hideDetailsLabel}
              />
            </div>
            <p className="whitespace-nowrap font-mono text-[0.8rem] text-muted md:text-right">{exp.period}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
