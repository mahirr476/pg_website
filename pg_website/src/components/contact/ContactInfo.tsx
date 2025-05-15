

// src/components/contact/ContactInfo.tsx
'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfoProps {
  title: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  workingHour: string;
}

const ContactInfo = ({
  title,
  description,
  location,
  phone,
  email,
  workingHour,
}: ContactInfoProps) => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: location.split(',').map((line) => line.trim()),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: phone.split(',').map((line) => line.trim()),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: email.split(',').map((line) => line.trim()),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: workingHour.split(',').map((line) => line.trim()),
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto lg:ml-0"
      >
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="grid gap-6">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{contact.title}</h3>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;