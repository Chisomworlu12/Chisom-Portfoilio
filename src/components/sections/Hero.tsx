import { Fragment } from 'react';
import TypedWord from '../ui/TypedWord';
import { hero } from '@/content';

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1240px] px-6 pb-20 pt-20 md:px-10 md:pb-24 md:pt-28">
      <p className="mb-5 font-mono text-[0.8rem] text-accent md:text-[0.85rem]">{hero.eyebrow}</p>
      <h1 className="mb-5 max-w-[1100px] font-display text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[3rem] md:text-[3.6rem]">
        {hero.headline.split(' ').map((word, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="word-in" style={{ animationDelay: `${i * 90}ms` }}>
              {hero.typedWord && word.startsWith(hero.typedWord) ? (
                <TypedWord word={hero.typedWord} suffix={word.slice(hero.typedWord.length)} />
              ) : (
                word
              )}
            </span>
          </Fragment>
        ))}
      </h1>
      <p className="mb-10 max-w-[760px] text-[1rem] leading-relaxed text-muted md:text-[1.05rem]">{hero.tagline}</p>
      <div className="rounded-sm border border-line bg-paper px-4 py-3.5 text-[0.85rem]">
        <span aria-hidden="true">🔨 </span>
        <span className="font-mono font-medium text-ink">{hero.currentlyBuildingLabel}</span>{' '}
        <span className="font-medium text-accent">{hero.currentlyBuilding}</span>
      </div>
    </section>
  );
}
