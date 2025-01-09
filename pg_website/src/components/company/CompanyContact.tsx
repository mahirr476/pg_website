// components/company/CompanyContact.tsx
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CompanyContactProps } from '@/types/company';

const CompanyContact = ({ data }: CompanyContactProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in learning more about {data.shortName}? Contact us today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Contact Us</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyContact;