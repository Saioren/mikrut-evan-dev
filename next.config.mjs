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
      // Add your production domain configuration here
      {
        protocol: 'https',
        hostname: 'mikrutevan.dev',
        pathname: '/api/media/file/**',
      },
    ],
  },
};

export default withPayload(nextConfig);
