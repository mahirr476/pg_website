// // // src/app/layout.tsx
// // import type { Metadata } from 'next';
// // import { Inter } from 'next/font/google';
// // import './globals.css';
// // import Header from '@/components/layout/Header';
// // import Footer from '@/components/layout/Footer';

// // const inter = Inter({ subsets: ['latin'] });

// // export const metadata: Metadata = {
// //   title: 'Paragon Group',
// //   description: 'Description of your company',
// //   icons: {
// //     icon: "/images/plogo1.png",
// //   },
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>
// //         <div className="min-h-screen flex flex-col">
// //           <Header />
// //           <main className="flex-grow">
// //             {children}
// //           </main>
// //           <Footer />
// //         </div>
// //       </body>
// //     </html>
// //   );
// // }



// // src/app/layout.tsx
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import './globals.css';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';

// // Replace Inter with Poppins
// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   variable: '--font-poppins'
// });

// export const metadata: Metadata = {
//   title: 'Paragon Group',
//   description: 'Description of your company',
//   icons: {
//     icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/plogo1.png`,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className={poppins.className}>
//         <div className="min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-grow">
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }





// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Paragon Group',
  description: 'Paragon Group is your trusted partner for excellence and innovation.',
  icons: {
    icon: `${siteUrl}/images/plogo1.png`,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '7oP9YST7dZkfXJw2DhHwv9A0ud8HGP4AiETRD6cfq3A',
  },
  openGraph: {
    title: 'Paragon Group',
    description: 'Paragon Group is your trusted partner for excellence and innovation.',
    url: siteUrl,
    siteName: 'Paragon Group',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Paragon Group',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paragon Group',
    description: 'Paragon Group is your trusted partner for excellence and innovation.',
    images: [`${siteUrl}/images/twitter-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
