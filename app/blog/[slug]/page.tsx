import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const dir = path.join(process.cwd(), 'content/blog');

function getSortedSlugs(): string[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((filename) => {
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data } = matter(source);
      return { slug: filename.replace(/\.mdx$/, ''), publishedAt: String(data.publishedAt) };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(({ slug }) => slug);
}

export async function generateStaticParams() {
  return getSortedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const source = fs.readFileSync(path.join(dir, `${slug}.mdx`), 'utf-8');
    const { data } = matter(source);
    return {
      title: String(data.title),
      description: String(data.summary),
      alternates: { canonical: `/blog/${slug}` },
    };
  } catch {
    return { title: 'Essay Not Found' };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let fileContent: string;
  try {
    fileContent = fs.readFileSync(path.join(dir, `${slug}.mdx`), 'utf-8');
  } catch {
    return notFound();
  }

  const { content, data } = matter(fileContent);
  const slugs = getSortedSlugs();
  const index = slugs.findIndex((s) => s === slug);
  // slugs sorted newest-first: index+1 = older (prev), index-1 = newer (next)
  const prevSlug = index < slugs.length - 1 ? slugs[index + 1] : null;
  const nextSlug = index > 0 ? slugs[index - 1] : null;

  let prevTitle: string | null = null;
  let nextTitle: string | null = null;

  if (prevSlug) {
    prevTitle = matter(fs.readFileSync(path.join(dir, `${prevSlug}.mdx`), 'utf-8')).data.title;
  }
  if (nextSlug) {
    nextTitle = matter(fs.readFileSync(path.join(dir, `${nextSlug}.mdx`), 'utf-8')).data.title;
  }

  return (
    <>
      <nav className="mb-6 px-4 max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Home
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-4 md:px-6 py-10 text-justify leading-relaxed">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight break-words">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-10">{data.publishedAt}</p>
        <div className="space-y-6">
          <MDXRemote source={content} />
        </div>
      </article>

      <nav className="max-w-4xl mx-auto px-4 md:px-6 py-6 flex flex-wrap justify-between items-center gap-y-2">
        {prevSlug ? (
          <Link href={`/blog/${prevSlug}`} className="text-blue-500 hover:underline">
            ← {prevTitle}
          </Link>
        ) : <span />}

        <Link href="/blog" className="text-gray-500 hover:underline">
          All Posts
        </Link>

        {nextSlug ? (
          <Link href={`/blog/${nextSlug}`} className="text-blue-500 hover:underline">
            {nextTitle} →
          </Link>
        ) : <span />}
      </nav>
    </>
  );
}
