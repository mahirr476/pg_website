

'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

interface MilestonesHeroProps {
  title: string;
  description: string;
  imagePath?: string; // Add image path prop
}

const MilestonesHero: React.FC<MilestonesHeroProps> = ({ 
  title, 
  description, 
  imagePath 
}) => {
  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Process image path similar to HomeHero component
  let backgroundImage = '/images/milestones/hero-collage.jpg'; // Default fallback
  
  if (imagePath) {
    // Remove 'public/' from the beginning of the path if it exists
    const cleanPath = imagePath.replace(/^public\//, '');
    backgroundImage = `http://localhost:7000/${cleanPath}`;
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {/* Using Next.js Image component for better optimization */}
          <Image
            src={backgroundImage}
            alt="Company Milestones Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            onError={(e) => {
              console.error(`Image failed to load: ${backgroundImage}`);
              console.error('Error details:', e);
            }}
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
            {title}
          </h1>
          <p className="text-2xl text-gray-100 mb-8">
            {description}
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