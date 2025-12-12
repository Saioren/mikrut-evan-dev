// src/utilities/formatAuthors.ts
export const formatAuthors = (
  authors?:
    | {
        id?: string | null
        name?: string | null
      }[]
    | null,
): string => {
  if (!authors || authors.length === 0) return ''

  // Filter out null/undefined/empty names
  const validNames = authors
    .map((author) => author?.name?.trim())
    .filter((name): name is string => Boolean(name))

  if (validNames.length === 0) return ''

  if (validNames.length === 1) return validNames[0]
  if (validNames.length === 2) return `${validNames[0]} and ${validNames[1]}`

  // Oxford comma for 3+ authors
  return `${validNames.slice(0, -1).join(', ')}, and ${validNames[validNames.length - 1]}`
}
