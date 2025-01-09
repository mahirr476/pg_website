// components/company/CompanyStats.tsx
'use client';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CompanyStatsProps } from '@/types/company';

interface Stat {
  label: string;
  value: string;
}

const COMPANY_STATS: Stat[] = [
  { label: 'Global Presence', value: '10+ Countries' },
  { label: 'Annual Revenue', value: '$50M+' },
  { label: 'Client Satisfaction', value: '98%' },
];

const CompanyStats = ({ data }: CompanyStatsProps) => {
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
          <h2 className="text-4xl font-bold mb-4">Company Highlights</h2>
          <p className="text-xl text-gray-600">Key achievements and milestones</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.label}</h3>
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;