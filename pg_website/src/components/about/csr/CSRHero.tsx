'use client';
// src/components/csr/CSRHero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Users, School, Leaf } from 'lucide-react';

const CSRHero = () => {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Community Support",
      description: "Supporting education and healthcare initiatives"
    },
    {
      icon: <School className="w-6 h-6 text-white" />,
      title: "Educational Aid",
      description: "Helping needy meritorious students"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Social Impact",
      description: "Contributing to society's welfare"
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "Sustainability",
      description: "Balancing growth with ecosystem preservation"
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/csr/hero-image.jpg"
          alt="CSR Activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-company-royal/90 to-company-royal/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Corporate Social{' '}
            <span className="text-company-orange">Responsibility</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-100 leading-relaxed"
          >
            Paragon's commitment to civic duty, societal welfare, and environmental 
            sustainability through impactful initiatives and community engagement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-company-orange/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
          <span className="text-sm mt-2">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CSRHero;