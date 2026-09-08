
// 'use client';
// // src/components/home/HomeHero.tsx
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { ArrowRight, ChevronUp } from 'lucide-react';
// import Image from 'next/image';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// interface Impact {
//   id: number;
//   title: string;
//   number: string;
//   description: string;
// }

// interface HomeHeroProps {
//   heroes: Hero[];
//   impacts: Impact[];
//   onBusinessClick?: () => void;
//   onAboutClick?: () => void;
// }

// // AnimatedCounter component
// const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
//   const [displayValue, setDisplayValue] = useState("0");
//   const ref = useRef(null);
//   const isInView = useInView(ref);
  
//   useEffect(() => {
//     if (!isInView) return;
    
//     let numericValue = 0;
//     const finalValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    
//     if (isNaN(finalValue)) {
//       setDisplayValue(value);
//       return;
//     }
    
//     const suffix = value.replace(/[0-9]/g, "");
    
//     const start = performance.now();
//     const updateCounter = (timestamp: number) => {
//       const elapsed = timestamp - start;
//       const progress = Math.min(elapsed / (duration * 1000), 1);
      
//       const easeOutQuad = progress * (2 - progress);
      
//       numericValue = Math.floor(easeOutQuad * finalValue);
//       setDisplayValue(`${numericValue}${suffix}`);
      
//       if (progress < 1) {
//         requestAnimationFrame(updateCounter);
//       } else {
//         setDisplayValue(value);
//       }
//     };
    
//     requestAnimationFrame(updateCounter);
//   }, [value, duration, isInView]);
  
//   return <span ref={ref}>{displayValue}</span>;
// };

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts, onBusinessClick, onAboutClick }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [workingImages, setWorkingImages] = useState<string[]>([]);
//   const [imageStatus, setImageStatus] = useState<{[key: string]: 'loading' | 'success' | 'error'}>({});

//   // Fixed API base URL
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';

//   // Process API images with the correct URL format
//   const processApiImages = (heroes: Hero[]): string[] => {
//     const allImages: string[] = [];
    
//     heroes.forEach(hero => {
//       if (hero.images && hero.images.length > 0) {
//         hero.images.forEach(imagePath => {
//           // Your API returns paths like: "public/uploads/group/hero/image.jpg"
//           // Your server serves at: /public/uploads/group/hero/image.jpg
//           // So we construct: http://api.../public/uploads/group/hero/image.jpg
          
//           let finalUrl: string;
          
//           if (imagePath.startsWith('public/')) {
//             // Path already has 'public/' prefix
//             finalUrl = `${API_BASE_URL}/${imagePath}`;
//           } else if (imagePath.startsWith('uploads/')) {
//             // Path has 'uploads/' prefix, add 'public/'
//             finalUrl = `${API_BASE_URL}/public/${imagePath}`;
//           } else {
//             // Path has no prefix, add 'public/uploads/'
//             finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
//           }
          
//           allImages.push(finalUrl);
//         });
//       }
//     });
    
//     return allImages;
//   };

//   const allImages = processApiImages(heroes);

//   // Test image URLs and filter working ones
//   useEffect(() => {
//     const testImages = async () => {
//       const workingUrls: string[] = [];
      
//       // Test each image URL
//       for (const imageUrl of allImages) {
//         try {
//           const response = await fetch(imageUrl, { 
//             method: 'HEAD',
//             mode: 'cors'
//           });
          
//           if (response.ok) {
//             workingUrls.push(imageUrl);
//             setImageStatus(prev => ({ ...prev, [imageUrl]: 'success' }));
//           } else {
//             setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
//           }
//         } catch (error) {
//           console.warn(`Failed to load image: ${imageUrl}`, error);
//           setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
//         }
//       }
      
//       setWorkingImages(workingUrls);
//     };

//     if (allImages.length > 0) {
//       testImages();
//     }
//   }, [allImages.join(',')]); // Re-run when images change

//   // Auto-rotate background images
//   useEffect(() => {
//     if (workingImages.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === workingImages.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [workingImages.length]);

//   // Handle scroll for scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Sort heroes and prepare content
//   const sortedHeroes = [...heroes].sort((a, b) => a.index - b.index);
//   const mainHero = sortedHeroes[0];
//   const displayStats = impacts.slice(0, 4);

//   const formatTitle = () => {
//     if (!mainHero?.title) return { firstPart: "", lastPart: "" };
    
//     const titleParts = mainHero.title.split('\n');
//     if (titleParts.length > 1) {
//       return {
//         firstPart: titleParts[0],
//         lastPart: titleParts[1]
//       };
//     }
    
//     const words = mainHero.title.split(' ');
//     if (words.length > 1) {
//       const lastWord = words.pop();
//       return {
//         firstPart: words.join(' '),
//         lastPart: lastWord || ""
//       };
//     }
    
//     return { firstPart: mainHero.title, lastPart: "" };
//   };
  
//   const { firstPart, lastPart } = formatTitle();

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image Slider */}
//       <div className="absolute inset-0">
//         {workingImages.length > 0 ? (
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={`${currentImageIndex}-${workingImages[currentImageIndex]}`}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             >
//               <Image
//                 src={workingImages[currentImageIndex]}
//                 alt="Hero background"
//                 fill
//                 className="object-cover object-center"
//                 priority={currentImageIndex === 0}
//                 quality={85}
//                 sizes="100vw"
//                 onError={(e) => {
//                   console.error(`Image failed to load: ${workingImages[currentImageIndex]}`);
//                 }}
//                 onLoad={() => {
//                   console.log(`Image loaded successfully: ${workingImages[currentImageIndex]}`);
//                 }}
//               />
              
//               {/* Dark overlay for text readability */}
//               <div className="absolute inset-0 bg-black/40" />
//             </motion.div>
//           </AnimatePresence>
//         ) : (
//           // Fallback background when no images are available
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
//         )}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white space-y-6"
//           >
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//               {firstPart}<br />
//               <span className="text-company-orange">{lastPart}</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white max-w-2xl">
//               {mainHero?.description || ""}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button 
//                 onClick={onBusinessClick}
//                 className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
//               >
//                 <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
//                 <span className="relative z-10">Explore Our Businesses</span>
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//               </button>
//               <button 
//                 onClick={onAboutClick}
//                 className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
//               >
//                 <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
//                 <span className="relative z-10">Learn More About Us</span>
//               </button>
//             </div>
//           </motion.div>

//           {/* Stats Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20"
//           >
//             {displayStats.map((stat, index) => (
//               <motion.div
//                 key={stat.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 className="border border-white rounded-xl p-6 text-center group relative overflow-hidden"
//               >
//                 <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-500 ease-in-out group-hover:w-full -z-10"></span>
                
//                 <div className="text-4xl font-bold text-white mb-2 relative z-10">
//                   <AnimatedCounter value={stat.number} duration={1.5 + index * 0.2} />
//                 </div>
//                 <div className="text-white text-base relative z-10">
//                   {stat.title}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll to top button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 z-50 hover:bg-company-orange hover:shadow-orange-500/30 transition-colors duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronUp className="w-5 h-5" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// };

// export default HomeHero;






'use client';
// src/components/home/HomeHero.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  onBusinessClick?: () => void;
  onAboutClick?: () => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts, onBusinessClick, onAboutClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [workingImages, setWorkingImages] = useState<string[]>([]);
  const [imageStatus, setImageStatus] = useState<{[key: string]: 'loading' | 'success' | 'error'}>({});

  // Fixed API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';

  // Process API images with the correct URL format
  const processApiImages = (heroes: Hero[]): string[] => {
    const allImages: string[] = [];
    
    heroes.forEach(hero => {
      if (hero.images && hero.images.length > 0) {
        hero.images.forEach(imagePath => {
          // Your API returns paths like: "public/uploads/group/hero/image.jpg"
          // Your server serves at: /public/uploads/group/hero/image.jpg
          // So we construct: http://api.../public/uploads/group/hero/image.jpg
          
          let finalUrl: string;
          
          if (imagePath.startsWith('public/')) {
            // Path already has 'public/' prefix
            finalUrl = `${API_BASE_URL}/${imagePath}`;
          } else if (imagePath.startsWith('uploads/')) {
            // Path has 'uploads/' prefix, add 'public/'
            finalUrl = `${API_BASE_URL}/public/${imagePath}`;
          } else {
            // Path has no prefix, add 'public/uploads/'
            finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
          }
          
          allImages.push(finalUrl);
        });
      }
    });
    
    return allImages;
  };

  const allImages = processApiImages(heroes);

  // Test image URLs and filter working ones
  useEffect(() => {
    const testImages = async () => {
      const workingUrls: string[] = [];
      
      // Test each image URL
      for (const imageUrl of allImages) {
        try {
          const response = await fetch(imageUrl, { 
            method: 'HEAD',
            mode: 'cors'
          });
          
          if (response.ok) {
            workingUrls.push(imageUrl);
            setImageStatus(prev => ({ ...prev, [imageUrl]: 'success' }));
          } else {
            setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
          }
        } catch (error) {
          console.warn(`Failed to load image: ${imageUrl}`, error);
          setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
        }
      }
      
      setWorkingImages(workingUrls);
    };

    if (allImages.length > 0) {
      testImages();
    }
  }, [allImages.join(',')]); // Re-run when images change

  // Auto-rotate background images
  useEffect(() => {
    if (workingImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === workingImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [workingImages.length]);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {workingImages.length > 0 ? (
          <AnimatePresence initial={false}>
            <motion.div
              key={`${currentImageIndex}-${workingImages[currentImageIndex]}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                src={workingImages[currentImageIndex]}
                alt="Hero background"
                fill
                className="object-cover object-center"
                priority={currentImageIndex === 0}
                quality={85}
                sizes="100vw"
                onError={(e) => {
                  console.error(`Image failed to load: ${workingImages[currentImageIndex]}`);
                }}
                onLoad={() => {
                  console.log(`Image loaded successfully: ${workingImages[currentImageIndex]}`);
                }}
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>
        ) : (
          // Fallback background when no images are available
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        )}
      </div>

      {/* Centered Buttons at Bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
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
        </motion.div>
      </div>

      {/* Scroll to top button */}
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