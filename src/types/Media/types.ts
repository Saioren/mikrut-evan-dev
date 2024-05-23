export type Media = string | {
    id: string
    filename: string
    alt?: string
    mimeType?: string
    width?: number
    height?: number
    fallback?: Media
  }
  