
// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { X, ChevronRight, Calendar } from 'lucide-react';
// import Image from 'next/image';

// interface Milestone {
//   id: number;
//   year: string;
//   title: string;
//   description: string;
//   image: string;
// }

// interface TimelineProps {
//   title: string;
//   description: string;
//   milestones: Milestone[];
// }

// // Modal component
// const MilestoneModal = ({ 
//   isOpen, 
//   onClose, 
//   milestone
// }: { 
//   isOpen: boolean; 
//   onClose: () => void; 
//   milestone: Milestone | null;
// }) => {
//   if (!isOpen || !milestone) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative">
//           {/* Header image */}
//           <div 
//             className="h-64 lg:h-80 bg-cover bg-center rounded-t-xl relative"
//             style={{ 
//               backgroundImage: `url(http://localhost:7000/${milestone.image.replace('public/', '')})` 
//             }}
//           >
//             {/* Year badge */}
//             <Badge className="absolute top-6 left-6 text-lg py-2 px-4 bg-company-orange hover:bg-company-orange shadow-lg">
//               {milestone.year}
//             </Badge>
            
//             {/* Gradient overlay for better text readability */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-xl"></div>
            
//             {/* Close button */}
//             <button 
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-all hover:rotate-90 duration-300 shadow-lg z-10"
//               aria-label="Close modal"
//             >
//               <X className="w-5 h-5" />
//             </button>
            
//             {/* Title overlay at bottom of image for more visual impact */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
//                 {milestone.title}
//               </h2>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-8 lg:p-10">
//           <div className="flex items-center mb-6 text-sm text-gray-500 border-b border-gray-100 pb-4">
//             <Calendar className="w-5 h-5 mr-2 text-company-orange" />
//             <span className="font-medium">{milestone.year}</span>
//           </div>
          
//           <div className="prose max-w-none text-gray-600">
//             <p className="whitespace-pre-line text-lg leading-relaxed">
//               {milestone.description}
//             </p>
            
//             {/* Static content for all milestones */}
//             <div className="mt-10 pt-6 border-t border-gray-100">
//               <div className="flex items-center mb-4">
//                 <div className="w-1.5 h-6 bg-company-orange rounded-full mr-3"></div>
//                 <h3 className="text-2xl font-bold text-company-royal">Impact & Significance</h3>
//               </div>
              
//               <p className="my-4">This milestone represents a significant achievement in our company's history, demonstrating our commitment to innovation and excellence. The decisions and developments during this period have shaped our trajectory and contributed to our standing in the industry today.</p>
              
//               <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
//                 <h4 className="font-semibold text-lg text-company-royal mb-4 flex items-center">
//                   <span className="w-8 h-8 rounded-full bg-company-royal/10 flex items-center justify-center mr-2">
//                     <ChevronRight className="w-5 h-5 text-company-royal" />
//                   </span>
//                   Key Achievements
//                 </h4>
//                 <ul className="list-none pl-0 space-y-3">
//                   {[
//                     "Expanded our operational capacity and market reach",
//                     "Implemented innovative technologies and processes",
//                     "Strengthened relationships with stakeholders and partners",
//                     "Established foundations for future growth and development"
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className="w-1.5 h-1.5 rounded-full bg-company-orange mt-2.5 mr-3"></div>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const Timeline: React.FC<TimelineProps> = ({ title, description, milestones }) => {
//   const [activeId, setActiveId] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  
//   // Function to open modal with selected milestone
//   const openModal = (milestone: Milestone) => {
//     setSelectedMilestone(milestone);
//     setIsModalOpen(true);
//     // Prevent body scrolling when modal is open
//     document.body.style.overflow = 'hidden';
//   };
  
//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedMilestone(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Sort milestones by year (ascending)
//   const sortedMilestones = [...milestones].sort((a, b) => {
//     // Convert to numbers for comparison, fallback to string comparison if needed
//     const yearA = parseInt(a.year);
//     const yearB = parseInt(b.year);
    
//     if (!isNaN(yearA) && !isNaN(yearB)) {
//       return yearA - yearB;
//     }
//     return a.year.localeCompare(b.year);
//   });

//   return (
//     <section className="py-20 bg-gray-50" id="timeline">
//       <div className="container mx-auto px-4">
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
//               {title}
//             </h2>
//           </div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description}
//           </p>
//         </motion.div>

//         <div className="space-y-16">
//           {sortedMilestones.map((milestone, index) => (
//             <motion.div
//               key={milestone.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: '-100px' }}
//             >
//               <Card
//                 className={`w-full transform transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl
//                   ${activeId === milestone.id ? 'scale-[1.02]' : ''}`}
//               >
//                 <CardContent className="p-0">
//                   <div className="grid md:grid-cols-2 gap-0">
//                     {/* Image Section with hover zoom effect */}
//                     <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
//                       <div 
//                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                         style={{ 
//                           backgroundImage: `url(http://localhost:7000/${milestone.image.replace('public/', '')})` 
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                       {/* Year Badge - Absolute positioned over image */}
//                       <Badge className="absolute top-6 left-6 text-lg py-2 px-4 bg-company-orange hover:bg-company-orange">
//                         {milestone.year}
//                       </Badge>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-8 md:p-10 flex flex-col justify-center relative bg-white">
//                       <h3 className="text-2xl font-bold text-company-royal mb-4">
//                         {milestone.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed line-clamp-4 mb-4">
//                         {milestone.description}
//                       </p>
                      
//                       <button 
//                         onClick={() => openModal(milestone)}
//                         className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 self-start"
//                       >
//                         Read Full Story <ChevronRight className="w-4 h-4 ml-1" />
//                       </button>

//                       {/* Decorative Element */}
//                       <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-company-orange via-company-orange/50 to-transparent" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Connecting Line */}
//               {index !== sortedMilestones.length - 1 && (
//                 <div className="h-16 w-px bg-company-orange/20 mx-auto">
//                   <div className="h-1/2 w-full bg-gradient-to-b from-company-orange to-transparent" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
      
//       {/* Modal Component */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div 
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <MilestoneModal 
//               isOpen={isModalOpen} 
//               onClose={closeModal} 
//               milestone={selectedMilestone} 
//             />
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Timeline;





'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, ChevronRight, Calendar } from 'lucide-react';
import Image from 'next/image';

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  title: string;
  description: string;
  milestones: Milestone[];
}

// Image processing function - same as HomeHero
const processApiImage = (imagePath: string): string => {
  if (!imagePath) return '';
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pg-admin.57.155.183.218.nip.io';
  
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
  
  return finalUrl;
};

// Hook to test and process images
const useProcessedImage = (imagePath: string) => {
  const [processedUrl, setProcessedUrl] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!imagePath) {
      setImageStatus('error');
      return;
    }

    const processedImageUrl = processApiImage(imagePath);
    setProcessedUrl(processedImageUrl);

    const testImage = async () => {
      try {
        const response = await fetch(processedImageUrl, { 
          method: 'HEAD',
          mode: 'cors'
        });
        
        if (response.ok) {
          setImageStatus('success');
        } else {
          setImageStatus('error');
        }
      } catch (error) {
        console.warn(`Failed to load image: ${processedImageUrl}`, error);
        setImageStatus('error');
      }
    };

    testImage();
  }, [imagePath]);

  return { processedUrl, imageStatus };
};

// Modal component
const MilestoneModal = ({ 
  isOpen, 
  onClose, 
  milestone
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  milestone: Milestone | null;
}) => {
  const { processedUrl, imageStatus } = useProcessedImage(milestone?.image || '');

  if (!isOpen || !milestone) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header image */}
          <div className="h-64 lg:h-80 rounded-t-xl relative overflow-hidden">
            {imageStatus === 'success' && processedUrl ? (
              <Image
                src={processedUrl}
                alt={milestone.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 896px"
                quality={85}
                onError={(e) => {
                  console.error(`Modal image failed to load: ${processedUrl}`);
                }}
                onLoad={() => {
                  console.log(`Modal image loaded successfully: ${processedUrl}`);
                }}
              />
            ) : (
              // Fallback background
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300" />
            )}

            {/* Year badge */}
            <Badge className="absolute top-6 left-6 text-lg py-2 px-4 bg-company-orange hover:bg-company-orange shadow-lg z-10">
              {milestone.year}
            </Badge>
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-xl"></div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-all hover:rotate-90 duration-300 shadow-lg z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Title overlay at bottom of image for more visual impact */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                {milestone.title}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="p-8 lg:p-10">
          <div className="flex items-center mb-6 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <Calendar className="w-5 h-5 mr-2 text-company-orange" />
            <span className="font-medium">{milestone.year}</span>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="whitespace-pre-line text-lg leading-relaxed">
              {milestone.description}
            </p>
            
            {/* Static content for all milestones */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-6 bg-company-orange rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-company-royal">Impact & Significance</h3>
              </div>
              
              <p className="my-4">This milestone represents a significant achievement in our company's history, demonstrating our commitment to innovation and excellence. The decisions and developments during this period have shaped our trajectory and contributed to our standing in the industry today.</p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-lg text-company-royal mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-company-royal/10 flex items-center justify-center mr-2">
                    <ChevronRight className="w-5 h-5 text-company-royal" />
                  </span>
                  Key Achievements
                </h4>
                <ul className="list-none pl-0 space-y-3">
                  {[
                    "Expanded our operational capacity and market reach",
                    "Implemented innovative technologies and processes",
                    "Strengthened relationships with stakeholders and partners",
                    "Established foundations for future growth and development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-company-orange mt-2.5 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Timeline card component
const TimelineCard = ({ milestone, index, totalCount, onOpenModal }: {
  milestone: Milestone;
  index: number;
  totalCount: number;
  onOpenModal: (milestone: Milestone) => void;
}) => {
  const { processedUrl, imageStatus } = useProcessedImage(milestone.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <Card className="w-full transform transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section with hover zoom effect */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
              {imageStatus === 'success' && processedUrl ? (
                <Image
                  src={processedUrl}
                  alt={milestone.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  onError={(e) => {
                    console.error(`Timeline card image failed to load: ${processedUrl}`);
                  }}
                  onLoad={() => {
                    console.log(`Timeline card image loaded successfully: ${processedUrl}`);
                  }}
                />
              ) : (
                // Fallback background
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Year Badge - Absolute positioned over image */}
              <Badge className="absolute top-6 left-6 text-lg py-2 px-4 bg-company-orange hover:bg-company-orange z-10">
                {milestone.year}
              </Badge>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex flex-col justify-center relative bg-white">
              <h3 className="text-2xl font-bold text-company-royal mb-4">
                {milestone.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-4 mb-4">
                {milestone.description}
              </p>
              
              <button 
                onClick={() => onOpenModal(milestone)}
                className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 self-start"
              >
                Read Full Story <ChevronRight className="w-4 h-4 ml-1" />
              </button>

              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-company-orange via-company-orange/50 to-transparent" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connecting Line */}
      {index !== totalCount - 1 && (
        <div className="h-16 w-px bg-company-orange/20 mx-auto">
          <div className="h-1/2 w-full bg-gradient-to-b from-company-orange to-transparent" />
        </div>
      )}
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ title, description, milestones }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  
  // Function to open modal with selected milestone
  const openModal = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedMilestone(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Sort milestones by year (ascending)
  const sortedMilestones = [...milestones].sort((a, b) => {
    // Convert to numbers for comparison, fallback to string comparison if needed
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    
    if (!isNaN(yearA) && !isNaN(yearB)) {
      return yearA - yearB;
    }
    return a.year.localeCompare(b.year);
  });

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="container mx-auto px-4">
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
              {title}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="space-y-16">
          {sortedMilestones.map((milestone, index) => (
            <TimelineCard
              key={milestone.id}
              milestone={milestone}
              index={index}
              totalCount={sortedMilestones.length}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>
      
      {/* Modal Component */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <MilestoneModal 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              milestone={selectedMilestone} 
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;