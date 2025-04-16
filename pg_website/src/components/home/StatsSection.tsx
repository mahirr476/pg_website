// 'use client';
// // src/components/home/StatsSection.tsx
// import { motion } from 'framer-motion';
// import { Building2, Users, Globe, Award, TrendingUp, Leaf } from 'lucide-react';

// const StatsSection = () => {
//   const stats = [
//     {
//       icon: <Building2 className="w-8 h-8 text-company-orange" />,
//       value: "20+",
//       label: "Companies",
//       description: "Diverse portfolio across industries"
//     },
//     {
//       icon: <Users className="w-8 h-8 text-company-orange" />,
//       value: "10,000+",
//       label: "Employees",
//       description: "Skilled workforce worldwide"
//     },
//     {
//       icon: <Globe className="w-8 h-8 text-company-orange" />,
//       value: "12+",
//       label: "Industries",
//       description: "Sectors of operation"
//     },
//     {
//       icon: <Award className="w-8 h-8 text-company-orange" />,
//       value: "30+",
//       label: "Years",
//       description: "Of business excellence"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-company-orange" />,
//       value: "50+",
//       label: "Countries",
//       description: "Global market presence"
//     },
//     {
//       icon: <Leaf className="w-8 h-8 text-company-orange" />,
//       value: "100%",
//       label: "Sustainable",
//       description: "Environmental commitment"
//     }
//   ];

//   return (
//     <section className="py-20 bg-company-royal relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//         }} />
//       </div>

//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-white">Our Impact in Numbers</h2>
//           <p className="text-company-light/80 max-w-2xl mx-auto text-lg">
//             Leading change and driving growth across multiple industries with sustainable practices
//             and innovative solutions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white border border-white/10 hover:bg-white/10 transition-colors"
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/10 p-3 rounded-lg">
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-company-orange mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-lg font-semibold mb-1">{stat.label}</div>
//                   <div className="text-company-light/70">{stat.description}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;



// "use client"
// // src/components/home/StatsSection.tsx
// import React from 'react';

// interface Impact {
//   id: number;
//   title: string;
//   number: string;
//   description: string;
// }

// interface StatsSectionProps {
//   impacts: Impact[];
// }

// const StatsSection: React.FC<StatsSectionProps> = ({ impacts }) => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             See the difference we're making around the world
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {impacts.map((impact) => (
//             <div 
//               key={impact.id} 
//               className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:transform hover:scale-105"
//             >
//               <div className="text-4xl font-bold text-blue-600 mb-3">{impact.number}</div>
//               <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
//               <p className="text-gray-600">{impact.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;



// 'use client';
// // src/components/home/StatsSection.tsx
// import { motion } from 'framer-motion';
// import { Building2, Users, Globe, Award, TrendingUp, Leaf } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface Impact {
//   id: number;
//   title: string;
//   number: string;
//   description: string;
// }

// interface StatsSectionProps {
//   impacts: Impact[];
//   heroes: Hero[];
// }

// const StatsSection: React.FC<StatsSectionProps> = ({ impacts, heroes }) => {
//   // Get the second hero (index 2) for the section title and description
//   const statsHero = heroes.find(hero => hero.index === 2) || heroes[1] || heroes[0];
  
//   // Map icons to impact items
//   const getIcon = (index: number) => {
//     const icons = [
//       <Leaf className="w-8 h-8 text-company-orange" />,
//       <Globe className="w-8 h-8 text-company-orange" />,
//       <Building2 className="w-8 h-8 text-company-orange" />,
//       <Users className="w-8 h-8 text-company-orange" />,
//       <TrendingUp className="w-8 h-8 text-company-orange" />,
//       <Award className="w-8 h-8 text-company-orange" />
//     ];
//     return icons[index % icons.length];
//   };

//   return (
//     <section className="py-20 bg-company-royal relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//         }} />
//       </div>
      
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-white">{statsHero?.title || "Our Impact in Numbers"}</h2>
//           <p className="text-company-light/80 text-gray-100 max-w-2xl mx-auto text-lg ">
//             {statsHero?.description}
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {impacts.map((impact, index) => (
//             <motion.div
//               key={impact.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white border border-white/10 hover:bg-white/10 transition-colors"
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/10 p-3 rounded-lg">
//                   {getIcon(index)}
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-company-orange mb-1">
//                     {impact.number}
//                   </div>
//                   <div className="text-lg font-semibold mb-1">{impact.title}</div>
//                   <div className="text-company-light/70">{impact.description}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


'use client';
// src/components/home/StatsSection.tsx
import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award, TrendingUp, Leaf } from 'lucide-react';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
}

interface Impact {
  id: number;
  title: string;
  number: string;
  description: string;
}

interface StatsSectionProps {
  impacts: Impact[];
  heroes: Hero[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ impacts, heroes }) => {
  // Get the second hero (index 2) for the section title and description
  const statsHero = heroes.find(hero => hero.index === 2) || heroes[1] || heroes[0];
  
  // Map icons to impact items
  const getIcon = (index: number) => {
    const icons = [
      <Leaf key="leaf-icon" className="w-8 h-8 text-company-orange" />,
      <Globe key="globe-icon" className="w-8 h-8 text-company-orange" />,
      <Building2 key="building-icon" className="w-8 h-8 text-company-orange" />,
      <Users key="users-icon" className="w-8 h-8 text-company-orange" />,
      <TrendingUp key="trending-icon" className="w-8 h-8 text-company-orange" />,
      <Award key="award-icon" className="w-8 h-8 text-company-orange" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="py-20 bg-company-royal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{statsHero?.title || "Our Impact in Numbers"}</h2>
          <p className="text-company-light/80 text-gray-100 max-w-2xl mx-auto text-lg ">
            {statsHero?.description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {getIcon(index)}
                </div>
                <div>
                  <div className="text-3xl font-bold text-company-orange mb-1">
                    {impact.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">{impact.title}</div>
                  <div className="text-company-light/70">{impact.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;