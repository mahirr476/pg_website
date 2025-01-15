// components/media/VideoGallery.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import Image from 'next/image';

// Using the video data from your component
const videos = [
  {
    id: 1,
    title: "Corporate Overview",
    thumbnail: '/images/media/gallary1.jpeg',
    videoUrl: '/video1.mp4',
    duration: "3:45",
    description: "An overview of Paragon Group's operations"
  },
  {
    id: 2,
    title: "Our Sustainability Journey",
    thumbnail: '/images/media/gallary2.png',
    videoUrl: '/video2.mp4',
    duration: "4:20",
    description: "How we're building a sustainable future"
  },
  {
    id: 3,
    title: "Innovation at Paragon",
    thumbnail: '/images/media/gallary3.jpg',
    videoUrl: '/video3.mp4',
    duration: "5:15",
    description: "Leading through innovation"
  },
  {
    id: 4,
    title: "Community Impact",
    thumbnail: '/images/media/gallary1.jpeg',
    videoUrl: '/video4.mp4',
    duration: "3:30",
    description: "Making a difference in communities"
  },
  {
    id: 5,
    title: "Manufacturing Excellence",
    thumbnail: '/images/media/gallary2.png',
    videoUrl: '/video5.mp4',
    duration: "4:45",
    description: "Our state-of-the-art facilities"
  },
  {
    id: 6,
    title: "Employee Stories",
    thumbnail: '/images/media/gallary3.jpg',
    videoUrl: '/video6.mp4',
    duration: "3:15",
    description: "Meet our team members"
  },
  {
    id: 7,
    title: "Global Operations",
    thumbnail: '/images/media/gallary1.jpeg',
    videoUrl: '/video7.mp4',
    duration: "4:00",
    description: "Our worldwide presence"
  },
  {
    id: 8,
    title: "Product Innovation",
    thumbnail: '/images/media/gallary2.png',
    videoUrl: '/video8.mp4',
    duration: "3:50",
    description: "Latest product developments"
  },
  {
    id: 9,
    title: "Future Vision",
    thumbnail: '/images/media/gallary3.jpg',
    videoUrl: '/video9.mp4',
    duration: "4:30",
    description: "Our roadmap for the future"
  }
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Video Gallery</h2>
          <p className="text-xl text-gray-300">
            Watch our latest corporate videos and project highlights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setSelectedVideo(video);
                        setIsModalOpen(true);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors duration-300 group"
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }}
                        className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                      >
                        <Play className="w-8 h-8 text-purple-600 ml-1" />
                      </motion.div>
                    </button>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl p-0 bg-gray-900">
          {selectedVideo && (
            <div className="aspect-video">
              <video
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                controls
                autoPlay
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoGallery;