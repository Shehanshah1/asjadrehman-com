import { NameTransition } from './components/NameTransition';
import Link from 'next/link';

const domains = [
  {
    label: 'Engineering',
    desc: 'Full-stack systems, cryptography, security architecture, and software that ships under pressure.',
  },
  {
    label: 'Geopolitics',
    desc: 'IR theory, postcolonial frameworks, political Islam, and the structure of international order.',
  },
  {
    label: 'Defense',
    desc: 'Cyber operations, digital sovereignty, risk frameworks, and the ethics of force in the information age.',
  },
];

const writings = [
  {
    href: '/blog/failure-of-liberal-world-order',
    title: 'Failure of the Liberal World Order',
    summary: 'On the structural contradictions of the post-Cold War consensus',
    tags: ['Geopolitics', 'IR Theory'],
  },
  {
    href: '/blog/art-and-dissent',
    title: 'Art and Dissent',
    summary: 'How art reflects and amplifies American political resistance',
    tags: ['Political Theory', 'Culture'],
  },
  {
    href: '/blog/proximity-method-marginalization-black-women-political-thought',
    title: 'Proximity, Method, and Political Thought',
    summary: 'Structural integration of gender analysis in the canon',
    tags: ['Political Theory', 'Methodology'],
  },
];

const projects = [
  {
    href: 'https://github.com/Shehanshah1/MadinaEnterprises',
    title: 'Madina Enterprises',
    desc: 'Full-stack business management system with operations and client-facing modules.',
    tags: ['Full-Stack', 'TypeScript'],
    external: true,
  },
  {
    href: 'https://github.com/Shehanshah1/CryptoPals-Challenge-App',
    title: 'CryptoPals Challenge Suite',
    desc: 'Cryptography challenge implementations — block ciphers, stream ciphers, MACs.',
    tags: ['Security', 'Cryptography'],
    external: true,
  },
];

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 leading-relaxed">

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <div className="fade-section">
        <div className="flex items-center gap-2 mb-4">
          <span className="status-dot" />
          <span
            className="mono-label opacity-60 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            active · hattiesburg, ms
          </span>
        </div>
        <NameTransition />
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="terminal-badge">Software Engineer</span>
          <span className="terminal-badge">Political Scientist</span>
          <span className="terminal-badge">Defense Tech</span>
        </div>
      </div>

      {/* ─── Mobile nav ──────────────────────────────────────────── */}
      <nav className="fade-section-delay-1 mt-8 flex sm:hidden flex-wrap gap-5 text-sm font-medium">
        <Link href="/about" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors">
          About
        </Link>
        <Link href="/blog" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors">
          Essays
        </Link>
        <Link href="/contact" className="text-gray-600 dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors">
          Contact
        </Link>
      </nav>

      <div className="section-divider fade-section-delay-1" />

      {/* ─── Domain Grid ─────────────────────────────────────────── */}
      <div className="fade-section-delay-1 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {domains.map((d) => (
          <div key={d.label} className="intel-card p-4">
            <span
              className="mono-label block mb-2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {d.label}
            </span>
            <p className="text-xs text-gray-500 dark:text-zinc-500 leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ─── Bio ─────────────────────────────────────────────────── */}
      <div className="fade-section-delay-2 space-y-4 text-justify">
        <p className="text-lg text-gray-700 dark:text-zinc-300">
          I work at the intersection of technology, statecraft, and security. My focus is building and managing systems&mdash;technical, organizational, and institutional&mdash;that operate reliably under adversarial conditions.
        </p>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          I serve as Vice President and Imam at the Islamic Center of Hattiesburg and have led the Muslim Student Association at the University of Southern Mississippi across two terms. Professionally, I oversee operations and client success at InfinixLeverage and as Complex Manager at USM.
        </p>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          My background spans computer science, information security, and political theory&mdash;with ongoing work in cybersecurity, risk management, and the political economy of emerging technology. I bring a disciplined, values-driven approach to systems that must actually hold.
        </p>
      </div>

      <div className="section-divider fade-section-delay-2" />

      {/* ─── Writing ─────────────────────────────────────────────── */}
      <div className="fade-section-delay-3">
        <div className="section-header">
          <span
            className="mono-label"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Writing
          </span>
        </div>
        <div className="space-y-3">
          {writings.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              className="hover-card block p-4 -mx-4 group no-underline hover:no-underline"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent)] transition-colors">
                    {w.title}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1 mb-2">
                    {w.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-300 dark:text-zinc-600 mt-0.5 shrink-0 group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="mono-label opacity-60 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            all essays &rarr;
          </Link>
        </div>
      </div>

      <div className="section-divider fade-section-delay-3" />

      {/* ─── Projects ────────────────────────────────────────────── */}
      <div className="fade-section-delay-4">
        <div className="section-header">
          <span
            className="mono-label"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Systems
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="intel-card block p-4 group no-underline hover:no-underline"
              target={p.external ? '_blank' : undefined}
              rel={p.external ? 'noopener noreferrer' : undefined}
            >
              <span className="font-medium text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent)] transition-colors block mb-1">
                {p.title}
              </span>
              <p className="text-sm text-gray-500 dark:text-zinc-500 mb-3 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/Shehanshah1"
            className="mono-label opacity-60 hover:opacity-100 transition-opacity no-underline hover:no-underline inline-flex items-center gap-1"
            style={{ fontFamily: 'var(--font-mono)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            view all on github &rarr;
          </a>
        </div>
      </div>

    </section>
  );
}
