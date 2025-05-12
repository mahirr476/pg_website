

'use client';
// src/components/about/csr/ImpactMetrics.tsx
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface ImpactMetricsProps {
  titleLasting: string;
  descriptionLasting: string;
}

const ImpactMetrics = ({
  titleLasting,
  descriptionLasting,
}: ImpactMetricsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Quick Facts - kept this section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-company-royal/5 rounded-2xl p-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-company-royal mb-6">
                {titleLasting}
              </h3>
            <p className="text-gray-600 leading-relaxed">
              {descriptionLasting}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
