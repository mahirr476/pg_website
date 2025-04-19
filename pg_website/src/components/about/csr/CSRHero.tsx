// 'use client';
// // src/components/csr/CSRHero.tsx
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Heart, Users, School, Leaf } from 'lucide-react';

// const CSRHero = () => {
//   const highlights = [
//     {
//       icon: <Heart className="w-6 h-6 text-white" />,
//       title: "Community Support",
//       description: "Supporting education and healthcare initiatives"
//     },
//     {
//       icon: <School className="w-6 h-6 text-white" />,
//       title: "Educational Aid",
//       description: "Helping needy meritorious students"
//     },
//     {
//       icon: <Users className="w-6 h-6 text-white" />,
//       title: "Social Impact",
//       description: "Contributing to society's welfare"
//     },
//     {
//       icon: <Leaf className="w-6 h-6 text-white" />,
//       title: "Sustainability",
//       description: "Balancing growth with ecosystem preservation"
//     }
//   ];

//   return (
//     <section className="relative min-h-[80vh] flex items-center">
//       <div className="absolute inset-0">
//         <Image
//           src="/images/csr/hero-image.jpg"
//           alt="CSR Activities"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center text-white mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             Corporate Social{' '}
//             <span className="text-company-orange">Responsibility</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-gray-100 leading-relaxed"
//           >
//             Paragon's commitment to civic duty, societal welfare, and environmental 
//             sustainability through impactful initiatives and community engagement.
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {highlights.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
//               className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
//             >
//               <div className="bg-company-orange/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-200">{item.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
//       >
//         <div className="flex flex-col items-center">
//           <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
//           </div>
//           <span className="text-sm mt-2">Scroll to explore</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CSRHero;



// 'use client';

// import { motion } from 'framer-motion';
// import { Heart, Users, School, Leaf } from 'lucide-react';

// interface CSRDetail {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface CSRHeroProps {
//   title: string;
//   description: string;
//   details: CSRDetail[];
// }

// const CSRHero: React.FC<CSRHeroProps> = ({ title, description, details }) => {
//   // Map of icons to use for different titles
//   const getIconByTitle = (title: string) => {
//     const titleLower = title.toLowerCase();
//     if (titleLower.includes('community')) return <Heart className="w-6 h-6 text-white" />;
//     if (titleLower.includes('education')) return <School className="w-6 h-6 text-white" />;
//     if (titleLower.includes('social')) return <Users className="w-6 h-6 text-white" />;
//     if (titleLower.includes('sustain')) return <Leaf className="w-6 h-6 text-white" />;
//     // Default icon
//     return <Heart className="w-6 h-6 text-white" />;
//   };

//   return (
//     <section className="relative min-h-[80vh] flex items-center">
//       <div className="absolute inset-0">
//         {/* Using a div with background image instead of Next.js Image component */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/csr/hero-image.jpg')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center text-white mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             <span className="text-company-orange">{title}</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-gray-100 leading-relaxed"
//           >
//             {description}
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {details.map((detail, index) => (
//             <motion.div
//               key={detail.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
//               className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
//             >
//               <div className="bg-company-orange/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                 {getIconByTitle(detail.title)}
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
//               <p className="text-gray-200">{detail.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
//       >
//         {/* <div className="flex flex-col items-center">
//           <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
//           </div>
//           <span className="text-sm mt-2">Scroll to explore</span>
//         </div> */}
//       </motion.div>
//     </section>
//   );
// };

// export default CSRHero;



'use client';

import { motion } from 'framer-motion';
import { Heart, Users, School, Leaf, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface CSRDetail {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CSRHeroProps {
  title: string;
  description: string;
  details: CSRDetail[];
  bgImage?: string; // Optional prop to pass background image
}

const CSRHero: React.FC<CSRHeroProps> = ({ 
  title, 
  description, 
  details,
  bgImage = "/images/about/csrImage1.jpg" // Default value if not provided
}) => {
  // Ref for scroll functionality
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Scroll handler for the indicator
  const scrollToContent = () => {
    if (contentRef.current) {
      const yOffset = -80; // Adjust based on your header height
      const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Map of icons to use for different titles
  const getIconByTitle = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('community')) return <Heart className="w-6 h-6 text-white" />;
    if (titleLower.includes('education')) return <School className="w-6 h-6 text-white" />;
    if (titleLower.includes('social')) return <Users className="w-6 h-6 text-white" />;
    if (titleLower.includes('sustain')) return <Leaf className="w-6 h-6 text-white" />;
    // Default icon
    return <Heart className="w-6 h-6 text-white" />;
  };

  // Dynamic particle elements for visual enhancement
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <Image 
            src={bgImage}
            alt="CSR Background"
            fill
            priority
            className="object-cover object-center opacity-80"
            style={{
              transform: 'scale(1.1)',  // Slight overflow for parallax effect
            }}
          />
        </div>
        
        {/* Enhanced gradient overlay with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        
        {/* Animated particle effects */}
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block relative mb-6"
          >
            <span className="absolute -inset-2 bg-gradient-to-r from-company-orange/30 to-white/20 blur-lg rounded-full"></span>
            <h1 className="relative text-5xl md:text-6xl font-bold">
              <span className="text-company-orange">{title}</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-100 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          ref={contentRef}
        >
          {details.map((detail, index) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/5 shadow-xl"
            >
              <div className="bg-company-orange rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md shadow-company-orange/20">
                {getIconByTitle(detail.title)}
              </div>
              <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
              <p className="text-gray-200">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden mb-2">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
              animate={{ 
                top: ["0%", "100%"],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
          <span className="text-sm mt-1 text-white/80">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CSRHero;