'use client';
// src/components/home/CompanyOverview.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Target, Users, Leaf } from 'lucide-react';
import Link from 'next/link';

const CompanyOverview = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-company-orange" />,
      title: "Vision",
      description: "To be a leading force in sustainable business practices across multiple industries."
    },
    {
      icon: <Users className="w-6 h-6 text-company-orange" />,
      title: "People",
      description: "Empowering our workforce of over 10,000 skilled professionals."
    },
    {
      icon: <Leaf className="w-6 h-6 text-company-orange" />,
      title: "Sustainability",
      description: "Committed to environmental stewardship and community development."
    }
  ];

  const achievements = [
    "Leading market position in multiple sectors",
    "State-of-the-art manufacturing facilities",
    "Strong focus on research and development",
    "Comprehensive quality management systems",
    "Sustainable business practices",
    "Global market presence"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-company-royal">
              Excellence Through Innovation & Sustainability
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              With over three decades of experience, we've built a diverse portfolio of businesses
              united by our commitment to excellence, innovation, and sustainable practices.
            </p>

            <div className="grid gap-6 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-company-light border-none">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-lg">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-company-royal mb-1">
                            {value.title}
                          </h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Link href="/about/about-us">
              <Button 
                className="bg-company-orange hover:bg-company-orange/90 text-white group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/company-overview.jpg"
                alt="Company Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-company-royal/50 to-transparent" />
              
              {/* Achievement List Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-company-royal mb-4">
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-company-orange flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-company-orange/10 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-company-blue/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;