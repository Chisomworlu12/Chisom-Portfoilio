'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

interface ExpandableSummaryProps {
  text: string;
  showLabel: string;
  hideLabel: string;
}

/** On mobile the text is collapsed behind a toggle button; from md up it is always shown. */
export default function ExpandableSummary({ text, showLabel, hideLabel }: ExpandableSummaryProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 font-mono text-[0.75rem] text-accent md:hidden"
      >
        {open ? hideLabel : showLabel}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* grid-rows 0fr → 1fr animates the height smoothly */}
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:grid-rows-[1fr] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[680px] pt-3 text-[0.93rem] leading-[1.65] text-body md:pt-0">{text}</p>
        </div>
      </div>
    </div>
  );
}
