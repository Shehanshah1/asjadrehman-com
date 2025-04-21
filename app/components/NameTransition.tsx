'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about">
        <h1 className="font-medium pt-12 text-center text-3xl sm:text-4xl md:text-5xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          <span className="sr-only">Asjad Rehman</span>
          <span className="relative block h-[1.2em] sm:h-[1.5em] md:h-[1.5em] overflow-hidden group leading-none">
            {/* English default */}
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
              M. Asjad Rehman Hashmi
            </span>

            {/* Arabic hover */}
            <span
              dir="rtl"
              className="absolute top-0 left-0 inline-block transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 whitespace-nowrap"
            >
              محمد أسجد رحمان هاشمی
            </span>
          </span>
        </h1>
      </Link>
    </ViewTransition>
  );
}
