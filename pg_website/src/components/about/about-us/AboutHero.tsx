'use client';
// src/components/about/AboutHero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/about/company-building.jpg"
          alt="Company Headquarters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pioneering Progress Through{' '}
              <span className="text-company-orange">Innovation</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              From humble beginnings to a diversified conglomerate, our journey 
              reflects our commitment to excellence, sustainability, and community development.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-gray-200">Years Legacy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-gray-200">Companies</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/about/vision-image.jpeg"
                alt="Company Vision"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;