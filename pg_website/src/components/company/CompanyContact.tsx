// // components/company/CompanyContact.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { CompanyContactProps } from '@/types/company';

// const CompanyContact = ({ data }: CompanyContactProps) => {
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
//             Interested in learning more about {data.shortName}? Contact us today.
//           </p>
//           <div className="flex justify-center gap-4">
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
import { CompanyContactProps } from '@/types/company';

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

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);

        // Replace with your actual API endpoint
        const response = await fetch(`http://localhost:7000/api/v1/pg/companies/${data.slug}/contact`);

        if (!response.ok) {
          throw new Error(`Failed to fetch contact data: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log("Contact data:", responseData.data);

        if (!responseData.data || !responseData.data.contactDetail) {
          throw new Error('Contact details not found');
        }

        setContactData(responseData.data.contactDetail);
      } catch (err) {
        console.error('Error fetching contact data:', err);
        setError('Failed to load contact details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, [data.slug]);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Loading contact details...</p>
        </div>
      </section>
    );
  }

  if (error || !contactData) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">{error || "Contact details could not be loaded."}</p>
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
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in learning more about {contactData.shortName}? Contact us today.
          </p>
          <div className="space-y-4 text-left">
            {contactData.email && (
              <p className="flex items-center gap-2 text-gray-700">
                <span>📧</span> Email: {contactData.email}
              </p>
            )}
            {contactData.phone && (
              <p className="flex items-center gap-2 text-gray-700">
                <span>📞</span> Phone: {contactData.phone}
              </p>
            )}
            {contactData.address && (
              <p className="flex items-center gap-2 text-gray-700">
                <span>📍</span> Address: {contactData.address}
              </p>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg">Contact Us</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyContact;