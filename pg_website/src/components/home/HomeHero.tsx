

// 'use client';
// // src/components/home/HomeHero.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
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
// }

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts }) => {
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
//     <section className="relative min-h-screen flex items-center">
//       {/* Video Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <video 
//           autoPlay 
//           muted 
//           loop 
//           playsInline
//           className="absolute w-full h-full object-cover"
//         >
//           <source src="/videos/company-video.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-company-royal/50 backdrop-blur-sm" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white space-y-6"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//               {firstPart}<br />
//               <span className="text-company-orange">{lastPart}</span>
//             </h1>
//             <p className="text-xl text-company-light/90 max-w-2xl">
//               {mainHero?.description || ""}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button 
//                 size="lg" 
//                 className="bg-company-orange hover:bg-company-orange/90 text-white group"
//               >
//                 Explore Our Businesses
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-gray-500 hover:bg-white/10"
//               >
//                 Learn More About Us
//               </Button>
//             </div>
//           </motion.div>

//           {/* Stats Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
//           >
//             {displayStats.map((stat, index) => (
//               <motion.div
//                 key={stat.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
//               >
//                 <div className="text-3xl font-bold text-company-orange mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-company-light/80 text-sm">
//                   {stat.title}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="absolute bottom-8 left-1/2 -translate-x-1/2"
//           >
//             {/* <div className="flex flex-col items-center text-white/60">
//               <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
//               </div>
//               <span className="text-sm mt-2">Scroll to explore</span>
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHero;



// 'use client';
// // src/components/home/HomeHero.tsx
// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
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
// }

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts }) => {
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
//     <section className="relative min-h-screen flex items-center">
//       {/* Video Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <video 
//           autoPlay 
//           muted 
//           loop 
//           playsInline
//           className="absolute w-full h-full object-cover"
//         >
//           <source src="/videos/company-video.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-company-royal/50 backdrop-blur-sm" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white space-y-6"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//               {firstPart}<br />
//               <span className="text-company-orange">{lastPart}</span>
//             </h1>
//             <p className="text-xl text-company-light/90 max-w-2xl">
//               {mainHero?.description || ""}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button 
//                 size="lg" 
//                 className="bg-company-orange hover:bg-company-orange/90 text-white group"
//               >
//                 Explore Our Businesses
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-gray-500 hover:bg-white/10"
//               >
//                 Learn More About Us
//               </Button>
//             </div>
//           </motion.div>

//           {/* Stats Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
//           >
//             {displayStats.map((stat, index) => (
//               <motion.div
//                 key={stat.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
//               >
//                 <div className="text-3xl font-bold text-company-orange mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-company-light/80 text-sm">
//                   {stat.title}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="absolute bottom-8 left-1/2 -translate-x-1/2"
//           >
//             {/* <div className="flex flex-col items-center text-white/60">
//               <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
//               </div>
//               <span className="text-sm mt-2">Scroll to explore</span>
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHero;


// 'use client';
// // src/components/home/HomeHero.tsx
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
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
// }

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts }) => {
//   // Static background images - replace with your actual image URLs
//   const backgroundImages = [
//     "/images/milestones/bistro.jpg",
//     "/images/milestones/consumer-products.jpg",
//     "/images/milestones/footwear.jpg",
//     "/images/milestones/fibc.jpg",
//   ];

//   // State for controlling background image rotation
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-rotate background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === backgroundImages.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change image every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

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
//             <div 
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{ 
//                 backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//                 imageRendering: "high-quality"
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
//               <Button 
//                 size="lg" 
//                 className="bg-company-orange hover:bg-company-orange/90 text-white group text-lg px-8 py-6"
//               >
//                 Explore Our Businesses
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-gray-500 hover:bg-white/10 text-lg px-8 py-6"
//               >
//                 Learn More About Us
//               </Button>
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
//                 className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-300"
//               >
//                 <div className="text-4xl font-bold text-company-orange mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-white text-base">
//                   {stat.title}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Enhanced Image Indicators (dots) centered at the bottom */}
//       <div className="absolute mt-3 bottom-12 left-0  right-0 flex justify-center items-center space-x-4 z-20">
//         {backgroundImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentImageIndex 
//                 ? "bg-company-orange scale-125" 
//                 : "bg-white/50 hover:bg-white/70"
//             }`}
//             aria-label={`View slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HomeHero;


// 'use client';
// // src/components/home/HomeHero.tsx
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
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
// }

// // New component for animated counter
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

// const HomeHero: React.FC<HomeHeroProps> = ({ heroes, impacts }) => {
//   // Static background images - replace with your actual image URLs
//   const backgroundImages = [
//     "/images/milestones/bistro.jpg",
//     "/images/milestones/consumer-products.jpg",
//     "/images/milestones/footwear.jpg",
//     "/images/milestones/fibc.jpg",
//   ];

//   // State for controlling background image rotation
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-rotate background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === backgroundImages.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change image every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

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
//             <div 
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{ 
//                 backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//                 imageRendering: "high-quality"
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
//               <Link 
//                 href="/business-activities/poultry-farming" 
//                 className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
//               >
//                 <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
//                 <span className="relative z-10">Explore Our Businesses</span>
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//               </Link>
//               <a 
//                 href="/about/about-us" 
//                 className="inline-flex items-center border border-white text-white px-8 py-3 rounded relative overflow-hidden group"
//               >
//                 <span className="absolute left-0 top-0 h-full w-0 bg-company-orange transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
//                 <span className="relative z-10">Learn More About Us</span>
//               </a>
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
//                 className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-300"
//               >
//                 <div className="text-4xl font-bold text-company-orange mb-2">
//                   <AnimatedCounter value={stat.number} duration={1.5 + index * 0.2} />
//                 </div>
//                 <div className="text-white text-base">
//                   {stat.title}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Enhanced Image Indicators (dots) centered at the bottom */}
//       <div className="absolute mt-3 bottom-12 left-0  right-0 flex justify-center items-center space-x-4 z-20">
//         {backgroundImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentImageIndex 
//                 ? "bg-company-orange scale-125" 
//                 : "bg-white/50 hover:bg-white/70"
//             }`}
//             aria-label={`View slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HomeHero;



'use client';
// src/components/home/HomeHero.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
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
  // Static background images - replace with your actual image URLs
  const backgroundImages = [
    "/images/milestones/bistro.jpg",
    "/images/milestones/consumer-products.jpg",
    "/images/milestones/footwear.jpg",
    "/images/milestones/fibc.jpg",
  ];

  // State for controlling background image rotation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                imageRendering: "high-quality"
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
                className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-company-orange mb-2">
                  <AnimatedCounter value={stat.number} duration={1.5 + index * 0.2} />
                </div>
                <div className="text-white text-base">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Image Indicators (dots) centered at the bottom */}
      <div className="absolute mt-3 bottom-12 left-0  right-0 flex justify-center items-center space-x-4 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-company-orange scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;