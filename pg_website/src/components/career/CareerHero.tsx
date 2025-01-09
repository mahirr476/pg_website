// components/career/CareerHero.tsx
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CareerHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Build your career with one of Bangladesh's leading conglomerates. 
            Discover opportunities across our diverse portfolio of companies.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default">
              View Openings
            </Button>
            <Button size="lg" variant="outline" className="text-white">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHero;