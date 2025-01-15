'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const Loading = () => {
  const [imageWidth, setImageWidth] = useState(150); 
  const imageRef = useRef(null);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.naturalWidth); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        <Image
          src="/images/loader.gif"
          alt="Loading..."
          width={imageWidth}
          height={imageWidth}
          priority
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default Loading;
