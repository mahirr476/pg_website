

// 'use client';
// // src/components/home/BusinessHighlight.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import { useState, useEffect } from 'react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface Business {
//   id: number;
//   title: string;
//   bannerImage: string;
//   shortDes: string;
//   slug: string;
// }

// interface BusinessHighlightProps {
//   heroes: Hero[];
//   businesses: Business[];
// }

// const BusinessHighlight: React.FC<BusinessHighlightProps> = ({ heroes, businesses }) => {
//   // Get the third hero (index 3) for the section title and description
//   const businessHero = heroes.find(hero => hero.index === 3) || heroes[2] || heroes[0];
  
//   // State to control whether to show all businesses or just 3
//   const [showAll, setShowAll] = useState(false);
  
//   // Calculate which businesses to display based on showAll state
//   const displayBusinesses = showAll ? businesses : businesses.slice(0, 3);

//   return (
//     <section className="py-24 bg-gradient-to-b from-company-light to-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-company-royal">
//             {businessHero?.title || ""}
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//             {businessHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {displayBusinesses.map((business, index) => (
//             <motion.div
//               key={business.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
//                 <CardContent className="p-0">
//                   <div className="relative h-56 overflow-hidden">
//                     {business.bannerImage ? (
//                       <div 
//                         className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
//                         style={{ 
//                           backgroundImage: `url(http://localhost:7000/${business.bannerImage.replace('public/', '')})`
//                         }}
//                       />
//                     ) : (
//                       <div className="absolute inset-0 bg-company-royal/20 flex items-center justify-center text-gray-600">
//                         {business.title}
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="p-6 relative">
//                     <div className="absolute -top-10 right-6 bg-company-orange text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
//                       <ArrowUpRight className="w-5 h-5" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-3 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                       {business.title}
//                     </h3>
//                     <p className="text-gray-600 mb-5 line-clamp-3">{business.shortDes}</p>
//                     <Link href={`/business-activities/${business.slug || business.id}`} className="inline-block">
//                       <Button 
//                         variant="ghost" 
//                         className="group hover:text-company-orange px-0 hover:bg-transparent"
//                       >
//                         <span className="border-b border-company-orange/0 group-hover:border-company-orange transition-all duration-300">Learn More</span>
//                         <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Button 
//             size="lg"
//             className="bg-company-orange hover:bg-company-orange/90 text-white group shadow-lg shadow-company-orange/20 hover:shadow-company-orange/30 transition-all duration-300"
//             onClick={() => setShowAll(!showAll)}
//           >
//             {showAll ? "Show Less" : "View All Business Activities"}
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BusinessHighlight;



'use client';
// src/components/home/BusinessHighlight.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
}

interface Business {
  id: number;
  title: string;
  bannerImage: string;
  shortDes: string;
  slug: string;
}

interface BusinessHighlightProps {
  heroes: Hero[];
  businesses: Business[];
}

const BusinessHighlight: React.FC<BusinessHighlightProps> = ({ heroes, businesses }) => {
  // Get the third hero (index 3) for the section title and description
  const businessHero = heroes.find(hero => hero.index === 3) || heroes[2] || heroes[0];
  
  // State to control whether to show all businesses or just 3
  const [showAll, setShowAll] = useState(false);
  
  // Calculate which businesses to display based on showAll state
  const displayBusinesses = showAll ? businesses : businesses.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-company-light to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-company-royal">
            {businessHero?.title || ""}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {businessHero?.description || ""}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {displayBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    {business.bannerImage ? (
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ 
                          backgroundImage: `url(http://localhost:7000/${business.bannerImage.replace('public/', '')})`
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-company-royal/20 flex items-center justify-center text-gray-600">
                        {business.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-10 right-6 bg-company-orange text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-company-royal group-hover:text-company-orange transition-colors duration-300">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">{business.shortDes}</p>
                    <Link href={`/business-activities/${business.slug || business.id}`} className="inline-block">
                      <Button 
                        variant="ghost" 
                        className="group hover:text-company-orange px-0 hover:bg-transparent"
                      >
                        <span className="border-b border-company-orange/0 group-hover:border-company-orange transition-all duration-300">Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-company-orange hover:bg-company-orange/90 text-white group shadow-lg shadow-company-orange/20 hover:shadow-company-orange/30 transition-all duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Business Activities"}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHighlight;
