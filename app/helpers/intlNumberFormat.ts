export const intlNumberFormat = (number: number) =>
  new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(number)
