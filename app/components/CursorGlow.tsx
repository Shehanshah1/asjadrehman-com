'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');

    const moveGlow = (e: MouseEvent) => {
      if (!glow) return;
      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-20 blur-3xl"
    />
  );
}
