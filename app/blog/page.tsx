import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form writing on politics, technology, and the edges where both collide.',
  alternates: { canonical: '/blog' },
};

interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

const slugTags: Record<string, string[]> = {
  'failure-of-liberal-world-order': ['Geopolitics', 'IR Theory', 'Order'],
  'art-and-dissent': ['Political Theory', 'Culture', 'US Politics'],
  'proximity-method-marginalization-black-women-political-thought': ['Political Theory', 'Methodology', 'Canon'],
};

export default function BlogIndex() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const posts: Post[] = files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(source);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: String(data.title),
        publishedAt: String(data.publishedAt),
        summary: String(data.summary),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );

  return (
    <section className="max-w-3xl mx-auto px-4 py-6 space-y-8">

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
      <div className="fade-section-delay-1">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="mono-label opacity-60"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {posts.length} dispatches
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Essays</h1>
        <div className="accent-line mt-3" />
        <p className="mt-4 text-sm text-gray-500 dark:text-zinc-500 leading-relaxed max-w-xl">
          Long-form writing on international order, political theory, resistance, and the places where software meets geopolitics.
        </p>
      </div>

      {/* ─── Posts ────────────────────────────────────────────────── */}
      <div className="space-y-3 fade-section-delay-2">
        {posts.map((post) => {
          const tags = slugTags[post.slug] ?? [];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="hover-card block p-5 -mx-4 group no-underline hover:no-underline"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p
                    className="text-xs text-gray-400 dark:text-zinc-600"
                    style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}
                  >
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                    {post.summary}
                  </p>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-gray-300 dark:text-zinc-600 mt-1.5 shrink-0 text-lg group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}
