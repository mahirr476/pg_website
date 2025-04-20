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

// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
//   const [activeCert, setActiveCert] = useState<Certificate>(certificates[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
  
//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
//   // Function to get the correct image URL from the API
//   const getImageUrl = (relativePath: string): string => {
//     if (!relativePath) return '';
//     return `http://localhost:7000/${relativePath.replace(/^public\//, "")}`;
//   };

//   const goToPrevious = () => {
//     setDirection(-1);
//     const newIndex = activeIndex === 0 ? certificates.length - 1 : activeIndex - 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };

//   const goToNext = () => {
//     setDirection(1);
//     const newIndex = activeIndex === certificates.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };
  
//   // Open modal with the selected image
//   const openModal = (imageIndex: number) => {
//     setSelectedImageIndex(imageIndex);
//     setIsModalOpen(true);
//     // Prevent body scrolling
//     document.body.style.overflow = 'hidden';
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     // Restore body scrolling
//     document.body.style.overflow = 'auto';
//   };

//   // Auto-advance the carousel every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [activeIndex]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         goToPrevious();
//       } else if (e.key === 'ArrowRight') {
//         goToNext();
//       } else if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeIndex, isModalOpen]);

//   // Variants for sliding animations
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     })
//   };

//   // Dot indicators to show carousel position
//   const renderDotIndicators = () => {
//     return (
//       <div className="flex justify-center mt-6 space-x-2">
//         {certificates.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > activeIndex ? 1 : -1);
//               setActiveIndex(index);
//               setActiveCert(certificates[index]);
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'bg-blue-600 scale-110' 
//                 : 'bg-gray-300 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     );
//   };
  
//   // Certificate image modal component
//   const ImageModal = () => {
//     if (!isModalOpen) return null;

//     const selectedCert = certificates[selectedImageIndex];
    
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.2 }}
//           className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
//         >
//           {/* Close button */}
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
//             aria-label="Close modal"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <div className="relative w-full h-[80vh] flex items-center justify-center">
//             {selectedCert.image && (
//               <Image
//                 src={getImageUrl(selectedCert.image)}
//                 alt={selectedCert.title}
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             )}
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
//             <h2 className="text-xl font-bold text-gray-800">{selectedCert.title}</h2>
//           </div>
//         </motion.div>
//       </div>
//     );
//   };

//   // Get the 3 certificates to display (we'll always display 3, using modulo to handle looping)
//   const displayCerts = [
//     certificates[activeIndex],
//     certificates[(activeIndex + 1) % certificates.length],
//     certificates[(activeIndex + 2) % certificates.length]
//   ];

//   return (
//     <section className="pb-10 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//         </motion.div>

//         {/* Certificate information */}
//         <AnimatePresence mode="wait" initial={false} custom={direction}>
//           <motion.div
//             key={activeCert.id}
//             custom={direction}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-3xl mx-auto text-center mb-8 min-h-[120px]"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeCert.title}</h3>
//             <div 
//               className="text-gray-600 prose prose-blue mx-auto"
//               dangerouslySetInnerHTML={{ __html: activeCert.description }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Three certificate images with active highlighting */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="flex justify-center space-x-1 overflow-hidden">
//             {displayCerts.map((cert, index) => (
//               <motion.div
//                 key={`cert-${cert.id}-${index}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
//                 }}
//                 className={`relative h-64 w-full max-w-xs bg-white rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${
//                   index === 0 ? 'border-4 border-orange-500' : ''
//                 }`}
//                 onClick={() => openModal((activeIndex + index) % certificates.length)}
//               >
//                 {cert.image && (
//                   <Image
//                     src={getImageUrl(cert.image)}
//                     alt={cert.title}
//                     fill
//                     className="object-contain p-1"
//                   />
//                 )}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all duration-300">
//                     View Certificate
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10"
//             aria-label="Previous certificate"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
          
//           <button
//             onClick={goToNext}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10"
//             aria-label="Next certificate"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dot indicators */}
//         {renderDotIndicators()}
//       </div>
      
//       {/* Modal for viewing full images */}
//       <AnimatePresence>
//         {isModalOpen && <ImageModal />}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Certificates;

// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

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
//   const [activeCert, setActiveCert] = useState<Certificate>(certificates[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
  
//   // Function to get the correct image URL from the API
//   const getImageUrl = (relativePath: string): string => {
//     return `http://localhost:7000/${relativePath.replace(/^public\//, "")}`;
//   };

//   const goToPrevious = () => {
//     setDirection(-1);
//     const newIndex = activeIndex === 0 ? certificates.length - 1 : activeIndex - 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };

//   const goToNext = () => {
//     setDirection(1);
//     const newIndex = activeIndex === certificates.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };

//   // Auto-advance the carousel every 4 seconds (slightly faster)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [activeIndex]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         goToPrevious();
//       } else if (e.key === 'ArrowRight') {
//         goToNext();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeIndex]);

//   // Variants for sliding animations (with smoother transitions)
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     })
//   };

//   // Dot indicators to show carousel position
//   const renderDotIndicators = () => {
//     return (
//       <div className="flex justify-center mt-6 space-x-2">
//         {certificates.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > activeIndex ? 1 : -1);
//               setActiveIndex(index);
//               setActiveCert(certificates[index]);
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'bg-blue-600 scale-110' 
//                 : 'bg-gray-300 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="pb-10 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//         </motion.div>

//         {/* Certificate information */}
//         <AnimatePresence mode="wait" initial={false} custom={direction}>
//           <motion.div
//             key={activeCert.id}
//             custom={direction}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-3xl mx-auto text-center mb-8 min-h-[120px]"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeCert.title}</h3>
//             <div 
//               className="text-gray-600 prose prose-blue mx-auto"
//               dangerouslySetInnerHTML={{ __html: activeCert.description }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Carousel Section */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Image carousel */}
//           <div ref={carouselRef} className="overflow-hidden relative h-96">
//             <AnimatePresence initial={false} custom={direction}>
//               <motion.div
//                 key={activeCert.id}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.5 }
//                 }}
//                 className="absolute w-full h-full flex justify-center items-center"
//               >
//                 {activeCert.image && (
//                   <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
//                     <Image
//                       src={getImageUrl(activeCert.image)}
//                       alt={activeCert.title}
//                       fill
//                       className="object-contain"
//                       priority
//                     />
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Dot indicators */}
//         {renderDotIndicators()}
//       </div>
//     </section>
//   );
// };

// export default Certificates;



// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
//   const [activeCert, setActiveCert] = useState<Certificate>(certificates[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
  
//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
//   // Static images for certificates (these will slide with content)
//   const staticImages = [
//     "/images/company/processing-carosel1.jpg",
//     "/images/company/processing-carosel2.jpg",
//     "/images/company/processing-carosel3.jpg",
//   ];

//   const goToPrevious = () => {
//     setDirection(-1);
//     const newIndex = activeIndex === 0 ? certificates.length - 1 : activeIndex - 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };

//   const goToNext = () => {
//     setDirection(1);
//     const newIndex = activeIndex === certificates.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(newIndex);
//     setActiveCert(certificates[newIndex]);
//   };

//   // Open modal with the selected image
//   const openModal = (imageIndex: number) => {
//     setSelectedImageIndex(imageIndex);
//     setIsModalOpen(true);
//     // Prevent body scrolling
//     document.body.style.overflow = 'hidden';
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     // Restore body scrolling
//     document.body.style.overflow = 'auto';
//   };

//   // Auto-advance the carousel every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [activeIndex]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         goToPrevious();
//       } else if (e.key === 'ArrowRight') {
//         goToNext();
//       } else if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeIndex, isModalOpen]);

//   // Variants for sliding animations
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 800 : -800,
//       opacity: 0,
//       scale: 0.95
//     })
//   };

//   // Dot indicators to show carousel position
//   const renderDotIndicators = () => {
//     return (
//       <div className="flex justify-center mt-6 space-x-2">
//         {certificates.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > activeIndex ? 1 : -1);
//               setActiveIndex(index);
//               setActiveCert(certificates[index]);
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'bg-blue-600 scale-110' 
//                 : 'bg-gray-300 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   // Certificate image modal component
//   const ImageModal = () => {
//     if (!isModalOpen) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.2 }}
//           className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
//         >
//           {/* Close button */}
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
//             aria-label="Close modal"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <div className="relative w-full h-[80vh] flex items-center justify-center">
//             <Image
//               src={staticImages[selectedImageIndex]}
//               alt={`Certificate ${selectedImageIndex + 1}`}
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
//             <h2 className="text-xl font-bold text-gray-800">{activeCert.title}</h2>
//           </div>
//         </motion.div>
//       </div>
//     );
//   };

//   return (
//     <section className="pb-10 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//         </motion.div>

//         {/* Certificate information */}
//         <AnimatePresence mode="wait" initial={false} custom={direction}>
//           <motion.div
//             key={activeCert.id}
//             custom={direction}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-3xl mx-auto text-center mb-8 min-h-[120px]"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeCert.title}</h3>
//             <div 
//               className="text-gray-600 prose prose-blue mx-auto"
//               dangerouslySetInnerHTML={{ __html: activeCert.description }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Static images with active highlighting */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="flex justify-center space-x-1 overflow-hidden">
//             {staticImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
//                 }}
//                 className={`relative h-64 w-full max-w-xs bg-white rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${
//                   index === activeIndex % 3 ? 'border-4 border-orange-500' : ''
//                 }`}
//                 onClick={() => openModal(index)}
//               >
//                 <Image
//                   src={staticImages[index]}
//                   alt={`Certificate ${index + 1}`}
//                   fill
//                   className="object-contain p-1"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all duration-300">
//                     View Certificate
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

         
//         </div>

//         {/* Dot indicators */}
//         {renderDotIndicators()}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && <ImageModal />}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Certificates;



'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Award, Shield, Eye, CheckCircle, Star } from 'lucide-react';

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
  
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(-1);
  
  // Static images for certificates (these will slide with content)
  const staticImages = [
    "/images/company/processing-carosel1.jpg",
    "/images/company/processing-carosel2.jpg",
    "/images/company/processing-carosel3.jpg",
  ];

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

  // Open modal with the selected image
  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isModalOpen]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? -20 : 20,
      filter: 'blur(8px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.7
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      rotateY: direction < 0 ? -20 : 20,
      filter: 'blur(8px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.5
      }
    })
  };

  // Animation for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: {
        duration: 0.3
      }
    }
  };

  // Dot indicators to show carousel position
  const renderDotIndicators = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center mt-10 space-x-3"
      >
        {certificates.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
              setActiveCert(certificates[index]);
            }}
            className={`relative transition-all duration-300 ${
              index === activeIndex 
                ? 'w-10 h-3' 
                : 'w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`absolute inset-0 rounded-full ${
              index === activeIndex 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}></span>
            
            {index === activeIndex && (
              <motion.span 
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"
              ></motion.span>
            )}
          </motion.button>
        ))}
      </motion.div>
    );
  };

  // Certificate image modal component
  const ImageModal = () => {
    if (!isModalOpen) return null;

    return (
      <motion.div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ 
            type: 'spring',
            stiffness: 350,
            damping: 25,
            duration: 0.4
          }}
          className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          
          {/* Modal glass effect corners */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-full backdrop-blur-sm"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full backdrop-blur-sm"></div>
          
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={closeModal}
            className="absolute top-5 right-5 z-10 bg-white/10 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full p-3 transition-all duration-300 shadow-lg shadow-blue-500/30"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImageIndex === 0 ? staticImages.length - 1 : selectedImageIndex - 1;
              setSelectedImageIndex(newIndex);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-3 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImageIndex === staticImages.length - 1 ? 0 : selectedImageIndex + 1;
              setSelectedImageIndex(newIndex);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="relative w-full h-[80vh] flex items-center justify-center bg-white/5 backdrop-blur-sm">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex items-center justify-center p-8"
              >
                {/* Certificate frame */}
                <div className="absolute inset-10 border-8 border-gray-800/50 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-12 border border-white/10 rounded-md pointer-events-none"></div>
                
                <Image
                  src={staticImages[selectedImageIndex]}
                  alt={`Certificate ${selectedImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="object-contain max-h-full rounded shadow-2xl"
                  priority
                />
                
                {/* Decorative stamps */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  className="absolute bottom-16 right-16 w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30"
                >
                  <CheckCircle className="w-12 h-12 text-blue-400" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-20"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">
                {certificates[selectedImageIndex % certificates.length].title}
              </h2>
            </div>
            <p className="text-blue-200 mt-2 opacity-80 max-w-2xl">
              Certified for excellence in quality and compliance with international standards
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1),_transparent_70%)] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.1),_transparent_70%)] -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => {
          const size = 2 + (i % 5);
          const duration = 15 + i * 2;
          const delay = i * 0.5;
          const initialX = (i * 5) % 100;
          const initialY = (i * 7) % 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.1 + (i % 4) * 0.05,
                boxShadow: `0 0 ${size * 2}px ${size}px rgba(59, 130, 246, 0.${i % 2 + 1})`
              }}
              initial={{
                x: `${initialX}%`,
                y: `${initialY}%`,
              }}
              animate={{
                y: [`${initialY}%`, `${initialY + (i % 20) - 10}%`],
                x: [`${initialX}%`, `${initialX + (i % 15) - 7}%`],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay
              }}
            />
          );
        })}
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Our Certifications
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 absolute -bottom-2 left-0 rounded-full"
              />
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Our commitment to excellence is recognized through these prestigious certifications,
            validating our dedication to quality, safety, and industry best practices
          </p>
        </motion.div>

        {/* Certificate information card */}
        <div 
          ref={carouselRef}
          className="max-w-4xl mx-auto mb-20 perspective-1000"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-gray-100 transform-3d">
              {/* Card decoration */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-br-full opacity-60 -z-10"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-50 to-indigo-50 rounded-tl-full opacity-60 -z-10"></div>
              
              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={activeCert.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col md:flex-row items-center gap-10"
                  >
                    <motion.div 
                      className="flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 transform-3d"
                      whileHover={{ 
                        rotateY: 15, 
                        rotateX: 5, 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="w-20 h-20 relative">
                        <div className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-sm"></div>
                        <Award className="w-20 h-20 text-white relative z-10" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-grow text-center md:text-left">
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Star className="w-3.5 h-3.5" />
                        <span>Accredited Certification</span>
                      </motion.div>
                      
                      <motion.h3 
                        variants={textVariants} 
                        className="text-3xl font-bold text-gray-800 mb-4"
                      >
                        {activeCert.title}
                      </motion.h3>
                      
                      <motion.div 
                        variants={textVariants}
                        className="text-gray-600 prose prose-blue max-w-none"
                        dangerouslySetInnerHTML={{ __html: activeCert.description }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation arrows */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 rounded-full p-3 shadow-lg border border-blue-100 pointer-events-auto"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 rounded-full p-3 shadow-lg border border-blue-100 pointer-events-auto"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            
            {/* Card reflection */}
            <div className="h-5 bg-gradient-to-b from-gray-200/50 to-transparent rounded-b-full blur-sm -mt-1 mx-10"></div>
          </motion.div>
        </div>

        {/* Certificate gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-10"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {staticImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className={`relative w-72 h-80 rounded-xl overflow-hidden cursor-pointer transform-3d perspective-1000 group ${
                  index === activeIndex % 3 ? 'ring-4 ring-blue-500 ring-offset-4' : ''
                }`}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(-1)}
                onClick={() => openModal(index)}
              >
                {/* Certificate frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 shadow-xl">
                  <div className="absolute inset-3 border border-gray-200 rounded-lg"></div>
                  
                  {/* Stamp */}
                  <motion.div 
                    className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      rotate: [0, 15, 0],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center rotate-12">
                      <Shield className="w-8 h-8 text-red-500" />
                    </div>
                  </motion.div>
                  
                  <div className="absolute inset-8 flex items-center justify-center">
                    <Image
                      src={staticImages[index]}
                      alt={`Certificate ${index + 1}`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/90 to-blue-700/90 flex flex-col items-center justify-end p-8"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isHovering === index ? 1 : 0,
                    backdropFilter: isHovering === index ? 'blur(8px)' : 'blur(0px)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: isHovering === index ? 0 : 20, 
                      opacity: isHovering === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-xl mb-2">
                      {certificates[index % certificates.length].title}
                    </h4>
                    <p className="text-blue-200 text-sm mb-6">International certification of excellence</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-lg flex items-center gap-2 hover:bg-white/30 transition-colors duration-300 mx-auto"
                    >
                      <Eye className="w-4 h-4" />
                      View Full Certificate
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dot indicators */}
        {renderDotIndicators()}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <ImageModal />}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;