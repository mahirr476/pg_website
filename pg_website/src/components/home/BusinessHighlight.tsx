'use client';
// src/components/home/BusinessHighlight.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const BusinessHighlight = () => {
  const businesses = [
    {
      title: "Poultry Farming",
      description: "State-of-the-art poultry farming with modern breeding techniques and biosecurity measures.",
      image: "/images/business/poultry.jpg",
      link: "/business-activities/poultry-farming"
    },
    {
      title: "Processing Plant",
      description: "Advanced processing facilities ensuring highest quality standards and food safety.",
      image: "/images/business/processing.jpg",
      link: "/business-activities/processing-plant"
    },
    {
      title: "Feed Mills",
      description: "Production of high-quality animal feed using latest technology and research.",
      image: "/images/business/feedmill.jpg",
      link: "/business-activities/feed-mills"
    }
  ];

  return (
    <section className="py-20 bg-company-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-company-royal">Our Core Businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Diverse portfolio of businesses driven by innovation, sustainability, and excellence
            in every sector we operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={business.image}
                      alt={business.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-company-royal">{business.title}</h3>
                    <p className="text-gray-600 mb-4">{business.description}</p>
                    <Link href={business.link}>
                      <Button 
                        variant="ghost" 
                        className="group hover:text-company-orange"
                      >
                        Learn More
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
          <Link href="/business-activities">
            <Button 
              size="lg"
              className="bg-company-orange hover:bg-company-orange/90 text-white group"
            >
              View All Business Activities
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHighlight;