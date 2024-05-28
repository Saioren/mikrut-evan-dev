export type Media = {
    id: string;
    url: string;
    filename: string;
    alt: string;
    mimeType?: string;
    width?: number;
    height?: number;
    fallback?: Media;
  }
  