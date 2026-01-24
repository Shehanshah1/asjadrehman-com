'use client';

import { NameTransition } from './components/NameTransition';
import Link from 'next/link';


export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-justify leading-relaxed">
      <NameTransition />

      <p className="mt-6 text-lg">
        I work at the intersection of technology, leadership, and governance. My focus is on building and managing systems—technical, organizational, and institutional—that operate reliably under pressure.

I serve as Vice President and Imam at the Islamic Center of Hattiesburg and have led the Muslim Student Association at the University of Southern Mississippi as President across two terms. Professionally, I oversee operations and client success at InfinixLeverage and as Complex Manager for Union Department at USM.

My background is in computer science and information security, with ongoing training in cybersecurity and risk management. Across all roles, I bring a disciplined, values-driven approach to execution, accountability, and long-term sustainability.
      </p>

      <h2 className="text-xl font-semibold mt-10">📝 Writing</h2>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>
          <Link href="/blog/failure-of-liberal-world-order" className="text-blue-500 hover:underline">
            Failure of the Liberal World Order
          </Link>
        </li>
        <li>
          <Link href="/blog/art-and-dissent" className="text-blue-500 hover:underline">
          Art and Dissent: How Art Reflects American Politics and Decisions
          </Link>

        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">💻 Code Projects</h2>
      <ul className="list-disc pl-6 space-y-1 mt-2">
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
