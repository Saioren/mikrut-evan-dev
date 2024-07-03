export const cors = [
    process.env.NEXT_PUBLIC_API_URL,
    process.env.ENVIRONMENT === 'stage' ? 'http://localhost:3000' : undefined,
    'https://mikrutevan.dev',
    'https://cms.mikrutevan.dev',
    'https://preview.mikrutevan.dev',
  ].filter(Boolean);
  