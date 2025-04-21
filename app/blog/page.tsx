// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold">Essays</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="space-y-1">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.publishedAt}</p>
            <p className="text-gray-800 dark:text-zinc-300">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
