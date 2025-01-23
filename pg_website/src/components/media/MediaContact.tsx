// components/media/MediaContact.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import {
  Mail,
  Phone,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';

const MediaContact = () => {
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
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl text-gray-600 mb-8">
              For press and media related inquiries, please contact our media relations team or fill out the form.
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">media@paragongroup.com.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Press Office</h3>
                      <p className="text-gray-600">+880 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <p className="text-gray-600">www.paragongroup.com.bd</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-purple-600" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Media Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization</label>
                    <Input placeholder="Enter your organization name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Inquiry Type</label>
                    <Select defaultValue="press">
                        <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="press">Press Inquiry</SelectItem>
                        <SelectItem value="interview">Interview Request</SelectItem>
                        <SelectItem value="media">Media Assets</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Please describe your inquiry" 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full">Submit Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaContact;