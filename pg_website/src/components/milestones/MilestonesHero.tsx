'use client';
// src/components/milestones/MilestonesHero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const MilestonesHero = () => {
  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/milestones/hero-collage.jpg"
            alt="Journey Through Time"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-7xl font-bold mb-6">
            Our Journey
          </h1>
          <p className="text-2xl text-gray-100 mb-8">
            From 1989 to Today: A Story of Growth, Innovation, and Excellence
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg"
              onClick={scrollToTimeline}
              className="bg-company-orange hover:bg-company-orange/90 text-white group"
            >
              Explore Our Timeline
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
    </section>
  );
};

export default MilestonesHero;