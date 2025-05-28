
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
//   onBusinessClick?: () => void;  // Optional prop for business button click
//   onAboutClick?: () => void;     // Optional prop for about button click
// }

// // AnimatedCounter component
// const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
//   const [displayValue, setDisplayValue] = useState("0");
//   const ref = useRef(null);
//   const isInView = useInView(ref);
  
//   useEffect(() => {
//     // Only start counter when element is in view
//     if (!isInView) return;
    
//     let numericValue = 0;
//     const finalValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    
//     if (isNaN(finalValue)) {
//       setDisplayValue(value);
//       return;
//     }
    
//     // Suffix (K, M, etc.)
//     const suffix = value.replace(/[0-9]/g, "");
    
//     const start = performance.now();
//     const updateCounter = (timestamp: number) => {
//       const elapsed = timestamp - start;
//       const progress = Math.min(elapsed / (duration * 1000), 1);
      
//       // Easing function for smoother animation
//       const easeOutQuad = progress * (2 - progress);
      
//       numericValue = Math.floor(easeOutQuad * finalValue);
//       setDisplayValue(`${numericValue}${suffix}`);
      
//       if (progress < 1) {
//         requestAnimationFrame(updateCounter);
//       } else {
//         setDisplayValue(value); // Ensure we end on the exact final value
//       }
//     };
    
//     requestAnimationFrame(updateCounter);
//   }, [value, duration, isInView]);
  
//   return <span ref={ref}>{displayValue}</span>;
// };

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts, onBusinessClick, onAboutClick }) => {
//   // State for controlling background image rotation
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   // Scroll state for scroll-to-top button
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Get all images from all heroes
//   const backgroundImages = heroes.reduce((allImages: string[], hero) => {
//     if (hero.images && hero.images.length > 0) {
//       // Add base URL to images paths and remove 'public/' prefix
//       const heroImages = hero.images.map(imagePath => {
//         // Remove 'public/' from the beginning of the path if it exists
//         const cleanPath = imagePath.replace(/^public\//, '');
//         return `http://api.pg-admin.57.155.183.218.nip.io/${cleanPath}`;
//       });
//       return [...allImages, ...heroImages];
//     }
//     return allImages;
//   }, []);

//   // Fallback images if no API images are available
//   const fallbackImages = [
//     "/images/landing-carosel/landing-page3.jpg",
//     "/images/landing-carosel/landing-page2.jpeg",
//     "/images/landing-carosel/landing-page1.jpeg",
//     "/images/landing-carosel/landing-page4.jpg",
//     "/images/landing-carosel/landing-page5.jpg",
//     "/images/landing-carosel/landing-page6.png",
//   ];

//   // Use API images if available, otherwise use fallback images
//   const imagesToShow = backgroundImages.length > 0 ? backgroundImages : fallbackImages;

//   // Auto-rotate background images
//   useEffect(() => {
//     if (imagesToShow.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === imagesToShow.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change image every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [imagesToShow.length]);

//   // Effect to handle scroll and show/hide scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       // Show button when scrolled down more than 300px
//       setShowScrollTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Function to scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Sort heroes by index and use the first one for main content
//   const sortedHeroes = [...heroes].sort((a, b) => a.index - b.index);
//   const mainHero = sortedHeroes[0];
  
//   // Use all available impacts for the stats cards, but limit to 4
//   const displayStats = impacts.slice(0, 4);

//   // Format the title to match previous design (with line break and colored text)
//   const formatTitle = () => {
//     if (!mainHero?.title) return { firstPart: "", lastPart: "" };
    
//     const titleParts = mainHero.title.split('\n');
//     if (titleParts.length > 1) {
//       return {
//         firstPart: titleParts[0],
//         lastPart: titleParts[1]
//       };
//     }
    
//     // If no line break, try to split by last space
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
//       {/* High Resolution Background Image Slider */}
//       <div className="absolute inset-0">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           >
//             <Image
//               src={imagesToShow[currentImageIndex]}
//               alt="Hero background"
//               fill
//               className="object-cover object-center"
//               priority
//               quality={95}
//               onError={(e) => {
//                 console.error(`Image failed to load: ${imagesToShow[currentImageIndex]}`);
//                 console.error('Error details:', e);
//               }}
//             />
            
//             {/* Simple dark overlay for text readability */}
//             <div className="absolute inset-0 bg-black/40" />
//           </motion.div>
//         </AnimatePresence>
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

//           {/* Stats Cards - Modified to have left-to-right hover effect */}
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
//                 {/* Background transition effect */}
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
//       {/* Scroll to top button - Blue by default, orange on hover */}
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
//   const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

//   // Fallback images - these should always be available
//   const fallbackImages = [
//     "/images/landing-carosel/landing-page3.jpg",
//     "/images/landing-carosel/landing-page2.jpeg",
//     "/images/landing-carosel/landing-page1.jpeg",
//     "/images/landing-carosel/landing-page4.jpg",
//     "/images/landing-carosel/landing-page5.jpg",
//     "/images/landing-carosel/landing-page6.png",
//   ];

//   // Process API images - try multiple URL formats
//   const processApiImages = (heroes: Hero[]): string[] => {
//     const baseUrls = [
//       'http://api.pg-admin.57.155.183.218.nip.io',
//       'https://api.pg-admin.57.155.183.218.nip.io',
//       'http://57.155.183.218',
//       'https://57.155.183.218'
//     ];

//     return heroes.reduce((allImages: string[], hero) => {
//       if (hero.images && hero.images.length > 0) {
//         const heroImages = hero.images.flatMap(imagePath => {
//           // Remove 'public/' prefix and ensure proper URL construction
//           const cleanPath = imagePath.replace(/^public\//, '');
          
//           // Try each base URL format
//           return baseUrls.map(baseUrl => `${baseUrl}/${cleanPath}`);
//         });
//         return [...allImages, ...heroImages];
//       }
//       return allImages;
//     }, []);
//   };

//   const apiImages = processApiImages(heroes);
  
//   // Get working images - prioritize successfully loaded ones
//   const getWorkingImages = (): string[] => {
//     // First, try to use images that have successfully loaded
//     const workingApiImages = apiImages.filter(img => 
//       loadedImages.has(img) && !failedImages.has(img)
//     );
    
//     if (workingApiImages.length > 0) {
//       return workingApiImages;
//     }
    
//     // If no loaded images, try untested API images
//     const untestedApiImages = apiImages.filter(img => 
//       !failedImages.has(img) && !loadedImages.has(img)
//     );
    
//     if (untestedApiImages.length > 0) {
//       return untestedApiImages.slice(0, 5); // Limit to first 5 to avoid too many requests
//     }
    
//     // Final fallback to local images
//     return fallbackImages;
//   };

//   const imagesToShow = getWorkingImages();

//   // Auto-rotate background images
//   useEffect(() => {
//     if (imagesToShow.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === imagesToShow.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [imagesToShow.length]);

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

//   // Enhanced image error handling with retry logic
//   const handleImageError = (imageSrc: string) => {
//     console.warn(`Image failed to load: ${imageSrc}`);
    
//     // Mark this image as failed
//     setFailedImages(prev => new Set([...prev, imageSrc]));
    
//     // If all images from current set have failed, force a re-render with new options
//     const currentWorkingImages = getWorkingImages();
//     const allCurrentImagesFailed = currentWorkingImages.every(img => failedImages.has(img));
    
//     if (allCurrentImagesFailed && !loadedImages.size) {
//       console.log('All current images failed, falling back to local images');
//       // This will trigger getWorkingImages to return fallback images
//     }
//   };

//   const handleImageLoad = (imageSrc: string) => {
//     console.log(`Image loaded successfully: ${imageSrc}`);
//     setLoadedImages(prev => new Set([...prev, imageSrc]));
//   };

//   // Test image URLs function
//   const testImageUrl = async (url: string): Promise<boolean> => {
//     try {
//       const response = await fetch(url, { method: 'HEAD' });
//       return response.ok;
//     } catch (error) {
//       return false;
//     }
//   };

//   // Preload and test images on mount
//   useEffect(() => {
//     const testImages = async () => {
//       const testPromises = apiImages.slice(0, 3).map(async (url) => {
//         const isValid = await testImageUrl(url);
//         if (isValid) {
//           setLoadedImages(prev => new Set([...prev, url]));
//         } else {
//           setFailedImages(prev => new Set([...prev, url]));
//         }
//       });
      
//       await Promise.all(testPromises);
//     };

//     if (apiImages.length > 0) {
//       testImages();
//     }
//   }, [heroes]); // Re-run when heroes data changes

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
//       {/* Background Image Slider with Enhanced Error Handling */}
//       <div className="absolute inset-0">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={`${currentImageIndex}-${imagesToShow[currentImageIndex]}`}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           >
//             <Image
//               src={imagesToShow[currentImageIndex]}
//               alt="Hero background"
//               fill
//               className="object-cover object-center"
//               priority
//               quality={95}
//               onError={() => handleImageError(imagesToShow[currentImageIndex])}
//               onLoad={() => handleImageLoad(imagesToShow[currentImageIndex])}
//               // Add loading fallback
//               placeholder="blur"
//               blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyiwOTqQOh+NGu+0l0aRcJJqfyC22/Ax3L6sRGc5Z9gTXaY5JBCkstqNqvTJJQHVFa2VsCvJv7G6wV7l0DU2wNgb8ck9HoLjJHy4onpYdq7A2BJ8HBh3vGnVn4DCSZ9hXWV+uTfQ8hh3o8kVMjW8+xNgXPSiQqQOg+z/9k="
//             />
            
//             {/* Dark overlay for text readability */}
//             <div className="absolute inset-0 bg-black/40" />
//           </motion.div>
//         </AnimatePresence>
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

//       {/* Debug info - remove in production */}
//       {process.env.NODE_ENV === 'development' && (
//         <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50 max-w-xs">
//           <div>Total API Images: {apiImages.length}</div>
//           <div>Failed: {failedImages.size}</div>
//           <div>Loaded: {loadedImages.size}</div>
//           <div>Images to Show: {imagesToShow.length}</div>
//           <div className="truncate">Current: {imagesToShow[currentImageIndex]}</div>
//           <div className="mt-2">
//             <div className="text-green-400">✓ Loaded Images:</div>
//             {Array.from(loadedImages).slice(0, 2).map((img, i) => (
//               <div key={i} className="truncate text-xs">{img.split('/').pop()}</div>
//             ))}
//           </div>
//           <div className="mt-1">
//             <div className="text-red-400">✗ Failed Images:</div>
//             {Array.from(failedImages).slice(0, 2).map((img, i) => (
//               <div key={i} className="truncate text-xs">{img.split('/').pop()}</div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HomeHero;



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
  onBusinessClick?: () => void;
  onAboutClick?: () => void;
}

// AnimatedCounter component
const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (!isInView) return;
    
    let numericValue = 0;
    const finalValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    
    if (isNaN(finalValue)) {
      setDisplayValue(value);
      return;
    }
    
    const suffix = value.replace(/[0-9]/g, "");
    
    const start = performance.now();
    const updateCounter = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutQuad = progress * (2 - progress);
      
      numericValue = Math.floor(easeOutQuad * finalValue);
      setDisplayValue(`${numericValue}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [value, duration, isInView]);
  
  return <span ref={ref}>{displayValue}</span>;
};

const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts, onBusinessClick, onAboutClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Process API images - try multiple URL formats
  const processApiImages = (heroes: Hero[]): string[] => {
    const baseUrls = [
      'http://api.pg-admin.57.155.183.218.nip.io',
      'https://api.pg-admin.57.155.183.218.nip.io',
      'http://57.155.183.218:7000',
      'https://57.155.183.218:7000'
    ];

    return heroes.reduce((allImages: string[], hero) => {
      if (hero.images && hero.images.length > 0) {
        const heroImages = hero.images.flatMap(imagePath => {
          // Remove 'public/' prefix and ensure proper URL construction
          const cleanPath = imagePath.replace(/^public\//, '');
          
          // Try each base URL format
          return baseUrls.map(baseUrl => `${baseUrl}/${cleanPath}`);
        });
        return [...allImages, ...heroImages];
      }
      return allImages;
    }, []);
  };

  const apiImages = processApiImages(heroes);
  
  // Get working images - only API images, no fallbacks
  const getWorkingImages = (): string[] => {
    // First, try to use images that have successfully loaded
    const workingApiImages = apiImages.filter(img => 
      loadedImages.has(img) && !failedImages.has(img)
    );
    
    if (workingApiImages.length > 0) {
      return workingApiImages;
    }
    
    // If no loaded images, try untested API images
    const untestedApiImages = apiImages.filter(img => 
      !failedImages.has(img) && !loadedImages.has(img)
    );
    
    if (untestedApiImages.length > 0) {
      return untestedApiImages.slice(0, 5); // Limit to first 5 to avoid too many requests
    }
    
    // Return empty array if no API images are available
    return [];
  };

  const imagesToShow = getWorkingImages();

  // Auto-rotate background images only if we have images
  useEffect(() => {
    if (imagesToShow.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === imagesToShow.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imagesToShow.length]);

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

  // Enhanced image error handling with retry logic
  const handleImageError = (imageSrc: string) => {
    console.warn(`Image failed to load: ${imageSrc}`);
    
    // Mark this image as failed
    setFailedImages(prev => new Set([...prev, imageSrc]));
  };

  const handleImageLoad = (imageSrc: string) => {
    console.log(`Image loaded successfully: ${imageSrc}`);
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  };

  // Test image URLs function
  const testImageUrl = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  // Preload and test images on mount
  useEffect(() => {
    const testImages = async () => {
      const testPromises = apiImages.slice(0, 3).map(async (url) => {
        const isValid = await testImageUrl(url);
        if (isValid) {
          setLoadedImages(prev => new Set([...prev, url]));
        } else {
          setFailedImages(prev => new Set([...prev, url]));
        }
      });
      
      await Promise.all(testPromises);
    };

    if (apiImages.length > 0) {
      testImages();
    }
  }, [heroes]); // Re-run when heroes data changes

  // Sort heroes and prepare content
  const sortedHeroes = [...heroes].sort((a, b) => a.index - b.index);
  const mainHero = sortedHeroes[0];
  const displayStats = impacts.slice(0, 4);

  const formatTitle = () => {
    if (!mainHero?.title) return { firstPart: "", lastPart: "" };
    
    const titleParts = mainHero.title.split('\n');
    if (titleParts.length > 1) {
      return {
        firstPart: titleParts[0],
        lastPart: titleParts[1]
      };
    }
    
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
      {/* Background Image Slider - Only API Images */}
      <div className="absolute inset-0">
        {imagesToShow.length > 0 ? (
          <AnimatePresence initial={false}>
            <motion.div
              key={`${currentImageIndex}-${imagesToShow[currentImageIndex]}`}
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
                onError={() => handleImageError(imagesToShow[currentImageIndex])}
                onLoad={() => handleImageLoad(imagesToShow[currentImageIndex])}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyiwOTqQOh+NGu+0l0aRcJJqfyC22/Ax3L6sRGc5Z9gTXaY5JBCkstqNqvTJJQHVFa2VsCvJv7G6wV7l0DU2wNgb8ck9HoLjJHy4onpYdq7A2BJ8HBh3vGnVn4DCSZ9hXWV+uTfQ8hh3o8kVMjW8+xNgXPSiQqQOg+z/9k="
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>
        ) : (
          // Show a solid background when no images are available
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        )}
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

          {/* Stats Cards */}
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

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50 max-w-xs">
          <div>Total API Images: {apiImages.length}</div>
          <div>Failed: {failedImages.size}</div>
          <div>Loaded: {loadedImages.size}</div>
          <div>Images to Show: {imagesToShow.length}</div>
          {imagesToShow.length > 0 && (
            <div className="truncate">Current: {imagesToShow[currentImageIndex]}</div>
          )}
          <div className="mt-2">
            <div className="text-green-400">✓ Loaded Images:</div>
            {Array.from(loadedImages).slice(0, 2).map((img, i) => (
              <div key={i} className="truncate text-xs">{img.split('/').pop()}</div>
            ))}
          </div>
          <div className="mt-1">
            <div className="text-red-400">✗ Failed Images:</div>
            {Array.from(failedImages).slice(0, 2).map((img, i) => (
              <div key={i} className="truncate text-xs">{img.split('/').pop()}</div>
            ))}
          </div>
          {imagesToShow.length === 0 && (
            <div className="text-yellow-400 mt-2">⚠ No API images available - showing gradient background</div>
          )}
        </div>
      )}
    </section>
  );
};

export default HomeHero;