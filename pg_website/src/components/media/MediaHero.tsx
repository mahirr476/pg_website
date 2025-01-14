// components/media/MediaHero.tsx
'use client';
import { motion } from 'framer-motion';

const MediaHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-6">
            Experience the Power of Media
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Dive into stories that inspire, educate, and connect. Our media platform is your gateway to compelling narratives and visuals that captivate the world.
          </p>
        </motion.div>
      </div>

      {/* Floating Media Visuals */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 blur-[80px] md:blur-[100px]"
        />
      </div>
    </section>
  );
};

export default MediaHero;
