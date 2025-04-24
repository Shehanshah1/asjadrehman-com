'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <Link href="/about">
      <h1 className="font-medium pt-12 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-center sm:text-left break-words max-w-full">
      <span className="sr-only">Asjad Rehman</span>
          <span
            aria-hidden="true"
            className="block overflow-hidden group relative"
          >
            {/* English default */}
            <span className="inline-block transition-all text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight duration-300 ease-in-out group-hover:-translate-y-full break-words text-center sm:text-left">
            M. Asjad Rehman Hashmi
            </span>

            <span
  dir="rtl"
  className="inline-block absolute left-0 top-0 transition-all text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight duration-300 ease-in-out translate-y-full group-hover:translate-y-0 break-words text-center sm:text-left"
>
              محمد أسجد رحمان ہاشمی
            </span>
          </span>
        </h1>
      </Link>
    </ViewTransition>
  );
}
