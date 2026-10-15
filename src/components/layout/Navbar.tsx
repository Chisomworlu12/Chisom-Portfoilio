'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import GitHubIcon from '../ui/GitHubIcon';
import ThemeToggle from '../ui/ThemeToggle';
import { contact, site } from '@/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-[1.1rem] font-semibold text-ink no-underline">
          {site.name.split(' ')[0]}
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <ul className="flex list-none items-center gap-6">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.85rem] text-muted no-underline transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink transition-opacity hover:opacity-70"
          >
            <GitHubIcon />
          </a>
          <a
            href={`/${site.cvFile}`}
            download
            className="rounded border border-ink px-3 py-1 font-display text-[0.78rem] font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-paper"
          >
            {site.resumeButton}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex cursor-pointer border-none bg-transparent p-1 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Fills left to right as the page scrolls */}
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-accent" />

      {open && (
        <div className="border-t border-line bg-paper px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.95rem] text-body no-underline hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-1">
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink">
                <GitHubIcon />
              </a>
              <a
                href={`/${site.cvFile}`}
                download
                className="rounded border border-ink px-3 py-1 font-display text-[0.8rem] font-semibold text-ink no-underline"
              >
                {site.resumeButton}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
