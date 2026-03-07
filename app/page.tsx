'use client';

import { NameTransition } from './components/NameTransition';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 leading-relaxed">
      {/* ─── Name ─────────────────────────────────────────────── */}
      <div className="fade-section">
        <NameTransition />
        <p className="mt-3 text-sm tracking-widest uppercase text-gray-400 dark:text-zinc-500 font-medium">
          Builder &middot; Leader &middot; Scholar
        </p>
      </div>

      {/* ─── Navigation ──────────────────────────────────────── */}
      <nav className="fade-section-delay-1 mt-8 flex flex-wrap gap-4 text-sm font-medium">
        <Link href="/about" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors">
          About
        </Link>
        <Link href="/blog" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors">
          Essays
        </Link>
        <Link href="/contact" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors">
          Contact
        </Link>
      </nav>

      {/* ─── Divider ─────────────────────────────────────────── */}
      <div className="section-divider fade-section-delay-1" />

      {/* ─── Intro ───────────────────────────────────────────── */}
      <div className="fade-section-delay-2 space-y-4 text-justify">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          I work at the intersection of technology, leadership, and governance. My focus is on building and managing systems&mdash;technical, organizational, and institutional&mdash;that operate reliably under pressure.
        </p>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          I serve as Vice President and Imam at the Islamic Center of Hattiesburg and have led the Muslim Student Association at the University of Southern Mississippi as President across two terms. Professionally, I oversee operations and client success at InfinixLeverage and as Complex Manager for Union Department at USM.
        </p>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          My background is in computer science and information security, with ongoing training in cybersecurity and risk management. Across all roles, I bring a disciplined, values-driven approach to execution, accountability, and long-term sustainability.
        </p>
      </div>

      {/* ─── Divider ─────────────────────────────────────────── */}
      <div className="section-divider fade-section-delay-2" />

      {/* ─── Writing ─────────────────────────────────────────── */}
      <div className="fade-section-delay-3">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold tracking-tight">Writing</h2>
          <div className="accent-line" />
        </div>
        <div className="space-y-3">
          <Link
            href="/blog/failure-of-liberal-world-order"
            className="hover-card block rounded-lg p-4 -mx-4 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">
                  Failure of the Liberal World Order
                </span>
                <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1">
                  On the structural contradictions of the post-Cold War consensus
                </p>
              </div>
              <span className="text-gray-300 dark:text-zinc-600 mt-1 shrink-0">&rarr;</span>
            </div>
          </Link>
          <Link
            href="/blog/art-and-dissent"
            className="hover-card block rounded-lg p-4 -mx-4 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">
                  Art and Dissent
                </span>
                <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1">
                  How art reflects American politics and decisions
                </p>
              </div>
              <span className="text-gray-300 dark:text-zinc-600 mt-1 shrink-0">&rarr;</span>
            </div>
          </Link>
        </div>
      </div>

      {/* ─── Divider ─────────────────────────────────────────── */}
      <div className="section-divider fade-section-delay-3" />

      {/* ─── Code Projects ───────────────────────────────────── */}
      <div className="fade-section-delay-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
          <div className="accent-line" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="https://github.com/Shehanshah1/MadinaEnterprises"
            className="hover-card block rounded-lg p-4 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">
              Madina Enterprises
            </span>
            <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1">
              Full-stack business management system
            </p>
            <span className="tag mt-2">Full-Stack</span>
          </a>
          <a
            href="https://github.com/Shehanshah1/CryptoPals-Challenge-App"
            className="hover-card block rounded-lg p-4 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">
              CryptoPals Challenge Suite
            </span>
            <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1">
              Cryptography challenges and implementations
            </p>
            <span className="tag mt-2">Security</span>
          </a>
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/Shehanshah1"
            className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on GitHub <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
