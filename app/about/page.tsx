'use client';

import Link from 'next/link';
import { NameTransition } from '../components/NameTransition';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-6 leading-relaxed">
      <nav className="fade-section">
        <Link href="/" className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1">
          <span>&larr;</span> Home
        </Link>
      </nav>

      <div className="fade-section-delay-1">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="accent-line mt-3" />
      </div>

      <div className="fade-section-delay-2 space-y-5 text-justify">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          I&rsquo;m currently pursuing a dual degree in Political Science and Computer Science at the University of Southern Mississippi, with academic interests grounded in revolutionary politics, conflict theory, political Islam, and the philosophical roots of power.
        </p>

        <p className="text-base text-gray-600 dark:text-zinc-400">
          My academic journey is still unfolding&mdash;but I&rsquo;m particularly drawn to questions around legitimacy, resistance, and postcolonial state formation. I&rsquo;ve also begun exploring cyber ethics as a modern frontier in political theory.
        </p>

        <p className="text-base text-gray-600 dark:text-zinc-400">
          Beyond the classroom, I&rsquo;ve worked on full-stack software projects, led student organizations, and contributed to religious and academic communities. I&rsquo;m building this space to archive my ideas, writings, and the questions I&rsquo;m not done asking yet.
        </p>
      </div>

      <div className="section-divider fade-section-delay-2" />

      <div className="fade-section-delay-3">
        <p className="text-base italic text-gray-500 dark:text-zinc-500">
          This site is a living notebook&mdash;not a resume.
        </p>
      </div>

      <div className="fade-section-delay-4">
        <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 mb-3">
          For my resumes:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/MuhammadAsjad_RehmanHashmi_CV_swe.pdf"
            download
            className="hover-card inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-zinc-300 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            SWE Resume
          </a>
          <a
            href="/MuhammadAsjad_RehmanHashmi_CV_cy.pdf"
            download
            className="hover-card inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-zinc-300 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Cybersecurity Resume
          </a>
        </div>
      </div>
    </section>
  );
}
