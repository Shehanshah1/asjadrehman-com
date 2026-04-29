'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about" className="no-underline hover:no-underline group">
        <h1 className="font-bold pt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-left break-words max-w-full">
          <span className="sr-only">Asjad Rehman</span>
          <span aria-hidden="true" className="block overflow-hidden relative">
            {/* English */}
            <span className="inline-block transition-all duration-350 ease-in-out group-hover:-translate-y-full text-gray-900 dark:text-zinc-50">
              M. Asjad Rehman Hashmi
            </span>
            {/* Arabic/Urdu */}
            <span
              dir="rtl"
              className="inline-block absolute left-0 top-0 transition-all duration-350 ease-in-out translate-y-full group-hover:translate-y-0 text-[var(--accent)]"
            >
              محمد أسجد رحمان ہاشمی
            </span>
          </span>
        </h1>
      </Link>
    </ViewTransition>
  );
}
