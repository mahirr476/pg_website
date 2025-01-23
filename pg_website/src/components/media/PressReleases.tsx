// components/media/PressReleases.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: "Paragon Group Announces Major Expansion in Renewable Energy Sector",
    date: "January 15, 2024",
    category: "Corporate",
    summary: "Paragon Group today announced a significant investment in renewable energy projects across Bangladesh...",
    pdfUrl: "/press-releases/expansion-2024.pdf"
  },
  {
    id: 2,
    title: "Paragon Achieves ISO 14001 Environmental Certification",
    date: "December 5, 2023",
    category: "Achievement",
    summary: "In recognition of our commitment to environmental sustainability, Paragon Group has received...",
    pdfUrl: "/press-releases/iso-certification.pdf"
  },
  {
    id: 3,
    title: "New Partnership Announced with Global Technology Leader",
    date: "November 20, 2023",
    category: "Partnership",
    summary: "Paragon Group has entered into a strategic partnership with a leading global technology provider...",
    pdfUrl: "/press-releases/partnership-2023.pdf"
  }
];

const PressReleases = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Press Releases</h2>
          <p className="text-xl text-gray-600">
            Latest announcements and updates from Paragon Group
          </p>
        </motion.div>

        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="mb-3">
                        <Badge variant="outline" className="mb-2">
                          {release.category}
                        </Badge>
                        <p className="text-sm text-gray-500">{release.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.summary}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
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

export default PressReleases;