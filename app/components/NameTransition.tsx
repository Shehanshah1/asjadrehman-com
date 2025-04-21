'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about">
        <h1 className="font-medium pt-12 text-4xl sm:text-2xl md:text-4xl hover:text-blue-500 transition-colors duration-300 text-center cursor-pointer">
          <span className="sr-only">Asjad Rehman</span>
          <span
            aria-hidden="true"
            className="block overflow-hidden group relative"
          >
            {/* English default */}
            <span className="inline-block transition-all sm:text-xl md:text-5xl duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
              M. Asjad Rehman Hashmi
            </span>

            {/* Arabic hover */}
            <span
              dir="rtl"
              className="inline-block absolute left-0 top-0 sm:text-xl md:text-5xl transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 whitespace-nowrap"
            >
              محمد أسجد رحمان ہاشمی
            </span>
          </span>
        </h1>
      </Link>
    </ViewTransition>
  );
}
