'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about" passHref>
        <a
          className="group inline-block text-center cursor-pointer"
          aria-label="Navigate to About page"
        >
          <h1 className="font-semibold pt-12 text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 group-hover:text-blue-500">
            <span className="sr-only">Asjad Rehman</span>
            {/* wrapper with fixed height to crop overflow */}
            <span className="relative inline-block overflow-hidden h-[1.25em] sm:h-[1.35em] md:h-[1.5em]">
              {/* English default */}
              <span className="block whitespace-nowrap transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                M. Asjad Rehman Hashmi
              </span>
              {/* Arabic on hover */}
              <span
                dir="rtl"
                className="absolute top-0 left-0 block whitespace-nowrap transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
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
