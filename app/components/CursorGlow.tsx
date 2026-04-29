'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');

    const moveGlow = (e: MouseEvent) => {
      if (!glow) return;
      glow.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 400, fill: 'forwards', easing: 'ease-out' }
      );
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed top-0 left-0 z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl dark:opacity-[0.12]"
      style={{ background: 'radial-gradient(circle, #c8a45c 0%, transparent 70%)' }}
    />
  );
}
