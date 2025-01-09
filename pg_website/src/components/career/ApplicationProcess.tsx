// components/career/ApplicationProcess.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  FileText, 
  PhoneCall, 
  Users, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Browse our current openings and find the role that matches your skills and aspirations."
  },
  {
    icon: FileText,
    title: "Apply",
    description: "Submit your application with your updated CV and cover letter."
  },
  {
    icon: PhoneCall,
    title: "Initial Screening",
    description: "Our HR team will review your application and conduct an initial phone interview."
  },
  {
    icon: Users,
    title: "Interviews",
    description: "Meet with potential team members and leaders through multiple interview rounds."
  },
  {
    icon: CheckCircle,
    title: "Offer",
    description: "Successful candidates will receive an offer letter with detailed terms of employment."
  }
];

const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Application Process</h2>
          <p className="text-xl text-gray-600">
            Your journey to joining our team
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <Card className="flex-grow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-blue-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;