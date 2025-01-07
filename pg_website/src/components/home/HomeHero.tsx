'use client';
// src/components/home/HomeHero.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/company-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-company-royal/50 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Leading the Way in<br />
              <span className="text-company-orange">Sustainable Business</span>
            </h1>
            <p className="text-xl text-company-light/90 max-w-2xl">
              A conglomerate committed to excellence across multiple industries,
              driving innovation and sustainable growth for a better tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-company-orange hover:bg-company-orange/90 text-white group"
              >
                Explore Our Businesses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
          >
            {[
              { value: "20+", label: "Companies" },
              { value: "12+", label: "Industries" },
              { value: "10K+", label: "Employees" },
              { value: "30+", label: "Years Legacy" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-company-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-company-light/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/60">
              <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
              </div>
              <span className="text-sm mt-2">Scroll to explore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;