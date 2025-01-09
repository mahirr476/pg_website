// components/company/CompanyHero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { CompanyHeroProps } from '@/types/company';

const CompanyHero = ({ data }: CompanyHeroProps) => {
  return (
    <section className="relative h-screen">
      <ParallaxBanner className="h-full">
        {/* Background Image Layer */}
        <ParallaxBannerLayer speed={-20}>
          <div className="absolute inset-0">
            <Image
              src={data.heroImage}
              alt={data.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </ParallaxBannerLayer>

        {/* Gradient Overlay Layer */}
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </ParallaxBannerLayer>

        {/* Content Layer */}
        <ParallaxBannerLayer speed={-5}>
          <div className="relative h-full container mx-auto px-4">
            <div className="flex flex-col justify-center h-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <Image
                  src={data.logo}
                  alt={`${data.name} logo`}
                  width={180}
                  height={180}
                  className="rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl font-bold text-white mb-6"
              >
                {data.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-200"
              >
                {data.shortName} | {data.category}
              </motion.p>
            </div>
          </div>
        </ParallaxBannerLayer>

        {/* Scroll Indicator Layer */}
        <ParallaxBannerLayer speed={5}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 text-white"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </motion.div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default CompanyHero;