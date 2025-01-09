// components/career/CurrentOpenings.tsx
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const openings = [
  {
    title: "Senior Production Manager",
    department: "Manufacturing",
    location: "Dhaka",
    type: "Full-time",
    experience: "5-7 years",
    company: "Paragon Poultry Ltd."
  },
  {
    title: "Software Engineer",
    department: "IT",
    location: "Chittagong",
    type: "Full-time",
    experience: "3-5 years",
    company: "Paragon Group"
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Dhaka",
    type: "Full-time",
    experience: "2-4 years",
    company: "ParaSole Footwear Ltd."
  }
];

const CurrentOpenings = () => {
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
          <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-xl text-gray-600">
            Find your perfect role in our growing team
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="secondary">{job.experience}</Badge>
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

export default CurrentOpenings;