
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from 'lucide-react';

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface CompanyHistoryProps {
  about?: string;
  greenMission?: string;
  milestones?: Milestone[];
}

// Completely dynamic component that receives all data as props
const CompanyHistory: React.FC<CompanyHistoryProps> = ({ 
  about = "", 
  greenMission = "", 
  milestones = [] 
}) => {
  // State to track loading status (for when we want to add animations)
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Get only the first 3 milestones
  const limitedMilestones = milestones.slice(0, 3);
  
  // Simulate loading to demonstrate the component is dynamic
  useEffect(() => {
    // Small timeout to simulate data loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Title with gradient background styling */}
            <div className="inline-block relative mb-6">
              <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm"></span>
              <h2 className="relative text-3xl font-bold text-company-royal">
                About Our Company
              </h2>
            </div>

            {about && (
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {about}
                </p>
              </div>
            )}

            {/* Sustainability Focus - Only show if greenMission exists */}
            {greenMission && (
              <Card className="bg-company-royal text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Leaf className="w-8 h-8 text-company-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Green Mission</h3>
                      <p className="text-gray-100">
                        {greenMission}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {limitedMilestones.length > 0 && (
              <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-company-orange/30" />
            )}
            
            {limitedMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id || index}
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

            {limitedMilestones.length === 0 && (
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <p className="text-gray-500">No milestone data available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;