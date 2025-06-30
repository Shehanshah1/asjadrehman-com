'use client';

import Link from 'next/link';
import { NameTransition } from '../components/NameTransition';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 space-y-6 text-justify leading-relaxed">
      {/* ← Home Button */}
      <nav className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Home
        </Link>
      </nav>

      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="text-lg">
        I’m currently pursuing a dual degree in Political Science and Computer Science at the University of Southern Mississippi, with academic interests grounded in revolutionary politics, conflict theory, political Islam, and the philosophical roots of power.
      </p>

      <p className="text-lg">
        My academic journey is still unfolding — but I’m particularly drawn to questions around legitimacy, resistance, and postcolonial state formation. I’ve also begun exploring cyber ethics as a modern frontier in political theory.
      </p>

      <p className="text-lg">
        Beyond the classroom, I’ve worked on full-stack software projects, led student organizations, and contributed to religious and academic communities. I’m building this space to archive my ideas, writings, and the questions I’m not done asking yet.
      </p>

      <p className="text-lg text-gray-500 dark:text-zinc-400">
        This site is a living notebook — not a resume.
      </p>

      <p className="text-lg text-gray-500 dark:text-zinc-400">
        For my resume, click below:
      </p>
      <a
  href="/RehmanHashmi_MuhammadAsjad_CV.pdf"
  download
  className="inline-block mt-2 px-5 py-2 border border-gray-600 dark:border-zinc-400 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
>
  Download Resume
</a>


    </section>
  );

}