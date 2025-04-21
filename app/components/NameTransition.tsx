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
            <span className="relative block overflow-hidden">
              {/* English default */}
              <span className="block whitespace-nowrap transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
                M. Asjad Rehman Hashmi
              </span>
              {/* Arabic hover */}
              <span
                dir="rtl"
                className="absolute inset-0 block whitespace-nowrap transform translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0"
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