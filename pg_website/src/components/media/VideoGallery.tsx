

// 'use client';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
// import { Play, X, Clock, Info, ChevronUp } from 'lucide-react';
// import Image from 'next/image';

// interface Video {
//   id: number;
//   title: string;
//   description: string;
//   thumbnail: string;
//   videoUrl: string;
//   duration?: string;
// }

// interface VideoGalleryProps {
//   videos: Video[];
//   title?: string;
//   description?: string;
// }

// const VideoGallery = ({ 
//   videos, 
//   title = "Video Gallery", 
//   description = "Watch our latest corporate videos and project highlights" 
// }: VideoGalleryProps) => {
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Scroll animation effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       setShowScrollTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Staggered card animation
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100
//       }
//     }
//   };

//   // Float animation for cards
//   const floatAnimation = (index: number) => ({
//     y: [0, -10, 0],
//     transition: {
//       duration: 3 + (index % 3) * 0.5,
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatType: "reverse" as const
//     }
//   });

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10"
//             initial={{ 
//               x: Math.random() * 100 - 50 + "%", 
//               y: Math.random() * 100 + "%",
//               width: (Math.random() * 300 + 200) + "px",
//               height: (Math.random() * 300 + 200) + "px",
//               opacity: 0.1 + Math.random() * 0.15
//             }}
//             animate={{
//               x: [null, Math.random() * 20 - 10 + "%"],
//               y: [null, Math.random() * 20 - 10 + "%"],
//               scale: [1, 1.1, 0.9, 1.2, 1],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 20,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="relative inline-block mb-2">
//             <motion.div
//               className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
//               animate={{
//                 backgroundPosition: ['0% 0%', '100% 100%'],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             />
//             <h2 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 mb-6">
//               {title}
//             </h2>
//           </div>
//           <motion.p 
//             className="text-2xl font-light text-cyan-100/80 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             {description}
//           </motion.p>
//         </motion.div>

//         {videos.length > 0 ? (
//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {videos.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 variants={cardVariants}
//                 animate={floatAnimation(index)}
//                 onMouseEnter={() => setHoverIndex(index)}
//                 onMouseLeave={() => setHoverIndex(null)}
//                 className="group flex justify-center hover:cursor-pointer perspective-1000"
//                 style={{ 
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 <Card 
//                   className="overflow-hidden aspect-square transition-all duration-300 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-none rounded-xl hover:rounded-none hover:shadow-2xl hover:shadow-indigo-500/40 cursor-pointer"
//                   style={{ 
//                     width: '260px', 
//                     height: '260px',
//                     transformStyle: "preserve-3d",
//                     transform: hoverIndex === index ? "rotateY(0deg) scale(1.03)" : "rotateY(0deg) scale(1)",
//                     transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
//                   }}
//                 >
//                   <CardContent className="p-0 h-full relative">
//                     {/* Square Image Container */}
//                     <div 
//                       className="relative w-full h-full cursor-pointer" 
//                       onClick={() => {
//                         setSelectedVideo(video);
//                         setIsModalOpen(true);
//                       }}
//                     >
//                       <Image
//                         src={video.thumbnail}
//                         alt={video.title}
//                         fill
//                         className="object-cover transition-transform duration-700 cursor-pointer group-hover:scale-105"
//                         sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                       />
                      
//                       {/* Video Preview - Only shows on hover */}
//                       {hoverIndex === index && video.videoUrl && (
//                         <motion.div 
//                           className="absolute inset-0 bg-black z-10"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
//                             <iframe
//                               src={`${video.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&modestbranding=1`}
//                               className="w-full h-full"
//                               title={`Preview of ${video.title}`}
//                               allow="autoplay; encrypted-media"
//                               frameBorder="0"
//                             ></iframe>
//                           ) : (
//                             <video
//                               src={video.videoUrl}
//                               className="w-full h-full object-cover"
//                               autoPlay
//                               muted
//                               loop
//                               playsInline
//                             />
//                           )}
//                         </motion.div>
//                       )}
                      
//                       {/* Duration Badge - Always Visible at Top Left */}
//                       {video.duration && (
//                         <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-full text-white text-xs flex items-center space-x-1 backdrop-blur-sm z-20">
//                           <Clock className="w-3 h-3 text-cyan-400" />
//                           <span>{video.duration}</span>
//                         </div>
//                       )}
                      
//                       {/* Hover Overlay - Only Show on Hover */}
//                       <motion.div 
//                         className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 z-20"
//                         style={{
//                           clipPath: hoverIndex === index ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
//                           transition: "clip-path 0.4s ease-out"
//                         }}
//                       >
//                         {/* Title and Description - Show on Hover */}
//                         <motion.div
//                           initial={{ y: 20, opacity: 0 }}
//                           animate={hoverIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
//                           transition={{ duration: 0.4, delay: 0.1 }}
//                         >
//                           <h3 className="font-bold text-white text-sm mb-0.5">
//                             {video.title}
//                           </h3>
//                           <p className="text-gray-300 text-xs line-clamp-2">
//                             {video.description}
//                           </p>
//                         </motion.div>
//                       </motion.div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div 
//             className="text-center py-24 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl backdrop-blur-md border border-indigo-800/20 shadow-lg"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, type: "spring" }}
//           >
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//                 transition: {
//                   duration: 3,
//                   ease: "easeInOut",
//                   repeat: Infinity,
//                 }
//               }}
//             >
//               <Info className="w-20 h-20 text-indigo-400/60 mx-auto mb-6" />
//               <p className="text-cyan-100/80 text-2xl font-light">No videos available at the moment.</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>

//       <AnimatePresence>
//         {isModalOpen && (
//           <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//             <DialogContent className="max-w-4xl p-0 bg-slate-900 rounded-xl overflow-hidden border-none shadow-2xl shadow-indigo-500/20">
//               <DialogTitle className="sr-only">
//                 {selectedVideo ? selectedVideo.title : 'Video Player'}
//               </DialogTitle>
              
//               <motion.div
//                 className="absolute top-4 right-4 z-10"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 transition={{ duration: 0.3, type: "spring" }}
//               >
//                 <DialogClose className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-200 hover:rotate-90">
//                   <X className="w-5 h-5" />
//                 </DialogClose>
//               </motion.div>
              
//               {selectedVideo && (
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.4 }}
//                   className="flex flex-col"
//                 >
//                   <div className="aspect-video relative">
//                     {/* If videoUrl is a YouTube link, embed it */}
//                     {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
//                       <iframe
//                         src={selectedVideo.videoUrl.replace('watch?v=', 'embed/')}
//                         className="w-full h-full"
//                         allowFullScreen
//                         title={selectedVideo.title}
//                       ></iframe>
//                     ) : (
//                       <video
//                         src={selectedVideo.videoUrl}
//                         className="w-full h-full"
//                         controls
//                         autoPlay
//                       />
//                     )}
//                   </div>
//                   <motion.div 
//                     className="p-6 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 backdrop-blur-md"
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.4, delay: 0.2 }}
//                   >
//                     <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
//                     <p className="text-cyan-100/80">{selectedVideo.description}</p>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </DialogContent>
//           </Dialog>
//         )}
//       </AnimatePresence>

//       {/* Scroll to top button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg shadow-indigo-500/30 z-50 hover:bg-indigo-500"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronUp className="w-5 h-5" />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default VideoGallery;




'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Play, X, Clock, Info, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  title?: string;
  description?: string;
}

// Image processing hook - same as HomeHero
const useProcessedImage = (imagePath: string) => {
  const [processedUrl, setProcessedUrl] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<'loading' | 'success' | 'error'>('loading');

  // Fixed API base URL - same as HomeHero
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';

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

  useEffect(() => {
    console.log('VideoGallery Debug - Original imagePath:', imagePath);
    
    if (!imagePath) {
      setImageStatus('error');
      return;
    }

    const processedImageUrl = processApiImage(imagePath);
    console.log('VideoGallery Debug - Processed URL:', processedImageUrl);
    setProcessedUrl(processedImageUrl);

    const testImage = async () => {
      try {
        const response = await fetch(processedImageUrl, { 
          method: 'HEAD',
          mode: 'cors'
        });
        
        console.log('VideoGallery Debug - Response status:', response.status, response.ok);
        
        if (response.ok) {
          console.log('VideoGallery Debug - Image test SUCCESS');
          setImageStatus('success');
        } else {
          console.log('VideoGallery Debug - Image test FAILED');
          setImageStatus('error');
        }
      } catch (error) {
        console.error('VideoGallery Debug - Image test ERROR:', error);
        setImageStatus('error');
      }
    };

    testImage();
  }, [imagePath]);

  return { processedUrl, imageStatus };
};

// Video Card Component
const VideoCard = ({ video, index, onPlay }: { 
  video: Video; 
  index: number; 
  onPlay: (video: Video) => void;
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { processedUrl, imageStatus } = useProcessedImage(video.thumbnail);
  const defaultThumbnail = "/images/media/default-video.jpg";

  // Staggered card animation
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Float animation for cards
  const floatAnimation = (index: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3 + (index % 3) * 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  });

  return (
    <motion.div
      variants={cardVariants}
      animate={floatAnimation(index)}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      className="group flex justify-center hover:cursor-pointer perspective-1000"
      style={{ 
        transformStyle: "preserve-3d",
      }}
    >
      <Card 
        className="overflow-hidden aspect-square transition-all duration-300 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-none rounded-xl hover:rounded-none hover:shadow-2xl hover:shadow-indigo-500/40 cursor-pointer"
        style={{ 
          width: '260px', 
          height: '260px',
          transformStyle: "preserve-3d",
          transform: hoverIndex === index ? "rotateY(0deg) scale(1.03)" : "rotateY(0deg) scale(1)",
          transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        <CardContent className="p-0 h-full relative">
          {/* Square Image Container */}
          <div 
            className="relative w-full h-full cursor-pointer" 
            onClick={() => onPlay(video)}
          >
            {imageStatus === 'success' && processedUrl ? (
              <Image
                src={processedUrl}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-700 cursor-pointer group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={85}
                onLoad={() => console.log(`VideoGallery thumbnail loaded: ${processedUrl}`)}
                onError={() => console.error(`VideoGallery thumbnail failed: ${processedUrl}`)}
              />
            ) : (
              // Fallback background when image is not available
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-indigo-800/50 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-white/60 mx-auto mb-2" />
                  <p className="text-white/80 font-medium text-sm px-4">{video.title}</p>
                </div>
              </div>
            )}
            
            {/* Video Preview - Only shows on hover */}
            {hoverIndex === index && video.videoUrl && (
              <motion.div 
                className="absolute inset-0 bg-black z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={`${video.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&modestbranding=1`}
                    className="w-full h-full"
                    title={`Preview of ${video.title}`}
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                  ></iframe>
                ) : (
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </motion.div>
            )}
            
            {/* Duration Badge - Always Visible at Top Left */}
            {video.duration && (
              <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-full text-white text-xs flex items-center space-x-1 backdrop-blur-sm z-20">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>{video.duration}</span>
              </div>
            )}
            
            {/* Hover Overlay - Only Show on Hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 z-20"
              style={{
                clipPath: hoverIndex === index ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                transition: "clip-path 0.4s ease-out"
              }}
            >
              {/* Title and Description - Show on Hover */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={hoverIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="font-bold text-white text-sm mb-0.5">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2">
                  {video.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const VideoGallery = ({ 
  videos, 
  title = "Video Gallery", 
  description = "Watch our latest corporate videos and project highlights" 
}: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Staggered card animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleVideoPlay = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              width: (Math.random() * 300 + 200) + "px",
              height: (Math.random() * 300 + 200) + "px",
              opacity: 0.1 + Math.random() * 0.15
            }}
            animate={{
              x: [null, Math.random() * 20 - 10 + "%"],
              y: [null, Math.random() * 20 - 10 + "%"],
              scale: [1, 1.1, 0.9, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-2">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <h2 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 mb-6">
              {title}
            </h2>
          </div>
          <motion.p 
            className="text-2xl font-light text-cyan-100/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {videos.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {videos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                onPlay={handleVideoPlay}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-24 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl backdrop-blur-md border border-indigo-800/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              }}
            >
              <Info className="w-20 h-20 text-indigo-400/60 mx-auto mb-6" />
              <p className="text-cyan-100/80 text-2xl font-light">No videos available at the moment.</p>
            </motion.div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl p-0 bg-slate-900 rounded-xl overflow-hidden border-none shadow-2xl shadow-indigo-500/20">
              <DialogTitle className="sr-only">
                {selectedVideo ? selectedVideo.title : 'Video Player'}
              </DialogTitle>
              
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <DialogClose className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-200 hover:rotate-90">
                  <X className="w-5 h-5" />
                </DialogClose>
              </motion.div>
              
              {selectedVideo && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="aspect-video relative">
                    {/* If videoUrl is a YouTube link, embed it */}
                    {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                      <iframe
                        src={selectedVideo.videoUrl.replace('watch?v=', 'embed/')}
                        className="w-full h-full"
                        allowFullScreen
                        title={selectedVideo.title}
                      ></iframe>
                    ) : (
                      <video
                        src={selectedVideo.videoUrl}
                        className="w-full h-full"
                        controls
                        autoPlay
                      />
                    )}
                  </div>
                  <motion.div 
                    className="p-6 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 backdrop-blur-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                    <p className="text-cyan-100/80">{selectedVideo.description}</p>
                  </motion.div>
                </motion.div>
              )}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>



      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg shadow-indigo-500/30 z-50 hover:bg-indigo-500"
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

export default VideoGallery;