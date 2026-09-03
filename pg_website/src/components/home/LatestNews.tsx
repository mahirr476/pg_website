



'use client';
// src/components/home/LatestNews.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, X, ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

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

// Image processing hook - same as HomeHero
const useProcessedImage = (imagePath: string) => {
  const [processedUrl, setProcessedUrl] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<'loading' | 'success' | 'error'>('loading');

  // Fixed API base URL - same as HomeHero
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pg-admin.57.155.183.218.nip.io';

  // Process API image with the correct URL format - same logic as HomeHero
  const processApiImage = (imagePath: string): string => {
    if (!imagePath) return '';
    
    let finalUrl: string;
    
    if (imagePath.startsWith('public/')) {
      // Path already has 'public/' prefix
      finalUrl = `${API_BASE_URL}/${imagePath}`;
    } else if (imagePath.startsWith('uploads/')) {
      // Path has 'uploads/' prefix, add 'public/'
      finalUrl = `${API_BASE_URL}/public/${imagePath}`;
    } else {
      // Path has no prefix, add 'public/uploads/'
      finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
    }
    
    return finalUrl;
  };

  useEffect(() => {
    console.log('LatestNews Debug - Original imagePath:', imagePath);
    
    if (!imagePath) {
      setImageStatus('error');
      return;
    }

    const processedImageUrl = processApiImage(imagePath);
    console.log('LatestNews Debug - Processed URL:', processedImageUrl);
    setProcessedUrl(processedImageUrl);

    const testImage = async () => {
      try {
        const response = await fetch(processedImageUrl, { 
          method: 'HEAD',
          mode: 'cors'
        });
        
        console.log('LatestNews Debug - Response status:', response.status, response.ok);
        
        if (response.ok) {
          console.log('LatestNews Debug - Image test SUCCESS');
          setImageStatus('success');
        } else {
          console.log('LatestNews Debug - Image test FAILED');
          setImageStatus('error');
        }
      } catch (error) {
        console.error('LatestNews Debug - Image test ERROR:', error);
        setImageStatus('error');
      }
    };

    testImage();
  }, [imagePath]);

  return { processedUrl, imageStatus };
};

// Modal component - DESIGN UNCHANGED, only image handling fixed
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
  const { processedUrl, imageStatus } = useProcessedImage(article?.image || '');
  
  if (!isOpen || !article) return null;

  // Format date for display in modal
  const formattedDate = formatDate(article.date);
  
  // Fallback content shown only when the API doesn't provide article.content
  const articleContent = article.content || `
    <p>${article.description || `This is a detailed article about ${article.title}.`}</p>
    <p>Paragon Group is one of Bangladesh's leading diversified business conglomerates, with a strong presence across poultry, animal health, feed, food processing, real estate, and consumer goods. For more than three decades, the Group has been committed to delivering quality products and services while investing in the communities where it operates.</p>
    <p>Through initiatives like this, Paragon Group continues to focus on sustainable growth, job creation, and social responsibility — supporting local farmers, promoting food security, and contributing to the wider economic development of Bangladesh.</p>
    <p>Stay connected with Paragon Group's official news and media channels for the latest updates on our projects, partnerships, and community programs.</p>
  `;

  // Fallback related topics shown only when the API doesn't provide article.content
  const relatedTopics = [
    {
      id: 1,
      title: "About Paragon Group",
      content: "Paragon Group is a leading Bangladeshi conglomerate with businesses spanning poultry, animal health, feed, food, real estate, and consumer products, serving millions of customers nationwide.",
      icon: "🏢"
    },
    {
      id: 2,
      title: "Community & CSR Initiatives",
      content: "Paragon Group invests in local communities through employment generation, farmer support programs, education, and health initiatives across Bangladesh.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Sustainability Commitment",
      content: "Paragon Group is committed to sustainable and responsible business practices, ensuring long-term value for customers, employees, and the communities it serves.",
      icon: "🌱"
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
          {/* Header image - FIXED: Now uses processed image */}
          <div className="h-64 rounded-t-lg overflow-hidden">
            {imageStatus === 'success' && processedUrl ? (
              <Image
                src={processedUrl}
                alt={article.title}
                fill
                className="object-cover object-center"
                sizes="896px"
                quality={85}
                onLoad={() => console.log(`LatestNews modal image loaded: ${processedUrl}`)}
                onError={() => console.error(`LatestNews modal image failed: ${processedUrl}`)}
              />
            ) : (
              // Fallback with same gradient as your original design
              <div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center"
              >
                <FileText className="w-16 h-16 text-white/50" />
              </div>
            )}
          </div>
          
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
            className="prose max-w-none text-justify"
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

// News Card Component - DESIGN UNCHANGED, only image handling fixed
const NewsCard = ({ item, index, onClick }: { 
  item: News; 
  index: number; 
  onClick: () => void;
}) => {
  const { processedUrl, imageStatus } = useProcessedImage(item.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 group">
        <CardContent className="p-0">
          <div className="relative h-48">
            {/* FIXED: Now uses Next.js Image with processed URL */}
            {imageStatus === 'success' && processedUrl ? (
              <Image
                src={processedUrl}
                alt={item.title}
                fill
                className="object-cover object-center rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
                onLoad={() => console.log(`LatestNews card image loaded: ${processedUrl}`)}
                onError={() => console.error(`LatestNews card image failed: ${processedUrl}`)}
              />
            ) : (
              // Fallback with same gradient as your original design
              <div 
                className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg group-hover:scale-105 transition-transform duration-500 flex items-center justify-center"
              >
                <FileText className="w-12 h-12 text-white/60" />
              </div>
            )}
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
              onClick={onClick}
              className="inline-flex items-center text-company-orange hover:text-company-orange/80 font-medium"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
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
            <NewsCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => openModal(item)}
            />
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