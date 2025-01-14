'use client';
// src/components/contact/ContactHero.tsx
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <img 
          src="/images/contact-hero.jpg"  // Replace with your background image path
          alt="Contact Us Background"
          className="object-cover w-full h-full opacity-60"
        />
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 mx-auto sm:max-w-2xl md:max-w-3xl">
            We’re here to assist you! Whether you have questions, need support, or are looking to discuss potential partnerships, our team at Paragon Group is ready to help. Please reach out through the following channels, and we will get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
