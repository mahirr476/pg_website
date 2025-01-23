// components/media/MediaHero.tsx
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MediaHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center">
      <div className="absolute inset-0 opacity-20">
        {/* Media-themed background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Media Center
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Stay updated with the latest news, press releases, and media coverage about Paragon Group.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Latest News</Button>
            <Button size="lg" variant="outline" className="text-white">
              Press Kit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaHero;