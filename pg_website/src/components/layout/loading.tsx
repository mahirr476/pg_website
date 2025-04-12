'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
  const [imageWidth, setImageWidth] = useState<number>(100); // Smaller initial width
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageLoad = (): void => {
    if (imageRef.current) {
      // You can adjust this calculation to make the image smaller than its natural width
      const naturalWidth = imageRef.current.naturalWidth;
      setImageWidth(Math.min(naturalWidth, 100)); // Cap the width at 100px
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative">
        <Image
          ref={imageRef as any} // Type casting as 'any' because Next.js Image ref typing is complex
          src="/images/loader.gif"
          alt="Loading..."
          width={imageWidth}
          height={imageWidth}
          priority
          onLoadingComplete={handleImageLoad}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Loading;