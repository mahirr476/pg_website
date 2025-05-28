
// 'use client';
// // src/components/home/CompanyOverview.tsx
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
//   images: string[]; // Added images array
// }

// interface CompanyOverviewProps {
//   heroes: Hero[];
// }

// const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
//   // Get the fourth hero (index 4) for the section title and description
//   const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];
  
//   // Get the image URL from the hero's images array with proper formatting
//   let imageUrl = "/images/milestones/poultry-hatachary.jpg"; // Default fallback image
  
//   if (overviewHero?.images && overviewHero.images.length > 0) {
//     // Remove 'public/' prefix and format URL properly
//     const imagePath = overviewHero.images[0].replace(/^public\//, '');
//     imageUrl = `http://api.pg-admin.57.155.183.218.nip.io/${imagePath}`;
//   }

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

//   console.log("CompanyOverview - Image URL:", imageUrl); // Add this for debugging

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
//               <Image
//                 src={imageUrl}
//                 alt="Company Overview"
//                 fill
//                 className="object-cover"
//                 onError={(e) => {
//                   console.error(`Image failed to load: ${imageUrl}`);
//                   console.error('Error details:', e);
//                 }}
//               />
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



// 'use client';
// // src/components/home/CompanyOverview.tsx
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
//   images: string[]; // Added images array
// }

// interface CompanyOverviewProps {
//   heroes: Hero[];
// }

// const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
//   const [imageError, setImageError] = useState(false);
  
//   // Get the fourth hero (index 4) for the section title and description
//   const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];
  
//   // Get the image URL from the hero's images array with proper formatting
//   let imageUrl = "/images/milestones/poultry-hatachary.jpg"; // Default fallback image
  
//   if (overviewHero?.images && overviewHero.images.length > 0 && !imageError) {
//     try {
//       // Clean the image path properly
//       let imagePath = overviewHero.images[0];
      
//       // Remove 'public/' prefix if it exists
//       imagePath = imagePath.replace(/^public\//, '');
      
//       // Ensure the path starts with '/' for proper URL construction
//       if (!imagePath.startsWith('/')) {
//         imagePath = '/' + imagePath;
//       }
      
//       // Get API URL with fallback
//       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://api.pg-admin.57.155.183.218.nip.io';
      
//       // Construct the full URL safely
//       if (apiUrl && apiUrl.trim()) {
//         // Remove trailing slash from API URL and ensure imagePath starts with /
//         const cleanApiUrl = apiUrl.replace(/\/$/, '');
//         imageUrl = `${cleanApiUrl}${imagePath}`;
//       }
//     } catch (error) {
//       console.error('Error constructing image URL:', error);
//       // Keep the default fallback image
//     }
//   }

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

//   console.log("CompanyOverview Debug Info:");
//   console.log("- NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
//   console.log("- overviewHero images:", overviewHero?.images);
//   console.log("- Final imageUrl:", imageUrl);
//   console.log("- Image error state:", imageError);

//   const handleImageError = (e: any) => {
//     console.error(`Image failed to load: ${imageUrl}`);
//     console.error('Error details:', e);
//     setImageError(true);
//   };

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
//               <Image
//                 src={imageUrl}
//                 alt="Company Overview"
//                 fill
//                 className="object-cover"
//                 onError={handleImageError}
//                 priority={false}
//               />
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

//               {/* Debug overlay - remove this in production */}
//               {process.env.NODE_ENV === 'development' && (
//                 <div className="absolute top-4 right-4 bg-black/75 text-white p-2 rounded text-xs max-w-xs">
//                   <div>API URL: {process.env.NEXT_PUBLIC_API_URL}</div>
//                   <div>Image: {imageUrl}</div>
//                   <div>Error: {imageError ? 'Yes' : 'No'}</div>
//                 </div>
//               )}
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
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

// Custom hook for robust image loading
const useRobustImage = (apiImagePath: string | null, fallbackImage: string) => {
  const [imageUrl, setImageUrl] = useState(fallbackImage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!apiImagePath) {
      setImageUrl(fallbackImage);
      return;
    }

    const testImage = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        // Clean the image path
        let cleanPath = apiImagePath.replace(/^public\//, '');
        if (!cleanPath.startsWith('/')) {
          cleanPath = '/' + cleanPath;
        }

        // Get API URL
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.pg-admin.57.155.183.218.nip.io';
        const cleanApiUrl = apiUrl.replace(/\/$/, '');
        const fullUrl = `${cleanApiUrl}${cleanPath}`;

        // Test the image
        await new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = fullUrl;
          setTimeout(() => reject(new Error('Timeout')), 10000);
        });

        console.log(`✓ Image loaded successfully: ${fullUrl}`);
        setImageUrl(fullUrl);
      } catch (error) {
        console.warn(`✗ Failed to load API image: ${apiImagePath}`);
        
        // Try HTTPS if HTTP failed
        if (apiImagePath && process.env.NEXT_PUBLIC_API_URL?.startsWith('http://')) {
          try {
            let cleanPath = apiImagePath.replace(/^public\//, '');
            if (!cleanPath.startsWith('/')) {
              cleanPath = '/' + cleanPath;
            }

            const httpsUrl = process.env.NEXT_PUBLIC_API_URL.replace('http://', 'https://');
            const fullHttpsUrl = `${httpsUrl.replace(/\/$/, '')}${cleanPath}`;

            await new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = fullHttpsUrl;
              setTimeout(() => reject(new Error('Timeout')), 10000);
            });

            console.log(`✓ HTTPS image loaded successfully: ${fullHttpsUrl}`);
            setImageUrl(fullHttpsUrl);
          } catch (httpsError) {
            console.warn(`✗ Both HTTP and HTTPS failed, using fallback: ${fallbackImage}`);
            setImageUrl(fallbackImage);
            setHasError(true);
          }
        } else {
          setImageUrl(fallbackImage);
          setHasError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    testImage();
  }, [apiImagePath, fallbackImage]);

  return { imageUrl, isLoading, hasError };
};

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ heroes }) => {
  // Get the fourth hero (index 4) for the section title and description
  const overviewHero = heroes.find(hero => hero.index === 4) || heroes[3] || heroes[0];
  
  // Default fallback image
  const fallbackImage = "/images/milestones/poultry-hatachary.jpg";
  
  // Get the API image path
  const apiImagePath = overviewHero?.images && overviewHero.images.length > 0 
    ? overviewHero.images[0] 
    : null;

  // Use the robust image loading hook
  const { imageUrl, isLoading, hasError } = useRobustImage(apiImagePath, fallbackImage);

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

  // Enhanced debug logging
  console.log("CompanyOverview Enhanced Debug Info:");
  console.log("- API URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("- Overview Hero:", overviewHero?.title);
  console.log("- API Image Path:", apiImagePath);
  console.log("- Final Image URL:", imageUrl);
  console.log("- Is Loading:", isLoading);
  console.log("- Has Error:", hasError);
  console.log("- Using Fallback:", hasError || !apiImagePath);

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
              {overviewHero?.title || "Our Company Overview"}
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
              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-company-orange"></div>
                    <span>Loading image...</span>
                  </div>
                </div>
              )}

              <Image
                src={imageUrl}
                alt="Company Overview"
                fill
                className="object-cover"
                priority={false}
                onError={(e) => {
                  console.error(`Image rendering error: ${imageUrl}`, e);
                }}
                onLoad={() => {
                  console.log(`Image rendered successfully: ${imageUrl}`);
                }}
              />
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

              {/* Enhanced debug overlay - only in development */}
              {/* {process.env.NODE_ENV === 'development' && (
                <div className="absolute top-4 right-4 bg-black/85 text-white p-3 rounded text-xs max-w-sm z-50 font-mono">
                  <div className="font-bold text-green-400 mb-2">🔧 CompanyOverview Debug</div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-blue-400">API URL:</span> 
                      <div className="text-xs text-gray-300 break-all">{process.env.NEXT_PUBLIC_API_URL || 'Not set'}</div>
                    </div>
                    <div>
                      <span className="text-blue-400">API Path:</span> 
                      <div className="text-xs text-gray-300 break-all">{apiImagePath || 'None'}</div>
                    </div>
                    <div>
                      <span className="text-blue-400">Final URL:</span> 
                      <div className="text-xs text-gray-300 break-all">{imageUrl}</div>
                    </div>
                    <div>
                      <span className="text-blue-400">Status:</span> 
                      <span className={`ml-1 ${isLoading ? 'text-yellow-400' : hasError ? 'text-red-400' : 'text-green-400'}`}>
                        {isLoading ? 'Loading...' : hasError ? 'Using Fallback' : 'Loaded'}
                      </span>
                    </div>
                  </div>
                </div>
              )} */}
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