
// 'use client';
// // src/components/home/LatestNews.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar, Clock } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
// }

// interface LatestNewsProps {
//   heroes: Hero[];
//   news: News[];
// }

// const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
//   // Get the fifth hero (index 5) for the section title and description
//   const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];

//   // Format date to be more readable
//   const formatDate = (dateString: string) => {
//     if (!dateString) return "";
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <section className="py-20 bg-company-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {newsHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.length > 0 ? (
//             news.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                   <CardContent className="p-0">
//                     <div className="relative h-48">
//                       <div 
//                         className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                         style={{ 
//                           backgroundImage: item.image 
//                             ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
//                             : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//                         }}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <Badge className="bg-company-orange hover:bg-company-orange/90">
//                           {item.tag || "News"}
//                         </Badge>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {formatDate(item.date)}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{item.description}</p>
//                       <Link 
//                         href={item.link || "/news"} 
//                         className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))
//           ) : (
//             // Fallback if no news items are available
//             <div className="col-span-3 text-center py-10">
//               <p className="text-gray-500">No news items available at the moment.</p>
//             </div>
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/media">
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
//             >
//               View All News
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



// 'use client';
// // src/components/home/LatestNews.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
// }

// interface LatestNewsProps {
//   heroes: Hero[];
//   news: News[];
// }

// const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
//   // Get the fifth hero (index 5) for the section title and description
//   const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];

//   // Format date to be more readable
//   const formatDate = (dateString: string) => {
//     if (!dateString) return "";
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <section className="py-20 bg-company-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {newsHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.length > 0 ? (
//             news.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                   <CardContent className="p-0">
//                     <div className="relative h-48">
//                       <div 
//                         className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                         style={{ 
//                           backgroundImage: item.image 
//                             ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
//                             : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//                         }}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <Badge className="bg-company-orange hover:bg-company-orange/90">
//                           {item.tag || "News"}
//                         </Badge>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {formatDate(item.date)}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{item.description}</p>
//                       <Link 
//                         href={item.link || "/news"} 
//                         className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))
//           ) : (
//             // Fallback if no news items are available
//             <div className="col-span-3 text-center py-10">
//               <p className="text-gray-500">No news items available at the moment.</p>
//             </div>
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/media">
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
//             >
//               View All News
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;




// 'use client';
// // src/components/home/LatestNews.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
// }

// interface LatestNewsProps {
//   heroes: Hero[];
//   news: News[];
// }

// const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
//   // Get the fifth hero (index 5) for the section title and description
//   const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];

//   // Format date to be more readable
//   const formatDate = (dateString: string) => {
//     if (!dateString) return "";
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     } catch (_) {
//       // Using underscore to indicate intentionally unused parameter
//       return dateString;
//     }
//   };

//   return (
//     <section className="py-20 bg-company-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {newsHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.length > 0 ? (
//             news.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                   <CardContent className="p-0">
//                     <div className="relative h-48">
//                       <div 
//                         className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                         style={{ 
//                           backgroundImage: item.image 
//                             ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
//                             : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//                         }}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <Badge className="bg-company-orange hover:bg-company-orange/90">
//                           {item.tag || "News"}
//                         </Badge>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {formatDate(item.date)}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{item.description}</p>
//                       <Link 
//                         href={item.link || "/news"} 
//                         className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))
//           ) : (
//             // Fallback if no news items are available
//             <div className="col-span-3 text-center py-10">
//               <p className="text-gray-500">No news items available at the moment.</p>
//             </div>
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/media">
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
//             >
//               View All News
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;




// 'use client';
// // src/components/home/LatestNews.tsx
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
// }

// interface LatestNewsProps {
//   heroes: Hero[];
//   news: News[];
// }

// const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
//   // Get the fifth hero (index 5) for the section title and description
//   const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];

//   // Format date to be more readable
//   const formatDate = (dateString: string) => {
//     if (!dateString) return "";
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     } catch {
//       // Empty catch block without parameter
//       return dateString;
//     }
//   };

//   return (
//     <section className="py-20 bg-company-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {newsHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.length > 0 ? (
//             news.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                   <CardContent className="p-0">
//                     <div className="relative h-48">
//                       <div 
//                         className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                         style={{ 
//                           backgroundImage: item.image 
//                             ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
//                             : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//                         }}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <Badge className="bg-company-orange hover:bg-company-orange/90">
//                           {item.tag || "News"}
//                         </Badge>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {formatDate(item.date)}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{item.description}</p>
//                       <Link 
//                         href={item.link || "/news"} 
//                         className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))
//           ) : (
//             // Fallback if no news items are available
//             <div className="col-span-3 text-center py-10">
//               <p className="text-gray-500">No news items available at the moment.</p>
//             </div>
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/media">
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
//             >
//               View All News
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



// 'use client';
// // src/components/home/LatestNews.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar, X } from 'lucide-react';

// interface Hero {
//   id: number;
//   index: number;
//   title: string;
//   description: string;
// }

// interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
//   content?: string; // Optional content field for the modal
// }

// interface LatestNewsProps {
//   heroes: Hero[];
//   news: News[];
// }

// // Modal component
// const ArticleModal = ({ 
//   isOpen, 
//   onClose, 
//   article 
// }: { 
//   isOpen: boolean; 
//   onClose: () => void; 
//   article: News | null;
// }) => {
//   if (!isOpen || !article) return null;

//   // Format date for display in modal
//   const formattedDate = formatDate(article.date);
  
//   // Sample content if not provided in the article
//   const articleContent = article.content || `
//     <p>This is a detailed article about ${article.title}. The full content would be displayed here.</p>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
//     <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p>
//     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.</p>
//     <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.</p>
//   `;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.2 }}
//         className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//       >
//         <div className="relative">
//           {/* Header image */}
//           <div 
//             className="h-64 bg-cover bg-center rounded-t-lg"
//             style={{ 
//               backgroundImage: article.image 
//                 ? `url(http://localhost:7000/${article.image.replace('public/', '')})` 
//                 : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//             }}
//           />
          
//           {/* Close button */}
//           <button 
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
//             aria-label="Close modal"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>
        
//         <div className="p-8">
//           <div className="flex items-center justify-between mb-4">
//             <Badge className="bg-company-orange hover:bg-company-orange/90">
//               {article.tag || "News"}
//             </Badge>
//             <div className="flex items-center text-sm text-gray-500">
//               <Calendar className="w-4 h-4 mr-1" />
//               {formattedDate}
//             </div>
//           </div>
          
//           <h2 className="text-3xl font-bold mb-4 text-company-royal">{article.title}</h2>
          
//           <div 
//             className="prose max-w-none"
//             dangerouslySetInnerHTML={{ __html: articleContent }}
//           />
          
//           <div className="mt-8 border-t pt-6 flex justify-between items-center">
//             <Link 
//               href={article.link || "/news"} 
//               className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//             >
//               View Full Article
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Link>
            
//             <Button 
//               onClick={onClose}
//               variant="outline" 
//               className="border-gray-300 text-gray-700 hover:bg-gray-100"
//             >
//               Close
//             </Button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Format date function
// const formatDate = (dateString: string) => {
//   if (!dateString) return "";
  
//   try {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   } catch {
//     // Empty catch block without parameter
//     return dateString;
//   }
// };

// const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
//   // Get the fifth hero (index 5) for the section title and description
//   const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];
  
//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedArticle, setSelectedArticle] = useState<News | null>(null);
  
//   // Function to open modal with selected article
//   const openModal = (article: News) => {
//     setSelectedArticle(article);
//     setIsModalOpen(true);
//     // Prevent body scrolling when modal is open
//     document.body.style.overflow = 'hidden';
//   };
  
//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedArticle(null);
//     // Restore body scrolling
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <section className="py-20 bg-company-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {newsHero?.description || ""}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.length > 0 ? (
//             news.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                   <CardContent className="p-0">
//                     <div className="relative h-48">
//                       <div 
//                         className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                         style={{ 
//                           backgroundImage: item.image 
//                             ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
//                             : 'linear-gradient(to right, #4F46E5, #7C3AED)'
//                         }}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <Badge className="bg-company-orange hover:bg-company-orange/90">
//                           {item.tag || "News"}
//                         </Badge>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {formatDate(item.date)}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{item.description}</p>
//                       <button 
//                         onClick={() => openModal(item)}
//                         className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))
//           ) : (
//             // Fallback if no news items are available
//             <div className="col-span-3 text-center py-10">
//               <p className="text-gray-500">No news items available at the moment.</p>
//             </div>
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/media">
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
//             >
//               View All News
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
      
//       {/* Modal Component */}
//       <ArticleModal 
//         isOpen={isModalOpen} 
//         onClose={closeModal} 
//         article={selectedArticle} 
//       />
//     </section>
//   );
// };

// export default LatestNews;



'use client';
// src/components/home/LatestNews.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, X, ExternalLink } from 'lucide-react';

interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
}

interface News {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  date: string;
  content?: string; // Optional content field for the modal
}

interface LatestNewsProps {
  heroes: Hero[];
  news: News[];
}

// Modal component
const ArticleModal = ({ 
  isOpen, 
  onClose, 
  article 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  article: News | null;
}) => {
  // State to track whether related content is shown
  const [showRelatedContent, setShowRelatedContent] = useState(false);
  
  if (!isOpen || !article) return null;

  // Format date for display in modal
  const formattedDate = formatDate(article.date);
  
  // Sample content if not provided in the article
  const articleContent = article.content || `
    <p>This is a detailed article about ${article.title}. The full content would be displayed here.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
    <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.</p>
    <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.</p>
  `;

  // Sample related topics based on article tag or title
  const relatedTopics = [
    {
      id: 1,
      title: `More on ${article.tag || "Industry News"}`,
      content: `Recent developments in ${article.tag || "the industry"} show increasing trends in the market. Our analysis suggests continued growth in this sector.`,
      icon: "📈"
    },
    {
      id: 2,
      title: "Industry Insights",
      content: "Expert opinions suggest that the topics covered in this article will continue to be relevant through 2025. Market analysts predict significant changes ahead.",
      icon: "💡"
    },
    {
      id: 3,
      title: "Related Research",
      content: "Our team has compiled additional information about this topic. The research shows promising results that align with the article's conclusions.",
      icon: "🔍"
    }
  ];

  // Handle showing related content
  const handleViewFullArticle = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowRelatedContent(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          {/* Header image */}
          <div 
            className="h-64 bg-cover bg-center rounded-t-lg"
            style={{ 
              backgroundImage: article.image 
                ? `url(http://localhost:7000/${article.image.replace('public/', '')})` 
                : 'linear-gradient(to right, #4F46E5, #7C3AED)'
            }}
          />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-company-orange hover:bg-company-orange/90">
              {article.tag || "News"}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {formattedDate}
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-company-royal">{article.title}</h2>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
          
          {/* Related Content Section - shown after clicking "View Full Article" */}
          {showRelatedContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-company-royal">Related Topics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedTopics.map(topic => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{topic.icon}</div>
                      <h4 className="text-lg font-medium mb-2">{topic.title}</h4>
                      <p className="text-gray-600 text-sm">{topic.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
          
          <div className="mt-8 border-t pt-6 flex justify-between items-center">
            {!showRelatedContent ? (
              <button 
                onClick={handleViewFullArticle}
                className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
              >
                View Full Article
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link 
                href={article.link || "/news"} 
                className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
              >
                Visit Original Source
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            )}
            
            <Button 
              onClick={onClose}
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Format date function
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    // Empty catch block without parameter
    return dateString;
  }
};

const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
  // Get the fifth hero (index 5) for the section title and description
  const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];
  
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<News | null>(null);
  
  // Function to open modal with selected article
  const openModal = (article: News) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  // Always show exactly 3 news items
  const displayNews = () => {
    // If there are at least 3 news items, take the first 3
    if (news.length >= 3) {
      return news.slice(0, 3);
    }
    
    // If there are fewer than 3 news items, create placeholder items to fill the gap
    const placeholders: News[] = [];
    
    for (let i = news.length; i < 3; i++) {
      placeholders.push({
        id: -i, // Negative ID to ensure uniqueness
        title: "Coming Soon",
        description: "Stay tuned for more exciting news and updates from our company.",
        image: "",
        link: "",
        tag: "Upcoming",
        date: new Date().toISOString()
      });
    }
    
    return [...news, ...placeholders];
  };

  // Get exactly 3 news items to display
  const newsToDisplay = displayNews();

  return (
    <section className="py-20 bg-company-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-company-royal">{newsHero?.title || ""}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {newsHero?.description || ""}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsToDisplay.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                      style={{ 
                        backgroundImage: item.image 
                          ? `url(http://localhost:7000/${item.image.replace('public/', '')})` 
                          : 'linear-gradient(to right, #4F46E5, #7C3AED)'
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-company-orange hover:bg-company-orange/90">
                        {item.tag || "News"}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button 
                      onClick={() => openModal(item)}
                      className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/media">
            <Button 
              variant="outline" 
              size="lg"
              className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white group"
            >
              View All News
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Modal Component */}
      <ArticleModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        article={selectedArticle} 
      />
    </section>
  );
};

export default LatestNews;