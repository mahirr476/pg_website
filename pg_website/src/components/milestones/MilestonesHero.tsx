// 'use client';
// // src/components/milestones/MilestonesHero.tsx
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from 'lucide-react';

// const MilestonesHero = () => {
//   const scrollToTimeline = () => {
//     const timeline = document.getElementById('timeline');
//     if (timeline) {
//       timeline.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image Slider */}
//       <div className="absolute inset-0">
//         <div className="relative h-full w-full">
//           <Image
//             src="/images/milestones/hero-collage.jpg"
//             alt="Journey Through Time"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-7xl font-bold mb-6">
//             Our Journey
//           </h1>
//           <p className="text-2xl text-gray-100 mb-8">
//             From 1989 to Today: A Story of Growth, Innovation, and Excellence
//           </p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <Button 
//               size="lg"
//               onClick={scrollToTimeline}
//               className="bg-company-orange hover:bg-company-orange/90 text-white group"
//             >
//               Explore Our Timeline
//               <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated Overlay Pattern */}
//       <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
//     </section>
//   );
// };

// export default MilestonesHero;



// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from 'lucide-react';

// interface MilestonesHeroProps {
//   title: string;
//   description: string;
// }

// const MilestonesHero: React.FC<MilestonesHeroProps> = ({ title, description }) => {
//   const scrollToTimeline = () => {
//     const timeline = document.getElementById('timeline');
//     if (timeline) {
//       timeline.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div className="relative h-full w-full">
//           {/* Using a div with background image instead of Next.js Image component */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/images/milestones/hero-collage.jpg')" }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-7xl font-bold mb-6">
//             {title}
//           </h1>
//           <p className="text-2xl text-gray-100 mb-8">
//             {description}
//           </p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <Button 
//               size="lg"
//               onClick={scrollToTimeline}
//               className="bg-company-orange hover:bg-company-orange/90 text-white group"
//             >
//               Explore Our Timeline
//               <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated Overlay Pattern */}
//       <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
//     </section>
//   );
// };

// export default MilestonesHero;



// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from 'lucide-react';
// import Image from 'next/image';

// interface MilestonesHeroProps {
//   title: string;
//   description: string;
// }

// const MilestonesHero: React.FC<MilestonesHeroProps> = ({ title, description }) => {
//   const scrollToTimeline = () => {
//     const timeline = document.getElementById('timeline');
//     if (timeline) {
//       timeline.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div className="relative h-full w-full">
//           {/* Using Next.js Image component for better optimization */}
//           <Image
//             src="/images/milestones/milestonesHeaderimage.jpg" 
//             alt="Company Milestones Background"
//             fill
//             priority
//             className="object-cover object-center"
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-7xl font-bold mb-6">
//             {title}
//           </h1>
//           <p className="text-2xl text-gray-100 mb-8">
//             {description}
//           </p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <button 
//               onClick={scrollToTimeline}
//               className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
//             >
//               <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
//               <span className="relative z-10">Explore Our Timeline</span>
//               <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" />
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated Overlay Pattern */}
//       <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
//     </section>
//   );
// };

// export default MilestonesHero;


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

interface MilestonesHeroProps {
  title: string;
  description: string;
}

const MilestonesHero: React.FC<MilestonesHeroProps> = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    // Delay to ensure smooth animation after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
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

  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split title into words for staggered animation
  const titleWords = title.split(' ');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          {/* Using Next.js Image component for better optimization */}
          <Image
            src="/images/milestones/milestonesHeaderimage.jpg" 
            alt="Company Milestones Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            style={{ transform: "scale(1.05)" }}
          />
          
          {/* Enhanced gradient overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-company-orange/10 backdrop-blur-xl rounded-bl-full mix-blend-overlay opacity-30" />
          <div className="absolute left-0 bottom-0 w-1/3 h-1/4 bg-white/10 backdrop-blur-sm rounded-tr-full mix-blend-overlay opacity-20" />
        </motion.div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 overflow-hidden">
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2 mb-2"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: isVisible ? 0 : 100, 
                    opacity: isVisible ? 1 : 0 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xl sm:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            {/* Glow effect behind button */}
            <div className="absolute -inset-1 bg-company-orange/20 blur-md rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <button 
              onClick={scrollToTimeline}
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg relative overflow-hidden group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
              <span className="relative z-10 text-lg font-medium">Explore Our Timeline</span>
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Animated Overlay Patterns */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 animate-[slide_40s_linear_infinite]" />
      
      {/* Floating particles for added depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              opacity: Math.random() * 0.4,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
            }}
          />
        ))}
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="text-white opacity-70"
        >
          {/* <ArrowDown size={20} /> */}
        </motion.div>
      </motion.div>

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

export default MilestonesHero;