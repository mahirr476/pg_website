'use client';
// src/components/about/OurMission.tsx
import { motion } from 'framer-motion';
import { Target, Heart, Globe, Award, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const OurMission = () => {
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6 text-company-orange" />,
      title: "Integrity",
      description: "Maintaining the highest standards of ethics and transparency in all our dealings."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-company-orange" />,
      title: "Innovation",
      description: "Continuously seeking new ways to improve and create value across all sectors."
    },
    {
      icon: <Users className="w-6 h-6 text-company-orange" />,
      title: "People First",
      description: "Prioritizing the well-being and development of our employees and communities."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-company-royal text-white rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-company-orange/20 rounded-full -mr-16 -mt-16" />
            <Target className="w-12 h-12 text-company-orange mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-100 leading-relaxed relative z-10">
              To be a catalyst for positive change through sustainable business practices, 
              innovative solutions, and commitment to excellence across diverse sectors, 
              while creating lasting value for our stakeholders and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-company-orange text-white rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16" />
            <Globe className="w-12 h-12 text-white mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-100 leading-relaxed relative z-10">
              To be a leading force in sustainable business development, setting industry 
              standards for innovation, quality, and corporate responsibility while fostering 
              growth and prosperity in the communities we serve.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-company-royal">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our actions and shape our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="bg-company-royal/5 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:bg-company-royal/10 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-company-royal">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-company-royal to-company-royal/90 rounded-2xl p-8 text-white text-center"
        >
          <Award className="w-12 h-12 mx-auto mb-4 text-company-orange" />
          <h3 className="text-2xl font-bold mb-4">
            Committed to Excellence
          </h3>
          <p className="max-w-2xl mx-auto text-gray-100">
            Our dedication to these principles has established us as a trusted leader 
            across multiple industries, driving sustainable growth and innovation while 
            maintaining the highest standards of corporate responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;