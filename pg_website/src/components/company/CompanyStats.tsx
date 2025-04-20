// // components/company/CompanyStats.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { CompanyStatsProps } from '@/types/company';

// interface Stat {
//   label: string;
//   value: string;
// }

// const COMPANY_STATS: Stat[] = [
//   { label: 'Global Presence', value: '10+ Countries' },
//   { label: 'Annual Revenue', value: '$50M+' },
//   { label: 'Client Satisfaction', value: '98%' },
// ];

// const CompanyStats = ({ data }: CompanyStatsProps) => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4">Company Highlights</h2>
//           <p className="text-xl text-gray-600">Key achievements and milestones</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {COMPANY_STATS.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.label}</h3>
//                 <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyStats;



// // components/company/CompanyStats.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';

// interface Stat {
//   label: string;
//   value: string;
// }

// interface CompanyStatsProps {
//   data: Stat[];
// }

// const CompanyStats = ({ data }: CompanyStatsProps) => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4">Company Highlights</h2>
//           <p className="text-xl text-gray-600">Key achievements and milestones</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {data.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.label}</h3>
//                 <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyStats;


'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Stat {
  label: string;
  value: string;
  icon?: string;
}

interface CompanyStatsProps {
  data: Stat[];
}

const CompanyStats = ({ data }: CompanyStatsProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  // Start animation when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Custom colors for cards
  const cardColors = [
    { bg: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10', accent: 'bg-blue-500', text: 'text-blue-600' },
    { bg: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10', accent: 'bg-purple-500', text: 'text-purple-600' },
    { bg: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10', accent: 'bg-emerald-500', text: 'text-emerald-600' },
    { bg: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10', accent: 'bg-amber-500', text: 'text-amber-600' },
    { bg: 'bg-gradient-to-br from-rose-500/10 to-red-500/10', accent: 'bg-rose-500', text: 'text-rose-600' },
    { bg: 'bg-gradient-to-br from-cyan-500/10 to-sky-500/10', accent: 'bg-cyan-500', text: 'text-cyan-600' },
  ];

  // Icons for visual interest
  const icons = ['📈', '🏆', '💼', '🚀', '💰', '⭐️'];
  
  // Prepare data with icons and colors
  const enhancedData = data.map((item, index) => ({
    ...item,
    icon: item.icon || icons[index % icons.length],
    color: cardColors[index % cardColors.length]
  }));

  return (
    <section 
      ref={containerRef} 
      className="py-24 relative overflow-hidden"
    >
      {/* Dynamic background */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Company Highlights
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key achievements and milestones that define our success story
          </p>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isInView ? '120px' : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Stats grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : (index % 2 === 0 ? -50 : 50), 
                y: isInView ? 0 : 20 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.1),
                ease: [0.17, 0.67, 0.83, 0.97] // Smooth easing
              }}
            >
              <Card className={`h-full p-1 group hover:shadow-xl transition-all duration-500 ${stat.color.bg} relative overflow-hidden border-0 rounded-xl`}>
                {/* Animated background highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </div>
                
                <div className="relative h-full rounded-lg p-5 flex flex-col items-center text-center z-10 bg-white/80 backdrop-blur-sm">
                  {/* Icon with animation */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-3xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </h3>
                  
                  {/* Value with counter animation */}
                  <div className="mt-auto">
                    <AnimatePresence>
                      {hasAnimated && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: 0.3 + (index * 0.1) 
                          }}
                          className={`text-5xl font-bold ${stat.color.text} relative`}
                        >
                          {/* Simple display for values */}
                          <span className={`text-4xl font-bold ${stat.color.text}`}>
                            {stat.value}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;