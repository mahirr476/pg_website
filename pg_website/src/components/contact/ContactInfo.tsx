'use client';
// src/components/contact/ContactInfo.tsx
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: [
        "Corporate Office",
        "Paragon House, 5 Mohakhali",
        "C/A Dhaka 1212, Bangladesh"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+88 02 9882107-8",
        "+1 (234) 567-8901"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "info@paragongroup-bd.com",
        
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Saturday - Thursday: 8:30 AM - 5:30 PM",
        "Friday: Closed"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto lg:ml-0"
      >
        <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Find us at the following location or reach out through any of our contact channels.
        </p>

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

        {/* <div className="mt-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                With a state-of-the-art manufacturing facility and dedicated team, 
                we serve clients worldwide. Our location offers strategic advantages 
                for efficient distribution and logistics management.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </motion.div>
    </section>
  );
};

export default ContactInfo;