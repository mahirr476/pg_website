// import ContactForm from '@/components/contact/ContactForm';
// import ContactHero from '@/components/contact/ContactHero';
// import ContactInfo from '@/components/contact/ContactInfo';
// import React from 'react';

// const Contact = () => {
//   return (
//     <main className="pt-16">
//       <ContactHero />
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <ContactForm />
//         <ContactInfo />
//       </div>
//     </main>
//   );
// };

// export default Contact;



// src/pages/contact.tsx

"use client"
import React, { useEffect, useState } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import Loading from '@/components/layout/loading';

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    contactUs: {
      id: number;
      title: string;
      description1: string;
      description2: string;
      location: string;
      phone: string;
      email: string;
      workingHour: string;
      googleMap: string;
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
    };
  };
}

const Contact = () => {
  const [contactData, setContactData] = useState<ApiResponse['data']['contactUs'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/contact-us');
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }
        const result: ApiResponse = await response.json();
        if (result.success) {
          setContactData(result.data.contactUs);
        } else {
          throw new Error(result.message || 'Unexpected error occurred');
        }
      } catch (err) {
        console.error('Error fetching contact data:', err);
        setError('Failed to load contact information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  if (!contactData) {
    return <div className="text-center py-16 text-gray-600">No contact data available.</div>;
  }

  return (
    <main className="pt-16">
      {/* Pass title and description to ContactHero */}
      <ContactHero
        title={contactData.title}
        description={`${contactData.description1} ${contactData.description2}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        {/* Pass contact details to ContactInfo */}
        <ContactInfo
          title={contactData.title}
          description={`${contactData.description1} ${contactData.description2}`}
          location={contactData.location}
          phone={contactData.phone}
          email={contactData.email}
          workingHour={contactData.workingHour}
        />
      </div>
    </main>
  );
};

export default Contact;