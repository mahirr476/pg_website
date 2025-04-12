// 'use client';
// // src/components/home/LatestNews.tsx
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Calendar, Clock } from 'lucide-react';

// const LatestNews = () => {
//   const news = [
//     {
//       title: "New Feed Mill Plant Opening",
//       category: "Business Update",
//       date: "January 3, 2025",
//       image: "/images/news/feed-mill.jpg",
//       excerpt: "State-of-the-art feed mill facility inaugurated to enhance production capacity"
//     },
//     {
//       title: "Sustainable Farming Initiative",
//       category: "Sustainability",
//       date: "December 28, 2024",
//       image: "/images/news/sustainable-farming.jpg",
//       excerpt: "Launch of new eco-friendly farming practices across all agricultural units"
//     },
//     {
//       title: "Community Development Program",
//       category: "CSR",
//       date: "December 15, 2024",
//       image: "/images/news/community.jpg",
//       excerpt: "Empowering local communities through education and skill development"
//     }
//   ];

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
//           <h2 className="text-4xl font-bold mb-4 text-company-royal">Latest Updates</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Stay informed about our latest developments, achievements, and community initiatives
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {news.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-lg transition-all duration-300 group">
//                 <CardContent className="p-0">
//                   <div className="relative h-48">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <Badge className="bg-company-orange hover:bg-company-orange/90">
//                         {item.category}
//                       </Badge>
//                       <div className="flex items-center text-sm text-gray-500">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {item.date}
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2 text-company-royal group-hover:text-company-orange transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4">{item.excerpt}</p>
//                     <Link 
//                       href="/news" 
//                       className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
//                     >
//                       Read More
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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


'use client';
// src/components/home/LatestNews.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from 'lucide-react';

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
}

interface LatestNewsProps {
  heroes: Hero[];
  news: News[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ heroes, news }) => {
  // Get the fifth hero (index 5) for the section title and description
  const newsHero = heroes.find(hero => hero.index === 5) || heroes[4] || heroes[0];

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

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
          {news.length > 0 ? (
            news.map((item, index) => (
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
                      <Link 
                        href={item.link || "/news"} 
                        className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            // Fallback if no news items are available
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500">No news items available at the moment.</p>
            </div>
          )}
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
    </section>
  );
};

export default LatestNews;