
'use client';
// src/components/about/csr/CSRActivities.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Egg, BriefcaseMedical, Hospital, Droplet, Users, Drumstick, Zap, Wrench } from 'lucide-react';
import Image from 'next/image';

// Define interface for the incoming data structure
interface ActivityDetail {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CSRActivitiesProps {
  title: string;
  description: string;
  details: ActivityDetail[];
}

// Icon mapping to match text labels with their corresponding Lucide icons
const iconMapping: Record<string, JSX.Element> = {
  "School Nutrition Program": <Egg className="w-8 h-8 text-white" />,
  "Dental Health Initiatives": <BriefcaseMedical className="w-8 h-8 text-white" />,
  "Permanent Dental Clinic": <Hospital className="w-8 h-8 text-white" />,
  "Water & Sanitation": <Droplet className="w-8 h-8 text-white" />,
  "Teacher Support": <Users className="w-8 h-8 text-white" />,
  "Orphanage Support": <Drumstick className="w-8 h-8 text-white" />,
  "Electricity Supply": <Zap className="w-8 h-8 text-white" />,
  "Infrastructure Maintenance": <Wrench className="w-8 h-8 text-white" />
};

// Default icon in case title doesn't match anything in our mapping
const defaultIcon = <Users className="w-8 h-8 text-white" />;

const CSRActivities: React.FC<CSRActivitiesProps> = ({ title, description, details }) => {
  // Add debugging to see what data we're receiving
  useEffect(() => {
    console.log("CSRActivities received data:", { title, description, detailsCount: details?.length });
    if (details && details.length > 0) {
      console.log("First activity detail:", details[0]);
    }
  }, [title, description, details]);

  // Alternate colors for the cards
  const getColorClass = (index: number) => {
    return index % 2 === 0 ? "bg-company-orange" : "bg-company-royal";
  };

  // Get the appropriate icon for an activity
  const getIcon = (activityTitle: string) => {
    return iconMapping[activityTitle] || defaultIcon;
  };

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
            {title || "Our Activities"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description || "Explore our ongoing initiatives that make a real difference in communities"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details && details.length > 0 ? details.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    {activity.image && (
                      <div className="relative w-full h-full">
                        <Image
                          src={`http://localhost:7000/${activity.image.replace('public/', '')}`}
                          alt={activity.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          style={{
                            objectFit: 'cover',
                            transition: 'transform 500ms',
                          }}
                          className="group-hover:scale-110"
                          onError={() => {
                            // Error handling without the unused parameter
                            console.error("Image failed to load:", activity.image);
                            // Instead of setting src directly, we could use state to switch to a fallback
                          }}
                        />
                      </div>
                    )}
                    <div className={`absolute -bottom-6 right-6 w-12 h-12 ${getColorClass(index)} rounded-lg flex items-center justify-center shadow-lg`}>
                      {getIcon(activity.title)}
                    </div>
                  </div>
                  <div className="p-6 pt-8">
                    <h3 className="text-lg font-semibold mb-2 text-company-royal">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {activity.description.trim()} {/* Trim to remove extra whitespace */}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No activities available
            </div>
          )}
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
              <div className="text-sm opacity-90">Poultry Farming</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">3x</div>
              <div className="text-sm opacity-90">Dental Camps Yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-company-orange mb-2">1000+</div>
              <div className="text-sm opacity-90"> Benefited</div>
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