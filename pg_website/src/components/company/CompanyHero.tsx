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



// components/company/CompanyHero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    // Set loaded state after component mounts to trigger animations
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <ParallaxBanner className="h-full">
        {/* Background Image Layer with enhanced effects */}
        <ParallaxBannerLayer speed={-20}>
          <div className="absolute inset-0">
            {/* Preloader overlay that fades out */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0 bg-black z-10"
            />
            
            {/* Main background image with subtle zoom effect */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
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
                style={{ objectPosition: 'center center' }}
                onLoadingComplete={() => setIsLoaded(true)}
              />
              
              {/* Image quality enhancer overlay */}
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
            </motion.div>
          </div>
        </ParallaxBannerLayer>

        {/* Modified Gradient Overlay Layer - removed dark left side */}
        <ParallaxBannerLayer speed={-10}>
          {/* Removed the left-side dark gradient, kept only a subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          
          {/* Stylish geometric accent */}
          <div className="absolute top-0 right-0 w-2/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl opacity-40 transform -translate-y-1/4 translate-x-1/4 rounded-full" />
        </ParallaxBannerLayer>

        {/* Content Layer with enhanced styling */}
        <ParallaxBannerLayer speed={-5}>
          <div className="relative h-full container mx-auto px-4">
            <div className="flex flex-col justify-center h-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-8 relative"
              >
               
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
                transition={{ duration: 1, delay: 1 }}
                className="mb-6"
              >
                {/* Added text-shadow for readability without dark background */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  {data.name.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                      transition={{ duration: 0.7, delay: 1 + (index * 0.1) }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="relative"
              >
                {/* Elegant separator line */}
                <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 opacity-80" />
                
                {/* Added more backdrop blur for readability without dark background */}
                <p className="text-xl text-gray-200 backdrop-blur-md bg-black/20 inline-block px-4 py-2 rounded-lg drop-shadow-md">
                  <span className="text-blue-300 mr-2">{data.shortName}</span>
                  <span className="text-gray-300">|</span>
                  <span className="ml-2 text-white">{data.category}</span>
                </p>
              </motion.div>
            </div>
          </div>
        </ParallaxBannerLayer>

        {/* Enhanced Scroll Indicator */}
        <ParallaxBannerLayer speed={5}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop", 
                ease: "easeInOut" 
              }}
              className="flex flex-col items-center"
            >
              <p className="text-white/70 text-sm mb-2 tracking-wider font-light drop-shadow-md">SCROLL DOWN</p>
              <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1 backdrop-blur-sm">
                <motion.div 
                  animate={{ y: [0, 16, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut",
                    delay: 0.2 
                  }}
                  className="w-1.5 h-3 bg-white rounded-full opacity-80"
                />
              </div>
            </motion.div>
          </motion.div>
        </ParallaxBannerLayer>

        {/* Floating particle effects for depth */}
        <ParallaxBannerLayer speed={10}>
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.3,
                }}
                animate={{
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: Math.random() * 5 + 2 + "px",
                  height: Math.random() * 5 + 2 + "px",
                }}
              />
            ))}
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default CompanyHero;