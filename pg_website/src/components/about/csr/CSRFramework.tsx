'use client';
// src/components/csr/CSRFramework.tsx
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Stethoscope, School, Footprints, Building2 } from 'lucide-react';

const CSRFramework = () => {
  const initiatives = [
    {
      icon: <GraduationCap className="w-8 h-8 text-company-orange" />,
      title: "HOPES Scholarship",
      description: "Supporting needy meritorious students to achieve their educational goals"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-company-orange" />,
      title: "Health Support",
      description: "Oral & dental health support for rural school children in partnership with JICA & Japanese Dental Institute"
    },
    {
      icon: <School className="w-8 h-8 text-company-orange" />,
      title: "School Feeding",
      description: "Providing nutritious meals and snacks for village schools"
    },
    {
      icon: <Footprints className="w-8 h-8 text-company-orange" />,
      title: "Special Olympics",
      description: "Contributing to physical & intellectual challenged children & adults"
    },
    {
      icon: <Building2 className="w-8 h-8 text-company-orange" />,
      title: "Infrastructure",
      description: "Constructing schools and religious centers for community development"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-company-royal">CSR Framework</h2>
          <p className="text-gray-600 leading-relaxed">
            Paragon feels a deep sense of responsibility for civic duty and the welfare of society 
            and the environment. We strive to maintain a balance between economic growth and 
            ecosystem preservation through our comprehensive CSR framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-company-royal/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-company-royal/10 transition-colors">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-company-royal">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRFramework;