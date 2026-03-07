'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 leading-relaxed">
      <nav className="fade-section">
        <Link href="/" className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">
          <span>&larr;</span> Home
        </Link>
      </nav>

      <div className="fade-section-delay-1 mt-8">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <div className="accent-line mt-3" />
      </div>

      <div className="fade-section-delay-2 mt-8 space-y-4">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          Whether it&rsquo;s about a project, a question, or just a conversation worth having&mdash;I&rsquo;m always open to connecting.
        </p>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          The best way to reach me is through email or any of the platforms below.
        </p>
      </div>

      <div className="section-divider fade-section-delay-2" />

      <div className="fade-section-delay-3 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:MuhammadAsjad.RehmanHashmi@gmail.com"
            className="hover-card flex items-center gap-3 rounded-lg p-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 group-hover:text-[var(--accent-secondary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">Email</span>
              <p className="text-xs text-gray-500 dark:text-zinc-500">MuhammadAsjad.RehmanHashmi@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/asjadrehman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-card flex items-center gap-3 rounded-lg p-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 group-hover:text-[var(--accent-secondary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">LinkedIn</span>
              <p className="text-xs text-gray-500 dark:text-zinc-500">Connect professionally</p>
            </div>
          </a>
          <a
            href="https://x.com/Arbab_e_wafa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-card flex items-center gap-3 rounded-lg p-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 group-hover:text-[var(--accent-secondary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">X (Twitter)</span>
              <p className="text-xs text-gray-500 dark:text-zinc-500">@Arbab_e_wafa</p>
            </div>
          </a>
          <a
            href="https://github.com/Shehanshah1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-card flex items-center gap-3 rounded-lg p-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 group-hover:text-[var(--accent-secondary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">GitHub</span>
              <p className="text-xs text-gray-500 dark:text-zinc-500">View my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
