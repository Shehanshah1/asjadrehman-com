import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import CursorGlow from '@/app/components/CursorGlow';
import ThemeToggle from '@/app/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asjadrehman.com'),
  alternates: { canonical: '/' },
  title: {
    default: 'Asjad Rehman',
    template: '%s | Asjad Rehman',
  },
  description:
    'Political Science + Computer Science @ USM | Essays, Code, and Revolutionary Thought.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 antialiased tracking-tight">
        <CursorGlow />

        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-6 sm:p-8">
          {/* ─── header with toggle ─────────────────────────────────────────────── */}
          <header className="w-full max-w-3xl md:max-w-[90ch] mx-auto px-2 sm:px-6 mb-4 flex justify-end">
            <ThemeToggle />
          </header>

          {/* ─── main content w/ page transitions ─────────────────────────────── */}
          <main className="w-full max-w-3xl md:max-w-[90ch] mx-auto space-y-6 px-2 sm:px-6">
            <ViewTransition name="page-transition">
              {children}
            </ViewTransition>
          </main>

          {/* ─── footer ─────────────────────────────────────────────────────────── */}
          <Footer />

          {/* ─── analytics ──────────────────────────────────────────────────────── */}
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
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-asjad-rehman-hashmi-b6606629a' },
    { name: 'GitHub', url: 'https://github.com/Shehanshah1' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight text-sm">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
