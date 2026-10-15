import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import { writing } from '@/content';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export default function Writing() {
  const articles = [...writing.articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section id="writing" title={writing.title}>
      <ol className="list-none">
        {articles.map((article) => (
          <li key={article.url + article.title} className="reveal border-b border-line last:border-b-0">
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 no-underline md:grid-cols-[110px_1fr_auto] md:gap-x-10"
            >
              <time dateTime={article.date} className="col-span-2 font-mono text-[0.8rem] text-muted md:col-span-1">
                {formatDate(article.date)}
              </time>
              <h3 className="font-display text-[1.05rem] font-semibold text-ink transition-colors group-hover:text-accent">
                {article.title}
              </h3>
              <p className="whitespace-nowrap font-mono text-[0.75rem] text-muted">{article.readTime} min read</p>
            </a>
          </li>
        ))}
      </ol>
      <a
        href={writing.mediumProfile}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1 font-mono text-[0.8rem] text-ink underline decoration-muted/60 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      >
        {writing.allArticlesLink}
        <ArrowUpRight size={14} />
      </a>
    </Section>
  );
}
