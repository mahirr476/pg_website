// // src/components/business/Certificates.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';

// interface CertificatesProps {
//   certificates: {
//     name: string;
//     image: string;
//     description: string;
//   }[];
// }

// const Certificates = ({ certificates }: CertificatesProps) => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
//           <p className="text-gray-600 mt-2">Our commitment to quality and standards</p>
//         </motion.div>

//         <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Card className="hover:shadow-lg transition-shadow duration-300">
//                       <CardContent className="p-6 flex flex-col items-center">
//                         <div className="relative w-24 h-24 mb-4">
//                           <Image
//                             src={cert.image}
//                             alt={cert.name}
//                             fill
//                             className="object-contain"
//                           />
//                         </div>
//                         <h3 className="font-semibold text-gray-800">{cert.name}</h3>
//                       </CardContent>
//                     </Card>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>{cert.description}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;


// // src/components/business/Certificates.tsx
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';

// interface Certificate {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
// }

// interface CertificatesProps {
//   certificates: Certificate[];
// }

// const Certificates = ({ certificates }: CertificatesProps) => {
//   // State to track the active certificate for main title/description 
//   const [activeCert, setActiveCert] = useState<Certificate>(certificates[0]);

//   // Function to get the correct image URL from the API
//   const getImageUrl = (relativePath: string): string => {
//     return `http://localhost:7000/${relativePath.replace(/^public\//, "")}`;
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
//           <p className="text-gray-600 mt-2">Our commitment to quality and standards</p>
//         </motion.div> */}

//         {/* Show the active certificate title and description */}
//         <motion.div 
//           key={activeCert.id}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="mb-10 text-center"
//         >
//           <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeCert.title}</h3>
//           <div 
//             className="max-w-2xl mx-auto text-gray-600"
//             dangerouslySetInnerHTML={{ __html: activeCert.description }}
//           />
//         </motion.div>

//         <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Card 
//                       className={`hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
//                         activeCert.id === cert.id ? 'ring-2 ring-blue-500' : ''
//                       }`}
//                       onClick={() => setActiveCert(cert)}
//                     >
//                       <CardContent className="p-6 flex flex-col items-center">
//                         {cert.image && (
//                           <div className="relative w-80 h-44 mb-4">
//                             <Image
//                               src={getImageUrl(cert.image)}
//                               alt={cert.title}
//                               fill
//                               className="object-contain"
//                             />
//                           </div>
//                         )}
//                         {/* <h3 className="font-semibold text-gray-800">{cert.title}</h3> */}
//                       </CardContent>
//                     </Card>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Click to view details</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;



'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  const [activeCert, setActiveCert] = useState<Certificate>(certificates[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Function to get the correct image URL from the API
  const getImageUrl = (relativePath: string): string => {
    return `http://localhost:7000/${relativePath.replace(/^public\//, "")}`;
  };

  const goToPrevious = () => {
    setDirection(-1);
    const newIndex = activeIndex === 0 ? certificates.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setActiveCert(certificates[newIndex]);
  };

  const goToNext = () => {
    setDirection(1);
    const newIndex = activeIndex === certificates.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    setActiveCert(certificates[newIndex]);
  };

  // Auto-advance the carousel every 4 seconds (slightly faster)
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Variants for sliding animations (with smoother transitions)
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95
    })
  };

  // Dot indicators to show carousel position
  const renderDotIndicators = () => {
    return (
      <div className="flex justify-center mt-6 space-x-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
              setActiveCert(certificates[index]);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-blue-600 scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="pb-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
        </motion.div>

        {/* Certificate information */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={activeCert.id}
            custom={direction}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-8 min-h-[120px]"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeCert.title}</h3>
            <div 
              className="text-gray-600 prose prose-blue mx-auto"
              dangerouslySetInnerHTML={{ __html: activeCert.description }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Image carousel */}
          <div ref={carouselRef} className="overflow-hidden relative h-96">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeCert.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                {activeCert.image && (
                  <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
                    <Image
                      src={getImageUrl(activeCert.image)}
                      alt={activeCert.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        {renderDotIndicators()}
      </div>
    </section>
  );
};

export default Certificates;