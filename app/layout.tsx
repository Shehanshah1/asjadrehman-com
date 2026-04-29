import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import CursorGlow from '@/app/components/CursorGlow';
import IslamicPattern from '@/app/components/IslamicPattern';
import ThemeToggle from '@/app/components/ThemeToggle';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asjadrehman.com'),
  alternates: { canonical: '/' },
  title: {
    default: 'Asjad Rehman',
    template: '%s | Asjad Rehman',
  },
  description:
    'SWE · Political Science · Defense Tech | Essays, Code, and Geopolitical Thought.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 antialiased tracking-tight">
        <IslamicPattern />
        <CursorGlow />

        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-6 p-6 sm:p-8">
          {/* ─── header ─────────────────────────────────────────────── */}
          <header className="w-full max-w-3xl md:max-w-[90ch] mx-auto px-2 sm:px-6 mb-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--accent)] opacity-80 hover:opacity-100 transition-opacity no-underline hover:no-underline hover:text-[var(--accent)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                AR //
              </Link>
              <div className="flex items-center gap-6">
                <nav className="hidden sm:flex items-center gap-5 text-xs tracking-wide">
                  <Link
                    href="/about"
                    className="text-gray-500 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors no-underline hover:no-underline"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-500 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors no-underline hover:no-underline"
                  >
                    Essays
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-500 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors no-underline hover:no-underline"
                  >
                    Contact
                  </Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* ─── main ───────────────────────────────────────────────── */}
          <main className="w-full max-w-3xl md:max-w-[90ch] mx-auto space-y-6 px-2 sm:px-6 flex-1">
            <ViewTransition name="page-transition">
              {children}
            </ViewTransition>
          </main>

          {/* ─── footer ─────────────────────────────────────────────── */}
          <Footer />

          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'X', url: 'https://x.com/Arbab_e_wafa' },
    { name: 'YouTube', url: 'https://www.youtube.com/@MuhammadAsjadRehmanHashmi' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asjadrehman/' },
    { name: 'GitHub', url: 'https://github.com/Shehanshah1' },
  ];

  return (
    <footer className="mt-20 pb-4">
      <div className="max-w-3xl mx-auto px-4">
        <div className="section-divider" style={{ margin: '0 0 1.25rem 0' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-gray-400 dark:text-zinc-600"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}
          >
            &copy; {new Date().getFullYear()} Asjad Rehman
          </p>
          <div className="flex items-center gap-5 text-xs tracking-wide">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-zinc-500 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors duration-200 no-underline hover:no-underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
