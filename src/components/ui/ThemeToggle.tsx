'use client';

import { Moon, Sun } from 'lucide-react';
import { THEME_STORAGE_KEY } from '@/lib/theme';

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function currentTheme() {
  const chosen = document.documentElement.dataset.theme;
  return chosen === 'light' || chosen === 'dark' ? chosen : systemTheme();
}

/**
 * Light/dark switch. Visitors get their computer's theme by default; clicking flips it.
 * Flipping back to what the computer uses clears the override, so it follows the system again.
 */
function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const root = document.documentElement;
  try {
    if (next === systemTheme()) {
      delete root.dataset.theme;
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      root.dataset.theme = next;
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  } catch {
    // Storage blocked (private mode etc.) — still apply the choice for this visit.
    root.dataset.theme = next;
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className="flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-1 text-ink transition-opacity hover:opacity-70"
    >
      {/* CSS shows the icon for the active theme, so it is right before React even loads */}
      <Sun size={18} className="theme-icon-light" />
      <Moon size={18} className="theme-icon-dark" />
    </button>
  );
}
