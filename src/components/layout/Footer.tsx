import { meta } from '../../data/resume';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-3 border-t border-[#1A1A1A] px-6 py-8 md:px-16">
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.05em] text-[#4A4A4A]">
        Copyright 2026 {meta.name}. Crafted with care.
      </span>
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-accent/70">
        Lagos, Nigeria
      </span>
    </footer>
  );
}
