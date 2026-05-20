

// src/components/contact/ContactHero.tsx
'use client';
import { motion } from 'framer-motion';

interface ContactHeroProps {
  title: string;
  description: string;
}

const ContactHero = ({ title, description }: ContactHeroProps) => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center">
      <div className="absolute inset-0 opacity-20">
        {/* Media-themed background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/90 mx-auto sm:max-w-2xl md:max-w-3xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;