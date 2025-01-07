'use client';
// src/components/home/CTASection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Building2, 
  Users,
  ChevronRight
} from 'lucide-react';

const CTASection = () => {
  const contactOptions = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Business Inquiries",
      description: "Explore partnership opportunities",
      action: "Contact Us",
      link: "/contact"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Join our growing team",
      action: "View Openings",
      link: "/career"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Our Businesses",
      description: "Discover our diverse portfolio",
      action: "Learn More",
      link: "/business-activities"
    }
  ];

  const highlights = [
    "Innovative business solutions",
    "Sustainable practices",
    "Global market presence",
    "Expert team"
  ];

  return (
    <section className="py-20 bg-company-royal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-company-light/90">
              Join our journey of innovation and sustainable growth across multiple industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-white text-center">
                    <div className="mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-company-light/80 mb-6">{option.description}</p>
                    <Link href={option.link}>
                      <Button 
                        variant="secondary" 
                        className="w-full bg-company-orange hover:bg-company-orange/90 border-none group"
                      >
                        {option.action}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Why Partner With Us?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center text-company-light/90"
                >
                  <ChevronRight className="w-5 h-5 text-company-orange mr-2" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-company-royal hover:bg-company-light group"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;