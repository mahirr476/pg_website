
// // app/companies/[slug]/page.tsx
// import { Suspense } from 'react';
// import Loading from '@/components/layout/loading';
// import CompanyPageClient from './CompanyPageClient';

// // Define the interface for company data
// interface CompanyData {
//   companyDetail: {
//     id: number;
//     title: string;
//     shortDes: string;
//     longDes?: string;
//     image?: string;
//     founded?: string;
//     teamSize?: string;
//     location?: string;
//     category?: string;
//     globalPresence?: string;
//     revenue?: string;
//     clientSatisfaction?: string;
//   };
// }

// // In Next.js 15, params is a Promise
// type Params = Promise<{ slug: string }>;

// // STATIC PARAMS for build - optimized for your static export
// export async function generateStaticParams() {
//   try {
//     console.log('Generating static params for companies...');
    
//     // Since you're doing static export, we'll be more conservative with API calls
//     const res = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // Use default caching for static export builds
//       next: { revalidate: false } // Cache indefinitely during build
//     });
    
//     if (!res.ok) {
//       console.warn('Failed to fetch companies for static generation:', res.status);
//       // Return comprehensive fallback list
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//         { slug: 'paragon-plast-fiber-ltd' },
//         // Add more known slugs if you have them
//       ];
//     }
    
//     const data = await res.json();
//     console.log('Companies API Response for static generation');
    
//     // Handle different possible API response structures
//     let companies = [];
    
//     if (Array.isArray(data)) {
//       companies = data;
//     } else if (data?.data?.business && Array.isArray(data.data.business)) {
//       companies = data.data.business;
//     } else if (data.data && Array.isArray(data.data)) {
//       companies = data.data;
//     } else if (data.companies && Array.isArray(data.companies)) {
//       companies = data.companies;
//     } else {
//       console.warn('Unexpected API response structure during build');
//       // Return fallback for static export
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//         { slug: 'paragon-plast-fiber-ltd' },
//       ];
//     }
    
//     if (!Array.isArray(companies) || companies.length === 0) {
//       console.warn('Companies array is empty or invalid during build');
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//         { slug: 'paragon-plast-fiber-ltd' },
//       ];
//     }
    
//     const params = companies
//       .filter(company => company && (company.slug || company.id))
//       .map((company: any) => ({
//         slug: String(company.slug || company.id)
//       }))
//       .slice(0, 50); // Limit to prevent too many static pages
    
//     console.log(`Generated ${params.length} company params for static export`);
    
//     // Always include fallback slugs
//     const fallbackSlugs = [
//       { slug: 'bay-chicks-ltd' },
//       { slug: 'aqua-breeders-ltd' },
//       { slug: 'paragon-feed-ltd' },
//       { slug: 'paragon-plast-fiber-ltd' },
//     ];
    
//     // Merge and deduplicate
//     const allParams = [...fallbackSlugs, ...params];
//     const uniqueParams = allParams.filter((param, index, arr) => 
//       arr.findIndex(p => p.slug === param.slug) === index
//     );
    
//     return uniqueParams;
    
//   } catch (error) {
//     console.error('Error generating static params for companies:', error);
//     // Always return fallback for static export reliability
//     return [
//       { slug: 'bay-chicks-ltd' },
//       { slug: 'aqua-breeders-ltd' },
//       { slug: 'paragon-feed-ltd' },
//       { slug: 'paragon-plast-fiber-ltd' },
//     ];
//   }
// }

// // Generate metadata at build time with error handling for static export
// export async function generateMetadata(props: { params: Params }) {
//   const params = await props.params;
  
//   // Default metadata that works for static export
//   const defaultMetadata = {
//     title: 'Company Information',
//     description: 'Discover comprehensive company information and business details.',
//     openGraph: {
//       title: 'Company Information',
//       description: 'Discover comprehensive company information and business details.',
//     },
//   };
  
//   try {
//     const res = await fetch(`https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${params.slug}`, {
//       cache: 'force-cache', // ✅ FIXED: Use force-cache for static export
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     if (!res.ok) {
//       console.warn(`Failed to fetch metadata for ${params.slug}:`, res.status);
//       return {
//         ...defaultMetadata,
//         title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Company`,
//       };
//     }

//     const data = await res.json();
//     const company = data.data?.companyDetail;

//     if (!company) {
//       return {
//         ...defaultMetadata,
//         title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Company`,
//       };
//     }

//     return {
//       title: `${company.title} | Company Profile`,
//       description: company.shortDes || `Learn more about ${company.title} - comprehensive company information and business details.`,
//       openGraph: {
//         title: `${company.title} | Company Profile`,
//         description: company.shortDes || `Learn more about ${company.title}`,
//         images: company.image ? [
//           {
//             url: company.image,
//             width: 1200,
//             height: 630,
//             alt: `${company.title} logo`,
//           }
//         ] : [],
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: `${company.title} | Company Profile`,
//         description: company.shortDes || `Learn more about ${company.title}`,
//         images: company.image ? [company.image] : [],
//       },
//     };
    
//   } catch (error) {
//     console.error(`Error generating metadata for ${params.slug}:`, error);
//     return {
//       ...defaultMetadata,
//       title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Company`,
//     };
//   }
// }

// // SERVER COMPONENT PAGE - optimized for static export
// export default async function Page(props: { params: Params }) {
//   const params = await props.params;
  
//   return (
//     <Suspense fallback={<Loading />}>
//       <CompanyPageClient slug={params.slug} />
//     </Suspense>
//   );
// }


// app/companies/[slug]/page.tsx
import { Suspense } from 'react';
import Loading from '@/components/layout/loading';
import CompanyPageClient from './CompanyPageClient';

// Define the interface for company data
interface CompanyData {
  companyDetail: {
    id: number;
    title: string;
    shortDes: string;
    longDes?: string;
    image?: string;
    founded?: string;
    teamSize?: string;
    location?: string;
    category?: string;
    globalPresence?: string;
    revenue?: string;
    clientSatisfaction?: string;
  };
}

// In Next.js 15, params is a Promise
type Params = Promise<{ slug: string }>;

// STATIC PARAMS for build - fetches all companies from API
export async function generateStaticParams() {
  try {
    console.log('Generating static params for companies...');

    const res = await fetch(
      'https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies',
      {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store', // always fetch fresh data at build time
      }
    );

    if (!res.ok) {
      console.error(`❌ API failed with status: ${res.status}`);
      throw new Error(`API failed: ${res.status}`);
    }

    const data = await res.json();
    console.log('✅ Companies API raw response keys:', Object.keys(data));

    // Handle all possible API response structures
    let companies: any[] = [];

    if (Array.isArray(data)) {
      companies = data;
    } else if (data?.data?.business && Array.isArray(data.data.business)) {
      companies = data.data.business;
    } else if (data?.data && Array.isArray(data.data)) {
      companies = data.data;
    } else if (data?.companies && Array.isArray(data.companies)) {
      companies = data.companies;
    } else if (data?.data?.companies && Array.isArray(data.data.companies)) {
      companies = data.data.companies;
    } else {
      console.error('❌ Unknown API response structure:', JSON.stringify(data).slice(0, 300));
      throw new Error('Unknown API response structure');
    }

    if (companies.length === 0) {
      console.warn('⚠️ Companies array is empty from API');
      throw new Error('Empty companies list');
    }

    const params = companies
      .filter((company: any) => company && company.slug)
      .map((company: any) => ({
        slug: String(company.slug),
      }));

    console.log(`✅ Generated ${params.length} static params:`, params.map(p => p.slug));

    return params;

  } catch (error) {
    console.error('❌ generateStaticParams error:', error);

    // Fallback list — add any known slugs here as backup
    const fallback = [
      { slug: 'bay-chicks-ltd' },
      { slug: 'aqua-breeders-ltd' },
      { slug: 'paragon-feed-ltd' },
      { slug: 'paragon-plast-fiber-ltd' },
      { slug: 'paragon-agro-dairy-ltd' },
    ];

    console.warn('⚠️ Using fallback slugs:', fallback.map(f => f.slug));
    return fallback;
  }
}

// Generate metadata at build time
export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;

  const defaultMetadata = {
    title: 'Company Information',
    description: 'Discover comprehensive company information and business details.',
    openGraph: {
      title: 'Company Information',
      description: 'Discover comprehensive company information and business details.',
    },
  };

  try {
    const res = await fetch(
      `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${params.slug}`,
      {
        cache: 'force-cache',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!res.ok) {
      console.warn(`⚠️ Failed to fetch metadata for ${params.slug}: ${res.status}`);
      return {
        ...defaultMetadata,
        title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | Company`,
      };
    }

    const data = await res.json();
    const company = data.data?.companyDetail;

    if (!company) {
      return {
        ...defaultMetadata,
        title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | Company`,
      };
    }

    return {
      title: `${company.title} | Company Profile`,
      description:
        company.shortDes ||
        `Learn more about ${company.title} - comprehensive company information and business details.`,
      openGraph: {
        title: `${company.title} | Company Profile`,
        description: company.shortDes || `Learn more about ${company.title}`,
        images: company.image
          ? [{ url: company.image, width: 1200, height: 630, alt: `${company.title} logo` }]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${company.title} | Company Profile`,
        description: company.shortDes || `Learn more about ${company.title}`,
        images: company.image ? [company.image] : [],
      },
    };
  } catch (error) {
    console.error(`❌ Error generating metadata for ${params.slug}:`, error);
    return {
      ...defaultMetadata,
      title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | Company`,
    };
  }
}

// SERVER COMPONENT PAGE
export default async function Page(props: { params: Params }) {
  const params = await props.params;

  return (
    <Suspense fallback={<Loading />}>
      <CompanyPageClient slug={params.slug} />
    </Suspense>
  );
}