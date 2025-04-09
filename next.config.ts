import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jenkins.io',
        port: '',
        pathname: '/favicon.ico',
        search: '',
      },
    ],
  }
};

export default nextConfig;
