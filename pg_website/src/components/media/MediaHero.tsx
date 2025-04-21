// // components/media/MediaHero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

// const MediaHero = () => {
//   return (
//     <section className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center">
//       <div className="absolute inset-0 opacity-20">
//         {/* Media-themed background pattern */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
//           backgroundSize: '30px 30px'
//         }} />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Media Center
//           </h1>
//           <p className="text-xl text-purple-100 mb-8">
//             Stay updated with the latest news, press releases, and media coverage about Paragon Group.
//           </p>
//           <div className="flex gap-4">
//             <Button size="lg">Latest News</Button>
//             <Button size="lg" variant="outline" className="text-white">
//               Press Kit
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MediaHero;



// 'use client';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

// interface MediaHeroProps {
//   data: {
//     title: string;
//     description: string;
//   };
// }

// const MediaHero = ({ data }: MediaHeroProps) => {
//   return (
//     <section className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center">
//       <div className="absolute inset-0 opacity-20">
//         {/* Media-themed background pattern */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
//           backgroundSize: '30px 30px'
//         }} />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             {data.title}
//           </h1>
//           <p className="text-xl text-purple-100 mb-8">
//             {data.description}
//           </p>
//           <div className="flex gap-4">
//             <Button size="lg">Latest News</Button>
//             {/* <Button size="lg" variant="outline" className="text-bg-gray-500">
//               Press Kit
//             </Button> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MediaHero;



'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronUp } from 'lucide-react';

interface MediaHeroProps {
  data: {
    title: string;
    description: string;
  };
}

const MediaHero = ({ data }: MediaHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Create ripple effect when clicking anywhere
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const ripple = document.createElement('div');
      ripple.className = 'absolute rounded-full bg-white/10 pointer-events-none';
      ripple.style.left = `${e.clientX - heroRef.current.getBoundingClientRect().left}px`;
      ripple.style.top = `${e.clientY - heroRef.current.getBoundingClientRect().top}px`;
      ripple.style.width = '0';
      ripple.style.height = '0';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.transition = 'all 0.5s ease-out';
      
      heroRef.current.appendChild(ripple);
      
      setTimeout(() => {
        ripple.style.width = '300px';
        ripple.style.height = '300px';
        ripple.style.opacity = '0';
      }, 10);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    };
    
    const hero = heroRef.current;
    hero?.addEventListener('click', handleClick);
    
    return () => {
      hero?.removeEventListener('click', handleClick);
    };
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

  // Animation variants
  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  // Inline styles for the scroll button to ensure it works properly
  const scrollButtonStyle = {
    base: {
      backgroundColor: '#2563eb',
      boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)',
    },
    hover: {
      backgroundColor: '#f97316',
      boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.3)',
    }
  };

  return (
    <div className="relative" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"></div>
        
        {/* Animated background circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <section className="relative min-h-[80vh] flex items-center justify-center px-4">
        <div className="container max-w-7xl mx-auto z-10">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.div
              className="relative mb-2"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <span className="inline-block text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4 px-4 py-1 border border-indigo-700 rounded-full bg-indigo-900/30">
                Media Center
              </span>
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <span className="inline-block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white">
                  {data.title}
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-indigo-100/90 mb-8 font-light"
              initial="hidden"
              animate="visible"
              variants={descriptionVariants}
            >
              {data.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6 flex items-center gap-2 rounded-lg">
                  Latest News
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover="hover"
                whileTap="tap"
              >

              </motion.div>
            </motion.div>
          </div>
        </div>
      
        {/* Decorative element - Bottom right */}
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/20 via-purple-500/10 to-transparent rounded-tl-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Decorative element - Top left */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-transparent rounded-br-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Animated rings */}
        <div className="absolute bottom-10 right-10 flex items-center justify-center">
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-indigo-500/30"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-purple-500/30"
            animate={{ scale: [1.2, 2, 1.2], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Scroll to top button - Using inline styles and Framer Motion for reliable hover effect */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 text-white p-3 rounded-full z-50"
            style={scrollButtonStyle.base}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              ...scrollButtonStyle.hover
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaHero;