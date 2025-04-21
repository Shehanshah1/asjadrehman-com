'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about" passHref>
        <a
          aria-label="Navigate to About"
          className="group inline-block text-center cursor-pointer"
        >
          <h1 className="font-semibold pt-12 text-2xl sm:text-3xl md:text-5xl leading-tight hover:text-blue-500 transition-colors duration-300">
            <span className="sr-only">Asjad Rehman</span>
            <span className="relative inline-block overflow-hidden h-8 sm:h-10 md:h-16">
              {/* English default */}
              <span className="block whitespace-nowrap md:transition-transform md:duration-300 md:ease-in-out md:group-hover:-translate-y-full">
                M. Asjad Rehman Hashmi
              </span>
              {/* Arabic on hover (desktop only) */}
              <span
                dir="rtl"
                className="absolute top-0 left-0 block whitespace-nowrap translate-y-full md:transition-transform md:duration-300 md:ease-in-out md:group-hover:translate-y-0"
              >
                محمد أسجد رحمان هاشمی
              </span>
            </span>
          </h1>
        </a>
      </Link>
    </ViewTransition>
  );
}
