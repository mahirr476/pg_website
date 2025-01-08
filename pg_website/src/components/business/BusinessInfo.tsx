// src/components/business/BusinessInfo.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface BusinessInfoProps {
  data: {
    description: string;
  };
}

const BusinessInfo = ({ data }: BusinessInfoProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {data.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessInfo;