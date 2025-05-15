export default function SVGCheckboxFill({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <circle cx="9" cy="9" r="8.5" fill="currentColor" stroke="#201F22" />
      <circle cx="9" cy="9" r="5.125" fill="#000" stroke="#201F22" />
    </svg>

  )
}