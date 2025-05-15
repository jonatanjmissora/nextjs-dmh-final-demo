export default function SVGPlus({ className }: { className?: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className={className}>
      <circle cx="17" cy="17" r="16.35" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.75 10V24.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M24 17L9.5 17" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>

  )
}