'use client';

import { useEffect, useState } from 'react';

const TYPE_MS = 130;
const DELETE_MS = 70;
const HOLD_FULL_MS = 2200;
const HOLD_EMPTY_MS = 450;
const START_DELAY_MS = 2500; // let the headline finish animating in first

/** Types `word` out letter by letter, deletes it, and repeats forever. `suffix` (e.g. ".") follows the cursor. */
export default function TypedWord({ word, suffix = '' }: { word: string; suffix?: string }) {
  // Start fully typed so the server HTML (and no-JS visitors) show the whole word.
  const [count, setCount] = useState(word.length);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setTimeout(() => setStarted(true), START_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    let delay: number;
    if (!deleting && count === word.length) delay = HOLD_FULL_MS;
    else if (deleting && count === 0) delay = HOLD_EMPTY_MS;
    else delay = deleting ? DELETE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (!deleting && count === word.length) setDeleting(true);
      else if (deleting && count === 0) setDeleting(false);
      else setCount((c) => c + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [started, count, deleting, word.length]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="sr-only">{word + suffix}</span>
      {/* Invisible copy reserves the full width so the line never shifts */}
      <span aria-hidden="true" className="invisible">
        {word}
        <span className="caret" />
        {suffix}
      </span>
      <span aria-hidden="true" className="absolute inset-y-0 left-0 whitespace-nowrap">
        {word.slice(0, count)}
        <span className="caret" />
        {suffix}
      </span>
    </span>
  );
}
