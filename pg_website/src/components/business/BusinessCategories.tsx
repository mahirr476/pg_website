// // src/components/business/BusinessCategories.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// interface BusinessCategoriesProps {
//   data: {
//     businessOperations: {
//       description: string;
//       points: string[];
//     };
//     productCategory: {
//       description: string;
//       categories: {
//         title: string;
//         items: string[];
//       }[];
//     };
//     businessUnits: string[];
//   };
// }

// const BusinessCategories = ({ data }: BusinessCategoriesProps) => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <Tabs defaultValue="operations" className="w-full">
//           <TabsList className="w-full justify-start mb-8">
//             <TabsTrigger value="operations">Operations</TabsTrigger>
//             <TabsTrigger value="products">Products</TabsTrigger>
//             <TabsTrigger value="units">Business Units</TabsTrigger>
//           </TabsList>

//           <TabsContent value="operations">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-2xl font-bold mb-4">Business Operations</h3>
//                   <p className="text-gray-600 mb-6">{data.businessOperations.description}</p>
//                   <ul className="space-y-4">
//                     {data.businessOperations.points.map((point, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         className="flex items-start"
//                       >
//                         <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1">
//                           {index + 1}
//                         </span>
//                         <span className="text-gray-700">{point}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="products">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {data.productCategory.categories.map((category, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                 >
//                   <Card>
//                     <CardContent className="p-6">
//                       <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
//                       <ul className="space-y-2">
//                         {category.items.map((item, itemIndex) => (
//                           <li key={itemIndex} className="text-gray-600 flex items-center">
//                             <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="units">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-2xl font-bold mb-6">Business Units</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {data.businessUnits.map((unit, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
//                       >
//                         <span className="text-gray-700">{unit}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// };

// export default BusinessCategories;


// 'use client';

// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// // Define the interface to match your API data structure
// interface BusinessCategoriesProps {
//   data: any; // Using any for flexibility, but you can define a more specific type
// }

// const BusinessCategories = ({ data }: BusinessCategoriesProps) => {
//   // Check if the necessary data exists
//   const hasOperations = data.businessOperations && 
//                        data.businessOperations.description &&
//                        data.businessOperations.points &&
//                        data.businessOperations.points.length > 0;
  
//   const hasProducts = data.productCategory && 
//                      data.productCategory.categories &&
//                      data.productCategory.categories.length > 0;
  
//   const hasUnits = data.businessUnits && 
//                   data.businessUnits.length > 0;

//   // Determine default tab based on available data
//   let defaultTab = 'operations';
//   if (!hasOperations && hasProducts) defaultTab = 'products';
//   else if (!hasOperations && !hasProducts && hasUnits) defaultTab = 'units';

//   // If no data is available, return null or a fallback UI
//   if (!hasOperations && !hasProducts && !hasUnits) {
//     return (
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 text-center text-gray-500">
//           No additional business category information available.
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <Tabs defaultValue={defaultTab} className="w-full">
//           <TabsList className="w-full justify-start mb-8">
//             {hasOperations && <TabsTrigger value="operations">Operations</TabsTrigger>}
//             {hasProducts && <TabsTrigger value="products">Products</TabsTrigger>}
//             {hasUnits && <TabsTrigger value="units">Business Units</TabsTrigger>}
//           </TabsList>

//           {hasOperations && (
//             <TabsContent value="operations">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card>
//                   <CardContent className="p-6">
//                     <h3 className="text-2xl font-bold mb-4">Business Operations</h3>
//                     <p className="text-gray-600 mb-6">{data.businessOperations.description}</p>
//                     <ul className="space-y-4">
//                       {data.businessOperations.points.map((point: string, index: number) => (
//                         <motion.li
//                           key={index}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           className="flex items-start"
//                         >
//                           <span className="flex-shrink-0 w-6 h-6 bg-company-royal rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1">
//                             {index + 1}
//                           </span>
//                           <span className="text-gray-700">{point}</span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </TabsContent>
//           )}

//           {hasProducts && (
//             <TabsContent value="products">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {data.productCategory.categories.map((category: any, index: number) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                   >
//                     <Card>
//                       <CardContent className="p-6">
//                         <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
//                         <ul className="space-y-2">
//                           {category.items.map((item: string, itemIndex: number) => (
//                             <li key={itemIndex} className="text-gray-600 flex items-center">
//                               <span className="w-2 h-2 bg-company-royal rounded-full mr-2"></span>
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </TabsContent>
//           )}

//           {hasUnits && (
//             <TabsContent value="units">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card>
//                   <CardContent className="p-6">
//                     <h3 className="text-2xl font-bold mb-6">Business Units</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {data.businessUnits.map((unit: string, index: number) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
//                         >
//                           <span className="text-gray-700">{unit}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </TabsContent>
//           )}
//         </Tabs>
//       </div>
//     </section>
//   );
// };

// export default BusinessCategories;



// // src/components/business/BusinessCategories.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// interface BusinessItem {
//   id: number;
//   title: string;
//   description: string;
// }

// interface CategoryData {
//   operations: BusinessItem[];
//   products: BusinessItem[];
//   units: BusinessItem[];
// }

// interface BusinessCategoriesProps {
//   categoryData: CategoryData;
// }

// const BusinessCategories = ({ categoryData }: BusinessCategoriesProps) => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <Tabs defaultValue="operations" className="w-full">
//           <TabsList className="w-full justify-start mb-8">
//             <TabsTrigger value="operations">Operations</TabsTrigger>
//             <TabsTrigger value="products">Products</TabsTrigger>
//             <TabsTrigger value="units">Business Units</TabsTrigger>
//           </TabsList>

//           <TabsContent value="operations">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   {/* <h3 className="text-2xl font-bold mb-6">Business Operations</h3> */}
//                   {categoryData.operations.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {categoryData.operations.map((operation, index) => (
//                         <motion.div
//                           key={operation.id}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
//                         >
//                           <h4 className="text-lg font-semibold text-gray-800 mb-2">{operation.title}</h4>
//                           <div 
//                             className="text-gray-600"
//                             dangerouslySetInnerHTML={{ __html: operation.description }}
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-500 text-center py-8">No operations found for this business.</p>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="products">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   {/* <h3 className="text-2xl font-bold mb-6">Business Products</h3> */}
//                   {categoryData.products.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {categoryData.products.map((product, index) => (
//                         <motion.div
//                           key={product.id}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
//                         >
//                           <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h4>
//                           <div 
//                             className="text-gray-600"
//                             dangerouslySetInnerHTML={{ __html: product.description }}
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-500 text-center py-8">No products found for this business.</p>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="units">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   {/* <h3 className="text-2xl font-bold mb-6">Business Units</h3> */}
//                   {categoryData.units.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {categoryData.units.map((unit, index) => (
//                         <motion.div
//                           key={unit.id}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
//                         >
//                           <h4 className="text-lg font-semibold text-gray-800 mb-2">{unit.title}</h4>
//                           <div 
//                             className="text-gray-600"
//                             dangerouslySetInnerHTML={{ __html: unit.description }}
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-500 text-center py-8">No business units found for this business.</p>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// };

// export default BusinessCategories;



'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BusinessItem {
  id: number;
  title: string;
  description: string;
}

interface CategoryData {
  operations: BusinessItem[];
  products: BusinessItem[];
  units: BusinessItem[];
}

interface BusinessCategoriesProps {
  categoryData: CategoryData;
}

const BusinessCategories = ({ categoryData }: BusinessCategoriesProps) => {
  const [activeTab, setActiveTab] = useState('operations');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Animated background patterns
  const BackgroundPattern = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 30px 30px, #e5e7eb 2px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );

  // Category content mapping
  const categoryContent = {
    operations: {
      title: "Business Operations",
      data: categoryData.operations,
      emptyMessage: "No operations found for this business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    products: {
      title: "Products & Services",
      data: categoryData.products,
      emptyMessage: "No products found for this business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    units: {
      title: "Business Units",
      data: categoryData.units,
      emptyMessage: "No business units found for this business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500"
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Business Categories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <Tabs 
          defaultValue="operations" 
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="w-full flex justify-center mb-12 bg-gray-100/80 p-1 rounded-full backdrop-blur-sm border border-gray-200">
              {Object.entries(categoryContent).map(([key, { title, icon }]) => (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-full py-3 px-6 flex items-center gap-2 transition-all duration-300"
                >
                  {icon}
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {Object.entries(categoryContent).map(([key, { data, emptyMessage, color }]) => (
            <TabsContent key={key} value={key}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-gray-200/50 shadow-lg rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm">
                    <div className="p-8">
                      {data.length > 0 ? (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                          {data.map((item, index) => (
                            <motion.div
                              key={item.id}
                              variants={itemVariants}
                              whileHover={{ 
                                y: -5, 
                                transition: { duration: 0.2 } 
                              }}
                              className="group"
                            >
                              <div className="h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative">
                                {/* Gradient top border */}
                                <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
                                
                                <div className="p-6">
                                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                  </h4>
                                  
                                  <div 
                                    className="text-gray-600 prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                  />
                                  
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    className={`h-px bg-gradient-to-r ${color} mt-4 opacity-70`}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="py-16 text-center"
                        >
                          <p className="text-gray-500 text-lg">{emptyMessage}</p>
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BusinessCategories;