// 'use client';

// import React, { useRef, useState } from 'react';
// import Image from 'next/image';

// const Loading: React.FC = () => {
//   const [imageWidth, setImageWidth] = useState<number>(100); 
//   const imageRef = useRef<HTMLImageElement | null>(null);

//   const handleImageLoad = (): void => {
//     if (imageRef.current) {
//       const naturalWidth = imageRef.current.naturalWidth;
//       setImageWidth(Math.min(naturalWidth, 100)); // Cap the width at 100px
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="relative">
//         <Image
//           ref={imageRef as any}
//           src="/images/loader.gif"
//           alt="Loading..."
//           width={imageWidth}
//           height={imageWidth}
//           priority
//           onLoadingComplete={handleImageLoad}
//           className="object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Loading;


'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
  const [imageWidth, setImageWidth] = useState<number>(100); 
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageLoad = (): void => {
    if (imageRef.current) {
      const naturalWidth = imageRef.current.naturalWidth;
      setImageWidth(Math.min(naturalWidth, 100)); // Cap the width at 100px
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        <Image
          ref={imageRef}
          src="/images/loader.gif"
          alt="Loading..."
          width={imageWidth}
          height={imageWidth}
          priority
          onLoad={handleImageLoad}
          className="object-contain"
          unoptimized // Added to fix the animated GIF warning
        />
      </div>
    </div>
  );
};

export default Loading;