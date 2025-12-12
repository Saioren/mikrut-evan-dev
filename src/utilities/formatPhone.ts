export function formatPhone(phone: string): string {
  if (!phone) return ''

  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')

  // Only format if we have exactly 10 digits
  if (digits.length === 10) {
    const area = digits.slice(0, 3)
    const middle = digits.slice(3, 6)
    const last = digits.slice(6)
    return `(${area}) ${middle}-${last}`
  }

  // If not 10 digits, just return the raw input
  return phone
}
