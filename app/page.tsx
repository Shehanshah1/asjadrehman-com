'use client';

import { NameTransition } from './components/NameTransition';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-10 text-justify leading-relaxed">
      <NameTransition />
    
      <p className="mt-6 text-lg">
        I’m a student of political science and computer science with a growing interest in revolutionary theory, political Islam, and conflict studies. My work spans from building software to exploring ideas around state power, resistance, and identity — including emerging areas like cyber ethics.
      </p>

      <h2 className="text-xl font-semibold mt-10">📝 Writing</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>
          <Link href="/blog/failure-of-liberal-world-order" className="text-blue-500 hover:underline">
            Failure of the Liberal World Order
          </Link>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">💻 Code Projects</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>
          <a href="https://github.com/Shehanshah1/MadinaEnterprises" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Madina Enterprises Full-Stack System
          </a>
        </li>
        <li>
          <a href="https://github.com/Shehanshah1/CryptoPals-Challenge-App" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            CryptoPals Challenge Suite
          </a>
        </li>
        <li>
          <a href="https://github.com/Shehanshah1" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            See More on GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
