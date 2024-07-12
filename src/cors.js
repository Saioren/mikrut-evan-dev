export const cors = [
    process.env.PAYLOAD_PUBLIC_APP_URL,
    process.env.ENVIRONMENT === 'stage' ? 'http://localhost:3000' : undefined,
    'https://mikrutevandev-git-main-evan-mikruts-projects.vercel.app/',
    'https://mikrutevan.dev',
    'https://www.mikrutevan.dev',
].filter(Boolean);
