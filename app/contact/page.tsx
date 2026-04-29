import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Asjad Rehman via email, LinkedIn, X, or GitHub.',
  alternates: { canonical: '/contact' },
};

const contacts = [
  {
    label: 'Email',
    sub: 'MuhammadAsjad.RehmanHashmi@gmail.com',
    href: 'mailto:MuhammadAsjad.RehmanHashmi@gmail.com',
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    sub: 'asjadrehman',
    href: 'https://www.linkedin.com/in/asjadrehman/',
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    sub: '@Arbab_e_wafa',
    href: 'https://x.com/Arbab_e_wafa',
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    sub: 'Shehanshah1',
    href: 'https://github.com/Shehanshah1',
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 leading-relaxed">

      {/* ─── Back ─────────────────────────────────────────────────── */}
      <nav className="fade-section">
        <Link
          href="/"
          className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 no-underline hover:no-underline"
        >
          <span>&larr;</span> Home
        </Link>
      </nav>

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div className="fade-section-delay-1 mt-8">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="mono-label opacity-60"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            open channels
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <div className="accent-line mt-3" />
      </div>

      {/* ─── Intro ────────────────────────────────────────────────── */}
      <div className="fade-section-delay-2 mt-8 space-y-3">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          Whether it&rsquo;s a project, a question, or a conversation worth having&mdash;I&rsquo;m open to connecting.
        </p>
        <p className="text-sm text-gray-500 dark:text-zinc-500">
          Email is preferred for substantive exchanges. Social channels work for shorter threads.
        </p>
      </div>

      <div className="section-divider fade-section-delay-2" />

      {/* ─── Contact Grid ─────────────────────────────────────────── */}
      <div className="fade-section-delay-3">
        <div className="section-header">
          <span
            className="mono-label"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Channels
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="intel-card flex items-center gap-4 p-4 group no-underline hover:no-underline"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-dim)] text-gray-500 dark:text-zinc-400 group-hover:text-[var(--accent)] group-hover:border-[var(--border-mid)] transition-colors flex-shrink-0">
                {c.icon}
              </div>
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent)] transition-colors block">
                  {c.label}
                </span>
                <p
                  className="text-xs text-gray-500 dark:text-zinc-500 truncate mt-0.5"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {c.sub}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
