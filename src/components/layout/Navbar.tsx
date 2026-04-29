import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className=" fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 mx-20 md:px-16 py-4 backdrop-blur-lg bg-ink/85 border-b border-[#1A1A1A]">
      <a
        href="#hero"
        className="font-syne font-black text-[1.1rem] tracking-tight text-cream no-underline"
      >
        {meta.name.split(' ').map(w => w[0]).join('')}
        <span className="text-accent">.</span>
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[0.7rem] text-muted no-underline tracking-widest uppercase transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:worluchisom4real@gmail.com"
        className="hidden md:inline-flex items-center bg-accent text-ink px-5 py-2 rounded-md font-syne font-bold text-[0.78rem] no-underline transition-all duration-200 hover:bg-[#d4ff1a]"
      >
        Hire Me
      </a>

      {/* Mobile toggle */}
      <button
        className="flex md:hidden bg-transparent border-none text-cream cursor-pointer p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-ink border-b border-[#1A1A1A] flex flex-col px-6 py-6 gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.82rem] text-muted no-underline tracking-widest uppercase hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:worluchisom4real@gmail.com"
            className="inline-flex justify-center items-center bg-accent text-ink px-5 py-3 rounded-md font-syne font-bold text-[0.82rem] no-underline mt-1"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
