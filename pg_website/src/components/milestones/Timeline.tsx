'use client';
// src/components/milestones/Timeline.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { timelineData } from '@/lib/data/timeline';
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-company-royal">Journey of Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our milestones from humble beginnings to industry leadership
          </p>
        </motion.div>

        <div className="space-y-24">
          {timelineData.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Year Indicator */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-company-orange text-white text-2xl font-bold px-6 py-2 rounded-full">
                  {milestone.year}
                </div>
              </div>

              <Card 
                className={`w-full transform transition-all duration-500 cursor-pointer
                  ${activeId === index ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                onClick={() => setActiveId(activeId === index ? null : index)}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className={`object-cover transition-all duration-700
                          ${activeId === index ? 'scale-110' : 'scale-100'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-company-royal mb-4">
                        {milestone.title}
                      </h3>
                      <p className={`text-gray-600 leading-relaxed transition-all duration-500
                        ${activeId === index ? 'line-clamp-none' : 'line-clamp-4'}`}>
                        {milestone.description}
                      </p>
                      <div className={`mt-4 text-company-orange font-medium
                        ${activeId === index ? 'opacity-0' : 'opacity-100'}`}>
                        Click to read more
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connecting Line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 h-24 w-px bg-company-orange/20 -bottom-24">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-company-orange to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;