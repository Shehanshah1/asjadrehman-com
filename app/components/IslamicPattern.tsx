'use client';

export default function IslamicPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Geometric pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.055]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="islamic-star"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed star */}
            <polygon
              points="40,4 46,18 60,10 52,24 68,24 56,34 64,48 50,42 50,58 40,46 30,58 30,42 16,48 24,34 12,24 28,24 20,10 34,18"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
            />
            {/* Inner octagon */}
            <polygon
              points="40,18 52,24 56,34 52,46 40,50 28,46 24,34 28,24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.45"
            />
            {/* Center circle */}
            <circle cx="40" cy="34" r="5" fill="none" stroke="currentColor" strokeWidth="0.4" />
            {/* Edge connectors */}
            <line x1="0"  y1="0"  x2="20" y2="10" stroke="currentColor" strokeWidth="0.3" />
            <line x1="80" y1="0"  x2="60" y2="10" stroke="currentColor" strokeWidth="0.3" />
            <line x1="0"  y1="48" x2="16" y2="48" stroke="currentColor" strokeWidth="0.3" />
            <line x1="80" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="0.3" />
            <line x1="0"  y1="80" x2="30" y2="58" stroke="currentColor" strokeWidth="0.3" />
            <line x1="80" y1="80" x2="50" y2="58" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)" />
      </svg>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />

      {/* Subtle amber corner glow - top left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, #c8a45c, transparent 70%)' }}
      />
    </div>
  );
}
