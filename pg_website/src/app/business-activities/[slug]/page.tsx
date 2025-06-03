

// // app/business-activities/[slug]/page.tsx
// import { Suspense } from 'react';
// import Loading from '@/components/layout/loading';
// import BusinessHero from '@/components/business/BusinessHero';
// import BusinessInfo from '@/components/business/BusinessInfo';
// import BusinessCategories from '@/components/business/BusinessCategories';
// import Certificates from '@/components/business/Certificates';

// // Define interfaces
// interface BusinessItem {
//   id: number;
//   title: string;
//   description: string;
// }

// // Define our local Certificate interface that matches the API response
// interface ApiCertificate {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
// }

// interface BusinessData {
//   business: {
//     id: number;
//     title: string;
//     shortDes: string;
//     longDes?: string;
//     bannerImage?: string;
//     image?: string;
//     videoLink?: string;
//   };
//   operation: BusinessItem[];
//   product: BusinessItem[];
//   units: BusinessItem[];
//   certifications: ApiCertificate[];
// }

// // In Next.js 15, params is a Promise
// type Params = Promise<{ slug: string }>;

// // Page component using params - proper Promise type
// export default async function Page(props: { params: Params }) {
//   // Await the params promise to get the actual slug
//   const params = await props.params;
  
//   return (
//     <Suspense fallback={<Loading />}>
//       <BusinessContent slug={params.slug} />
//     </Suspense>
//   );
// }

// // Business content component that handles data fetching
// async function BusinessContent({ slug }: { slug: string }) {
//   // Fetch business data
//   const res = await fetch(`http://localhost:7000/api/v1/pg/business/${slug}`, {
//     cache: 'no-store'
//   });
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch business data');
//   }
  
//   const data = await res.json();
//   const businessData: BusinessData = data.data;
  
//   if (!businessData) {
//     throw new Error('Business not found');
//   }
  
//   // Prepare category data for BusinessCategories component
//   const categoryData = {
//     operations: businessData.operation || [],
//     products: businessData.product || [],
//     units: businessData.units || []
//   };

//   // Ensure image is always present in certificates by providing a default value
//   const certificationsWithImageField = businessData.certifications.map(cert => ({
//     id: cert.id,
//     title: cert.title,
//     description: cert.description,
//     image: cert.image || '' // Add a default empty string if image is undefined
//   }));

//   return (
//     <main className="pt-16">
//       <BusinessHero
//         data={{
//           title: businessData.business.title,
//           shortDes: businessData.business.shortDes,
//           longDes: businessData.business.longDes || '',
//           img: businessData.business.image || '',
//         }}
//       />
//       <BusinessInfo
//         data={{
//           description: businessData.business.longDes || businessData.business.shortDes || ''
//         }}
//       />
//       {/* Pass the category data to the BusinessCategories component */}
//       <BusinessCategories categoryData={categoryData} />
      
//       {/* Only render Certificates section if certifications exist */}
//       {businessData.certifications && businessData.certifications.length > 0 && (
//         <Certificates certificates={certificationsWithImageField} />
//       )}
//     </main>
//   );
// }





// // app/business-activities/[slug]/page.tsx
// import { Suspense } from 'react';
// import Loading from '@/components/layout/loading';
// import BusinessHero from '@/components/business/BusinessHero';
// import BusinessInfo from '@/components/business/BusinessInfo';
// import BusinessCategories from '@/components/business/BusinessCategories';
// import Certificates from '@/components/business/Certificates';

// // Define interfaces
// interface BusinessItem {
//   id: number;
//   title: string;
//   description: string;
// }

// // Define our local Certificate interface that matches the API response
// interface ApiCertificate {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
// }

// interface BusinessData {
//   business: {
//     id: number;
//     title: string;
//     shortDes: string;
//     longDes?: string;
//     bannerImage?: string;
//     image?: string;
//     videoLink?: string;
//   };
//   operation: BusinessItem[];
//   product: BusinessItem[];
//   units: BusinessItem[];
//   certifications: ApiCertificate[];
// }

// // In Next.js 15, params is a Promise
// type Params = Promise<{ slug: string }>;

// // Page component using params - proper Promise type
// export default async function Page(props: { params: Params }) {
//   // Await the params promise to get the actual slug
//   const params = await props.params;
  
//   return (
//     <Suspense fallback={<Loading />}>
//       <BusinessContent slug={params.slug} />
//     </Suspense>
//   );
// }

// // Business content component that handles data fetching
// async function BusinessContent({ slug }: { slug: string }) {
//   // Fetch business data
//   const res = await fetch(`http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business/${slug}`, {
//     cache: 'no-store'
//   });
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch business data');
//   }
  
//   const data = await res.json();
//   const businessData: BusinessData = data.data;
  
//   if (!businessData) {
//     throw new Error('Business not found');
//   }
  
//   // Prepare category data for BusinessCategories component
//   const categoryData = {
//     operations: businessData.operation || [],
//     products: businessData.product || [],
//     units: businessData.units || []
//   };

//   // Define a default fallback image URL
//   const DEFAULT_FALLBACK_IMAGE_URL = '/images/placeholder.png';

//   // Ensure image is always present in certificates by providing a default value
//   const certificationsWithImageField = businessData.certifications.map(cert => ({
//     id: cert.id,
//     title: cert.title,
//     description: cert.description,
//     image: cert.image || DEFAULT_FALLBACK_IMAGE_URL // Use a meaningful default fallback image
//   }));

//   return (
//     <main className="pt-16">
//       <BusinessHero
//         data={{
//           title: businessData.business.title,
//           shortDes: businessData.business.shortDes,
//           longDes: businessData.business.longDes || '',
//           img: businessData.business.image || '',
//         }}
//       />
//       <BusinessInfo
//         data={{
//           description: businessData.business.longDes || businessData.business.shortDes || ''
//         }}
//       />
//       {/* Pass the category data to the BusinessCategories component */}
//       <BusinessCategories categoryData={categoryData} />
      
//       {/* Only render Certificates section if certifications exist */}
//       {businessData.certifications && businessData.certifications.length > 0 && (
//         <Certificates certificates={certificationsWithImageField} />
//       )}
//     </main>
//   );
// }




// // app/business-activities/[slug]/page.tsx
// import { Suspense } from 'react';
// import Loading from '@/components/layout/loading';
// import BusinessHero from '@/components/business/BusinessHero';
// import BusinessInfo from '@/components/business/BusinessInfo';
// import BusinessCategories from '@/components/business/BusinessCategories';
// import Certificates from '@/components/business/Certificates';

// // Define interfaces
// interface BusinessItem {
//   id: number;
//   title: string;
//   description: string;
// }

// // Define our local Certificate interface that matches the API response
// interface ApiCertificate {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
// }

// interface BusinessData {
//   business: {
//     id: number;
//     title: string;
//     shortDes: string;
//     longDes?: string;
//     bannerImage?: string;
//     image?: string;
//     videoLink?: string;
//   };
//   operation: BusinessItem[];
//   product: BusinessItem[];
//   units: BusinessItem[];
//   certifications: ApiCertificate[];
// }

// // In Next.js 15, params is a Promise
// type Params = Promise<{ slug: string }>;

// // ADD THIS FUNCTION - Required for static export
// export async function generateStaticParams() {
//   try {
//     const res = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business');
//     if (!res.ok) return [];
//     const data = await res.json();
//     const businesses = data.data || [];
//     return businesses.map((business: any) => ({ slug: business.slug }));
//   } catch {
//     return [];
//   }
// }

// // Page component using params - proper Promise type
// export default async function Page(props: { params: Params }) {
//   // Await the params promise to get the actual slug
//   const params = await props.params;
  
//   return (
//     <Suspense fallback={<Loading />}>
//       <BusinessContent slug={params.slug} />
//     </Suspense>
//   );
// }

// // Business content component that handles data fetching
// async function BusinessContent({ slug }: { slug: string }) {
//   // Fetch business data
//   const res = await fetch(`http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business/${slug}`, {
//     cache: 'no-store'
//   });
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch business data');
//   }
  
//   const data = await res.json();
//   const businessData: BusinessData = data.data;
  
//   if (!businessData) {
//     throw new Error('Business not found');
//   }
  
//   // Prepare category data for BusinessCategories component
//   const categoryData = {
//     operations: businessData.operation || [],
//     products: businessData.product || [],
//     units: businessData.units || []
//   };

//   // Define a default fallback image URL
//   const DEFAULT_FALLBACK_IMAGE_URL = '/images/placeholder.png';

//   // Ensure image is always present in certificates by providing a default value
//   const certificationsWithImageField = businessData.certifications.map(cert => ({
//     id: cert.id,
//     title: cert.title,
//     description: cert.description,
//     image: cert.image || DEFAULT_FALLBACK_IMAGE_URL // Use a meaningful default fallback image
//   }));

//   return (
//     <main className="pt-16">
//       <BusinessHero
//         data={{
//           title: businessData.business.title,
//           shortDes: businessData.business.shortDes,
//           longDes: businessData.business.longDes || '',
//           img: businessData.business.image || '',
//         }}
//       />
//       <BusinessInfo
//         data={{
//           description: businessData.business.longDes || businessData.business.shortDes || ''
//         }}
//       />
//       {/* Pass the category data to the BusinessCategories component */}
//       <BusinessCategories categoryData={categoryData} />
      
//       {/* Only render Certificates section if certifications exist */}
//       {businessData.certifications && businessData.certifications.length > 0 && (
//         <Certificates certificates={certificationsWithImageField} />
//       )}
//     </main>
//   );
// }



// app/business-activities/[slug]/page.tsx
import { Suspense } from 'react';
import Loading from '@/components/layout/loading';
import BusinessHero from '@/components/business/BusinessHero';
import BusinessInfo from '@/components/business/BusinessInfo';
import BusinessCategories from '@/components/business/BusinessCategories';
import Certificates from '@/components/business/Certificates';

// Define interfaces
interface BusinessItem {
  id: number;
  title: string;
  description: string;
}

// Define our local Certificate interface that matches the API response
interface ApiCertificate {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface BusinessData {
  business: {
    id: number;
    title: string;
    shortDes: string;
    longDes?: string;
    bannerImage?: string;
    image?: string;
    videoLink?: string;
  };
  operation: BusinessItem[];
  product: BusinessItem[];
  units: BusinessItem[];
  certifications: ApiCertificate[];
}

// In Next.js 15, params is a Promise
type Params = Promise<{ slug: string }>;

// REQUIRED for static export - This function must be exported
export async function generateStaticParams() {
  try {
    const res = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache'
    });
    
    if (!res.ok) {
      console.warn('Failed to fetch businesses for static generation:', res.status);
      return [];
    }
    
    const data = await res.json();
    console.log('API Response structure:', JSON.stringify(data, null, 2));
    
    // Handle different possible API response structures
    let businesses = [];
    
    if (Array.isArray(data)) {
      // If data is directly an array
      businesses = data;
    } else if (data?.data?.business && Array.isArray(data.data.business)) {
      // ✅ LIKELY FIX: If businesses are under data.business (same as companies API)
      businesses = data.data.business;
    } else if (data.data && Array.isArray(data.data)) {
      // If data is nested under 'data' property
      businesses = data.data;
    } else if (data.businesses && Array.isArray(data.businesses)) {
      // If data is nested under 'businesses' property
      businesses = data.businesses;
    } else {
      console.warn('Unexpected API response structure:', data);
      console.warn('Available keys:', Object.keys(data || {}));
      console.warn('data.data keys:', data?.data ? Object.keys(data.data) : 'no data.data');
      return [];
    }
    
    if (!Array.isArray(businesses)) {
      console.warn('Businesses is not an array:', businesses);
      return [];
    }
    
    const params = businesses
      .filter(business => business && business.slug) // Filter out invalid entries
      .map((business: any) => ({
        slug: String(business.slug) // Ensure slug is a string
      }));
    
    console.log('Generated params:', params);
    return params;
    
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return some fallback slugs if you know them, or empty array
    return [
      // { slug: 'example-business-1' },
      // { slug: 'example-business-2' },
    ];
  }
}

// Page component using params - proper Promise type
export default async function Page(props: { params: Params }) {
  // Await the params promise to get the actual slug
  const params = await props.params;
  
  return (
    <Suspense fallback={<Loading />}>
      <BusinessContent slug={params.slug} />
    </Suspense>
  );
}

// Business content component that handles data fetching
async function BusinessContent({ slug }: { slug: string }) {
  try {
    // Fetch business data - use force-cache for static generation
    const res = await fetch(`http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business/${slug}`, {
      cache: 'force-cache', // ✅ FIXED: Use force-cache instead of no-store for static export
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch business data: ${res.status}`);
    }
    
    const data = await res.json();
    const businessData: BusinessData = data.data;
    
    if (!businessData) {
      throw new Error('Business not found');
    }
    
    // Prepare category data for BusinessCategories component
    const categoryData = {
      operations: businessData.operation || [],
      products: businessData.product || [],
      units: businessData.units || []
    };

    // Define a default fallback image URL
    const DEFAULT_FALLBACK_IMAGE_URL = '/images/placeholder.png';

    // Ensure image is always present in certificates by providing a default value
    const certificationsWithImageField = businessData.certifications.map(cert => ({
      id: cert.id,
      title: cert.title,
      description: cert.description,
      image: cert.image || DEFAULT_FALLBACK_IMAGE_URL
    }));

    return (
      <main className="pt-16">
        <BusinessHero
          data={{
            title: businessData.business.title,
            shortDes: businessData.business.shortDes,
            longDes: businessData.business.longDes || '',
            img: businessData.business.image || '',
          }}
        />
        <BusinessInfo
          data={{
            description: businessData.business.longDes || businessData.business.shortDes || ''
          }}
        />
        {/* Pass the category data to the BusinessCategories component */}
        <BusinessCategories categoryData={categoryData} />
        
        {/* Only render Certificates section if certifications exist */}
        {businessData.certifications && businessData.certifications.length > 0 && (
          <Certificates certificates={certificationsWithImageField} />
        )}
      </main>
    );
  } catch (error) {
    console.error('Error in BusinessContent:', error);
    throw error;
  }
}