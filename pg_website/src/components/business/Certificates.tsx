// src/components/business/Certificates.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface CertificatesProps {
  certificates: {
    name: string;
    image: string;
    description: string;
  }[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
          <p className="text-gray-600 mt-2">Our commitment to quality and standards</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-4">
                          <Image
                            src={cert.image}
                            alt={cert.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{cert.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;