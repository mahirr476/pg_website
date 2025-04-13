// // components/media/VideoGallery.tsx
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Dialog, DialogContent } from '@/components/ui/dialog';
// import { Play } from 'lucide-react';
// import Image from 'next/image';

// // Using the video data from your component
// const videos = [
//   {
//     id: 1,
//     title: "Corporate Overview",
//     thumbnail: '/images/media/gallary1.jpeg',
//     videoUrl: '/video1.mp4',
//     duration: "3:45",
//     description: "An overview of Paragon Group's operations"
//   },
//   {
//     id: 2,
//     title: "Our Sustainability Journey",
//     thumbnail: '/images/media/gallary2.png',
//     videoUrl: '/video2.mp4',
//     duration: "4:20",
//     description: "How we're building a sustainable future"
//   },
//   {
//     id: 3,
//     title: "Innovation at Paragon",
//     thumbnail: '/images/media/gallary3.jpg',
//     videoUrl: '/video3.mp4',
//     duration: "5:15",
//     description: "Leading through innovation"
//   },
//   {
//     id: 4,
//     title: "Community Impact",
//     thumbnail: '/images/media/gallary1.jpeg',
//     videoUrl: '/video4.mp4',
//     duration: "3:30",
//     description: "Making a difference in communities"
//   },
//   {
//     id: 5,
//     title: "Manufacturing Excellence",
//     thumbnail: '/images/media/gallary2.png',
//     videoUrl: '/video5.mp4',
//     duration: "4:45",
//     description: "Our state-of-the-art facilities"
//   },
//   {
//     id: 6,
//     title: "Employee Stories",
//     thumbnail: '/images/media/gallary3.jpg',
//     videoUrl: '/video6.mp4',
//     duration: "3:15",
//     description: "Meet our team members"
//   },
//   {
//     id: 7,
//     title: "Global Operations",
//     thumbnail: '/images/media/gallary1.jpeg',
//     videoUrl: '/video7.mp4',
//     duration: "4:00",
//     description: "Our worldwide presence"
//   },
//   {
//     id: 8,
//     title: "Product Innovation",
//     thumbnail: '/images/media/gallary2.png',
//     videoUrl: '/video8.mp4',
//     duration: "3:50",
//     description: "Latest product developments"
//   },
//   {
//     id: 9,
//     title: "Future Vision",
//     thumbnail: '/images/media/gallary3.jpg',
//     videoUrl: '/video9.mp4',
//     duration: "4:30",
//     description: "Our roadmap for the future"
//   }
// ];

// const VideoGallery = () => {
//   interface Video {
//     id: number;
//     title: string;
//     thumbnail: string;
//     videoUrl: string;
//     duration: string;
//     description: string;
//   }
  
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">Video Gallery</h2>
//           <p className="text-xl text-gray-300">
//             Watch our latest corporate videos and project highlights
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
//                 <CardContent className="p-0">
//                   <div className="relative">
//                     <div className="relative w-full aspect-video">
//                       <Image
//                         src={video.thumbnail}
//                         alt={video.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <button
//                       onClick={() => {
//                         setSelectedVideo(video);
//                         setIsModalOpen(true);
//                       }}
//                       className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors duration-300 group"
//                     >
//                       <motion.div
//                         initial={{ scale: 1 }}
//                         animate={{ scale: 1.1 }}
//                         transition={{
//                           duration: 0.6,
//                           repeat: Infinity,
//                           repeatType: 'reverse'
//                         }}
//                         className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
//                       >
//                         <Play className="w-8 h-8 text-purple-600 ml-1" />
//                       </motion.div>
//                     </button>
//                     <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
//                       {video.duration}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-white mb-2">{video.title}</h3>
//                     <p className="text-gray-300 text-sm">{video.description}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="max-w-4xl p-0 bg-gray-900">
//           {selectedVideo && (
//             <div className="aspect-video">
//               <video
//                 src={selectedVideo.videoUrl}
//                 className="w-full h-full"
//                 controls
//                 autoPlay
//               />
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// };

// export default VideoGallery;



'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Play, X, Clock, Info } from 'lucide-react';
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

const VideoGallery = ({ 
  videos, 
  title = "Video Gallery", 
  description = "Watch our latest corporate videos and project highlights" 
}: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
            {title}
            <motion.div 
              className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              initial={{ width: 0, translateX: "-50%" }}
              whileInView={{ width: "100%", translateX: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Card className="overflow-hidden transition-all duration-300 bg-gray-800/50 border-gray-700 backdrop-blur-sm rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className={`object-cover transition-transform duration-700 ${hoverIndex === index ? 'scale-110' : 'scale-100'}`}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-70'}`} />
                      </div>
                      <button
                        onClick={() => {
                          setSelectedVideo(video);
                          setIsModalOpen(true);
                        }}
                        className="absolute inset-0 flex items-center justify-center transition-all duration-500 group"
                        aria-label={`Play ${video.title} video`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg transition-all duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-80'}`}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </button>
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1.5 rounded-full text-white text-sm flex items-center space-x-1 backdrop-blur-sm">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{video.duration}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white text-xl mb-2">{video.title}</h3>
                      <p className="text-gray-300 line-clamp-2">{video.description}</p>
                      <div className="mt-4 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedVideo(video);
                            setIsModalOpen(true);
                          }}
                          className="text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-4 rounded-full flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                        >
                          <Play className="w-4 h-4" />
                          <span>Watch Now</span>
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700">
            <Info className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-xl">No videos available at the moment.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-3xl p-0 bg-gray-900 rounded-xl overflow-hidden border-0 shadow-2xl shadow-purple-500/10">
              <DialogTitle className="sr-only">
                {selectedVideo ? selectedVideo.title : 'Video Player'}
              </DialogTitle>
              
              <DialogClose className="absolute top-3 right-3 z-10 bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                <X className="w-4 h-4" />
              </DialogClose>
              
              {selectedVideo && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                  <div className="p-4 bg-gray-800/70 backdrop-blur-sm">
                    <h3 className="text-base font-bold text-white mb-1">{selectedVideo.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{selectedVideo.description}</p>
                  </div>
                </motion.div>
              )}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;