// // components/company/CompanyInfo.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { CompanyInfoProps } from '@/types/company';

// const CompanyInfo = ({ data }: CompanyInfoProps) => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Description */}
//           <div>
//             <h2 className="text-4xl font-bold mb-8">About {data.shortName}</h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               {data.description}
//             </p>
//           </div>

//           {/* Company Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Founded</h3>
//                 <p className="text-3xl font-bold">{data.yearFounded}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-green-50 to-green-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Team Size</h3>
//                 <p className="text-3xl font-bold">{data.employeeCount}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Location</h3>
//                 <p className="text-3xl font-bold">{data.location}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Category</h3>
//                 <p className="text-3xl font-bold">{data.category}</p>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CompanyInfo;


// // components/company/CompanyInfo.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';

// interface CompanyInfoProps {
//   data: {
//     shortName: string;
//     description: string;
//     yearFounded: string;
//     employeeCount: string;
//     location: string;
//     category: string;
//   };
// }

// const CompanyInfo = ({ data }: CompanyInfoProps) => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Description */}
//           <div>
//             <h2 className="text-4xl font-bold mb-8">About {data.shortName}</h2>
//             <p className="text-lg text-gray-700 leading-relaxed text-justify">
//               {data.description}
//             </p>
//           </div>

//           {/* Company Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Founded</h3>
//                 <p className="text-3xl font-bold">{data.yearFounded}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-green-50 to-green-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Team Size</h3>
//                 <p className="text-3xl font-bold">{data.employeeCount}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Location</h3>
//                 <p className="text-3xl font-bold">{data.location}</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">Category</h3>
//                 <p className="text-3xl font-bold">{data.category}</p>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CompanyInfo;


'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface CompanyInfoProps {
  data: {
    shortName: string;
    description: string;
    yearFounded: string;
    employeeCount: string;
    location: string;
    category: string;
  };
}

const CompanyInfo = ({ data }: CompanyInfoProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // For sequential card animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Description paragraph animation
  const description = data.description;
  const words = description.split(' ');

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" 
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Enhanced Description Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
                              {/* Removed About Us content */}
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              >
                About <span className="text-blue-600">{data.shortName}</span>
              </motion.h2>
              
              <div className="relative overflow-hidden ">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg leading-relaxed text-gray-700 prose prose-blue max-w-none "
                >
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.5 + (i * 0.01), // Subtle staggered effect
                        ease: "easeOut" 
                      }}
                      className="inline-block mr-1 "
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Accent elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 0.15 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl -z-10" 
            />
          </div>

          {/* Company Details Cards with Enhanced Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Founded', value: data.yearFounded, color: 'from-blue-500 to-blue-600', icon: '🏢', delay: 0.1 },
              { title: 'Team Size', value: data.employeeCount, color: 'from-green-500 to-green-600', icon: '👥', delay: 0.2 },
              { title: 'Location', value: data.location, color: 'from-purple-500 to-purple-600', icon: '📍', delay: 0.3 },
              { title: 'Category', value: data.category, color: 'from-orange-500 to-orange-600', icon: '🔍', delay: 0.4 }
            ].map((item, index) => (
              <AnimatePresence key={index}>
                {isLoaded && (
                  <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0, 
                      x: isInView ? 0 : 100, 
                      scale: isInView ? 1 : 0.95 
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: item.delay + 0.5,
                      ease: [0.23, 1, 0.32, 1] // Custom easing for smooth animation
                    }}
                  >
                    <Card className="overflow-hidden h-full relative group bg-white shadow-md hover:shadow-xl transition-all duration-500">
                      {/* Beautiful gradient background that animates on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent)] opacity-70" />
                      </div>
                      
                      <div className="p-8 relative z-10 h-full flex flex-col justify-between transition-all duration-500 group-hover:text-white">
                        <div>
                          {/* Icon with float animation */}
                          <motion.div 
                            animate={{ 
                              y: [0, -8, 0],
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              repeatType: "reverse",
                              delay: index * 0.2
                            }}
                            className="text-3xl mb-4"
                          >
                            {item.icon}
                          </motion.div>
                          
                          <h3 className="font-medium text-gray-500 group-hover:text-white/90 mb-1 transition-colors duration-300">
                            {item.title}
                          </h3>
                          
                          <div className="overflow-hidden">
                            <motion.p 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}  
                              className="text-3xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300"
                            >
                              {item.value}
                            </motion.p>
                          </div>
                        </div>
                        
                        {/* Added back accent line that animates on hover */}
                        <div className="mt-6 overflow-hidden">
                          <motion.div 
                            initial={{ width: "30%" }}
                            whileHover={{ width: "100%" }}
                            className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-2`}
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;