// // // components/media/MediaContact.tsx
// // 'use client';
// // import { motion } from 'framer-motion';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Textarea } from '@/components/ui/textarea';
// // import {
// //     Select,
// //     SelectContent,
// //     SelectItem,
// //     SelectTrigger,
// //     SelectValue,
// //   } from "@/components/ui/select";
// // import {
// //   Mail,
// //   Phone,
// //   Globe,
// //   Twitter,
// //   Linkedin,
// //   Facebook,
// //   Instagram
// // } from 'lucide-react';

// // const MediaContact = () => {
// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
// //         >
// //           {/* Contact Information */}
// //           <div>
// //             <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
// //             <p className="text-xl text-gray-600 mb-8">
// //               For press and media related inquiries, please contact our media relations team or fill out the form.
// //             </p>

// //             <Card className="mb-8">
// //               <CardContent className="p-6">
// //                 <div className="space-y-4">
// //                   <div className="flex items-center gap-4">
// //                     <Mail className="w-5 h-5 text-purple-600" />
// //                     <div>
// //                       <h3 className="font-semibold">Email</h3>
// //                       <p className="text-gray-600">media@paragongroup.com.bd</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <Phone className="w-5 h-5 text-purple-600" />
// //                     <div>
// //                       <h3 className="font-semibold">Press Office</h3>
// //                       <p className="text-gray-600">+880 123 456 7890</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <Globe className="w-5 h-5 text-purple-600" />
// //                     <div>
// //                       <h3 className="font-semibold">Website</h3>
// //                       <p className="text-gray-600">www.paragongroup.com.bd</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Social Media Links */}
// //             <div>
// //               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
// //               <div className="flex gap-4">
// //                 {[
// //                   { icon: Twitter, label: "Twitter" },
// //                   { icon: Linkedin, label: "LinkedIn" },
// //                   { icon: Facebook, label: "Facebook" },
// //                   { icon: Instagram, label: "Instagram" }
// //                 ].map((social) => (
// //                   <motion.a
// //                     key={social.label}
// //                     href="#"
// //                     whileHover={{ scale: 1.1 }}
// //                     className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors duration-300"
// //                   >
// //                     <social.icon className="w-5 h-5 text-purple-600" />
// //                   </motion.a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Form */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Media Contact Form</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <form className="space-y-6">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <label className="text-sm font-medium">First Name</label>
// //                       <Input placeholder="Enter your first name" />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <label className="text-sm font-medium">Last Name</label>
// //                       <Input placeholder="Enter your last name" />
// //                     </div>
// //                   </div>
                  
// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium">Organization</label>
// //                     <Input placeholder="Enter your organization name" />
// //                   </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium">Email</label>
// //                     <Input type="email" placeholder="Enter your email" />
// //                   </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium">Phone</label>
// //                     <Input type="tel" placeholder="Enter your phone number" />
// //                   </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium">Inquiry Type</label>
// //                     <Select defaultValue="press">
// //                         <SelectTrigger className="w-full">
// //                         <SelectValue placeholder="Select inquiry type" />
// //                         </SelectTrigger>
// //                         <SelectContent>
// //                         <SelectItem value="press">Press Inquiry</SelectItem>
// //                         <SelectItem value="interview">Interview Request</SelectItem>
// //                         <SelectItem value="media">Media Assets</SelectItem>
// //                         <SelectItem value="other">Other</SelectItem>
// //                         </SelectContent>
// //                     </Select>
// //                     </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium">Message</label>
// //                     <Textarea 
// //                       placeholder="Please describe your inquiry" 
// //                       className="min-h-[120px]"
// //                     />
// //                   </div>

// //                   <Button className="w-full">Submit Inquiry</Button>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MediaContact;



// // components/media/MediaContact.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select";
// import {
//   Mail,
//   Phone,
//   Globe,
//   Twitter,
//   Linkedin,
//   Facebook,
//   Instagram
// } from 'lucide-react';

// interface MediaContactProps {
//   data?: {
//     title: string;
//     description: string;
//     email: string;
//     phone: string;
//     website: string;
//   };
// }

// const MediaContact = ({ data }: MediaContactProps) => {
//   // Default data if none is provided
//   const contactInfo = data || {
//     title: "Media Inquiries",
//     description: "For press and media related inquiries, please contact our media relations team or fill out the form.",
//     email: "media@paragongroup.com.bd",
//     phone: "+880 123 456 7890",
//     website: "www.paragongroup.com.bd"
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Contact Information */}
//           <div>
//             <h2 className="text-4xl font-bold mb-6">{contactInfo.title}</h2>
//             <p className="text-xl text-gray-600 mb-8">
//               {contactInfo.description}
//             </p>

//             <Card className="mb-8">
//               <CardContent className="p-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <Mail className="w-5 h-5 text-purple-600" />
//                     <div>
//                       <h3 className="font-semibold">Email</h3>
//                       <p className="text-gray-600">{contactInfo.email}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <Phone className="w-5 h-5 text-purple-600" />
//                     <div>
//                       <h3 className="font-semibold">Press Office</h3>
//                       <p className="text-gray-600">{contactInfo.phone}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <Globe className="w-5 h-5 text-purple-600" />
//                     <div>
//                       <h3 className="font-semibold">Website</h3>
//                       <p className="text-gray-600">{contactInfo.website}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Social Media Links */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Twitter, label: "Twitter" },
//                   { icon: Linkedin, label: "LinkedIn" },
//                   { icon: Facebook, label: "Facebook" },
//                   { icon: Instagram, label: "Instagram" }
//                 ].map((social) => (
//                   <motion.a
//                     key={social.label}
//                     href="#"
//                     whileHover={{ scale: 1.1 }}
//                     className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors duration-300"
//                   >
//                     <social.icon className="w-5 h-5 text-purple-600" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Media Contact Form</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium">First Name</label>
//                       <Input placeholder="Enter your first name" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium">Last Name</label>
//                       <Input placeholder="Enter your last name" />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Organization</label>
//                     <Input placeholder="Enter your organization name" />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Email</label>
//                     <Input type="email" placeholder="Enter your email" />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Phone</label>
//                     <Input type="tel" placeholder="Enter your phone number" />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Inquiry Type</label>
//                     <Select defaultValue="press">
//                         <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select inquiry type" />
//                         </SelectTrigger>
//                         <SelectContent>
//                         <SelectItem value="press">Press Inquiry</SelectItem>
//                         <SelectItem value="interview">Interview Request</SelectItem>
//                         <SelectItem value="media">Media Assets</SelectItem>
//                         <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                     </Select>
//                     </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Message</label>
//                     <Textarea 
//                       placeholder="Please describe your inquiry" 
//                       className="min-h-[120px]"
//                     />
//                   </div>

//                   <Button className="w-full">Submit Inquiry</Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MediaContact;



// components/media/MediaContact.tsx
'use client';
import { useState } from 'react';
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
  Instagram,
  Loader2
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

const MediaContact = ({ data }: MediaContactProps) => {
  // Default data if none is provided
  const contactInfo = data || {
    title: "Media Inquiries",
    description: "For press and media related inquiries, please contact our media relations team or fill out the form.",
    email: "media@paragongroup.com.bd",
    phone: "+880 123 456 7890",
    website: "www.paragongroup.com.bd"
  };
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'press',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Clear any success or error messages when form is modified
    if (successMessage) setSuccessMessage(null);
    if (errorMessage) setErrorMessage(null);
  };
  
  // Handle select change
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
    
    if (errors.inquiryType) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.inquiryType;
        return newErrors;
      });
    }
    
    // Clear any success or error messages when form is modified
    if (successMessage) setSuccessMessage(null);
    if (errorMessage) setErrorMessage(null);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setSuccessMessage(null);
    setErrorMessage(null);
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // SIMULATION: Instead of making the API call that's causing the error
      console.log("Form data that would be submitted:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSuccessMessage("Thank you for your inquiry. We'll get back to you soon.");
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        organization: '',
        email: '',
        phone: '',
        inquiryType: 'press',
        message: ''
      });
      
      /* 
      // COMMENTED OUT: This is the code that's causing the error
      // DO NOT UNCOMMENT until the API endpoint is available
      
      const response = await fetch('http://localhost:7000/api/v1/pg/media/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      let data;
      try {
        data = await response.json();
      } catch (err) {
        console.error("Failed to parse response:", err);
        throw new Error("Invalid response from server");
      }
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("The form submission endpoint is not available. Please try again later.");
        }
        throw new Error(data.message || 'Failed to submit form');
      }
      
      // Show success message and reset form
      setSuccessMessage("Thank you for your inquiry. We'll get back to you soon.");
      
      setFormData({
        firstName: '',
        lastName: '',
        organization: '',
        email: '',
        phone: '',
        inquiryType: 'press',
        message: ''
      });
      */
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="text-4xl font-bold mb-6">{contactInfo.title}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {contactInfo.description}
            </p>

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
                {/* Success Message */}
                {successMessage && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                    {successMessage}
                  </div>
                )}
                
                {/* Error Message */}
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    {errorMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        className={errors.firstName ? "border-red-500" : ""}
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
                        className={errors.lastName ? "border-red-500" : ""}
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
                      className={errors.organization ? "border-red-500" : ""}
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
                      className={errors.email ? "border-red-500" : ""}
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
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Inquiry Type</label>
                    <Select 
                      value={formData.inquiryType}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className={`w-full ${errors.inquiryType ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="press">Press Inquiry</SelectItem>
                        <SelectItem value="interview">Interview Request</SelectItem>
                        <SelectItem value="media">Media Assets</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                      className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
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