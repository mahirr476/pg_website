// components/career/CareerAreas.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const areas = [
  {
    title: "Manufacturing & Production",
    roles: ["Production Manager", "Quality Control", "Process Engineer"],
    color: "bg-blue-50 hover:bg-blue-100"
  },
  {
    title: "Technology & Innovation",
    roles: ["Software Engineer", "IT Specialist", "Systems Analyst"],
    color: "bg-green-50 hover:bg-green-100"
  },
  {
    title: "Sales & Marketing",
    roles: ["Sales Manager", "Marketing Specialist", "Brand Manager"],
    color: "bg-purple-50 hover:bg-purple-100"
  },
  {
    title: "Finance & Accounting",
    roles: ["Financial Analyst", "Accountant", "Internal Auditor"],
    color: "bg-orange-50 hover:bg-orange-100"
  },
  {
    title: "Supply Chain & Logistics",
    roles: ["Supply Chain Manager", "Logistics Coordinator", "Procurement"],
    color: "bg-pink-50 hover:bg-pink-100"
  }
];

const CareerAreas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Career Areas</h2>
          <p className="text-xl text-gray-600">
            Explore opportunities across our diverse business sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full transition-all duration-300 ${area.color}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.roles.map((role) => (
                      <Badge key={role} variant="secondary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerAreas;