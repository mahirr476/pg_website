'use client';
// src/components/csr/CSRActivities.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Egg, BriefcaseMedical, Hospital, Droplet, Users, Drumstick, Zap, Wrench } from 'lucide-react';

const CSRActivities = () => {
  const activities = [
    {
      icon: <Egg className="w-8 h-8 text-white" />,
      title: "School Nutrition Program",
      description: "Distributing boiled eggs, bananas, and snacks to 17 Primary Schools and 2 Hafizia Madrasha twice weekly",
      image: "/images/csr/nutrition-program.jpg",
      color: "bg-company-orange"
    },
    {
      icon: <BriefcaseMedical className="w-8 h-8 text-white" />,
      title: "Dental Health Initiatives",
      description: "Regular dental camps every 4 months with treatment and dental hygiene supplies distribution",
      image: "/images/csr/dental-health.jpg",
      color: "bg-company-royal"
    },
    {
      icon: <Hospital className="w-8 h-8 text-white" />,
      title: "Permanent Dental Clinic",
      description: "Established permanent clinic for ongoing dental care for students and local community",
      image: "/images/csr/dental-clinic.jpg",
      color: "bg-company-orange"
    },
    {
      icon: <Droplet className="w-8 h-8 text-white" />,
      title: "Water & Sanitation",
      description: "Ensuring pure drinking water and proper sanitation systems",
      image: "/images/csr/water-sanitation.jpg",
      color: "bg-company-royal"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Teacher Support",
      description: "Providing monthly salaries to maintain balanced teacher-student ratios",
      image: "/images/csr/teacher-support.jpg",
      color: "bg-company-orange"
    },
    {
      icon: <Drumstick className="w-8 h-8 text-white" />,
      title: "Orphanage Support",
      description: "Regular distribution of chicken meat to different orphanages",
      image: "/images/csr/orphanage-support.jpg",
      color: "bg-company-royal"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Electricity Supply",
      description: "Providing electricity through dedicated generators",
      image: "/images/csr/electricity.jpg",
      color: "bg-company-orange"
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Infrastructure Maintenance",
      description: "Regular maintenance of orphanages, schools, roads, and prayer locations",
      image: "/images/csr/maintenance.jpg",
      color: "bg-company-royal"
    }
  ];

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
          <h2 className="text-4xl font-bold mb-4 text-company-royal">
            Our Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our ongoing initiatives that make a real difference in communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute -bottom-6 right-6 w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      {activity.icon}
                    </div>
                  </div>
                  <div className="p-6 pt-8">
                    <h3 className="text-lg font-semibold mb-2 text-company-royal">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {activity.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-company-royal rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">19+</div>
              <div className="text-sm opacity-90">Schools Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">3x</div>
              <div className="text-sm opacity-90">Dental Camps Yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">1000+</div>
              <div className="text-sm opacity-90">Students Benefited</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">24/7</div>
              <div className="text-sm opacity-90">Community Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CSRActivities;