
// components/media/MediaContact.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from '@/components/ui/select';
import {
  Mail,
  Phone,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Loader2,
  CheckCircle,
  XCircle,
  X,
} from 'lucide-react';

interface MediaContactProps {
  data?: {
    title: string;
    description: string;
    email: string;
    phone: string;
    website: string;
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

// Custom Toast Component - Same design as ContactForm
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

const MediaContact = ({ data }: MediaContactProps) => {
  const contactInfo = data || {
    title: 'Media Inquiries',
    description:
      'For press and media related inquiries, please contact our media relations team or fill out the form.',
    email: 'media@paragongroup.com.bd',
    phone: '+8801521473703',
    website: 'www.paragongroup.com.bd',
  };

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'press',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle select change
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));

    if (errors.inquiryType) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.inquiryType;
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to show toast
  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Transform formData into the format expected by the backend
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`, // Combine firstName and lastName
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        type: formData.inquiryType, // Map inquiryType to type
        message: formData.message,
      };

      // Fetch the API endpoint
      const response = await fetch('http://localhost:7000/api/v1/pg/media/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Parse the JSON response
      const result = await response.json();

      // Check if the response indicates success
      if (response.ok && result.success) {
        // Show success toast
        showToast('success', result.message || "Thank you for your inquiry. We'll get back to you soon.");

        // Reset the form fields
        setFormData({
          firstName: '',
          lastName: '',
          organization: '',
          email: '',
          phone: '',
          inquiryType: 'press',
          message: '',
        });
      } else {
        // Handle non-successful response
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      // Log the error and display an error message
      console.error('Error submitting form:', error);
      
      // Show error toast
      showToast('error', error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      // Stop the loading state
      setIsSubmitting(false);
    }
  };

  // Add custom styles to select options
  useEffect(() => {
    // Apply background color to select options
    const style = document.createElement('style');
    style.innerHTML = `
      .select-content-item {
        background-color: #f3e8ff !important;
        color: #000 !important; /* Light purple background - matching the theme */
      }
      
      [data-radix-select-item][data-highlighted] {
        background-color: #d8b4fe !important; /* Darker purple for highlighted items */
        color: #000 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
              <h2 className="text-4xl font-bold mb-6">{contactInfo.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{contactInfo.description}</p>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Press Office</h3>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Website</h3>
                        <p className="text-gray-600">{contactInfo.website}</p>
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
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Instagram, label: 'Instagram' },
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Organization</label>
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization name"
                        className={errors.organization ? 'border-red-500' : ''}
                      />
                      {errors.organization && (
                        <p className="text-red-500 text-sm">{errors.organization}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Inquiry Type</label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger
                          className={`w-full ${errors.inquiryType ? 'border-red-500' : ''}`}
                        >
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="press" className="select-content-item">Press Inquiry</SelectItem>
                          <SelectItem value="interview" className="select-content-item">Interview Request</SelectItem>
                          <SelectItem value="media" className="select-content-item">Media Assets</SelectItem>
                          <SelectItem value="other" className="select-content-item">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm">{errors.inquiryType}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your inquiry"
                        className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MediaContact;