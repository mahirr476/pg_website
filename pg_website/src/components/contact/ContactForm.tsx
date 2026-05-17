
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, X } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  message: string;
}

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

// Custom Toast Component
const Toast = ({ type, message, onClose }: ToastProps) => {
  const variants = {
    initial: { opacity: 0, y: -50, x: 50 },
    animate: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: -20, x: 50 }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mr-2" />
      )}
      <span className={`text-sm ${type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
        {message}
      </span>
      <button
        onClick={onClose}
        className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        organization: formData.organization,
        email: formData.email,
        phone: '+8802 9882107-8',
        message: formData.message,
      };

      const response = await fetch('https://localhost:7000/api/v1/pg/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('success', result.message || "Thank you for your inquiry. We'll get back to you soon.");
        setFormData({
          firstName: '',
          lastName: '',
          organization: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('error', error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <section className="py-20 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto lg:mr-0"
        >
          <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Samsuj"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Joha"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Write the Company Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="info@paragongroup-bd.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </>
  );
};

export default ContactForm;