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

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Heart, Users, School, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

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
  
  // Scroll state for scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Use inView to trigger card animations when they come into view
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  // Effect to handle scroll and show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
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

  // Card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

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
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {details.map((detail, index) => (
            <motion.div
              key={detail.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/5 shadow-xl group"
            >
              <motion.div 
                variants={iconVariants}
                initial="initial"
                animate="animate"
                className="bg-company-orange rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md shadow-company-orange/20"
              >
                {getIconByTitle(detail.title)}
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {detail.title}
              </motion.h3>
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {detail.description}
              </motion.p>
              
              {/* Additional hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-company-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll to top button - Blue by default, orange on hover */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 z-50 hover:bg-company-orange hover:shadow-orange-500/30 transition-colors duration-300"
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

export default CSRHero;