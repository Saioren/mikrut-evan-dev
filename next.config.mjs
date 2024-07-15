import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'mikrutevan.dev',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mikrutevan.dev',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'mikrutevandev-git-main-evan-mikruts-projects.vercel.app',
        pathname: '/api/media/file/**',
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPayload(nextConfig);
