'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    if (startDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2.5">
      <Sun size={14} className="text-[var(--accent)] opacity-70" />
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="relative inline-flex items-center h-5 w-9 rounded-full transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:ring-offset-1 bg-gray-200 dark:bg-zinc-700"
      >
        <span
          className={`inline-block w-3.5 h-3.5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${
            isDark ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </button>
      <Moon size={14} className="text-[var(--accent-secondary)] opacity-70" />
    </div>
  );
}
