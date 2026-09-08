// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

// interface Certificate {
//   id: number;
//   title: string;
//   description: string;
//   image: string[] | string;
// }

// interface CertificatesProps {
//   certificates: Certificate[];
// }

// const Certificates = ({ certificates }: CertificatesProps) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
  
//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(-1);
//   const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  
//   // Fixed API base URL - same as other components
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';
  
//   // Get all certificate images from the API
//   const getAllCertificateImages = () => {
//     const allImages: string[] = [];
    
//     certificates.forEach(cert => {
//       if (cert.image) {
//         if (Array.isArray(cert.image)) {
//           // If image is an array, add all images
//           cert.image.forEach(img => {
//             allImages.push(img);
//           });
//         } else if (typeof cert.image === 'string') {
//           // If image is a string, add it
//           allImages.push(cert.image);
//         }
//       }
//     });
    
//     return allImages;
//   };
  
//   // Get all certificate images
//   const allCertificateImages = getAllCertificateImages();

//   // Function to process certificate image paths - same logic as HomeHero
//   const getImageUrl = (imagePath: string): string => {
//     if (!imagePath) return '';
    
//     console.log('Certificates - Processing image path:', imagePath);
    
//     let finalUrl: string;
    
//     if (imagePath.startsWith('public/')) {
//       // Path already has 'public/' prefix
//       finalUrl = `${API_BASE_URL}/${imagePath}`;
//     } else if (imagePath.startsWith('uploads/')) {
//       // Path has 'uploads/' prefix, add 'public/'
//       finalUrl = `${API_BASE_URL}/public/${imagePath}`;
//     } else {
//       // Path has no prefix, add 'public/uploads/'
//       finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
//     }
    
//     console.log('Certificates - Final image URL:', finalUrl);
//     return finalUrl;
//   };

//   // Handle image loading
//   const handleImageLoad = (imageIndex: number) => {
//     console.log('Certificates - Image loaded for index:', imageIndex);
//     setLoadedImages(prev => ({
//       ...prev,
//       [imageIndex]: true
//     }));
//   };

//   const handleImageError = (imageIndex: number, imageUrl: string) => {
//     console.error('Certificates - Image failed to load for index:', imageIndex, 'URL:', imageUrl);
//     setLoadedImages(prev => ({
//       ...prev,
//       [imageIndex]: false
//     }));
//   };

//   const goToPrevious = () => {
//     setDirection(-1);
//     const newIndex = activeIndex === 0 ? allCertificateImages.length - 1 : activeIndex - 1;
//     setActiveIndex(newIndex);
//   };

//   const goToNext = () => {
//     setDirection(1);
//     const newIndex = activeIndex === allCertificateImages.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(newIndex);
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

//   // Variants for animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Enhanced modal animation variants
//   const modalVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { duration: 0.3 }
//     },
//     exit: { 
//       opacity: 0,
//       transition: { duration: 0.2 }
//     }
//   };
  
//   const modalContentVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { 
//         type: 'spring',
//         stiffness: 300,
//         damping: 25,
//         duration: 0.4
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       y: 20,
//       transition: { duration: 0.3 }
//     }
//   };

//   // Certificate image modal component with improved animations
//   const ImageModal = () => {
//     if (!isModalOpen || allCertificateImages.length === 0) return null;

//     return (
//       <motion.div 
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         onClick={closeModal}
//       >
//         <motion.div
//           variants={modalContentVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Close button */}
//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
//             whileTap={{ scale: 0.95 }}
//             onClick={closeModal}
//             className="absolute top-4 right-4 z-10 bg-white text-gray-700 rounded-full p-2 shadow-md transition-colors"
//             aria-label="Close modal"
//           >
//             <X className="w-5 h-5" />
//           </motion.button>

//           {/* Navigation buttons */}
//           <motion.button
//             whileHover={{ scale: 1.1, x: -3, backgroundColor: '#eff6ff' }}
//             whileTap={{ scale: 0.95 }}
//             className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-blue-600 rounded-full p-3 shadow-lg transition-colors"
//             onClick={(e) => {
//               e.stopPropagation();
//               const newIndex = selectedImageIndex === 0 ? allCertificateImages.length - 1 : selectedImageIndex - 1;
//               setSelectedImageIndex(newIndex);
//             }}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.1, x: 3, backgroundColor: '#eff6ff' }}
//             whileTap={{ scale: 0.95 }}
//             className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-blue-600 rounded-full p-3 shadow-lg transition-colors"
//             onClick={(e) => {
//               e.stopPropagation();
//               const newIndex = selectedImageIndex === allCertificateImages.length - 1 ? 0 : selectedImageIndex + 1;
//               setSelectedImageIndex(newIndex);
//             }}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </motion.button>

//           <div className="relative w-full p-8 flex items-center justify-center bg-gray-50">
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={selectedImageIndex}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative w-full flex items-center justify-center"
//               >
//                 {/* Loading placeholder for modal image */}
//                 {!loadedImages[`modal-${selectedImageIndex}`] && (
//                   <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
//                     <div className="animate-pulse">
//                       <Eye className="w-16 h-16 text-gray-300" />
//                     </div>
//                   </div>
//                 )}
                
//                 <Image
//                   src={getImageUrl(allCertificateImages[selectedImageIndex])}
//                   alt={`Certificate ${selectedImageIndex + 1}`}
//                   width={900}
//                   height={700}
//                   className="object-contain max-h-[75vh] rounded-md shadow-md"
//                   style={{ 
//                     opacity: loadedImages[`modal-${selectedImageIndex}`] ? 1 : 0,
//                     transition: 'opacity 0.3s ease-in-out'
//                   }}
//                   onLoad={() => handleImageLoad(`modal-${selectedImageIndex}` as any)}
//                   onError={() => handleImageError(`modal-${selectedImageIndex}` as any, getImageUrl(allCertificateImages[selectedImageIndex]))}
//                   priority
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   return (
//     <section className="py-16 relative overflow-hidden bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Title and Description from API */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             {certificates[0]?.title || "Our Certificates"}
//           </h2>
//           <div className="max-w-2xl mx-auto text-gray-600 text-justify">
//             <div dangerouslySetInnerHTML={{ 
//               __html: certificates[0]?.description || "Our professional certifications and standards"
//             }} />
//           </div>
//         </div>

//         {/* Certificate gallery */}
//         {allCertificateImages.length > 0 ? (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-5xl mx-auto"
//           >
//             <div className="flex flex-wrap justify-center gap-6">
//               {allCertificateImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   whileHover={{ 
//                     y: -8, 
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                   }}
//                   className="relative w-72 h-96 bg-white rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
//                   onMouseEnter={() => setIsHovering(index)}
//                   onMouseLeave={() => setIsHovering(-1)}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     openModal(index);
//                   }}
//                 >
//                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                  
//                   <div className="p-4 h-full flex flex-col">
//                     <div className="flex-grow flex items-center justify-center p-2 relative">
//                       {/* Loading placeholder */}
//                       {!loadedImages[index] && (
//                         <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
//                           <div className="animate-pulse">
//                             <Eye className="w-8 h-8 text-gray-300" />
//                           </div>
//                         </div>
//                       )}
                      
//                       <Image
//                         src={getImageUrl(image)}
//                         alt={`Certificate ${index + 1}`}
//                         fill
//                         className="object-contain p-2"
//                         style={{ 
//                           opacity: loadedImages[index] ? 1 : 0,
//                           transition: 'opacity 0.3s ease-in-out'
//                         }}
//                         onLoad={() => handleImageLoad(index)}
//                         onError={() => handleImageError(index, getImageUrl(image))}
//                         priority={index < 4} // Prioritize first 4 images
//                       />
//                     </div>
                    
//                     {/* Hover overlay */}
//                     <motion.div 
//                       className="absolute inset-0 bg-black/60 flex items-center justify-center"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: isHovering === index ? 1 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <motion.button
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ 
//                           opacity: isHovering === index ? 1 : 0,
//                           scale: isHovering === index ? 1 : 0.9
//                         }}
//                         transition={{ duration: 0.2 }}
//                         className="px-4 py-2 bg-white text-blue-600 rounded-md flex items-center gap-2 font-medium"
//                       >
//                         <Eye className="w-4 h-4" />
//                         View Certificate
//                       </motion.button>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ) : (
//           <div className="text-center text-gray-500">
//             No certificate images available.
//           </div>
//         )}
//       </div>

//       {/* Modal with improved animations */}
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
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string[] | string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(-1);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  
  // ✅ FIXED: Use same image processing logic as other components
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';

  // Default fallback image
  const defaultImage = '/images/business/business-hero-bg.jpg';

  // ✅ EXACT SAME LOGIC as HomeHero - Process API image with the correct URL format
  const processApiImage = (imagePath: string): string => {
    if (!imagePath) return defaultImage;
    
    console.log('Certificates - Processing image path:', imagePath);
    
    let finalUrl: string;
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      // Already a complete URL
      finalUrl = imagePath;
    } else if (imagePath.startsWith('public/')) {
      // Path already has 'public/' prefix - SAME AS HOMEHERO
      finalUrl = `${API_BASE_URL}/${imagePath}`;
    } else if (imagePath.startsWith('uploads/')) {
      // Path has 'uploads/' prefix, add 'public/' - SAME AS HOMEHERO
      finalUrl = `${API_BASE_URL}/public/${imagePath}`;
    } else {
      // Path has no prefix, add 'public/uploads/' - SAME AS HOMEHERO
      finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
    }
    
    console.log('Certificates - Final image URL:', finalUrl);
    return finalUrl;
  };
  
  // Get all certificate images from the API
  const getAllCertificateImages = () => {
    const allImages: string[] = [];
    
    certificates.forEach(cert => {
      if (cert.image) {
        if (Array.isArray(cert.image)) {
          // If image is an array, add all images
          cert.image.forEach(img => {
            allImages.push(img);
          });
        } else if (typeof cert.image === 'string') {
          // If image is a string, add it
          allImages.push(cert.image);
        }
      }
    });
    
    return allImages;
  };
  
  // Get all certificate images
  const allCertificateImages = getAllCertificateImages();

  // ✅ SIMPLIFIED - Use same single URL approach as HomeHero
  const CertificateImage = ({ imagePath, alt, className, fill, ...props }: any) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const imageUrl = processApiImage(imagePath);
    
    const handleError = () => {
      console.error('Certificates - Image failed to load:', imageUrl);
      setImageError(true);
    };
    
    const handleLoad = () => {
      console.log('Certificates - Image loaded successfully:', imageUrl);
      setImageLoaded(true);
      setImageError(false);
    };
    
    if (imageError) {
      // Show placeholder when image fails - same as HomeHero fallback approach
      return (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <div className="text-center p-4">
            <Eye className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">Certificate Image</p>
            <p className="text-xs text-gray-400 mt-1">Not Available</p>
          </div>
        </div>
      );
    }
    
    return (
      <>
        {/* Loading placeholder - same style as HomeHero */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
            <div className="animate-pulse">
              <Eye className="w-8 h-8 text-gray-300" />
            </div>
          </div>
        )}
        
        <Image
          src={imageUrl}
          alt={alt}
          className={className}
          fill={fill}
          style={{ 
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onError={handleError}
          onLoad={handleLoad}
          quality={85} // Same as HomeHero
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
          {...props}
        />
      </>
    );
  };

  // Handle image loading
  const handleImageLoad = (imageIndex: number) => {
    console.log('Certificates - Image loaded for index:', imageIndex);
    setLoadedImages(prev => ({
      ...prev,
      [imageIndex]: true
    }));
  };

  const handleImageError = (imageIndex: number, imageUrl: string) => {
    console.error('Certificates - Image failed to load for index:', imageIndex, 'URL:', imageUrl);
    setLoadedImages(prev => ({
      ...prev,
      [imageIndex]: false
    }));
  };

  const goToPrevious = () => {
    setDirection(-1);
    const newIndex = activeIndex === 0 ? allCertificateImages.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    setDirection(1);
    const newIndex = activeIndex === allCertificateImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
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

  // Enhanced modal animation variants
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  
  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  // Certificate image modal component with improved animations
  const ImageModal = () => {
    if (!isModalOpen || allCertificateImages.length === 0) return null;

    return (
      <motion.div 
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={closeModal}
      >
        <motion.div
          variants={modalContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.95 }}
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white text-gray-700 rounded-full p-2 shadow-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -3, backgroundColor: '#eff6ff' }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-blue-600 rounded-full p-3 shadow-lg transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImageIndex === 0 ? allCertificateImages.length - 1 : selectedImageIndex - 1;
              setSelectedImageIndex(newIndex);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 3, backgroundColor: '#eff6ff' }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-blue-600 rounded-full p-3 shadow-lg transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImageIndex === allCertificateImages.length - 1 ? 0 : selectedImageIndex + 1;
              setSelectedImageIndex(newIndex);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="relative w-full p-8 flex items-center justify-center bg-gray-50">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-[75vh] flex items-center justify-center"
              >
                <CertificateImage
                  imagePath={allCertificateImages[selectedImageIndex]}
                  alt={`Certificate ${selectedImageIndex + 1}`}
                  className="object-contain max-h-full rounded-md shadow-md"
                  fill
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title and Description from API */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {certificates[0]?.title || "Our Certificates"}
          </h2>
          <div className="max-w-2xl mx-auto text-gray-600 text-justify">
            <div dangerouslySetInnerHTML={{ 
              __html: certificates[0]?.description || "Our professional certifications and standards"
            }} />
          </div>
        </div>

        {/* Certificate gallery */}
        {allCertificateImages.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {allCertificateImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="relative w-72 h-96 bg-white rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(-1)}
                  onClick={() => {
                    setActiveIndex(index);
                    openModal(index);
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                  
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center p-2 relative">
                      <CertificateImage
                        imagePath={image}
                        alt={`Certificate ${index + 1}`}
                        className="object-contain p-2"
                        fill
                        priority={index < 4} // Prioritize first 4 images
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovering === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: isHovering === index ? 1 : 0,
                          scale: isHovering === index ? 1 : 0.9
                        }}
                        transition={{ duration: 0.2 }}
                        className="px-4 py-2 bg-white text-blue-600 rounded-md flex items-center gap-2 font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        View Certificate
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="text-center text-gray-500">
            No certificate images available.
          </div>
        )}
      </div>

      {/* Modal with improved animations */}
      <AnimatePresence>
        {isModalOpen && <ImageModal />}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;