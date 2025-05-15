
'use client';
// src/components/home/HomeHero.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
  images: string[];
}

interface Impact {
  id: number;
  title: string;
  number: string;
  description: string;
}

interface HomeHeroProps {
  heroes: Hero[];
  impacts: Impact[];
  onBusinessClick?: () => void;  // Optional prop for business button click
  onAboutClick?: () => void;     // Optional prop for about button click
}

// AnimatedCounter component
const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    // Only start counter when element is in view
    if (!isInView) return;
    
    let numericValue = 0;
    const finalValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    
    if (isNaN(finalValue)) {
      setDisplayValue(value);
      return;
    }
    
    // Suffix (K, M, etc.)
    const suffix = value.replace(/[0-9]/g, "");
    
    const start = performance.now();
    const updateCounter = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuad = progress * (2 - progress);
      
      numericValue = Math.floor(easeOutQuad * finalValue);
      setDisplayValue(`${numericValue}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value); // Ensure we end on the exact final value
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [value, duration, isInView]);
  
  return <span ref={ref}>{displayValue}</span>;
};

const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts, onBusinessClick, onAboutClick }) => {
  // State for controlling background image rotation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Scroll state for scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get all images from all heroes
  const backgroundImages = heroes.reduce((allImages: string[], hero) => {
    if (hero.images && hero.images.length > 0) {
      // Add base URL to images paths and remove 'public/' prefix
      const heroImages = hero.images.map(imagePath => {
        // Remove 'public/' from the beginning of the path if it exists
        const cleanPath = imagePath.replace(/^public\//, '');
        return `http://localhost:7000/${cleanPath}`;
      });
      return [...allImages, ...heroImages];
    }
    return allImages;
  }, []);

  // Fallback images if no API images are available
  const fallbackImages = [
    "/images/landing-carosel/landing-page3.jpg",
    "/images/landing-carosel/landing-page2.jpeg",
    "/images/landing-carosel/landing-page1.jpeg",
    "/images/landing-carosel/landing-page4.jpg",
    "/images/landing-carosel/landing-page5.jpg",
    "/images/landing-carosel/landing-page6.png",
  ];

  // Use API images if available, otherwise use fallback images
  const imagesToShow = backgroundImages.length > 0 ? backgroundImages : fallbackImages;

  // Auto-rotate background images
  useEffect(() => {
    if (imagesToShow.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === imagesToShow.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [imagesToShow.length]);

  // Effect to handle scroll and show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Sort heroes by index and use the first one for main content
  const sortedHeroes = [...heroes].sort((a, b) => a.index - b.index);
  const mainHero = sortedHeroes[0];
  
  // Use all available impacts for the stats cards, but limit to 4
  const displayStats = impacts.slice(0, 4);

  // Format the title to match previous design (with line break and colored text)
  const formatTitle = () => {
    if (!mainHero?.title) return { firstPart: "", lastPart: "" };
    
    const titleParts = mainHero.title.split('\n');
    if (titleParts.length > 1) {
      return {
        firstPart: titleParts[0],
        lastPart: titleParts[1]
      };
    }
    
    // If no line break, try to split by last space
    const words = mainHero.title.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      return {
        firstPart: words.join(' '),
        lastPart: lastWord || ""
      };
    }
    
    return { firstPart: mainHero.title, lastPart: "" };
  };
  
  const { firstPart, lastPart } = formatTitle();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* High Resolution Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={imagesToShow[currentImageIndex]}
              alt="Hero background"
              fill
              className="object-cover object-center"
              priority
              quality={95}
              onError={(e) => {
                console.error(`Image failed to load: ${imagesToShow[currentImageIndex]}`);
                console.error('Error details:', e);
              }}
            />
            
            {/* Simple dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {firstPart}<br />
              <span className="text-company-orange">{lastPart}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl">
              {mainHero?.description || ""}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={onBusinessClick}
                className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                <span className="relative z-10">Explore Our Businesses</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <button 
                onClick={onAboutClick}
                className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                <span className="relative z-10">Learn More About Us</span>
              </button>
            </div>
          </motion.div>

          {/* Stats Cards - Modified to have left-to-right hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20"
          >
            {displayStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border border-white rounded-xl p-6 text-center group relative overflow-hidden"
              >
                {/* Background transition effect */}
                <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-500 ease-in-out group-hover:w-full -z-10"></span>
                
                <div className="text-4xl font-bold text-white mb-2 relative z-10">
                  <AnimatedCounter value={stat.number} duration={1.5 + index * 0.2} />
                </div>
                <div className="text-white text-base relative z-10">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeHero;