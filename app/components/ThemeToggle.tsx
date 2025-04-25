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
    <div className="flex items-center justify-center space-x-3 mb-6">
      {/* Sun Icon */}
      <Sun size={20} className="text-yellow-500" />

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none
                   bg-gray-300 dark:bg-zinc-600"
      >
        {/* Moving Knob */}
        <span
          className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>

      {/* Moon Icon */}
      <Moon size={20} className="text-blue-500" />
    </div>
  );
}
