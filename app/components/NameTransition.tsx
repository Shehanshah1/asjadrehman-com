'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about">
        <h1 className="font-medium pt-12 text-center text-3xl sm:text-4xl md:text-5xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          <span className="sr-only">Asjad Rehman</span>
          <span className="relative inline-block group">
            <span className="block overflow-hidden h-[1.75em] sm:h-[1.75em] relative">
              {/* English name */}
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
                M. Asjad Rehman Hashmi
              </span>

              {/* Arabic name */}
              <span
                dir="rtl"
                className="absolute top-0 left-0 block transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 whitespace-nowrap"
              >
                محمد أسجد رحمان هاشمی
              </span>
            </span>
          </span>
        </h1>
      </Link>
    </ViewTransition>
  );
}
