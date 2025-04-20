// // // src/components/business/BusinessInfo.tsx
// // 'use client';
// // import { motion } from 'framer-motion';
// // import { Card, CardContent } from '@/components/ui/card';

// // interface BusinessInfoProps {
// //   data: {
// //     description: string;
// //   };
// // }

// // const BusinessInfo = ({ data }: BusinessInfoProps) => {
// //   return (
// //     <section className="py-16 bg-gray-50">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <Card className="overflow-hidden shadow-lg">
// //             <CardContent className="p-8">
// //               <h2 className="text-3xl font-bold mb-6 text-gray-800">About</h2>
// //               <p className="text-gray-600 leading-relaxed whitespace-pre-line">
// //                 {data.description}
// //               </p>
// //             </CardContent>
// //           </Card>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BusinessInfo;

// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Card, CardContent } from '@/components/ui/card';

// // interface BusinessInfoProps {
// //   data: {
// //     description: string;
// //   };
// // }

// // const BusinessInfo: React.FC<BusinessInfoProps> = ({ data }) => {
// //   return (
// //     <section className="py-16 bg-gray-50">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <Card className="overflow-hidden shadow-lg">
// //             <CardContent className="p-8">
// //               <h2 className="text-3xl font-bold mb-6 text-gray-800">About</h2>
// //               {data.description ? (
// //                 <div 
// //                   className="text-gray-600 leading-relaxed prose max-w-none"
// //                   dangerouslySetInnerHTML={{ __html: data.description }}
// //                 />
// //               ) : (
// //                 <p className="text-gray-600 leading-relaxed">
// //                   No detailed information available for this business activity.
// //                 </p>
// //               )}
// //             </CardContent>
// //           </Card>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BusinessInfo;


// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';

// interface BusinessInfoProps {
//   data: {
//     description: string;
//   };
// }

// const BusinessInfo: React.FC<BusinessInfoProps> = ({ data }) => {
//   const [isClient, setIsClient] = useState(false);
  
//   // Handle hydration issues
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Split description into paragraphs for staggered animation
//   const paragraphs = data.description 
//     ? data.description.split('</p>').filter(p => p.trim().length > 0).map(p => p + '</p>') 
//     : ['No detailed information available for this business activity.'];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="mb-12 text-center"
//         >
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl font-bold text-gray-800 relative inline-block"
//           >
//             About This Business
//             <motion.div 
//               initial={{ width: "0%" }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 absolute bottom-0 left-0"
//             />
//           </motion.h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <Card className="overflow-hidden shadow-xl rounded-2xl border-0">
//             <CardContent className="p-0">
//               <div className="flex flex-col md:flex-row">
//                 {/* Decorative sidebar */}
//                 <div className="w-full md:w-1/6 bg-gradient-to-b from-blue-600 to-indigo-700 py-8 px-4">
//                   <div className="h-full flex flex-col items-center justify-between">
//                     {/* Top decorative element */}
//                     <motion.div 
//                       initial={{ scale: 0, opacity: 0 }}
//                       whileInView={{ scale: 1, opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6, delay: 0.7 }}
//                       className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
//                     >
//                       <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         strokeWidth={1.5} 
//                         stroke="currentColor" 
//                         className="w-6 h-6 text-white"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
//                       </svg>
//                     </motion.div>
                    
//                     {/* Middle decorative elements */}
//                     {isClient && [...Array(3)].map((_, i) => (
//                       <motion.div 
//                         key={i}
//                         initial={{ scale: 0, opacity: 0 }}
//                         whileInView={{ scale: 1, opacity: 0.7 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.9 + (i * 0.2) }}
//                         className="w-8 h-1 bg-white/30 rounded-full my-4"
//                       />
//                     ))}
                    
//                     {/* Bottom decorative element */}
//                     <motion.div 
//                       initial={{ scale: 0, opacity: 0 }}
//                       whileInView={{ scale: 1, opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6, delay: 1.6 }}
//                       className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
//                     >
//                       <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         strokeWidth={1.5} 
//                         stroke="currentColor" 
//                         className="w-6 h-6 text-white"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
//                       </svg>
//                     </motion.div>
//                   </div>
//                 </div>
                
//                 {/* Content area */}
//                 <div className="w-full md:w-5/6 p-8 md:p-12">
//                   <div className="space-y-6">
//                     {isClient && paragraphs.map((paragraph, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.7, delay: 0.5 + (index * 0.1) }}
//                       >
//                         {paragraph.includes('<p') ? (
//                           <div 
//                             className="text-gray-700 leading-relaxed prose max-w-none text-lg"
//                             dangerouslySetInnerHTML={{ __html: paragraph }}
//                           />
//                         ) : (
//                           <p className="text-gray-700 leading-relaxed text-lg">
//                             {paragraph}
//                           </p>
//                         )}
//                       </motion.div>
//                     ))}
//                   </div>
                  
//                   {/* Additional visual elements at the bottom */}
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: 1.2 }}
//                     className="mt-10 pt-6 border-t border-gray-100 flex justify-end"
//                   >
//                     <div className="flex space-x-2">
//                       {isClient && [...Array(4)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0 }}
//                           whileInView={{ scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ 
//                             duration: 0.4, 
//                             delay: 1.4 + (i * 0.1),
//                             type: "spring",
//                             stiffness: 200
//                           }}
//                           className={`w-3 h-3 rounded-full ${
//                             ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'][i]
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BusinessInfo;


'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface BusinessInfoProps {
  data: {
    description: string;
  };
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ data }) => {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Handle hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Split description into paragraphs for staggered animation
  const paragraphs = data.description 
    ? data.description.split('</p>').filter(p => p.trim().length > 0).map(p => p + '</p>') 
    : ['No detailed information available for this business activity.'];

  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Shape animation variants
  const backgroundShapesVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const shapeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -45,
    },
    visible: (i: number) => ({ 
      opacity: 0.8, 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.5 + (i * 0.1),
        type: "spring",
        stiffness: 50
      } 
    })
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Content animation setup
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 * i,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  // Shape positions
  const shapes = [
    { size: "12rem", top: "-5%", left: "-8%", color: "from-blue-500/40 to-indigo-600/20" },
    { size: "9rem", top: "10%", right: "5%", color: "from-purple-500/30 to-pink-600/20" },
    { size: "8rem", bottom: "10%", left: "10%", color: "from-green-400/30 to-teal-500/20" },
    { size: "10rem", bottom: "-5%", right: "-5%", color: "from-orange-400/30 to-amber-500/20" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-50 via-transparent to-transparent"
        />
      </div>

      {/* Animated floating shapes in background */}
      {isClient && (
        <motion.div
          variants={backgroundShapesVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={shapeVariants}
              className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
              style={{
                width: shape.size,
                height: shape.size,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section title with animation */}
        <motion.div
          className="mb-16 text-center relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          ref={titleRef}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
            About This Business
          </h2>
          <motion.div 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 absolute -bottom-2 left-0 right-0 mx-auto max-w-xs"
          />
        </motion.div>

        {/* Main content card with parallax effect */}
        <motion.div
          style={{ y: springY }}
          className="relative mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 blur-lg group-hover:opacity-80 transition duration-1000"></div>
            
            <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border-0 rounded-2xl shadow-2xl">
              {/* Animated card header accent */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left decorative sidebar */}
                  <div className="w-full lg:w-1/5 bg-gradient-to-br from-blue-600 to-indigo-800 py-10 px-6">
                    <div className="h-full flex flex-col items-center justify-between">
                      {/* Top decorative element */}
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.7, delay: 0.9, type: "spring" }}
                        className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-8 h-8 text-white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                      </motion.div>
                      
                      {/* Middle decorative elements */}
                      {isClient && [...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: 0.5, delay: 1.1 + (i * 0.15) }}
                          className="w-12 h-1 bg-gradient-to-r from-white/80 to-white/20 rounded-full my-4 origin-left"
                        />
                      ))}
                      
                      {/* Bottom decorative element */}
                      <motion.div 
                        initial={{ scale: 0, rotate: 180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                        transition={{ duration: 0.7, delay: 1.8, type: "spring" }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-8 h-8 text-white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content area with staggered paragraph animation */}
                  <div className="w-full lg:w-4/5 p-8 lg:p-12 relative">
                    {/* Subtle background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
                    
                    <motion.div
                      className="space-y-8"
                      variants={contentVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {isClient && paragraphs.map((paragraph, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={paragraphVariants}
                          className="relative"
                        >
                          {/* Animated paragraph left border accent */}
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : { height: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                            className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"
                          />
                          
                          <div className="pl-6">
                            {paragraph.includes('<p') ? (
                              <div 
                                className="text-gray-700 leading-relaxed prose max-w-none text-lg"
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                              />
                            ) : (
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {paragraph}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Animated footer element */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center"
                    >
                      <div className="text-sm text-gray-500 italic">
                        Business information updated regularly
                      </div>
                      
                      <div className="flex space-x-3">
                        {isClient && [...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 1.8 + (i * 0.15),
                              type: "spring",
                              stiffness: 200
                            }}
                            className={`w-10 h-10 rounded-lg ${
                              ['bg-gradient-to-br from-blue-500 to-indigo-600', 
                               'bg-gradient-to-br from-purple-500 to-pink-600', 
                               'bg-gradient-to-br from-teal-400 to-emerald-500'][i]
                            } shadow-lg flex items-center justify-center`}
                          >
                            {[
                              <svg key="1" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>,
                              <svg key="2" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>,
                              <svg key="3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ][i]}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessInfo;