import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { ThemeProvider } from 'next-themes';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asjadrehman.com'),
  title: {
    default: 'Asjad Rehman',
    template: '%s | Asjad Rehman'
  },
  description: 'Political Science + Computer Science @ USM | Essays, Code, and Revolutionary Thought.',
  openGraph: {
    title: 'Asjad Rehman',
    images: [{ url: 'https://asjadrehman.com/opengraph-image.png' }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="antialiased tracking-tight bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-200 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system">
          {/* ──────────── Header ──────────── */}
          <header className="fixed top-0 left-0 w-full bg-white/60 dark:bg-zinc-950/60 backdrop-blur z-20">
            <nav className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="/" className="text-xl font-semibold">
                AsjadRehman.com
              </a>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <a href="/blog" className="hover:underline">
                  Essays
                </a>
                <a href="/about" className="hover:underline">
                  About
                </a>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </div>
            </nav>
          </header>

          {/* ──────────── Reading Progress Bar ──────────── */}
          <ProgressBar />

          {/* ──────────── Main Content ──────────── */}
          <main className="pt-24 max-w-3xl mx-auto w-full px-6 space-y-6">
            <ViewTransition name="page-transition">{children}</ViewTransition>
          </main>

          {/* ──────────── Footer ──────────── */}
          <footer className="mt-12 text-center">
            <nav className="flex justify-center flex-wrap gap-4 tracking-tight p-6">
              <a href="https://x.com/Arbab_e_wafa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                X
              </a>
              <a href="https://www.youtube.com/@MuhammadAsjadRehmanHashmi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                YouTube
              </a>
              <a href="https://www.linkedin.com/in/muhammad-asjad-rehman-hashmi-b6606629a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Shehanshah1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                GitHub
              </a>
            </nav>
          </footer>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
