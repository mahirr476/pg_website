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



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       // Direct IP access
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       // LoadBalancer IP access (from kubectl get services)
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '',
//         pathname: '/uploads/**',
//       }
//     ],
//     // Broader domain matching
//     domains: [
//       'api.pg-admin.57.155.183.218.nip.io',
//       '57.155.62.78'
//     ],
//     // More permissive settings for development
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     // Disable optimization for better compatibility
//     unoptimized: process.env.NODE_ENV === 'development',
//     // Increase timeout for slow responses
//     minimumCacheTTL: 60,
//   },
//   // Handle CORS and security headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io;",
//           },
//         ],
//       },
//     ];
//   },
//   // Handle API proxy for development if needed
//   async rewrites() {
//     return [
//       // Optional: Proxy API calls in development
//       ...(process.env.NODE_ENV === 'development' ? [
//         {
//           source: '/api/proxy/:path*',
//           destination: 'http://api.pg-admin.57.155.183.218.nip.io/:path*',
//         }
//       ] : [])
//     ];
//   },
// }

// module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Disable ESLint during build process
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // Disable TypeScript type checking during build (optional)
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   // Enable static export for cPanel hosting
//   output: 'export',
//   trailingSlash: true,
//   // Configure images for static export
//   images: {
//     // Always disable optimization for static export
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       // Direct IP access
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       // LoadBalancer IP access (from kubectl get services)
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '',
//         pathname: '/uploads/**',
//       }
//     ],
//     // Broader domain matching
//     domains: [
//       'api.pg-admin.57.155.183.218.nip.io',
//       '57.155.62.78'
//     ],
//     // More permissive settings for development
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     // Increase timeout for slow responses
//     minimumCacheTTL: 60,
//   },
//   // Handle CORS and security headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io;",
//           },
//         ],
//       },
//     ];
//   },
//   // Handle API proxy for development if needed
//   async rewrites() {
//     return [
//       // Optional: Proxy API calls in development
//       ...(process.env.NODE_ENV === 'development' ? [
//         {
//           source: '/api/proxy/:path*',
//           destination: 'http://api.pg-admin.57.155.183.218.nip.io/:path*',
//         }
//       ] : [])
//     ];
//   },
// }

// module.exports = nextConfig



// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   // Disable ESLint during build process
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // Disable TypeScript type checking during build (optional)
//   typescript: {
//     ignoreBuildErrors: true,
//   },
  
//   // ✅ ENABLE FOR PRODUCTION BUILD
//   output: 'export',
  
//   trailingSlash: true,
  
//   // Configure images for static export
//   images: {
//     // Always disable optimization for static export
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       // Direct IP access
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       // LoadBalancer IP access
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '',
//         pathname: '/uploads/**',
//       }
//     ],
//     // Broader domain matching
//     domains: [
//       'api.pg-admin.57.155.183.218.nip.io',
//       '57.155.62.78'
//     ],
//     // More permissive settings for development
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     // Increase timeout for slow responses
//     minimumCacheTTL: 60,
//   },
  
//   // Handle CORS and security headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io;",
//           },
//           // Add CORS headers for development
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: '*',
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET, POST, PUT, DELETE, OPTIONS',
//           },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value: 'Content-Type, Authorization',
//           },
//         ],
//       },
//     ];
//   },

//   // ✅ REMOVED PROXY - NOT NEEDED FOR STATIC BUILD
//   // Proxy only works in server mode, not with output: 'export'
// }

// export default nextConfig





// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   // Disable ESLint during build process
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // Disable TypeScript type checking during build (optional)
//   typescript: {
//     ignoreBuildErrors: true,
//   },
  
//   // ✅ ENABLE FOR PRODUCTION BUILD
//   output: 'export',
  
//   // ✅ RESTORE: basePath and assetPrefix for subdirectory hosting
//   basePath: '/pg_group',
//   assetPrefix: '/pg_group',
  
//   trailingSlash: true,
  
//   // Configure images for static export
//   images: {
//     // Always disable optimization for static export
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https', // ✅ CHANGED: Use HTTPS first
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'api.pg-admin.57.155.183.218.nip.io',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       // Direct IP access
//       {
//         protocol: 'https', // ✅ CHANGED: Use HTTPS first
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '7000',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'https', // ✅ CHANGED: Use HTTPS first
//         hostname: '57.155.62.78',
//         port: '',
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: '57.155.62.78',
//         port: '',
//         pathname: '/uploads/**',
//       }
//     ],
//     // Broader domain matching
//     domains: [
//       'api.pg-admin.57.155.183.218.nip.io',
//       '57.155.62.78'
//     ],
//     // More permissive settings for development
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     // Increase timeout for slow responses
//     minimumCacheTTL: 60,
//   },
  
//   // ✅ FIXED: Handle CORS and security headers for HTTPS
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io; upgrade-insecure-requests;",
//           },
//           // Add CORS headers
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: '*',
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET, POST, PUT, DELETE, OPTIONS',
//           },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value: 'Content-Type, Authorization',
//           },
//           // ✅ NEW: Referrer policy for better security
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin',
//           },
//         ],
//       },
//     ];
//   },
// }

// export default nextConfig





import type { NextConfig } from 'next'

// Environment check
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

// No base path for main domain deployment
const basePath = ''

const nextConfig: NextConfig = {
  // No base path for main domain
  basePath: basePath,
  
  // No asset prefix for main domain
  assetPrefix: basePath,
  
  // Disable ESLint during build process
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable static export for production
  output: 'export',
  
  // Remove trailing slash for clean URLs
  trailingSlash: false,
  
  // Disable server-side features for static export
  images: {
    unoptimized: true,
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
      {
        protocol: 'http',
        hostname: '57.155.62.78',
        port: '',
        pathname: '/uploads/**',
      }
    ],
    domains: [
      'api.pg-admin.57.155.183.218.nip.io',
      '57.155.62.78'
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "img-src 'self' data: https: http: *.nip.io 57.155.62.78 api.pg-admin.57.155.183.218.nip.io;",
          },
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

  // Redirect configuration for clean URLs
  async redirects() {
    return [
      // No redirects - let users navigate naturally
    ];
  },

  // Rewrite configuration for clean URLs (only in development)
  async rewrites() {
    if (isDev) {
      return [
        // Handle your custom routes
        {
          source: '/home',
          destination: '/',
        },
        {
          source: '/about/:path*',
          destination: '/about/:path*',
        },
        {
          source: '/business-activity/:path*',
          destination: '/business-activity/:path*',
        },
      ];
    }
    return [];
  },
}

export default nextConfig