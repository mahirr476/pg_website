import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },

  // Configure images for static export
  images: {
    // Always disable optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.paragongroup-bd.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.paragongroup-bd.com',
        port: '',
        pathname: '/uploads/**',
      },
      // Direct IP access
      {
        protocol: 'http',
        hostname: '57.155.62.78',
        port: '7000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '57.155.62.78',
        port: '7000',
        pathname: '/uploads/**',
      },
      // LoadBalancer IP access
      {
        protocol: 'http',
        hostname: '57.155.62.78',
        port: '7000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '57.155.62.78',
        port: '',
        pathname: '/uploads/**',
      }
    ],
    // Broader domain matching
    domains: [
      'api.paragongroup-bd.com',
      '57.155.62.78'
    ],
    // More permissive settings for development
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Increase timeout for slow responses
    minimumCacheTTL: 60,
  },
 
  // Handle CORS and security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.paragongroup-bd.com;",
          },
          // Add CORS headers for development
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
}

export default nextConfig