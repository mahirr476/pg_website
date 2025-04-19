// 'use client';
// // src/components/about/BoardOfDirectors.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Linkedin, Mail, Star, Heart, Leaf, Sparkles, Target, Building, Users } from 'lucide-react';

// type CoreValue = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

// type BoardMember = {
//   id: number;
//   name: string;
//   position: string;
//   image: string;
//   shortBio: string;
//   fullBio: string;
//   values?: CoreValue[];
//   focus?: string[];
// };

// const boardMembers: BoardMember[] = [
//   {
//     id: 1,
//     name: "MOSHIUR RAHMAN",
//     position: "Managing Director",
//     image: "/images/board/moshiur-rahman.jpeg",
//     shortBio: "Started as an entrepreneur in 1979, transformed a printing factory into a diversified business empire.",
//     fullBio: "I started my journey as an entrepreneur in the heart of a printing factory in 1979 with my father, Mizanur Rahman. As new industries began to evolve throughout Bangladesh, I pivoted towards the poultry industry in 1992 as an opportunity, capital, and vision amalgamated with what is Paragon today.",
//     values: [
//       {
//         icon: <Sparkles className="w-6 h-6" />,
//         title: "Innovation",
//         description: "We constantly push the boundaries of what is possible, using technology and creativity to solve problems and create value for our customers."
//       },
//       {
//         icon: <Heart className="w-6 h-6" />,
//         title: "Integrity",
//         description: "We uphold the highest standards of honesty and ethics in all business dealings, treating our employees, customers, and partners with respect and fairness."
//       },
//       {
//         icon: <Leaf className="w-6 h-6" />,
//         title: "Sustainability",
//         description: "We are committed to minimizing our environmental impact and promoting sustainable practices by implementing waste reduction and recycling programs in all our projects."
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "YASMIN RAHMAN",
//     position: "Director",
//     image: "/images/board/yasmin-rahman.jpg",
//     shortBio: "Co-founder who started with 100 layer birds, now leads one of Bangladesh's largest poultry industries.",
//     fullBio: "My husband and I started this company with a flock of 100-layer birds in my father's backyard. After 25 years of commitment to this industry, Paragon is now one of the largest poultry and animal feed industries in Bangladesh.",
//     focus: [
//       "Sustainable business practices",
//       "Women entrepreneurship empowerment",
//       "Creating inclusive business environments",
//       "Supporting women's access to resources and networks"
//     ]
//   },
//   {
//     id: 3,
//     name: "MEHRAN RAHMAN",
//     position: "Director",
//     image: "/images/board/mehran-rahman.jpeg",
//     shortBio: "21st-century industrialist focused on sustainable agriculture and food security.",
//     fullBio: "Paragon proudly serves our customers with high-quality agricultural products, industrial-grade packaging, and consumer foods and services. As an industrialist from the 21st century, my mission is to deliver sustainable solutions that contribute to the growth of our industries and ensure food security for our nation.",
//     focus: [
//       "Food security initiatives",
//       "Sustainable agriculture",
//       "Research and development",
//       "Technology innovation",
//     ]
//   }
// ];

// const BoardOfDirectors = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">Leadership</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Meet the visionaries who have transformed Paragon from humble beginnings into 
//             a leading conglomerate
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {boardMembers.map((member, index) => (
//             <Dialog key={member.id}>
//               <DialogTrigger asChild>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="cursor-pointer"
//                 >
//                   <Card className="group hover:shadow-xl transition-all duration-300">
//                     <CardContent className="p-0">
//                       <div className="relative h-96">
//                         <Image
//                           src={member.image}
//                           alt={member.name}
//                           fill
//                           className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-company-royal to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
//                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <p className="text-sm leading-relaxed">{member.shortBio}</p>
//                           <p className="text-company-orange mt-4 font-medium">Click to read more</p>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-xl font-bold text-company-royal mb-1">{member.name}</h3>
//                         <p className="text-company-orange font-medium">{member.position}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </DialogTrigger>

//               <DialogContent className="max-w-4xl">
//                 <DialogHeader>
//                   <DialogTitle className="text-2xl font-bold text-company-royal">
//                     {member.name}
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="mt-6">
//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div className="relative h-[400px]">
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         fill
//                         className="object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-lg font-semibold text-company-orange mb-2">
//                           {member.position}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed">
//                           {member.fullBio}
//                         </p>
//                       </div>

//                       {member.values && (
//                         <div className="space-y-4">
//                           <h4 className="font-semibold text-company-royal">Core Values</h4>
//                           {member.values.map((value, idx) => (
//                             <div key={idx} className="flex items-start space-x-3">
//                               <div className="text-company-orange mt-1">
//                                 {value.icon}
//                               </div>
//                               <div>
//                                 <h5 className="font-medium text-company-royal">
//                                   {value.title}
//                                 </h5>
//                                 <p className="text-gray-600 text-sm">
//                                   {value.description}
//                                 </p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {member.focus && (
//                         <div className="space-y-3">
//                           <h4 className="font-semibold text-company-royal">Key Focus Areas</h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {member.focus.map((item, idx) => (
//                               <div 
//                                 key={idx}
//                                 className="bg-gray-50 p-3 rounded-lg text-sm text-company-royal flex items-center space-x-2"
//                               >
//                                 <Target className="w-4 h-4 text-company-orange" />
//                                 <span>{item}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BoardOfDirectors;


// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Card, CardContent } from "@/components/ui/card";

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({ 
//   title, 
//   description, 
//   directors 
// }) => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">
//             {title || "Leadership"}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
//                 <div className="relative h-80 w-full">
//                   <img
//                     src={`http://localhost:7000/${director.image}`}
//                     alt={director.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <p className="text-white">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-3">
//                     {director.designation}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BoardOfDirectors;






// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";
// import { X, ChevronRight, Award, ExternalLink } from 'lucide-react';

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
//   longDescription: string; // HTML content
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
//   title,
//   description,
//   directors
// }) => {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (director: Director) => {
//     setSelectedDirector(director);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedDirector(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isModalOpen]);

//   return (
//     <section className="py-20 relative">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-32 -mt-32 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-48 -mb-48 z-0"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block relative mb-4">
//             <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
//             <h2 className="relative text-4xl font-bold text-company-royal">
//               {title || "Leadership"}
//             </h2>
//           </div>
          
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
//                 <div className="relative h-80 w-full overflow-hidden">
//                   <img
//                     src={`http://localhost:7000/${director.image}`}
//                     alt={director.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
//                 <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-4 opacity-90">
//                     {director.designation}
//                   </p>
//                   <button 
//                     onClick={() => openModal(director)}
//                     className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
//                   >
//                     View Profile <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Director Modal */}
//       <AnimatePresence>
//         {selectedDirector && isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3, type: "spring", damping: 25 }}
//               className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-40 h-40 bg-company-orange/10 rounded-full -mr-20 -mt-20 z-0"></div>
//               <div className="absolute bottom-0 left-0 w-40 h-40 bg-company-royal/10 rounded-full -ml-20 -mb-20 z-0"></div>
              
//               <div className="flex flex-col lg:flex-row relative">
//                 {/* Director Image Section */}
//                 <div className="lg:w-2/5 xl:w-1/3 bg-gradient-to-br from-company-royal to-company-royal/90">
//                   <div className="relative h-96 lg:h-full w-full p-4 lg:p-6">
//                     <div className="h-full w-full overflow-hidden rounded-lg relative">
//                       <img 
//                         src={`http://localhost:7000/${selectedDirector.image}`}
//                         alt={selectedDirector.name} 
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-company-royal to-transparent opacity-60"></div>
                      
//                       {/* Decorative icon */}
//                       <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2">
//                         <Award className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Director Info Section */}
//                 <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-10 relative">
//                   {/* Close button */}
//                   <button 
//                     onClick={closeModal}
//                     className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
                  
//                   {/* Render HTML content from longDescription field */}
//                   <div 
//                     className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10"
//                     dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
//                   />
                  
//                   {/* Bottom actions */}
//                   <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
//                     <button 
//                       onClick={closeModal}
//                       className="text-gray-500 hover:text-company-royal transition-colors flex items-center"
//                     >
//                       Close profile <X className="w-4 h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default BoardOfDirectors;



// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";
// import { X, ChevronRight, Award, User } from 'lucide-react';

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
//   longDescription: string; // HTML content
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
//   title,
//   description,
//   directors
// }) => {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

//   const openModal = (director: Director) => {
//     setSelectedDirector(director);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedDirector(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Handle image loading
//   const handleImageLoad = (directorId: number) => {
//     setLoadedImages(prev => ({
//       ...prev,
//       [directorId]: true
//     }));
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isModalOpen]);

//   return (
//     <section className="py-20 relative">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-32 -mt-32 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-48 -mb-48 z-0"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block relative mb-4">
//             <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
//             <h2 className="relative text-4xl font-bold text-company-royal">
//               {title || "Leadership"}
//             </h2>
//           </div>
          
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
//                 <div className="relative h-96 w-full overflow-hidden">
//                   {/* Image placeholder while loading */}
//                   {!loadedImages[director.id] && (
//                     <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//                       <div className="animate-pulse flex flex-col items-center">
//                         <User className="w-16 h-16 text-gray-300" />
//                         <p className="text-gray-400 mt-2">Loading...</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Actual image with proper handling */}
//                   <img
//                     src={`http://localhost:7000/${director.image}`}
//                     alt={director.name}
//                     className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
//                       loadedImages[director.id] ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     onLoad={() => handleImageLoad(director.id)}
//                     onError={() => handleImageLoad(director.id)} // Also mark as loaded on error to remove placeholder
//                   />
                  
//                   {/* Gradient overlay with description */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
                
//                 <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-4 opacity-90">
//                     {director.designation}
//                   </p>
//                   <button 
//                     onClick={() => openModal(director)}
//                     className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
//                   >
//                     View Profile <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Director Modal */}
//       <AnimatePresence>
//         {selectedDirector && isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3, type: "spring", damping: 25 }}
//               className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-40 h-40 bg-company-orange/10 rounded-full -mr-20 -mt-20 z-0"></div>
//               <div className="absolute bottom-0 left-0 w-40 h-40 bg-company-royal/10 rounded-full -ml-20 -mb-20 z-0"></div>
              
//               <div className="flex flex-col lg:flex-row relative">
//                 {/* Director Image Section - Enhanced */}
//                 <div className="lg:w-2/5 xl:w-1/3 bg-gradient-to-br from-company-royal to-company-royal/90 relative">
//                   <div className="relative h-[400px] lg:h-full w-full p-6">
//                     <div className="h-full w-full overflow-hidden rounded-lg shadow-lg relative">
//                       {/* Image with better aspect ratio control */}
//                       <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
//                         <div className="animate-pulse">
//                           <User className="w-16 h-16 text-gray-300" />
//                         </div>
//                       </div>
                      
//                       <img 
//                         src={`http://localhost:7000/${selectedDirector.image}`}
//                         alt={selectedDirector.name} 
//                         className="absolute inset-0 w-full h-full object-contain lg:object-cover z-10"
//                       />
                      
//                       {/* Enhanced overlay with better gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
//                       {/* Decorative icon */}
//                       <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
//                         <Award className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Director Info Section */}
//                 <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-10 relative">
//                   {/* Close button */}
//                   <button 
//                     onClick={closeModal}
//                     className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
                  
//                   {/* Render HTML content from longDescription field */}
//                   <div 
//                     className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10"
//                     dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
//                   />
                  
//                   {/* Bottom actions */}
//                   <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
//                     <button 
//                       onClick={closeModal}
//                       className="text-gray-500 hover:text-company-royal transition-colors flex items-center"
//                     >
//                       Close profile <X className="w-4 h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default BoardOfDirectors;


// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";
// import { X, ChevronRight, Award, User } from 'lucide-react';

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
//   longDescription: string; // HTML content
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
//   title,
//   description,
//   directors
// }) => {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

//   const openModal = (director: Director) => {
//     setSelectedDirector(director);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedDirector(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Handle image loading
//   const handleImageLoad = (directorId: number) => {
//     setLoadedImages(prev => ({
//       ...prev,
//       [directorId]: true
//     }));
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isModalOpen]);

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background decoration - adjusted to prevent overflow */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-16 -mt-16 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-24 -mb-24 z-0"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block relative mb-4">
//             <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
//             <h2 className="relative text-4xl font-bold text-company-royal">
//               {title || "Leadership"}
//             </h2>
//           </div>
          
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
//                 <div className="relative h-96 w-full overflow-hidden">
//                   {/* Image placeholder while loading */}
//                   {!loadedImages[director.id] && (
//                     <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//                       <div className="animate-pulse flex flex-col items-center">
//                         <User className="w-16 h-16 text-gray-300" />
//                         <p className="text-gray-400 mt-2">Loading...</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Actual image with proper handling */}
//                   <img
//                     src={`http://localhost:7000/${director.image}`}
//                     alt={director.name}
//                     className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
//                       loadedImages[director.id] ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     onLoad={() => handleImageLoad(director.id)}
//                     onError={() => handleImageLoad(director.id)} // Also mark as loaded on error to remove placeholder
//                   />
                  
//                   {/* Gradient overlay with description */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
                
//                 <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-4 opacity-90">
//                     {director.designation}
//                   </p>
//                   <button 
//                     onClick={() => openModal(director)}
//                     className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
//                   >
//                     View Profile <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Director Modal */}
//       <AnimatePresence>
//         {selectedDirector && isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3, type: "spring", damping: 25 }}
//               className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Decorative elements - adjusted to prevent overflow */}
//               <div className="absolute top-0 right-0 w-40 h-40 bg-company-orange/10 rounded-full -mr-12 -mt-12 z-0"></div>
//               <div className="absolute bottom-0 left-0 w-40 h-40 bg-company-royal/10 rounded-full -ml-12 -mb-12 z-0"></div>
              
//               <div className="flex flex-col lg:flex-row relative">
//                 {/* Director Image Section - Enhanced */}
//                 <div className="lg:w-2/5 xl:w-1/3 bg-gradient-to-br from-company-royal to-company-royal/90 relative">
//                   <div className="relative h-[400px] lg:h-full w-full p-6">
//                     <div className="h-full w-full overflow-hidden rounded-lg shadow-lg relative">
//                       {/* Image with better aspect ratio control */}
//                       <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
//                         <div className="animate-pulse">
//                           <User className="w-16 h-16 text-gray-300" />
//                         </div>
//                       </div>
                      
//                       <img 
//                         src={`http://localhost:7000/${selectedDirector.image}`}
//                         alt={selectedDirector.name} 
//                         className="absolute inset-0 w-full h-full object-contain lg:object-cover z-10"
//                       />
                      
//                       {/* Enhanced overlay with better gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
//                       {/* Decorative icon */}
//                       <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
//                         <Award className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Director Info Section */}
//                 <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-10 relative">
//                   {/* Close button */}
//                   <button 
//                     onClick={closeModal}
//                     className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
                  
//                   {/* Render HTML content from longDescription field */}
//                   <div 
//                     className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10 overflow-hidden"
//                     dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
//                   />
                  
//                   {/* Bottom actions */}
//                   <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
//                     <button 
//                       onClick={closeModal}
//                       className="text-gray-500 hover:text-company-royal transition-colors flex items-center"
//                     >
//                       Close profile <X className="w-4 h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default BoardOfDirectors;



// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";
// import { X, ChevronRight, Award, User } from 'lucide-react';
// import Image from 'next/image';

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
//   longDescription: string; // HTML content
// }

// interface BoardOfDirectorsProps {
//   title: string;
//   description: string;
//   directors: Director[];
// }

// const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
//   title,
//   description,
//   directors
// }) => {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

//   const openModal = (director: Director) => {
//     setSelectedDirector(director);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedDirector(null);
//       document.body.style.overflow = 'auto';
//     }, 300);
//   };

//   // Handle image loading
//   const handleImageLoad = (directorId: number) => {
//     setLoadedImages(prev => ({
//       ...prev,
//       [directorId]: true
//     }));
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isModalOpen]);

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background decoration - adjusted to prevent overflow */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-16 -mt-16 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-24 -mb-24 z-0"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block relative mb-4">
//             <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
//             <h2 className="relative text-4xl font-bold text-company-royal">
//               {title || "Leadership"}
//             </h2>
//           </div>
          
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description || "Meet the visionaries behind our success"}
//           </p>
//         </motion.div>
        
//         {/* Directors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={director.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
//                 <div className="relative h-96 w-full overflow-hidden">
//                   {/* Image placeholder while loading */}
//                   {!loadedImages[director.id] && (
//                     <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//                       <div className="animate-pulse flex flex-col items-center">
//                         <User className="w-16 h-16 text-gray-300" />
//                         <p className="text-gray-400 mt-2">Loading...</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Next.js Image component - replacing img tag */}
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={`http://localhost:7000/${director.image}`}
//                       alt={director.name}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       style={{ 
//                         objectFit: 'cover',
//                         transition: 'transform 700ms',
//                         transform: 'scale(1)',
//                         opacity: loadedImages[director.id] ? 1 : 0
//                       }}
//                       className="group-hover:scale-105"
//                       onLoadingComplete={() => handleImageLoad(director.id)}
//                       onError={() => handleImageLoad(director.id)}
//                     />
//                   </div>
                  
//                   {/* Gradient overlay with description */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       {director.shortDescription}
//                     </p>
//                   </div>
//                 </div>
                
//                 <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
//                     {director.name}
//                   </h3>
//                   <p className="text-company-orange mb-4 opacity-90">
//                     {director.designation}
//                   </p>
//                   <button 
//                     onClick={() => openModal(director)}
//                     className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
//                   >
//                     View Profile <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Director Modal */}
//       <AnimatePresence>
//         {selectedDirector && isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3, type: "spring", damping: 25 }}
//               className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Decorative elements - adjusted to prevent overflow */}
//               <div className="absolute top-0 right-0 w-40 h-40 bg-company-orange/10 rounded-full -mr-12 -mt-12 z-0"></div>
//               <div className="absolute bottom-0 left-0 w-40 h-40 bg-company-royal/10 rounded-full -ml-12 -mb-12 z-0"></div>
              
//               <div className="flex flex-col lg:flex-row relative">
//                 {/* Director Image Section - Enhanced */}
//                 <div className="lg:w-2/5 xl:w-1/3 bg-gradient-to-br from-company-royal to-company-royal/90 relative">
//                   <div className="relative h-[400px] lg:h-full w-full p-6">
//                     <div className="h-full w-full overflow-hidden rounded-lg shadow-lg relative">
//                       {/* Image placeholder */}
//                       <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
//                         <div className="animate-pulse">
//                           <User className="w-16 h-16 text-gray-300" />
//                         </div>
//                       </div>
                      
//                       {/* Next.js Image component for modal */}
//                       <div className="relative w-full h-full">
//                         <Image 
//                           src={`http://localhost:7000/${selectedDirector.image}`}
//                           alt={selectedDirector.name}
//                           fill
//                           sizes="(max-width: 1024px) 100vw, 33vw"
//                           style={{ 
//                             objectFit: 'cover',
//                             objectPosition: 'center'
//                           }}
//                           priority
//                         />
//                       </div>
                      
//                       {/* Enhanced overlay with better gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
//                       {/* Decorative icon */}
//                       <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
//                         <Award className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Director Info Section */}
//                 <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-10 relative">
//                   {/* Close button */}
//                   <button 
//                     onClick={closeModal}
//                     className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
                  
//                   {/* Render HTML content from longDescription field */}
//                   <div 
//                     className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10 overflow-hidden"
//                     dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
//                   />
                  
//                   {/* Bottom actions */}
//                   <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
//                     <button 
//                       onClick={closeModal}
//                       className="text-gray-500 hover:text-company-royal transition-colors flex items-center"
//                     >
//                       Close profile <X className="w-4 h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default BoardOfDirectors;


'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronRight, Award, User } from 'lucide-react';
import Image from 'next/image';

interface Director {
  id: number;
  orderIndex: number;
  name: string;
  designation: string;
  image: string;
  shortDescription: string;
  longDescription: string; // HTML content
}

interface BoardOfDirectorsProps {
  title: string;
  description: string;
  directors: Director[];
}

const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({
  title,
  description,
  directors
}) => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = (director: Director) => {
    setSelectedDirector(director);
    setIsModalOpen(true);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedDirector(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Handle image loading
  const handleImageLoad = (directorId: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [directorId]: true
    }));
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration - adjusted to prevent overflow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-company-royal/5 rounded-full -ml-24 -mb-24 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
            <h2 className="relative text-4xl font-bold text-company-royal">
              {title || "Leadership"}
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description || "Meet the visionaries behind our success"}
          </p>
        </motion.div>
        
        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="relative h-96 w-full overflow-hidden">
                  {/* Image placeholder while loading */}
                  {!loadedImages[director.id] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="animate-pulse flex flex-col items-center">
                        <User className="w-16 h-16 text-gray-300" />
                        <p className="text-gray-400 mt-2">Loading...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Next.js Image component - replacing img tag */}
                  <div className="relative w-full h-full">
                    <Image
                      src={`http://localhost:7000/${director.image}`}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ 
                        objectFit: 'cover',
                        transition: 'transform 700ms',
                        transform: 'scale(1)',
                        opacity: loadedImages[director.id] ? 1 : 0
                      }}
                      className="group-hover:scale-105"
                      onLoadingComplete={() => handleImageLoad(director.id)}
                      onError={() => handleImageLoad(director.id)}
                    />
                  </div>
                  
                  {/* Gradient overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-company-royal/90 via-company-royal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {director.shortDescription}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-xl font-bold mb-1 text-company-royal group-hover:text-company-orange transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-company-orange mb-4 opacity-90">
                    {director.designation}
                  </p>
                  <button 
                    onClick={() => openModal(director)}
                    className="mt-2 px-4 py-2 bg-company-royal/10 rounded-full text-company-royal font-medium flex items-center hover:bg-company-royal hover:text-white transition-all duration-300 w-full justify-center"
                  >
                    View Profile <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Director Modal */}
      <AnimatePresence>
        {selectedDirector && isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", damping: 22 }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-company-orange/5 rounded-full -mr-20 -mt-20 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-company-royal/5 rounded-full -ml-20 -mb-20 z-0"></div>
              
              <div className="flex flex-col lg:flex-row relative">
                {/* Director Image Section - Enhanced with animation */}
                <div className="lg:w-1/2 xl:w-1/2 bg-gradient-to-br from-company-royal to-company-royal/90 relative overflow-hidden">
                  <motion.div 
                    className="relative h-[400px] lg:h-full w-full"
                  >
                    <div className="h-full w-full overflow-hidden relative">
                      {/* Image placeholder */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <div className="animate-pulse">
                            <User className="w-16 h-16 text-gray-300" />
                          </div>
                        </div>
                      )}
                      
                      {/* Next.js Image component for modal with subtle zoom effect */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={`http://localhost:7000/${selectedDirector.image}`}
                          alt={selectedDirector.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          style={{ 
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transition: 'transform 800ms ease-in-out',
                          }}
                          className="hover:scale-105"
                          priority
                          onLoadingComplete={() => setImageLoaded(true)}
                        />
                      </div>
                      
                      {/* Enhanced overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-company-royal/80 via-company-royal/40 to-transparent z-20"></div>
                      
                      {/* Decorative icon */}
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 z-30">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Director Info Section */}
                <div className="lg:w-1/2 xl:w-1/2 p-6 lg:p-10 relative">
                  {/* Close button - single button for the entire modal */}
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition-colors z-20 shadow-md hover:shadow-lg"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                  
                  {/* Render HTML content from longDescription field */}
                  <div 
                    className="prose max-w-none prose-headings:text-company-royal prose-p:text-gray-600 prose-strong:text-company-royal prose-li:text-gray-600 relative z-10 overflow-auto"
                    style={{ maxHeight: "calc(90vh - 120px)" }}
                    dangerouslySetInnerHTML={{ __html: selectedDirector.longDescription }} 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default BoardOfDirectors;