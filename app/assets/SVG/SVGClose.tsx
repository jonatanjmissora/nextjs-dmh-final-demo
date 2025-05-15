export default function SVGClose({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M2 2L16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 2L2 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}