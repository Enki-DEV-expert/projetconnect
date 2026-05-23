export function Logo({ size = 24 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg bg-ink text-gold flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size * 0.6}
        height={size * 0.6}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 16 L12 5 L19 16" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
