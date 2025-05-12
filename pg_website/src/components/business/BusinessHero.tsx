

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

interface BusinessHeroProps {
  data: {
    title: string;
    shortDes: string;
    longDes?: string;
    img: string;
  };
}

const BusinessHero = ({ data }: BusinessHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Process image path for proper handling
  const imagePath = data.img
    ? `http://localhost:7000/${data.img.replace(/^public\//, '')}`
    : '/images/business/business-hero-bg.jpg';

  // Animation trigger after component mounts
  useEffect(() => {
    // Small timeout to ensure client-side rendering is complete
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  // Debounce function to prevent rapid triggers
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Handle scroll with debounce and proper checks
  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll position actually changed significantly
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setShowScrollTop(currentScrollY > 300);
        setLastScrollY(currentScrollY);
      }
    }, 100),
    [lastScrollY]
  );

  useEffect(() => {
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Safe scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Full-height background with high resolution */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, filter: 'blur(10px)' }}
          animate={{ 
            scale: 1, 
            filter: 'blur(0px)',
          }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={imagePath}
            alt={data.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
            onLoadingComplete={() => setIsLoaded(true)}
          />
          
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <div className="relative h-full">
        {/* Initial loading animation overlay */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 relative"
              >
                {/* Simple loading animation (can be replaced with a logo) */}
                <div className="w-full h-full rounded-full border-4 border-t-transparent border-white animate-spin"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic particle system for depth and visual interest */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isLoaded && 
            Array.from({ length: 40 }).map((_, i) => {
              // Use seeded values based on index to ensure consistency between server/client
              const size = (i % 6) + 2;
              const duration = (i % 15) + 15;
              const initialX = (i * 2.5) % 100;
              const initialY = (i * 3.7) % 100;
              const delay = (i * 0.1) % 5;
              const opacityBase = (i % 5);
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  initial={{
                    x: `${initialX}%`,
                    y: `${initialY}%`,
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    y: [`${initialY}%`, `${initialY + ((i % 30) - 15)}%`],
                    x: [`${initialX}%`, `${initialX + ((i % 30) - 15)}%`],
                    scale: [0, size / 10, 0],
                    opacity: [0, 0.1 + (opacityBase * 0.05), 0],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay,
                  }}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.${opacityBase})`,
                  }}
                />
              );
            })}
        </div>

        {/* Abstract geometric shapes for modern design */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right light accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: '10%', y: '-10%' }}
            animate={{ opacity: isLoaded ? 0.7 : 0, scale: 1, x: '0%', y: '0%' }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute top-0 right-0 w-3/4 h-1/2 rounded-full bg-gradient-to-b from-blue-400/20 to-purple-500/10 blur-3xl"
          />
          
          {/* Bottom left accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: '-10%', y: '10%' }}
            animate={{ opacity: isLoaded ? 0.5 : 0, scale: 1, x: '0%', y: '0%' }}
            transition={{ duration: 2, delay: 1.8 }}
            className="absolute bottom-0 left-0 w-2/3 h-1/3 rounded-full bg-gradient-to-t from-indigo-600/20 to-cyan-400/5 blur-3xl"
          />
          
          {/* Center highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isLoaded ? 0.4 : 0, scale: 1 }}
            transition={{ duration: 2.5, delay: 2 }}
            className="absolute top-1/3 left-1/4 w-1/2 h-1/3 rounded-full bg-gradient-to-br from-white/5 to-blue-300/10 blur-3xl"
          />
        </div>

        {/* Content Layer with text animations */}
        <div className="relative h-full container mx-auto px-4">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            <div className="mb-10">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
                {data.title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ 
                      opacity: isLoaded ? 1 : 0, 
                      y: isLoaded ? 0 : 50, 
                      filter: isLoaded ? 'blur(0px)' : 'blur(10px)' 
                    }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 1 + (index * 0.15),
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block mr-5 relative"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Short description with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="relative mb-8"
            >
              <div className="text-xl md:text-2xl text-white/80 leading-relaxed">
                {data.shortDes}
              </div>
            </motion.div>
            
            {/* Business category tag with glass effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-6 py-3 inline-block shadow-lg w-fit"
            >
              <p className="text-lg text-white font-medium">
                <span className="mr-2 text-white">Business</span>
                <span className="text-gray-400">|</span>
                <span className="ml-2 text-white">Paragon Group</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - Blue by default, orange on hover */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 z-50 hover:bg-company-orange hover:shadow-orange-500/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BusinessHero;