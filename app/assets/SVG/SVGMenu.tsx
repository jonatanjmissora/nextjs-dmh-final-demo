export default function SVGMenu({ className }: { className?: string }) {
  return (
    <svg width="33" height="26" viewBox="0 0 33 26" fill="none" className={className}>
      <line x1="2" y1="2" x2="31" y2="2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="13" x2="31" y2="13" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}