import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir);

  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-6xl mx-auto px-8 md:px-16 py-16 text-justify leading-relaxed">
      <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
      <p className="text-gray-500 dark:text-zinc-400 mb-10 text-lg">{data.publishedAt}</p>
      <div className="space-y-7 text-lg">
        <MDXRemote source={content} />
      </div>
    </article>
  );
  
  
  
}
