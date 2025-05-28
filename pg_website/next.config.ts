// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;



// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   images: {
// //     domains: ['localhost'],
// //     remotePatterns: [
// //       {
// //         protocol: 'http',
// //         hostname: 'localhost',
// //         port: '7000',
// //         pathname: '/**',
// //       },
// //     ],
// //   },
// // };

// // module.exports = nextConfig;



// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   images: {
// //     domains: ['localhost'],
// //     remotePatterns: [
// //       {
// //         protocol: 'http',
// //         hostname: 'localhost',
// //         port: '7000',
// //         pathname: '/**',
// //       },
// //     ],
// //   },
// //   // Add these settings to bypass TypeScript errors during build
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// // };

// // module.exports = nextConfig;



// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: 'http',
// //         hostname: 'api.pg-admin.57.155.183.218.nip.io',
// //         port: '', // Remove port since it's default HTTP port
// //         pathname: '/**',
// //       },
// //     ],
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// // };

// // module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http', // Allow HTTP
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         pathname: '/uploads/**',
//       },
//     ],
//   },
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.pg-admin.57.155.183.218.nip.io',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.pg-admin.57.155.183.218.nip.io',
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
      // LoadBalancer IP access (from kubectl get services)
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
      'api.pg-admin.57.155.183.218.nip.io',
      '57.155.62.78'
    ],
    // More permissive settings for development
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Disable optimization for better compatibility
    unoptimized: process.env.NODE_ENV === 'development',
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
            value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io;",
          },
        ],
      },
    ];
  },
  // Handle API proxy for development if needed
  async rewrites() {
    return [
      // Optional: Proxy API calls in development
      ...(process.env.NODE_ENV === 'development' ? [
        {
          source: '/api/proxy/:path*',
          destination: 'http://api.pg-admin.57.155.183.218.nip.io/:path*',
        }
      ] : [])
    ];
  },
}

module.exports = nextConfig