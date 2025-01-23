'use client';
// src/components/contact/ContactForm.tsx
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto lg:mr-0"
      >
        <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Samsuj" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Joha" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <Input placeholder=" Write the Company Name" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="info@paragongroup-bd.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button  type="submit" className="w-full ">
                Send Message
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactForm;