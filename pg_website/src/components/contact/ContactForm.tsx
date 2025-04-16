

// // src/components/contact/ContactForm.tsx
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent } from "@/components/ui/card";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   organization: string;
//   email: string;
//   message: string;
// }

// const ContactForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     organization: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   // Handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear any previous success or error messages
//     if (successMessage) setSuccessMessage(null);
//     if (errorMessage) setErrorMessage(null);
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Clear previous messages
//     setSuccessMessage(null);
//     setErrorMessage(null);

//     setIsSubmitting(true);

//     try {
//       // Transform formData into the format expected by the backend
//       const payload = {
//         name: `${formData.firstName} ${formData.lastName}`, // Combine firstName and lastName
//         organization: formData.organization,
//         email: formData.email,
//         phone: '+8802 9882107-8', // Default phone number (can be made dynamic if needed)
//         message: formData.message,
//       };

//       // Fetch the API endpoint
//       const response = await fetch('http://localhost:7000/api/v1/pg/contact-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       // Parse the JSON response
//       const result = await response.json();

//       // Check if the response indicates success
//       if (response.ok && result.success) {
//         // Show success message
//         setSuccessMessage(result.message || "Thank you for your inquiry. We'll get back to you soon.");

//         // Reset the form fields
//         setFormData({
//           firstName: '',
//           lastName: '',
//           organization: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         // Handle non-successful response
//         throw new Error(result.message || 'Failed to submit form');
//       }
//     } catch (error) {
//       // Log the error and display an error message
//       console.error('Error submitting form:', error);
//       setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
//     } finally {
//       // Stop the loading state
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-20 px-4 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-xl mx-auto lg:mr-0"
//       >
//         <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
//         <p className="text-gray-600 mb-8">
//           Fill out the form below and we'll get back to you as soon as possible.
//         </p>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-center">
//             {successMessage}
//           </div>
//         )}

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-center">
//             {errorMessage}
//           </div>
//         )}

//         <Card>
//           <CardContent className="p-6">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">First Name</label>
//                   <Input
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="Samsuj"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Last Name</label>
//                   <Input
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     placeholder="Joha"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Company Name</label>
//                 <Input
//                   name="organization"
//                   value={formData.organization}
//                   onChange={handleInputChange}
//                   placeholder="Write the Company Name"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Email</label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="info@paragongroup-bd.com"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Message</label>
//                 <Textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about your requirements..."
//                   className="min-h-[150px]"
//                   required
//                 />
//               </div>

//               <Button type="submit" className="w-full" disabled={isSubmitting}>
//                 {isSubmitting ? (
//                   <>
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Message'
//                 )}
//               </Button>

//               <p className="text-xs text-gray-500 text-center">
//                 By submitting this form, you agree to our privacy policy and terms of service.
//               </p>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactForm;



'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (successMessage) setSuccessMessage(null);
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        organization: formData.organization,
        email: formData.email,
        phone: '+8802 9882107-8',
        message: formData.message,
      };

      const response = await fetch('http://localhost:7000/api/v1/pg/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMessage(result.message || "Thank you for your inquiry. We&apos;ll get back to you soon.");
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
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-center">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-center">
            {errorMessage}
          </div>
        )}

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
  );
};

export default ContactForm;
