
// // 'use client';
// // // src/components/home/CompanyOverview.tsx
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
// // import Link from 'next/link';

// // interface Hero {
// //   id: number;
// //   index: number;
// //   title: string;
// //   description: string;
// //   images: string[]; // Added images array
// // }

// // interface CompanyOverviewProps {
// //   heroes: Hero[];
// // }

// // const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
// //   // Get the fourth hero (index 4) for the section title and description
// //   const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];
  
// //   // Get the image URL from the hero's images array with proper formatting
// //   let imageUrl = "/images/milestones/poultry-hatachary.jpg"; // Default fallback image
  
// //   if (overviewHero?.images && overviewHero.images.length > 0) {
// //     // Remove 'public/' prefix and format URL properly
// //     const imagePath = overviewHero.images[0].replace(/^public\//, '');
// //     imageUrl = `http://api.pg-admin.57.155.183.218.nip.io/${imagePath}`;
// //   }

// //   const values = [
// //     {
// //       icon: <Target className="w-6 h-6 text-company-orange" />,
// //       title: "Vision",
// //       description: "To be a leading force in sustainable business practices across multiple industries."
// //     },
// //     {
// //       icon: <Users className="w-6 h-6 text-company-orange" />,
// //       title: "People",
// //       description: "Empowering our workforce of over 10,000 skilled professionals."
// //     },
// //     {
// //       icon: <Leaf className="w-6 h-6 text-company-orange" />,
// //       title: "Sustainability",
// //       description: "Committed to environmental stewardship and community development."
// //     }
// //   ];

// //   const achievements = [
// //     "Leading market position in multiple sectors",
// //     "State-of-the-art manufacturing facilities",
// //     "Strong focus on research and development",
// //     "Comprehensive quality management systems",
// //     "Sustainable business practices",
// //     "Global market presence"
// //   ];

// //   console.log("CompanyOverview - Image URL:", imageUrl); // Add this for debugging

// //   return (
// //     <section className="py-20">
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="text-4xl font-bold mb-6 text-company-royal">
// //               {overviewHero?.title || ""}
// //             </h2>
// //             <p className="text-gray-600 mb-8 text-lg">
// //               {overviewHero?.description || ""}
// //             </p>

// //             <div className="grid gap-6 mb-8">
// //               {values.map((value, index) => (
// //                 <motion.div
// //                   key={value.title}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: index * 0.1 }}
// //                   viewport={{ once: true }}
// //                 >
// //                   <Card className="bg-company-light border-none">
// //                     <CardContent className="p-4">
// //                       <div className="flex items-start space-x-4">
// //                         <div className="bg-white p-2 rounded-lg">
// //                           {value.icon}
// //                         </div>
// //                         <div>
// //                           <h3 className="font-semibold text-company-royal mb-1">
// //                             {value.title}
// //                           </h3>
// //                           <p className="text-gray-600">{value.description}</p>
// //                         </div>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             <Link href="/about/about-us">
// //               <Button 
// //                 className="bg-company-orange hover:bg-company-orange/90 text-white group"
// //               >
// //                 Learn More About Us
// //                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
// //               </Button>
// //             </Link>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >
// //             <div className="relative h-[600px] rounded-lg overflow-hidden">
// //               <Image
// //                 src={imageUrl}
// //                 alt="Company Overview"
// //                 fill
// //                 className="object-cover"
// //                 onError={(e) => {
// //                   console.error(`Image failed to load: ${imageUrl}`);
// //                   console.error('Error details:', e);
// //                 }}
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
              
// //               {/* Achievement List Overlay */}
// //               <div className="absolute bottom-0 left-0 right-0 p-8">
// //                 <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
// //                   <h3 className="text-lg font-semibold text-company-royal mb-4">
// //                     Key Achievements
// //                   </h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //                     {achievements.map((achievement, index) => (
// //                       <motion.div
// //                         key={index}
// //                         initial={{ opacity: 0, x: -20 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.3, delay: index * 0.1 }}
// //                         viewport={{ once: true }}
// //                         className="flex items-center space-x-2"
// //                       >
// //                         <CheckCircle2 className="w-5 h-5 text-company-orange flex-shrink-0" />
// //                         <span className="text-gray-700 text-sm">{achievement}</span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Decorative Elements */}
// //             <div className="absolute -top-4 -right-4 w-24 h-24 bg-company-orange/10 rounded-full" />
// //             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-company-blue/10 rounded-full" />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CompanyOverview;





// 'use client';
// // src/components/home/CompanyOverview.tsx
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
// import Link from 'next/link';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// interface CompanyOverviewProps {
//   heroes: Hero[];
// }

// const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
//   const [workingImageUrl, setWorkingImageUrl] = useState<string | null>(null);
//   const [imageStatus, setImageStatus] = useState<{[key: string]: 'loading' | 'success' | 'error'}>({});

//   // Fixed API base URL - same as HomeHero
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://api.pg-admin.57.155.183.218.nip.io';

//   // Get the fourth hero (index 4) for the section title and description
//   const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];
  
//   // Process API images with the correct URL format - same logic as HomeHero
//   const processApiImages = (hero: Hero): string[] => {
//     const processedImages: string[] = [];
    
//     if (hero?.images && hero.images.length > 0) {
//       hero.images.forEach(imagePath => {
//         let finalUrl: string;
        
//         if (imagePath.startsWith('public/')) {
//           // Path already has 'public/' prefix
//           finalUrl = `${API_BASE_URL}/${imagePath}`;
//         } else if (imagePath.startsWith('uploads/')) {
//           // Path has 'uploads/' prefix, add 'public/'
//           finalUrl = `${API_BASE_URL}/public/${imagePath}`;
//         } else {
//           // Path has no prefix, add 'public/uploads/'
//           finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
//         }
        
//         processedImages.push(finalUrl);
//       });
//     }
    
//     return processedImages;
//   };

//   // Test API images only - no static fallback
//   useEffect(() => {
//     const testImages = async () => {
//       if (!overviewHero) return;
      
//       const candidateImages = processApiImages(overviewHero);
      
//       // Only test API images - no static fallback
//       for (const imageUrl of candidateImages) {
//         try {
//           const response = await fetch(imageUrl, { 
//             method: 'HEAD',
//             mode: 'cors'
//           });
          
//           if (response.ok) {
//             setWorkingImageUrl(imageUrl);
//             setImageStatus(prev => ({ ...prev, [imageUrl]: 'success' }));
//             console.log(`CompanyOverview - Working API image found: ${imageUrl}`);
//             break; // Use the first working image
//           } else {
//             setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
//             console.warn(`CompanyOverview - API image failed with status ${response.status}: ${imageUrl}`);
//           }
//         } catch (error) {
//           console.warn(`CompanyOverview - Failed to load API image: ${imageUrl}`, error);
//           setImageStatus(prev => ({ ...prev, [imageUrl]: 'error' }));
//         }
//       }
      
//       // If no API images work, leave workingImageUrl as null
//       if (!workingImageUrl && candidateImages.length > 0) {
//         console.log(`CompanyOverview - No working API images found from ${candidateImages.length} candidates`);
//       }
//     };

//     testImages();
//   }, [overviewHero, API_BASE_URL]); // Re-run when hero or API URL changes

//   const values = [
//     {
//       icon: <Target className="w-6 h-6 text-company-orange" />,
//       title: "Vision",
//       description: "To be a leading force in sustainable business practices across multiple industries."
//     },
//     {
//       icon: <Users className="w-6 h-6 text-company-orange" />,
//       title: "People",
//       description: "Empowering our workforce of over 10,000 skilled professionals."
//     },
//     {
//       icon: <Leaf className="w-6 h-6 text-company-orange" />,
//       title: "Sustainability",
//       description: "Committed to environmental stewardship and community development."
//     }
//   ];

//   const achievements = [
//     "Leading market position in multiple sectors",
//     "State-of-the-art manufacturing facilities",
//     "Strong focus on research and development",
//     "Comprehensive quality management systems",
//     "Sustainable business practices",
//     "Global market presence"
//   ];

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold mb-6 text-company-royal">
//               {overviewHero?.title || ""}
//             </h2>
//             <p className="text-gray-600 mb-8 text-lg">
//               {overviewHero?.description || ""}
//             </p>

//             <div className="grid gap-6 mb-8">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={value.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-company-light border-none">
//                     <CardContent className="p-4">
//                       <div className="flex items-start space-x-4">
//                         <div className="bg-white p-2 rounded-lg">
//                           {value.icon}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-company-royal mb-1">
//                             {value.title}
//                           </h3>
//                           <p className="text-gray-600">{value.description}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             <Link href="/about/about-us">
//               <Button 
//                 className="bg-company-orange hover:bg-company-orange/90 text-white group"
//               >
//                 Learn More About Us
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative h-[600px] rounded-lg overflow-hidden">
//               {workingImageUrl ? (
//                 <Image
//                   src={workingImageUrl}
//                   alt="Company Overview"
//                   fill
//                   className="object-cover object-center"
//                   quality={85}
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   onError={(e) => {
//                     console.error(`CompanyOverview - API image failed to load: ${workingImageUrl}`);
//                     console.error('Error details:', e);
//                   }}
//                   onLoad={() => {
//                     console.log(`CompanyOverview - API image loaded successfully: ${workingImageUrl}`);
//                   }}
//                 />
//               ) : (
//                 // Show gradient background when no API images are available
//                 <div className="absolute inset-0 bg-gradient-to-br from-company-royal via-company-blue to-company-orange" />
//               )}
              
//               <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
              
//               {/* Achievement List Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
//                   <h3 className="text-lg font-semibold text-company-royal mb-4">
//                     Key Achievements
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {achievements.map((achievement, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                         className="flex items-center space-x-2"
//                       >
//                         <CheckCircle2 className="w-5 h-5 text-company-orange flex-shrink-0" />
//                         <span className="text-gray-700 text-sm">{achievement}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-company-orange/10 rounded-full" />
//             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-company-blue/10 rounded-full" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyOverview;





'use client';
// src/components/home/CompanyOverview.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
import Link from 'next/link';
import { formatImageUrls, getFirstWorkingImage } from '@/lib/api-config';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
  images: string[];
}

interface CompanyOverviewProps {
  heroes: Hero[];
}

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
  const [workingImageUrl, setWorkingImageUrl] = useState<string | null>(null);

  // Get the fourth hero (index 4) for the section title and description
  const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];

  // Test API images only using centralized utility
  useEffect(() => {
    const testImages = async () => {
      if (!overviewHero || !overviewHero.images || overviewHero.images.length === 0) {
        console.log('CompanyOverview - No hero or images found');
        return;
      }
      
      // Format image URLs using centralized utility
      const candidateImages = formatImageUrls(overviewHero.images);
      
      console.log(`CompanyOverview - Testing ${candidateImages.length} API images:`, candidateImages);
      
      // Get first working image using centralized utility
      const workingImage = await getFirstWorkingImage(candidateImages);
      
      if (workingImage) {
        setWorkingImageUrl(workingImage);
        console.log(`CompanyOverview - Using API image: ${workingImage}`);
      } else {
        console.log('CompanyOverview - No working API images found');
      }
    };

    testImages();
  }, [overviewHero]);

  const values = [
    {
      icon: <Target className="w-6 h-6 text-company-orange" />,
      title: "Vision",
      description: "To be a leading force in sustainable business practices across multiple industries."
    },
    {
      icon: <Users className="w-6 h-6 text-company-orange" />,
      title: "People",
      description: "Empowering our workforce of over 10,000 skilled professionals."
    },
    {
      icon: <Leaf className="w-6 h-6 text-company-orange" />,
      title: "Sustainability",
      description: "Committed to environmental stewardship and community development."
    }
  ];

  const achievements = [
    "Leading market position in multiple sectors",
    "State-of-the-art manufacturing facilities",
    "Strong focus on research and development",
    "Comprehensive quality management systems",
    "Sustainable business practices",
    "Global market presence"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-company-royal">
              {overviewHero?.title || ""}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {overviewHero?.description || ""}
            </p>

            <div className="grid gap-6 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-company-light border-none">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-lg">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-company-royal mb-1">
                            {value.title}
                          </h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Link href="/about/about-us">
              <Button 
                className="bg-company-orange hover:bg-company-orange/90 text-white group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              {workingImageUrl ? (
                <Image
                  src={workingImageUrl}
                  alt="Company Overview"
                  fill
                  className="object-cover object-center"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    console.error(`CompanyOverview - API image failed to load: ${workingImageUrl}`);
                    console.error('Error details:', e);
                  }}
                  onLoad={() => {
                    console.log(`CompanyOverview - API image loaded successfully: ${workingImageUrl}`);
                  }}
                />
              ) : (
                // Show gradient background when no API images are available
                <div className="absolute inset-0 bg-gradient-to-br from-company-royal via-company-blue to-company-orange">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-lg font-medium opacity-75">
                        Company Overview
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
              
              {/* Achievement List Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-company-royal mb-4">
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-company-orange flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-company-orange/10 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-company-blue/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;