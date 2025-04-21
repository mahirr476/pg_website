// // 'use client';
// // // src/components/about/AboutHero.tsx
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';

// // const AboutHero = () => {
// //   return (
// //     <section className="relative min-h-[80vh] flex items-center">
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/images/about/company-building.jpg"
// //           alt="Company Headquarters"
// //           fill
// //           className="object-cover"
// //           priority
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
// //       </div>
      
// //       <div className="container mx-auto px-4 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-white"
// //           >
// //             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
// //               Pioneering Progress Through{' '}
// //               <span className="text-company-orange">Innovation</span>
// //             </h1>
// //             <p className="text-xl text-gray-100 mb-8 leading-relaxed">
// //               From humble beginnings to a diversified conglomerate, our journey 
// //               reflects our commitment to excellence, sustainability, and community development.
// //             </p>

// //             <div className="grid grid-cols-2 gap-6">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
// //               >
// //                 <div className="text-3xl font-bold mb-1">30+</div>
// //                 <div className="text-gray-200">Years Legacy</div>
// //               </motion.div>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.5 }}
// //                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
// //               >
// //                 <div className="text-3xl font-bold mb-1">20+</div>
// //                 <div className="text-gray-200">Companies</div>
// //               </motion.div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //             className="hidden lg:block"
// //           >
// //             <div className="relative h-[500px] w-full">
// //               <Image
// //                 src="/images/about/vision-image.jpeg"
// //                 alt="Company Vision"
// //                 fill
// //                 className="object-cover rounded-lg"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent rounded-lg" />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutHero;



// 'use client';

// import { motion } from 'framer-motion';

// interface AboutHeroProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const AboutHero: React.FC<AboutHeroProps> = ({ title, description, image }) => {
//   // Format the title to highlight "Innovation" in orange
//   const renderTitle = () => {
//     if (title?.includes('Innovation')) {
//       return (
//         <>
//           {title.split('Innovation')[0]}
//           <span className="text-company-orange">Innovation</span>
//           {title.split('Innovation')[1]}
//         </>
//       );
//     }
//     return title;
//   };
      
//   return (
//     <section className="relative min-h-[80vh] flex items-center bg-company-royal">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               {renderTitle()}
//             </h1>
//             <p className="text-xl text-gray-100 mb-8 leading-relaxed">
//               {description}
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">30+</div>
//                 <div className="text-gray-200">Years Legacy</div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">20+</div>
//                 <div className="text-gray-200">Companies</div>
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:block"
//           >
//             <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
//               {image && (
//                 <img
//                   src={`http://localhost:7000/${image}`}
//                   alt="Company Vision"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               )}
//               <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;



// 'use client';

// import { motion } from 'framer-motion';

// interface AboutHeroProps {
//   title: string;
//   description: string;
//   image: string;
//   companiesNumber: string;
//   companiesTitle: string;
//   yearsNumber: string;
//   yearsTitle: string;
// }

// const AboutHero: React.FC<AboutHeroProps> = ({ 
//   title, 
//   description, 
//   image,
//   companiesNumber,
//   companiesTitle,
//   yearsNumber,
//   yearsTitle
// }) => {
//   // Format the title to highlight "Innovation" in orange
//   const renderTitle = () => {
//     if (title?.includes('Innovation')) {
//       return (
//         <>
//           {title.split('Innovation')[0]}
//           <span className="text-company-orange">Innovation</span>
//           {title.split('Innovation')[1]}
//         </>
//       );
//     }
//     return title;
//   };
      
//   return (
//     <section className="relative min-h-[80vh] flex items-center bg-company-royal">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               {renderTitle()}
//             </h1>
//             <p className="text-xl text-gray-100 mb-8 leading-relaxed">
//               {description}
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">{yearsNumber}</div>
//                 <div className="text-gray-200">{yearsTitle} Legacy</div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">{companiesNumber}</div>
//                 <div className="text-gray-200">{companiesTitle}</div>
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:block"
//           >
//             <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
//               {image && (
//                 <img
//                   src={`http://localhost:7000/${image}`}
//                   alt="Company Vision"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               )}
//               <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;



// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// interface AboutHeroProps {
//   title: string;
//   description: string;
//   image: string;
//   companiesNumber: string;
//   companiesTitle: string;
//   yearsNumber: string;
//   yearsTitle: string;
// }

// const AboutHero: React.FC<AboutHeroProps> = ({ 
//   title, 
//   description, 
//   image,
//   companiesNumber,
//   companiesTitle,
//   yearsNumber,
//   yearsTitle
// }) => {
//   // Format the title to highlight "Innovation" in orange
//   const renderTitle = () => {
//     if (title?.includes('Innovation')) {
//       return (
//         <>
//           {title.split('Innovation')[0]}
//           <span className="text-company-orange">Innovation</span>
//           {title.split('Innovation')[1]}
//         </>
//       );
//     }
//     return title;
//   };
      
//   return (
//     <section className="relative min-h-[80vh] flex items-center bg-company-royal">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               {renderTitle()}
//             </h1>
//             <p className="text-xl text-gray-100 mb-8 leading-relaxed">
//               {description}
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">{yearsNumber}</div>
//                 <div className="text-gray-200">{yearsTitle} Legacy</div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
//               >
//                 <div className="text-3xl font-bold mb-1">{companiesNumber}</div>
//                 <div className="text-gray-200">{companiesTitle}</div>
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:block"
//           >
//             <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
//               {image && (
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={`http://localhost:7000/${image}`}
//                     alt="Company Vision"
//                     fill
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;


'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

interface AboutHeroProps {
  title: string;
  description: string;
  image: string;
  companiesNumber: string;
  companiesTitle: string;
  yearsNumber: string;
  yearsTitle: string;
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

const AboutHero: React.FC<AboutHeroProps> = ({ 
  title, 
  description, 
  image,
  companiesNumber,
  companiesTitle,
  yearsNumber,
  yearsTitle
}) => {
  // Scroll state for scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Format the title to highlight "Innovation" in orange
  const renderTitle = () => {
    if (title?.includes('Innovation')) {
      return (
        <>
          {title.split('Innovation')[0]}
          <span className="text-company-orange">Innovation</span>
          {title.split('Innovation')[1]}
        </>
      );
    }
    return title;
  };
      
  return (
    <section className="relative min-h-[80vh] flex items-center bg-company-royal">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Title without gradient styling */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {renderTitle()}
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter value={yearsNumber} duration={1.5} />
                </div>
                <div className="text-gray-200">{yearsTitle} Legacy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter value={companiesNumber} duration={1.8} />
                </div>
                <div className="text-gray-200">{companiesTitle}</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              {image && (
                <div className="relative w-full h-full">
                  <Image
                    src={`http://localhost:7000/${image}`}
                    alt="Company Vision"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
                </div>
              )}
            </div>
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

export default AboutHero;