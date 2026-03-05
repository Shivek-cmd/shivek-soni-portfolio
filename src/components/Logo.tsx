export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Automate with Level"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0C682" />
          <stop offset="50%" stopColor="#C8A55C" />
          <stop offset="100%" stopColor="#A8883E" />
        </linearGradient>
      </defs>
      {/* Logo mark — abstract automation nodes */}
      <circle cx="10" cy="20" r="3" fill="url(#goldGrad)" />
      <circle cx="24" cy="12" r="2.5" fill="url(#goldGrad)" />
      <circle cx="24" cy="28" r="2.5" fill="url(#goldGrad)" />
      <circle cx="38" cy="20" r="3" fill="url(#goldGrad)" />
      <line x1="13" y1="18.5" x2="21.5" y2="13" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="13" y1="21.5" x2="21.5" y2="27" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="26.5" y1="13" x2="35" y2="18.5" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="26.5" y1="27" x2="35" y2="21.5" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="14.5" x2="24" y2="25.5" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.4" />
      {/* Wordmark */}
      <text x="48" y="17" fontFamily="serif" fontSize="13" fontWeight="700" fill="url(#goldGrad)">
        Automate
      </text>
      <text x="48" y="32" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#FAFAF9">
        with Level
      </text>
    </svg>
  );
}
