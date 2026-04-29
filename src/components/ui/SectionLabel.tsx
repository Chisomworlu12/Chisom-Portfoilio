export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-accent" />
      <p className="font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.16em] uppercase text-accent">
        {children}
      </p>
    </div>
  );
}
