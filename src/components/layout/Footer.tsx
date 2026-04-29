import { meta } from '../../data/resume';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-8 flex flex-wrap justify-between items-center gap-3 border-t border-[#1A1A1A]">
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-[#4A4A4A] tracking-[0.05em]">
        © 2026 {meta.name}. Crafted with care.
      </span>
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-accent/70">
        Lagos, Nigeria 🇳🇬
      </span>
    </footer>
  );
}
