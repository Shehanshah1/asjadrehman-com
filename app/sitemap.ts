import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://asjadrehman.com';

async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

async function getBlogSlugs(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'content', 'blog');
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'n');
  const [noteSlugs, blogSlugs] = await Promise.all([
    getNoteSlugs(notesDirectory),
    getBlogSlugs(),
  ]);

  const staticRoutes = ['', '/about', '/blog', '/contact'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const notes = noteSlugs.map((slug) => ({
    url: `${BASE_URL}/n/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPosts = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...notes, ...blogPosts];
}
