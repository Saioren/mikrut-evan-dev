import { withPayload } from '@payloadcms/next/withPayload';
import { IgnorePlugin } from 'webpack';

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
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new IgnorePlugin({
          resourceRegExp: /^sharp$/,
        })
      );
    }
    return config;
  },
};

export default withPayload(nextConfig);
