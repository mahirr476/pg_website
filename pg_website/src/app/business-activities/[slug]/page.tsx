// // src/app/business-activities/[slug]/page.tsx
// import { getBusinessActivityBySlug } from '@/lib/data/business-activities';
// import BusinessHero from '@/components/business/BusinessHero';
// import BusinessInfo from '@/components/business/BusinessInfo';
// import BusinessCategories from '@/components/business/BusinessCategories';
// import Certificates from '@/components/business/Certificates';

// export default function BusinessActivityPage({ params }: { params: { slug: string } }) {
//   const businessData = getBusinessActivityBySlug(params.slug);

//   console.log("buisness data",businessData);
//   console.log("slug",params);

//   if (!businessData) {
//     return <div>Business not found</div>;
//   }

//   return (
//     <main className="pt-16">
//       <BusinessHero data={businessData} />
//       <BusinessInfo data={businessData} />
//       <BusinessCategories data={businessData} />
//       {businessData.certificates && businessData.certificates.length > 0 && (
//         <Certificates certificates={businessData.certificates} />
//       )}
//     </main>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import BusinessHero from '@/components/business/BusinessHero';
// import BusinessInfo from '@/components/business/BusinessInfo';
// import BusinessCategories from '@/components/business/BusinessCategories';
// import Certificates from '@/components/business/Certificates';

// // Define the interface for business data
// interface BusinessData {
//   id: number;
//   title: string;
//   shortDes: string;
//   longDes?: string;
//   bannerImage?: string;
//   image?: string;
//   videoLink?: string;
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   const [businessData, setBusinessData] = useState<BusinessData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBusinessData = async () => {
//       try {
//         // Fetch business data by slug
//         const response = await fetch(`http://localhost:7000/api/v1/pg/business/${params.slug}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch business data');
//         }
        
//         const data = await response.json();
//         console.log("Business data:", data.data);
//         if (!data.data) {
//           throw new Error('Business not found');
//         }
        
//         // Set the fetched business data
//         setBusinessData(data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching business data:', err);
//         setError('Failed to load business data. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchBusinessData();
//   }, [params.slug]);

//   if (loading) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-company-royal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading business data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !businessData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Business Not Found</h2>
//           <p className="text-gray-700">{error || "The requested business activity could not be found."}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="pt-16">
//       <BusinessHero
//         data={{
//           title: businessData.title,
//           shortDes: businessData.shortDes,
//           longDes: businessData.longDes || ''
//         }}
//       />
//       <BusinessInfo
//         data={{
//           title: businessData.title,
//           shortDes: businessData.longDes
//         }}
//       />
//       <BusinessCategories data={{}} />
     
//     </main>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import BusinessHero from '@/components/business/BusinessHero';
import BusinessInfo from '@/components/business/BusinessInfo';
import BusinessCategories from '@/components/business/BusinessCategories';
import Loading from '@/components/layout/loading';

// Define the interface for business data
interface BusinessData {
  id: number;
  title: string;
  shortDes: string;
  longDes?: string;
  bannerImage?: string;
  image?: string;
  videoLink?: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        // Fetch business data by slug
        const response = await fetch(`http://localhost:7000/api/v1/pg/business/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch business data');
        }
        
        const data = await response.json();
        console.log("Business data:", data.data);
        if (!data.data) {
          throw new Error('Business not found');
        }
        
        // Set the fetched business data
        setBusinessData(data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching business data:', err);
        setError('Failed to load business data. Please try again later.');
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [slug]);

  if (loading){return <Loading/>}

  if (error || !businessData) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Business Not Found</h2>
          <p className="text-gray-700">{error || "The requested business activity could not be found."}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-16">
      <BusinessHero
        data={{
          title: businessData.title,
          shortDes: businessData.shortDes,
          longDes: businessData.longDes || ''
        }}
      />
      <BusinessInfo
        data={{
          description: businessData.longDes || businessData.shortDes || ''
        }}
      />
      <BusinessCategories data={{}} />
    </main>
  );
}