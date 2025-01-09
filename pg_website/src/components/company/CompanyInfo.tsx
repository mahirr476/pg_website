// components/company/CompanyInfo.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CompanyInfoProps } from '@/types/company';

const CompanyInfo = ({ data }: CompanyInfoProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Description */}
          <div>
            <h2 className="text-4xl font-bold mb-8">About {data.shortName}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Founded</h3>
                <p className="text-3xl font-bold">{data.yearFounded}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Team Size</h3>
                <p className="text-3xl font-bold">{data.employeeCount}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-3xl font-bold">{data.location}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Category</h3>
                <p className="text-3xl font-bold">{data.category}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;