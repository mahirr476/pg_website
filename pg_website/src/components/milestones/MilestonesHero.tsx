

// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from 'lucide-react';
// import Image from 'next/image';

// interface MilestonesHeroProps {
//   title: string;
//   description: string;
//   imagePath?: string; // Add image path prop
// }

// const MilestonesHero: React.FC<MilestonesHeroProps> = ({ 
//   title, 
//   description, 
//   imagePath 
// }) => {
//   const scrollToTimeline = () => {
//     const timeline = document.getElementById('timeline');
//     if (timeline) {
//       timeline.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Process image path similar to HomeHero component
//   let backgroundImage = '/images/milestones/hero-collage.jpg'; // Default fallback
  
//   if (imagePath) {
//     // Remove 'public/' from the beginning of the path if it exists
//     const cleanPath = imagePath.replace(/^public\//, '');
//     backgroundImage = `http://localhost:7000/${cleanPath}`;
//   }

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div className="relative h-full w-full">
//           {/* Using Next.js Image component for better optimization */}
//           <Image
//             src={backgroundImage}
//             alt="Company Milestones Background"
//             fill
//             priority
//             className="object-cover object-center"
//             sizes="100vw"
//             onError={(e) => {
//               console.error(`Image failed to load: ${backgroundImage}`);
//               console.error('Error details:', e);
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-7xl font-bold mb-6">
//             {title}
//           </h1>
//           <p className="text-2xl text-gray-100 mb-8">
//             {description}
//           </p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <Button 
//               size="lg"
//               onClick={scrollToTimeline}
//               className="bg-company-orange hover:bg-company-orange/90 text-white group"
//             >
//               Explore Our Timeline
//               <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated Overlay Pattern */}
//       <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
//     </section>
//   );
// };

// export default MilestonesHero;





'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface MilestonesHeroProps {
  title: string;
  description: string;
  imagePath?: string; // Add image path prop
}

const MilestonesHero: React.FC<MilestonesHeroProps> = ({ 
  title, 
  description, 
  imagePath 
}) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<'loading' | 'success' | 'error'>('loading');

  // Fixed API base URL - same as HomeHero
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://api.pg-admin.57.155.183.218.nip.io';

  // Default fallback image
  const defaultImage = '/images/milestones/hero-collage.jpg';

  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Process API image with the correct URL format - same logic as HomeHero
  const processApiImage = (imagePath: string): string => {
    if (!imagePath) return '';
    
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

  // Test image URL and set status - same logic as HomeHero
  useEffect(() => {
    console.log('MilestonesHero Debug - Original imagePath prop:', imagePath);
    console.log('MilestonesHero Debug - API_BASE_URL:', API_BASE_URL);
    
    if (!imagePath) {
      console.log('MilestonesHero Debug - No imagePath provided, using default');
      setProcessedImageUrl(defaultImage);
      setImageStatus('success');
      return;
    }

    const processedUrl = processApiImage(imagePath);
    console.log('MilestonesHero Debug - Processed URL:', processedUrl);
    setProcessedImageUrl(processedUrl);

    const testImage = async () => {
      try {
        console.log('MilestonesHero Debug - Testing image URL:', processedUrl);
        const response = await fetch(processedUrl, { 
          method: 'HEAD',
          mode: 'cors'
        });
        
        console.log('MilestonesHero Debug - Response status:', response.status, response.ok);
        
        if (response.ok) {
          console.log('MilestonesHero Debug - Image test SUCCESS');
          setImageStatus('success');
        } else {
          console.log('MilestonesHero Debug - Image test FAILED - Using default image');
          setProcessedImageUrl(defaultImage);
          setImageStatus('success');
        }
      } catch (error) {
        console.error('MilestonesHero Debug - Image test ERROR:', error);
        console.warn(`Failed to load image: ${processedUrl}, using default image`, error);
        setProcessedImageUrl(defaultImage);
        setImageStatus('success');
      }
    };

    testImage();
  }, [imagePath]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {imageStatus === 'success' && processedImageUrl ? (
            <>
              {/* Using Next.js Image component for better optimization */}
              <Image
                src={processedImageUrl}
                alt="Company Milestones Background"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
                onError={(e) => {
                  console.error(`Image failed to load: ${processedImageUrl}`);
                  console.error('Error details:', e);
                  // Fallback to default image on error
                  setProcessedImageUrl(defaultImage);
                }}
                onLoad={() => {
                  console.log(`Image loaded successfully: ${processedImageUrl}`);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
            </>
          ) : (
            // Fallback background when image is not available - same as HomeHero
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
              <div className="absolute inset-0 bg-gradient-to-b from-company-royal/80 via-company-royal/60 to-company-royal/80" />
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-7xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-2xl text-gray-100 mb-8">
            {description}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg"
              onClick={scrollToTimeline}
              className="bg-company-orange hover:bg-company-orange/90 text-white group"
            >
              Explore Our Timeline
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-[slide_20s_linear_infinite]" />
    </section>
  );
};

export default MilestonesHero;