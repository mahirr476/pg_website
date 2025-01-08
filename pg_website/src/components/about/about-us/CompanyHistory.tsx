'use client';
// src/components/about/CompanyHistory.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {Leaf } from 'lucide-react';

const CompanyHistory = () => {
  const milestones = [
    {
      year: "1952",
      title: "The Beginning",
      description: "Started as a printing press in Dhaka city by late Mizanur Rahman"
    },
    {
      year: "1993",
      title: "Agricultural Expansion",
      description: "Led by Mr. Moshiur Rahman and Mrs. Yasmin Rahman, diversified into agriculture"
    },
    {
      year: "Present",
      title: "Diversified Conglomerate",
      description: "Expanded into ten different business sectors as Paragon Group"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-company-royal">
              About Our Company
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                With humble beginnings, Paragon started its journey in the heart of Dhaka 
                city in 1952 with a printing press founded by the late Mizanur Rahman. In 1993 
                under the leadership of Mr. Moshiur Rahman and Mrs. Yasmin Rahman, the business 
                diversified to the agricultural sector, becoming one of the pioneers in Bangladesh.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a great vision, it grew and flourished into ten different business sectors, 
                represented now as Paragon Group.
              </p>
            </div>

            {/* Sustainability Focus */}
            <Card className="bg-company-royal text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Leaf className="w-8 h-8 text-company-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Green Vision</h3>
                    <p className="text-gray-100">
                      Paragon envisions a green and developing future. Throughout all the 
                      projects under the group, a significant contribution to renewable energy 
                      and zero waste management is always executed as it is critical for 
                      maintaining preservation and sustainability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-company-orange/30" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-8 last:pb-0"
              >
                <div className="absolute left-0 w-8 h-8 bg-company-orange rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-company-orange font-bold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold text-company-royal mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;