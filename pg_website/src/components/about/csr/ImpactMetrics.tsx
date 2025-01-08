'use client';
// src/components/csr/ImpactMetrics.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const ImpactMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const yearlyData = [
    { year: '2019', beneficiaries: 5000, investment: 1000000 },
    { year: '2020', beneficiaries: 7500, investment: 1500000 },
    { year: '2021', beneficiaries: 10000, investment: 2000000 },
    { year: '2022', beneficiaries: 12500, investment: 2500000 },
    { year: '2023', beneficiaries: 15000, investment: 3000000 },
    { year: '2024', beneficiaries: 17500, investment: 3500000 },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-company-royal">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Measuring our contribution to community development and social welfare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Beneficiaries Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-company-royal">
              Total Beneficiaries Growth
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearlyData}>
                  <defs>
                    <linearGradient id="beneficiariesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FAA91C" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FAA91C" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="beneficiaries" 
                    stroke="#FAA91C"
                    fill="url(#beneficiariesGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Investment Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-company-royal">
              CSR Investment Growth
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearlyData}>
                  <defs>
                    <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2A2A72" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2A2A72" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="investment" 
                    stroke="#2A2A72"
                    fill="url(#investmentGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-company-royal/5 rounded-2xl p-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-company-royal mb-6">
              Making a Lasting Impact
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our CSR initiatives have grown significantly over the years, touching more lives 
              and creating broader impact across communities. Through sustained investment and 
              dedicated programs, we continue to expand our reach and deepen our commitment to 
              social responsibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;