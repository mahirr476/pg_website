// components/media/NewsArticles.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Paragon Group's Innovative Approach to Sustainable Manufacturing",
    source: "Business Weekly",
    date: "January 10, 2024",
    image: "/images/media/news-1.jpg",
    link: "#",
    excerpt: "The leading conglomerate sets new standards in sustainable manufacturing practices..."
  },
  {
    id: 2,
    title: "How Paragon is Transforming Bangladesh's Agricultural Sector",
    source: "Economic Times",
    date: "December 28, 2023",
    image: "/images/media/news-2.jpg",
    link: "#",
    excerpt: "Through technological innovation and sustainable practices, Paragon Group is revolutionizing..."
  },
  {
    id: 3,
    title: "Paragon Group's Impact on Local Communities",
    source: "Daily Star",
    date: "December 15, 2023",
    image: "/images/media/news-3.jpg",
    link: "#",
    excerpt: "A look at how the company's initiatives are benefiting local communities..."
  }
];

const NewsArticles = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">In the News</h2>
          <p className="text-xl text-gray-600">
            Recent media coverage about Paragon Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full aspect-video object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90">
                      {article.source}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a 
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;