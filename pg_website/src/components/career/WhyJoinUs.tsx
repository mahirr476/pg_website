// components/career/WhyJoinUs.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, Rocket, Heart, TreePine, 
  GraduationCap, Globe 
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Work with talented individuals in a collaborative environment"
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Clear career progression paths and learning opportunities"
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description: "Competitive salary, health insurance, and other perks"
  },
  {
    icon: TreePine,
    title: "Work-Life Balance",
    description: "Flexible working hours and paid time off"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Regular training sessions and skill development programs"
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work with international clients and partners"
  }
];

const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-xl text-gray-600">
            Discover the benefits of building your career with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;