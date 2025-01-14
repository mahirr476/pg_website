// components/media/VideoGallery.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const videos = [
  { thumbnail: '/images/media/gallary1.jpeg', videoUrl: '/video1.mp4' },
  { thumbnail: '/images/media/gallary2.png', videoUrl: '/video2.mp4' },
  { thumbnail: '/images/media/gallary3.jpg', videoUrl: '/video3.mp4' },
  { thumbnail: '/images/media/gallary1.jpeg', videoUrl: '/video4.mp4' },
  { thumbnail: '/images/media/gallary2.png', videoUrl: '/video5.mp4' },
  { thumbnail: '/images/media/gallary3.jpg', videoUrl: '/video6.mp4' },
  { thumbnail: '/images/media/gallary1.jpeg', videoUrl: '/video7.mp4' },
  { thumbnail: '/images/media/gallary2.png', videoUrl: '/video8.mp4' },
  { thumbnail: '/images/media/gallary3.jpg', videoUrl: '/video9.mp4' },
];

const VideoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo('');
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Video Gallery
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(video.videoUrl)}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[220px] rounded-lg overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  quality={100}
                  className="rounded-lg"
                />
              </div>

              {/* Animated Play Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-8 h-8 bg-black rounded-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 absolute text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-11/12 max-w-3xl bg-gray-800 rounded-lg shadow-lg">
            {/* Close Button (X) */}
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold bg-black rounded-full p-2 hover:bg-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full h-auto rounded-b-lg"
              src={currentVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
