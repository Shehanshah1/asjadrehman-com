import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form writing on politics, technology, and ideas at the edges of both.',
  alternates: { canonical: '/blog' },
};

interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

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
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <nav className="fade-section">
        <Link href="/" className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-[var(--accent-secondary)] dark:hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">
          <span>&larr;</span> Home
        </Link>
      </nav>

      <div className="fade-section-delay-1">
        <h1 className="text-4xl font-bold tracking-tight">Essays</h1>
        <div className="accent-line mt-3" />
      </div>

      <div className="space-y-2 fade-section-delay-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="hover-card block rounded-lg p-5 -mx-4 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-[var(--accent-secondary)] dark:group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 dark:text-zinc-500 font-medium">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <span className="text-gray-300 dark:text-zinc-600 mt-1.5 shrink-0 text-lg">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
