import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asjadrehman.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Asjad Rehman',
    template: '%s | Asjad Rehman'
  },
  description: 'Political Science + Computer Science @ USM | Essays, Code, and Revolutionary Thought.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
        <main className="max-w-3xl mx-auto w-full px-6 space-y-6">
            <ViewTransition name="page-transition">{children}</ViewTransition>
          </main>
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
    { name: 'youtube', url: 'https://www.youtube.com/@MuhammadAsjadRehmanHashmi' }, 
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-asjad-rehman-hashmi-b6606629a' },
    { name: 'github', url: 'https://github.com/Shehanshah1' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
