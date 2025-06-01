
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";
// import { X, ChevronRight, Award, User } from 'lucide-react';
// import Image from 'next/image';

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
//   longDescription: string; // HTML content
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
//   title,
//   description,
//   directors
// }) => {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const openModal = (director: Director) => {
//     setSelectedDirector(director);
//     setIsModalOpen(true);
//     setImageLoaded(false);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedDirector(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Handle image loading
//   const handleImageLoad = (directorId: number) => {
//     setLoadedImages(prev => ({
//       ...prev,
//       [directorId]: true
//     }));
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isModalOpen]);

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background decoration - adjusted to prevent overflow */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-16 -mt-16 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-24 -mb-24 z-0"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block relative mb-4">
//             <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
//             <h2 className="relative text-4xl font-bold text-company-royal">
//               {title || "Leadership"}
//             </h2>
//           </div>
          
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
//                 <div className="relative h-96 w-full overflow-hidden">
//                   {/* Image placeholder while loading */}
//                   {!loadedImages[director.id] && (
//                     <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//                       <div className="animate-pulse flex flex-col items-center">
//                         <User className="w-16 h-16 text-gray-300" />
//                         <p className="text-gray-400 mt-2">Loading...</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Next.js Image component - replacing img tag */}
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={`http://localhost:7000/${director.image}`}
//                       alt={director.name}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       style={{ 
//                         objectFit: 'cover',
//                         transition: 'transform 700ms',
//                         transform: 'scale(1)',
//                         opacity: loadedImages[director.id] ? 1 : 0
//                       }}
//                       className="group-hover:scale-105"
//                       onLoadingComplete={() => handleImageLoad(director.id)}
//                       onError={() => handleImageLoad(director.id)}
//                     />
//                   </div>
                  
//                   {/* Gradient overlay with description */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
                
//                 <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-4 opacity-90">
//                     {director.designation}
//                   </p>
//                   <button 
//                     onClick={() => openModal(director)}
//                     className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
//                   >
//                     View Profile <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Enhanced Director Modal */}
//       <AnimatePresence>
//         {selectedDirector && isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.4, type: "spring", damping: 22 }}
//               className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-20 -mt-20 z-0"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-company-royal/5 rounded-full -ml-20 -mb-20 z-0"></div>
              
//               <div className="flex flex-col lg:flex-row relative">
//                 {/* Director Image Section - Enhanced with animation */}
//                 <div className="lg:w-1/2 xl:w-1/2 bg-gradient-to-br from-company-royal to-company-royal/90 relative overflow-hidden">
//                   <motion.div 
//                     className="relative h-[400px] lg:h-full w-full"
//                   >
//                     <div className="h-full w-full overflow-hidden relative">
//                       {/* Image placeholder */}
//                       {!imageLoaded && (
//                         <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
//                           <div className="animate-pulse">
//                             <User className="w-16 h-16 text-gray-300" />
//                           </div>
//                         </div>
//                       )}
                      
//                       {/* Next.js Image component for modal with subtle zoom effect */}
//                       <div className="relative w-full h-full">
//                         <Image 
//                           src={`http://localhost:7000/${selectedDirector.image}`}
//                           alt={selectedDirector.name}
//                           fill
//                           sizes="(max-width: 1024px) 100vw, 50vw"
//                           style={{ 
//                             objectFit: 'cover',
//                             objectPosition: 'center',
//                             transition: 'transform 800ms ease-in-out',
//                           }}
//                           className="hover:scale-105"
//                           priority
//                           onLoadingComplete={() => setImageLoaded(true)}
//                         />
//                       </div>
                      
//                       {/* Enhanced overlay with gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
//                       {/* Decorative icon */}
//                       <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
//                         <Award className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
                
//                 {/* Director Info Section */}
//                 <div className="lg:w-1/2 xl:w-1/2 p-6 lg:p-10 relative">
//                   {/* Close button - single button for the entire modal */}
//                   <button 
//                     onClick={closeModal}
//                     className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
                  
//                   {/* Render HTML content from longDescription field */}
//                   <div 
//                     className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10 overflow-auto"
//                     style={{ maxHeight: "calc(90vh - 120px)" }}
//                     dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Custom scrollbar styles */}
//       <style jsx global>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//         .text-shadow {
//           text-shadow: 0 2px 4px rgba(0,0,0,0.3);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BoardOfDirectors;





'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronRight, Award, User } from 'lucide-react';
import Image from 'next/image';

interface Director {
  id: number;
  orderIndex: number;
  name: string;
  designation: string;
  image: string;
  shortDescription: string;
  longDescription: string; // HTML content
}

interface BoardOfDirectorsProps {
  title: string;
  description: string;
  directors: Director[];
}

const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
  title,
  description,
  directors
}) => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  const [imageLoaded, setImageLoaded] = useState(false);
  const [processedDirectors, setProcessedDirectors] = useState<Director[]>([]);

  // Fixed API base URL - same as other components
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://api.pg-admin.57.155.183.218.nip.io';

  // Process director image paths
  const processDirectorImage = (imagePath: string): string => {
    if (!imagePath) return '';
    
    console.log('BoardOfDirectors - Processing image path:', imagePath);
    
    let finalUrl: string;
    
    if (imagePath.startsWith('public/')) {
      // Path already has 'public/' prefix
      finalUrl = `${API_BASE_URL}/${imagePath}`;
    } else if (imagePath.startsWith('uploads/')) {
      // Path has 'uploads/' prefix, add 'public/'
      finalUrl = `${API_BASE_URL}/public/${imagePath}`;
    } else {
      // Path has no prefix, add 'public/uploads/'
      finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
    }
    
    console.log('BoardOfDirectors - Final image URL:', finalUrl);
    return finalUrl;
  };

  // Process all directors with correct image paths
  useEffect(() => {
    const processed = directors.map(director => ({
      ...director,
      image: processDirectorImage(director.image)
    }));
    
    console.log('BoardOfDirectors - Processed directors:', processed);
    setProcessedDirectors(processed);
  }, [directors]);

  // Test image availability
  const testImageUrl = async (imageUrl: string): Promise<boolean> => {
    if (!imageUrl) return false;
    
    try {
      console.log('BoardOfDirectors - Testing image URL:', imageUrl);
      const response = await fetch(imageUrl, { method: 'HEAD' });
      const isSuccess = response.ok;
      console.log('BoardOfDirectors - Image test result:', isSuccess ? 'SUCCESS' : 'FAILED', 'for', imageUrl);
      return isSuccess;
    } catch (error) {
      console.error('BoardOfDirectors - Image test error:', error, 'for', imageUrl);
      return false;
    }
  };

  const openModal = (director: Director) => {
    setSelectedDirector(director);
    setIsModalOpen(true);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedDirector(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Handle image loading
  const handleImageLoad = (directorId: number) => {
    console.log('BoardOfDirectors - Image loaded for director:', directorId);
    setLoadedImages(prev => ({
      ...prev,
      [directorId]: true
    }));
  };

  const handleImageError = (directorId: number, imageUrl: string) => {
    console.error('BoardOfDirectors - Image failed to load for director:', directorId, 'URL:', imageUrl);
    setLoadedImages(prev => ({
      ...prev,
      [directorId]: false
    }));
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration - adjusted to prevent overflow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-24 -mb-24 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
            <h2 className="relative text-4xl font-bold text-company-royal">
              {title || "Leadership"}
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description || "Meet the visionaries behind our success"}
          </p>
        </motion.div>
        
        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedDirectors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="relative h-96 w-full overflow-hidden">
                  {/* Image placeholder while loading */}
                  {!loadedImages[director.id] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                      <div className="animate-pulse flex flex-col items-center">
                        <User className="w-16 h-16 text-gray-300" />
                        <p className="text-gray-400 mt-2">Loading...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Director Image */}
                  {director.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ 
                          opacity: loadedImages[director.id] ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                        onLoad={() => handleImageLoad(director.id)}
                        onError={() => handleImageError(director.id, director.image)}
                        priority={index < 3} // Prioritize first 3 images
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Gradient overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {director.shortDescription}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-company-orange mb-4 opacity-90">
                    {director.designation}
                  </p>
                  <button 
                    onClick={() => openModal(director)}
                    className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
                  >
                    View Profile <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Director Modal */}
      <AnimatePresence>
        {selectedDirector && isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", damping: 22 }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-20 -mt-20 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-company-royal/5 rounded-full -ml-20 -mb-20 z-0"></div>
              
              <div className="flex flex-col lg:flex-row relative">
                {/* Director Image Section - Enhanced with animation */}
                <div className="lg:w-1/2 xl:w-1/2 bg-gradient-to-br from-company-royal to-company-royal/90 relative overflow-hidden">
                  <motion.div 
                    className="relative h-[400px] lg:h-full w-full"
                  >
                    <div className="h-full w-full overflow-hidden relative">
                      {/* Image placeholder */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                          <div className="animate-pulse">
                            <User className="w-16 h-16 text-gray-300" />
                          </div>
                        </div>
                      )}
                      
                      {/* Director modal image */}
                      {selectedDirector.image ? (
                        <div className="relative w-full h-full">
                          <Image 
                            src={selectedDirector.image}
                            alt={selectedDirector.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-800 hover:scale-105"
                            style={{ 
                              opacity: imageLoaded ? 1 : 0,
                              transition: 'opacity 0.3s ease-in-out'
                            }}
                            priority
                            onLoad={() => setImageLoaded(true)}
                            onError={() => {
                              console.error('BoardOfDirectors - Modal image failed to load:', selectedDirector.image);
                              setImageLoaded(true); // Show fallback
                            }}
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                          <User className="w-20 h-20 text-gray-500" />
                        </div>
                      )}
                      
                      {/* Enhanced overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
                      {/* Decorative icon */}
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Director Info Section */}
                <div className="lg:w-1/2 xl:w-1/2 p-6 lg:p-10 relative">
                  {/* Close button - single button for the entire modal */}
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                  
                  {/* Render HTML content from longDescription field */}
                  <div 
                    className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10 overflow-auto custom-scrollbar"
                    style={{ maxHeight: "calc(90vh - 120px)" }}
                    dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Debug info for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 bg-black/70 text-white p-2 text-xs rounded z-30 max-w-xs">
          <div>Total Directors: {directors.length}</div>
          <div>Processed Directors: {processedDirectors.length}</div>
          <div>Loaded Images: {Object.keys(loadedImages).length}</div>
          {processedDirectors.length > 0 && (
            <div className="mt-2 break-all">
              <div>Sample Image URL:</div>
              <div className="text-xs">{processedDirectors[0]?.image}</div>
            </div>
          )}
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default BoardOfDirectors;