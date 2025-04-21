// // components/company/CompanyHero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { CompanyHeroProps } from '@/types/company';

// const CompanyHero = ({ data }: CompanyHeroProps) => {
//   return (
//     <section className="relative h-screen">
//       <ParallaxBanner className="h-full">
//         {/* Background Image Layer */}
//         <ParallaxBannerLayer speed={-20}>
//           <div className="absolute inset-0">
//             <Image
//               src={data.heroImage}
//               alt={data.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </ParallaxBannerLayer>

//         {/* Gradient Overlay Layer */}
//         <ParallaxBannerLayer speed={-10}>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//         </ParallaxBannerLayer>

//         {/* Content Layer */}
//         <ParallaxBannerLayer speed={-5}>
//           <div className="relative h-full container mx-auto px-4">
//             <div className="flex flex-col justify-center h-full max-w-3xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="mb-8"
//               >
//                 <Image
//                   src={data.logo}
//                   alt={`${data.name} logo`}
//                   width={180}
//                   height={180}
//                   className="rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm"
//                 />
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-6xl font-bold text-white mb-6"
//               >
//                 {data.name}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-xl text-gray-200"
//               >
//                 {data.shortName} | {data.category}
//               </motion.p>
//             </div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Scroll Indicator Layer */}
//         <ParallaxBannerLayer speed={5}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="animate-bounce">
//               <svg 
//                 className="w-6 h-6 text-white"
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3" 
//                 />
//               </svg>
//             </div>
//           </motion.div>
//         </ParallaxBannerLayer>
//       </ParallaxBanner>
//     </section>
//   );
// };

// export default CompanyHero;



// // components/company/CompanyHero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

// interface CompanyHeroProps {
//   data: {
//     heroImage: string;
//     logo: string;
//     name: string;
//     shortName: string;
//     category: string;
//   };
// }

// const CompanyHero = ({ data }: CompanyHeroProps) => {
//   return (
//     <section className="relative h-screen">
//       <ParallaxBanner className="h-full">
//         {/* Background Image Layer */}
//         <ParallaxBannerLayer speed={-20}>
//           <div className="absolute inset-0">
//             <Image
//               src={data.heroImage}
//               alt={data.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </ParallaxBannerLayer>

//         {/* Gradient Overlay Layer */}
//         <ParallaxBannerLayer speed={-10}>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//         </ParallaxBannerLayer>

//         {/* Content Layer */}
//         <ParallaxBannerLayer speed={-5}>
//           <div className="relative h-full container mx-auto px-4">
//             <div className="flex flex-col justify-center h-full max-w-3xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="mb-8"
//               >
//                 {/* <Image
//                   src={data.logo}
//                   alt={`${data.name} logo`}
//                   width={180}
//                   height={180}
//                   className="rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm"
//                 /> */}
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-6xl font-bold text-white mb-6"
//               >
//                 {data.name}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-xl text-gray-200"
//               >
//                 {data.shortName} | {data.category}
//               </motion.p>
//             </div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Scroll Indicator Layer */}
//         <ParallaxBannerLayer speed={5}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="animate-bounce">
//               <svg 
//                 className="w-6 h-6 text-white"
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3" 
//                 />
//               </svg>
//             </div>
//           </motion.div>
//         </ParallaxBannerLayer>
//       </ParallaxBanner>
//     </section>
//   );
// };

// export default CompanyHero;



// // components/company/CompanyHero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { useEffect, useState } from 'react';

// interface CompanyHeroProps {
//   data: {
//     heroImage: string;
//     logo: string;
//     name: string;
//     shortName: string;
//     category: string;
//   };
// }

// const CompanyHero = ({ data }: CompanyHeroProps) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Set loaded state after component mounts to trigger animations
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       <ParallaxBanner className="h-full">
//         {/* Background Image Layer with enhanced effects */}
//         <ParallaxBannerLayer speed={-20}>
//           <div className="absolute inset-0">
//             {/* Preloader overlay that fades out */}
//             <motion.div 
//               initial={{ opacity: 1 }}
//               animate={{ opacity: 0 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               className="absolute inset-0 bg-black z-10"
//             />
            
//             {/* Main background image with subtle zoom effect */}
//             <motion.div
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 7, ease: "easeOut" }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={data.heroImage}
//                 alt={data.name}
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="100vw"
//                 style={{ objectPosition: 'center center' }}
//                 onLoadingComplete={() => setIsLoaded(true)}
//               />
              
//               {/* Image quality enhancer overlay */}
//               <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
//             </motion.div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Enhanced Gradient Overlay Layer */}
//         <ParallaxBannerLayer speed={-10}>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          
//           {/* Stylish geometric accent */}
//           <div className="absolute top-0 right-0 w-2/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl opacity-40 transform -translate-y-1/4 translate-x-1/4 rounded-full" />
//         </ParallaxBannerLayer>

//         {/* Content Layer with enhanced styling */}
//         <ParallaxBannerLayer speed={-5}>
//           <div className="relative h-full container mx-auto px-4">
//             <div className="flex flex-col justify-center h-full max-w-3xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="mb-8 relative"
//               >
               
//               </motion.div>

//               <motion.div 
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="mb-6"
//               >
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                   {data.name.split(' ').map((word, index) => (
//                     <motion.span
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
//                       transition={{ duration: 0.7, delay: 1 + (index * 0.1) }}
//                       className="inline-block mr-4"
//                     >
//                       {word}
//                     </motion.span>
//                   ))}
//                 </h1>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
//                 transition={{ duration: 0.8, delay: 1.5 }}
//                 className="relative"
//               >
//                 {/* Elegant separator line */}
//                 <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 opacity-80" />
                
//                 <p className="text-xl text-gray-200 backdrop-blur-sm bg-black/10 inline-block px-4 py-2 rounded-lg">
//                   <span className="text-blue-300 mr-2">{data.shortName}</span>
//                   <span className="text-gray-400">|</span>
//                   <span className="ml-2 text-white/80">{data.category}</span>
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Enhanced Scroll Indicator */}
//         <ParallaxBannerLayer speed={5}>
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
//             transition={{ duration: 1, delay: 2 }}
//             className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity, 
//                 repeatType: "loop", 
//                 ease: "easeInOut" 
//               }}
//               className="flex flex-col items-center"
//             >
//               <p className="text-white/60 text-sm mb-2 tracking-wider font-light">SCROLL DOWN</p>
//               <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
//                 <motion.div 
//                   animate={{ y: [0, 16, 0] }}
//                   transition={{ 
//                     duration: 2, 
//                     repeat: Infinity, 
//                     repeatType: "loop", 
//                     ease: "easeInOut",
//                     delay: 0.2 
//                   }}
//                   className="w-1.5 h-3 bg-white rounded-full opacity-70"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </ParallaxBannerLayer>

//         {/* Floating particle effects for depth */}
//         <ParallaxBannerLayer speed={10}>
//           <div className="absolute inset-0 pointer-events-none">
//             {Array.from({ length: 20 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute rounded-full bg-white"
//                 initial={{
//                   x: Math.random() * 100 + "%",
//                   y: Math.random() * 100 + "%",
//                   scale: Math.random() * 0.5 + 0.5,
//                   opacity: Math.random() * 0.3,
//                 }}
//                 animate={{
//                   y: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                   x: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                   opacity: [0.1, 0.3, 0.1],
//                 }}
//                 transition={{
//                   duration: Math.random() * 20 + 20,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//                 style={{
//                   width: Math.random() * 5 + 2 + "px",
//                   height: Math.random() * 5 + 2 + "px",
//                 }}
//               />
//             ))}
//           </div>
//         </ParallaxBannerLayer>
//       </ParallaxBanner>
//     </section>
//   );
// };

// export default CompanyHero;



// // components/company/CompanyHero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { useEffect, useState } from 'react';

// interface CompanyHeroProps {
//   data: {
//     heroImage: string;
//     logo: string;
//     name: string;
//     shortName: string;
//     category: string;
//   };
// }

// const CompanyHero = ({ data }: CompanyHeroProps) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Set loaded state after component mounts to trigger animations
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       <ParallaxBanner className="h-full">
//         {/* Background Image Layer with enhanced effects */}
//         <ParallaxBannerLayer speed={-20}>
//           <div className="absolute inset-0">
//             {/* Preloader overlay that fades out */}
//             <motion.div 
//               initial={{ opacity: 1 }}
//               animate={{ opacity: 0 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               className="absolute inset-0 bg-black z-10"
//             />
            
//             {/* Main background image with subtle zoom effect */}
//             <motion.div
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 7, ease: "easeOut" }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={data.heroImage}
//                 alt={data.name}
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="100vw"
//                 quality={100}
//                 style={{ objectPosition: 'center center' }}
//                 onLoadingComplete={() => setIsLoaded(true)}
//               />
              
//               {/* Image quality enhancer overlay */}
//               <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
//             </motion.div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Modified Gradient Overlay Layer - removed dark left side */}
//         <ParallaxBannerLayer speed={-10}>
//           {/* Removed the left-side dark gradient, kept only a subtle overlay for text readability */}
//           <div className="absolute inset-0 bg-black/20" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          
//           {/* Stylish geometric accent */}
//           <div className="absolute top-0 right-0 w-2/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl opacity-40 transform -translate-y-1/4 translate-x-1/4 rounded-full" />
//         </ParallaxBannerLayer>

//         {/* Content Layer with enhanced styling */}
//         <ParallaxBannerLayer speed={-5}>
//           <div className="relative h-full container mx-auto px-4">
//             <div className="flex flex-col justify-center h-full max-w-3xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="mb-8 relative"
//               >
               
//               </motion.div>

//               <motion.div 
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="mb-6"
//               >
//                 {/* Added text-shadow for readability without dark background */}
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
//                   {data.name.split(' ').map((word, index) => (
//                     <motion.span
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
//                       transition={{ duration: 0.7, delay: 1 + (index * 0.1) }}
//                       className="inline-block mr-4"
//                     >
//                       {word}
//                     </motion.span>
//                   ))}
//                 </h1>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
//                 transition={{ duration: 0.8, delay: 1.5 }}
//                 className="relative"
//               >
//                 {/* Elegant separator line */}
//                 <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 opacity-80" />
                
//                 {/* Added more backdrop blur for readability without dark background */}
//                 <p className="text-xl text-gray-200 backdrop-blur-md bg-black/20 inline-block px-4 py-2 rounded-lg drop-shadow-md">
//                   <span className="text-blue-300 mr-2">{data.shortName}</span>
//                   <span className="text-gray-300">|</span>
//                   <span className="ml-2 text-white">{data.category}</span>
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </ParallaxBannerLayer>

//         {/* Enhanced Scroll Indicator */}
//         <ParallaxBannerLayer speed={5}>
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
//             transition={{ duration: 1, delay: 2 }}
//             className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity, 
//                 repeatType: "loop", 
//                 ease: "easeInOut" 
//               }}
//               className="flex flex-col items-center"
//             >
//               <p className="text-white/70 text-sm mb-2 tracking-wider font-light drop-shadow-md">SCROLL DOWN</p>
//               <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1 backdrop-blur-sm">
//                 <motion.div 
//                   animate={{ y: [0, 16, 0] }}
//                   transition={{ 
//                     duration: 2, 
//                     repeat: Infinity, 
//                     repeatType: "loop", 
//                     ease: "easeInOut",
//                     delay: 0.2 
//                   }}
//                   className="w-1.5 h-3 bg-white rounded-full opacity-80"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </ParallaxBannerLayer>

//         {/* Floating particle effects for depth */}
//         <ParallaxBannerLayer speed={10}>
//           <div className="absolute inset-0 pointer-events-none">
//             {Array.from({ length: 20 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute rounded-full bg-white"
//                 initial={{
//                   x: Math.random() * 100 + "%",
//                   y: Math.random() * 100 + "%",
//                   scale: Math.random() * 0.5 + 0.5,
//                   opacity: Math.random() * 0.3,
//                 }}
//                 animate={{
//                   y: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                   x: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                   opacity: [0.1, 0.3, 0.1],
//                 }}
//                 transition={{
//                   duration: Math.random() * 20 + 20,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//                 style={{
//                   width: Math.random() * 5 + 2 + "px",
//                   height: Math.random() * 5 + 2 + "px",
//                 }}
//               />
//             ))}
//           </div>
//         </ParallaxBannerLayer>
//       </ParallaxBanner>
//     </section>
//   );
// };

// export default CompanyHero;


'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

interface CompanyHeroProps {
  data: {
    heroImage: string;
    logo: string;
    name: string;
    shortName: string;
    category: string;
  };
}

const CompanyHero = ({ data }: CompanyHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation trigger after component mounts
  useEffect(() => {
    setIsLoaded(true);
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
            src={data.heroImage}
            alt={data.name}
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
                <Image
                  src={data.logo}
                  alt={`${data.name} logo`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic particle system for depth and visual interest */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => {
            const size = Math.random() * 6 + 2;
            const duration = Math.random() * 25 + 15;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            const delay = Math.random() * 5;
            
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
                  y: [`${initialY}%`, `${initialY + (Math.random() * 30 - 15)}%`],
                  x: [`${initialX}%`, `${initialX + (Math.random() * 30 - 15)}%`],
                  scale: [0, size / 10, 0],
                  opacity: [0, Math.random() * 0.4 + 0.1, 0],
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
                  boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.${Math.floor(Math.random() * 5)})`,
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
                {data.name.split(' ').map((word, index) => (
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

            {/* Category and tagline with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="relative"
            >
              {/* Spacer instead of line */}
              <div className="mb-8"></div>
              
              {/* Category tag with glass effect */}
              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-lg"
                >
                  <p className="text-xl text-white font-medium">
                    <span className="mr-2 text-white">{data.shortName}</span>
                    <span className="text-gray-400">|</span>
                    <span className="ml-2 text-white">{data.category}</span>
                  </p>
                </motion.div>
              </div>
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

export default CompanyHero;