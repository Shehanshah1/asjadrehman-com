import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx')).sort();
  const slugs = files.map((filename) => filename.replace(/\.mdx$/, ''));
  const index = slugs.findIndex((s) => s === params.slug);
  const prevSlug = index > 0 ? slugs[index - 1] : null;
  const nextSlug = index < slugs.length - 1 ? slugs[index + 1] : null;

  const filePath = path.join(dir, `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  let prevTitle: string | null = null;
  let nextTitle: string | null = null;

  if (prevSlug) {
    const prevContent = fs.readFileSync(path.join(dir, `${prevSlug}.mdx`), 'utf-8');
    prevTitle = matter(prevContent).data.title;
  }
  if (nextSlug) {
    const nextContent = fs.readFileSync(path.join(dir, `${nextSlug}.mdx`), 'utf-8');
    nextTitle = matter(nextContent).data.title;
  }

  return (
    <>
      <article className="max-w-8xl mx-auto px-3 md:px-6 py-12 text-justify leading-relaxed">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-500 dark:text-zinc-400 mb-10">{data.publishedAt}</p>
        <div className="space-y-6">
          <MDXRemote source={content} />
        </div>
      </article>

      <nav className="max-w-8xl mx-auto px-3 md:px-6 py-4 flex justify-between items-center">
        {prevSlug ? (
          <Link href={`/blog/${prevSlug}`} className="text-blue-500 hover:underline">
            &larr; {prevTitle}
          </Link>
        ) : (
          <div />
        )}

        <Link href="/blog" className="text-gray-500 hover:underline">
          All Posts
        </Link>

        {nextSlug ? (
          <Link href={`/blog/${nextSlug}`} className="text-blue-500 hover:underline">
            {nextTitle} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}
