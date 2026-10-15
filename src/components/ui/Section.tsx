interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
        <h2 className="reveal mb-10 font-display text-[1.75rem] font-semibold tracking-tight text-ink md:mb-14 md:text-[2rem]">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
