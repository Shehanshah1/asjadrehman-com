import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Political Science and Computer Science at USM — writing on power, systems, and the questions I have not finished wrestling with.',
  alternates: { canonical: '/about' },
};

const focusAreas = [
  { label: 'Revolutionary Politics', desc: 'Legitimacy, resistance, and postcolonial state formation' },
  { label: 'Cyber Ethics', desc: 'Digital sovereignty, surveillance, and state power' },
  { label: 'Political Islam', desc: 'Faith as framework for justice in the secular academy' },
  { label: 'Conflict Theory', desc: 'Authority, challenge, and the structure of violence' },
  { label: 'Systems Security', desc: 'Cryptography, risk management, and adversarial design' },
  { label: 'IR Theory', desc: 'International order, BRICS alternatives, multipolar futures' },
];

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 space-y-6 leading-relaxed">

      {/* ─── Back ────────────────────────────────────────────────── */}
      <nav className="fade-section">
        <Link
          href="/"
          className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 no-underline hover:no-underline"
        >
          <span>&larr;</span> Home
        </Link>
      </nav>

      {/* ─── Header ──────────────────────────────────────────────── */}
      <div className="fade-section-delay-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="status-dot" />
          <span
            className="mono-label opacity-60"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            personnel · profile
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <div className="accent-line mt-3" />
      </div>

      {/* ─── Bio ─────────────────────────────────────────────────── */}
      <div className="fade-section-delay-2 space-y-5 text-justify">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          I study Political Science and Computer Science at the University of Southern Mississippi&mdash;two disciplines that converge on the same questions: who holds power, how systems are built and dismantled, and what it means to act with principle under pressure.
        </p>

        <p className="text-base text-gray-600 dark:text-zinc-400">
          My intellectual life is anchored in revolutionary politics, conflict theory, and political Islam. I&rsquo;m drawn to legitimacy and resistance&mdash;how postcolonial states take shape, how authority is challenged, and how faith traditions produce frameworks for justice that the secular academy often overlooks. More recently I&rsquo;ve been tracing the intersection of cyber ethics and political theory: how digital sovereignty and surveillance redraw the boundaries of the state and the reach of force.
        </p>

        <p className="text-base text-gray-600 dark:text-zinc-400">
          On the technical side, I build full-stack software and think about systems at the architectural level. I&rsquo;ve led student organizations, served religious and academic communities, and spent time in spaces where ideas are tested not just in theory but in practice. The best work happens at the edges&mdash;where disciplines collide and assumptions are forced to defend themselves.
        </p>

        <p className="text-base text-gray-600 dark:text-zinc-400">
          This site is where I think out loud. It houses essays, projects, and the questions I haven&rsquo;t finished wrestling with. If something here sparks a thought, I&rsquo;d welcome the conversation.
        </p>
      </div>

      <div className="section-divider fade-section-delay-2" />

      {/* ─── Focus Areas ─────────────────────────────────────────── */}
      <div className="fade-section-delay-3">
        <div className="section-header">
          <span
            className="mono-label"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Focus Areas
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {focusAreas.map((area) => (
            <div key={area.label} className="intel-card p-3.5">
              <span
                className="mono-label block mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {area.label}
              </span>
              <p className="text-xs text-gray-500 dark:text-zinc-500 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider fade-section-delay-3" />

      {/* ─── Philosophy ──────────────────────────────────────────── */}
      <div className="fade-section-delay-4 section-accent">
        <p className="text-base italic text-gray-500 dark:text-zinc-500">
          This site is a living notebook&mdash;not a resume. It reflects how I actually think, not how I want to be perceived.
        </p>
      </div>

      {/* ─── Resumes ─────────────────────────────────────────────── */}
      <div className="fade-section-delay-4">
        <div className="section-header">
          <span
            className="mono-label"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Credentials
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/MuhammadAsjad_RehmanHashmi_swe.pdf"
            download
            className="intel-card inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 dark:text-zinc-300 no-underline hover:no-underline group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--accent)] transition-colors" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span className="group-hover:text-[var(--accent)] transition-colors">SWE Resume</span>
          </a>
          <a
            href="/MuhammadAsjad_RehmanHashmi_CV_cy.pdf"
            download
            className="intel-card inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 dark:text-zinc-300 no-underline hover:no-underline group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[var(--accent)] transition-colors" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span className="group-hover:text-[var(--accent)] transition-colors">Cybersecurity Resume</span>
          </a>
        </div>
      </div>

    </section>
  );
}
