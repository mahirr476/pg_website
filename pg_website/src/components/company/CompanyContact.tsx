
// 'use client';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { CompanyContactProps } from '@/types/company';

// // Define the interface for the fetched data
// interface ContactData {
//   shortName: string;
//   email?: string;
//   phone?: string;
//   address?: string;
// }

// const CompanyContact = ({ data }: CompanyContactProps) => {
//   const [contactData, setContactData] = useState<ContactData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchContactData = async () => {
//       try {
//         setLoading(true);

//         // Replace with your actual API endpoint
//         const response = await fetch(`http://localhost:7000/api/v1/pg/companies/${data.slug}/contact`);

//         if (!response.ok) {
//           throw new Error(`Failed to fetch contact data: ${response.status} ${response.statusText}`);
//         }

//         const responseData = await response.json();
//         console.log("Contact data:", responseData.data);

//         if (!responseData.data || !responseData.data.contactDetail) {
//           throw new Error('Contact details not found');
//         }

//         setContactData(responseData.data.contactDetail);
//       } catch (err) {
//         console.error('Error fetching contact data:', err);
//         setError('Failed to load contact details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContactData();
//   }, [data.slug]);

//   if (loading) {
//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-gray-600">Loading contact details...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error || !contactData) {
//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-red-600">{error || "Contact details could not be loaded."}</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Interested in learning more about {contactData.shortName}? Contact us today.
//           </p>
//           <div className="space-y-4 text-left">
//             {contactData.email && (
//               <p className="flex items-center gap-2 text-gray-700">
//                 <span>📧</span> Email: {contactData.email}
//               </p>
//             )}
//             {contactData.phone && (
//               <p className="flex items-center gap-2 text-gray-700">
//                 <span>📞</span> Phone: {contactData.phone}
//               </p>
//             )}
//             {contactData.address && (
//               <p className="flex items-center gap-2 text-gray-700">
//                 <span>📍</span> Address: {contactData.address}
//               </p>
//             )}
//           </div>
//           <div className="flex justify-center gap-4 mt-8">
//             <Button size="lg">Contact Us</Button>
//             <Button size="lg" variant="outline">Learn More</Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CompanyContact;



'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Define the interface for the component props
interface CompanyContactProps {
  data: {
    slug: string;
  };
}

// Define the interface for the fetched data
interface ContactData {
  shortName: string;
  email?: string;
  phone?: string;
  address?: string;
}

const CompanyContact = ({ data }: CompanyContactProps) => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fixed API base URL - same as other components
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pg-admin.57.155.183.218.nip.io';

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the fixed API base URL
        const apiUrl = `${API_BASE_URL}/api/v1/pg/companies/${data.slug}/contact`;
        console.log('CompanyContact - Fetching from:', apiUrl);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch contact data: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log("CompanyContact - Contact data:", responseData.data);

        if (!responseData.data || !responseData.data.contactDetail) {
          throw new Error('Contact details not found');
        }

        setContactData(responseData.data.contactDetail);
      } catch (err) {
        console.error('CompanyContact - Error fetching contact data:', err);
        setError('Failed to load contact details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (data.slug) {
      fetchContactData();
    } else {
      setError('Company slug is required');
      setLoading(false);
    }
  }, [data.slug, API_BASE_URL]);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="space-y-3 max-w-md mx-auto">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !contactData) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-red-600 mb-4">{error || "Contact details could not be loaded."}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
              size="sm"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-company-royal">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in learning more about {contactData.shortName}? Contact us today.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-4 text-left">
              {contactData.email && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 text-gray-700 hover:text-company-royal transition-colors"
                >
                  <span className="text-xl">📧</span> 
                  <span className="font-medium">Email:</span> 
                  <a href={`mailto:${contactData.email}`} className="text-company-royal hover:underline">
                    {contactData.email}
                  </a>
                </motion.div>
              )}
              
              {contactData.phone && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 text-gray-700 hover:text-company-royal transition-colors"
                >
                  <span className="text-xl">📞</span> 
                  <span className="font-medium">Phone:</span> 
                  <a href={`tel:${contactData.phone}`} className="text-company-royal hover:underline">
                    {contactData.phone}
                  </a>
                </motion.div>
              )}
              
              {contactData.address && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-xl mt-0.5">📍</span> 
                  <span className="font-medium">Address:</span> 
                  <span className="flex-1">{contactData.address}</span>
                </motion.div>
              )}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-company-royal hover:bg-company-royal/90"
              onClick={() => {
                if (contactData.email) {
                  window.location.href = `mailto:${contactData.email}`;
                }
              }}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-company-royal text-company-royal hover:bg-company-royal hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyContact;