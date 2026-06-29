import { Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { meta } from '../../data/resume';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1A1A1A] bg-ink/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4 md:px-16">
        <a href="#hero" className="font-syne text-[1.1rem] font-black tracking-normal text-cream no-underline">
          {meta.name.split(' ').map((word) => word[0]).join('')}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden list-none items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.7rem] uppercase tracking-widest text-muted no-underline transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:worluchisom4real@gmail.com"
          className="hidden items-center gap-2 rounded-md bg-accent px-5 py-2 font-syne text-[0.78rem] font-bold text-ink no-underline transition-all duration-200 hover:bg-[#d4ff1a] md:inline-flex"
        >
          <Mail size={14} />
          Hire Me
        </a>

        <button
          className="flex cursor-pointer border-none bg-transparent p-1 text-cream md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1A1A1A] bg-ink px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.82rem] uppercase tracking-widest text-muted no-underline transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:worluchisom4real@gmail.com"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-syne text-[0.82rem] font-bold text-ink no-underline"
            >
              <Mail size={15} />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
