import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
 pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
 async redirects() {
   if (!process.env.POSTGRES_URL) {
     return [];
   }

   const postgres = (await import('postgres')).default;
   const sql = postgres(process.env.POSTGRES_URL, { ssl: 'allow' });

   let redirects = await sql`
     SELECT source, destination, permanent
     FROM redirects;
   `;

   return redirects.map(({ source, destination, permanent }) => ({
     source,
     destination,
     permanent: !!permanent
   }));
 },
 experimental: {
   mdxRs: true,
   viewTransition: true
 }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);