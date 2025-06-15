
// "use client";
// import { use, useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import Loading from "@/components/layout/loading";
// import { ParallaxProvider } from "react-scroll-parallax";

// // Define the interface for company data
// interface CompanyData {
//   id: number;
//   title: string;
//   shortDes: string;
//   longDes?: string;
//   image?: string;
//   founded?: string;
//   teamSize?: string;
//   location?: string;
//   category?: string;
//   globalPresence?: string;
//   revenue?: string;
//   clientSatisfaction?: string;
// }

// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = use(params); // ✅ Proper unwrapping with React.use

//   const [companyData, setCompanyData] = useState<CompanyData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://localhost:7000/api/v1/pg/companies/${slug}`
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch company data: ${response.status} ${response.statusText}`
//           );
//         }

//         const data = await response.json();
//         console.log("Company data:", data.data);

//         if (!data.data || !data.data.companyDetail) {
//           throw new Error("Company not found");
//         }

//         setCompanyData(data.data.companyDetail);
//       } catch (err) {
//         console.error("Error fetching company data:", err);
//         setError("Failed to load company data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanyData();
//   }, [slug]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700">
//             {error || "The requested company could not be found."}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const heroData = {
//     heroImage: companyData.image
//       ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
//       : "/images/default-company-hero.jpg",
//     logo: companyData.image
//       ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
//       : "/images/default-company-logo.jpg",
//     name: companyData.title,
//     shortName: companyData.title,
//     category: companyData.category || "Business",
//   };

//   const infoData = {
//     shortName: companyData.title,
//     description: companyData.longDes || companyData.shortDes,
//     yearFounded: companyData.founded || "N/A",
//     employeeCount: companyData.teamSize || "N/A",
//     location: companyData.location || "N/A",
//     category: companyData.category || "N/A",
//   };

//   const statsData = [
//     {
//       label: "Global Presence",
//       value: companyData.globalPresence || "10+ Countries",
//     },
//     { label: "Annual Revenue", value: companyData.revenue || "N/A" },
//     {
//       label: "Client Satisfaction",
//       value: companyData.clientSatisfaction || "N/A",
//     },
//   ];

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//         <CompanyHero data={heroData} />
//         <CompanyInfo data={infoData} />
//         <CompanyStats data={statsData} />
//       </ParallaxProvider>
//     </main>
//   );
// }




// "use client";
// import { use, useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import Loading from "@/components/layout/loading";
// import { ParallaxProvider } from "react-scroll-parallax";

// // Define the interface for company data
// interface CompanyData {
//   id: number;
//   title: string;
//   shortDes: string;
//   longDes?: string;
//   image?: string;
//   founded?: string;
//   teamSize?: string;
//   location?: string;
//   category?: string;
//   globalPresence?: string;
//   revenue?: string;
//   clientSatisfaction?: string;
// }

// // Define fallback image constants
// const DEFAULT_HERO_IMAGE = "/images/default-company-hero.jpg";
// const DEFAULT_LOGO_IMAGE = "/images/default-company-logo.jpg";

// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = use(params); // ✅ Proper unwrapping with React.use

//   const [companyData, setCompanyData] = useState<CompanyData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch company data: ${response.status} ${response.statusText}`
//           );
//         }

//         const data = await response.json();
//         console.log("Company data:", data.data);

//         if (!data.data || !data.data.companyDetail) {
//           throw new Error("Company not found");
//         }

//         setCompanyData(data.data.companyDetail);
//       } catch (err) {
//         console.error("Error fetching company data:", err);
//         setError("Failed to load company data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanyData();
//   }, [slug]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700">
//             {error || "The requested company could not be found."}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const heroData = {
//     heroImage: companyData.image
//       ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
//       : DEFAULT_HERO_IMAGE,
//     logo: companyData.image
//       ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
//       : DEFAULT_LOGO_IMAGE,
//     name: companyData.title,
//     shortName: companyData.title,
//     category: companyData.category || "Business",
//   };

//   const infoData = {
//     shortName: companyData.title,
//     description: companyData.longDes || companyData.shortDes,
//     yearFounded: companyData.founded || "N/A",
//     employeeCount: companyData.teamSize || "N/A",
//     location: companyData.location || "N/A",
//     category: companyData.category || "N/A",
//   };

//   const statsData = [
//     {
//       label: "Global Presence",
//       value: companyData.globalPresence || "10+ Countries",
//     },
//     { label: "Annual Revenue", value: companyData.revenue || "N/A" },
//     {
//       label: "Client Satisfaction",
//       value: companyData.clientSatisfaction || "N/A",
//     },
//   ];

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//         <CompanyHero data={heroData} />
//         <CompanyInfo data={infoData} />
//         <CompanyStats data={statsData} />
//       </ParallaxProvider>
//     </main>
//   );
// }




// "use client";
// import { use, useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import Loading from "@/components/layout/loading";
// import { ParallaxProvider } from "react-scroll-parallax";

// // Define the interface for company data
// interface CompanyData {
//   id: number;
//   title: string;
//   shortDes: string;
//   longDes?: string;
//   image?: string;
//   founded?: string;
//   teamSize?: string;
//   location?: string;
//   category?: string;
//   globalPresence?: string;
//   revenue?: string;
//   clientSatisfaction?: string;
// }

// // Define fallback image constants
// const DEFAULT_HERO_IMAGE = "/images/default-company-hero.jpg";
// const DEFAULT_LOGO_IMAGE = "/images/default-company-logo.jpg";

// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = use(params); // ✅ Proper unwrapping with React.use

//   const [companyData, setCompanyData] = useState<CompanyData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch company data: ${response.status} ${response.statusText}`
//           );
//         }

//         const data = await response.json();
//         console.log("Company data from API:", data.data);

//         if (!data.data || !data.data.companyDetail) {
//           throw new Error("Company not found");
//         }

//         const companyDetail = data.data.companyDetail;
//         console.log("Company detail image field:", companyDetail.image);
        
//         setCompanyData(companyDetail);
//       } catch (err) {
//         console.error("Error fetching company data:", err);
//         setError("Failed to load company data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanyData();
//   }, [slug]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700">
//             {error || "The requested company could not be found."}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ✅ FIXED: Pass raw image paths, let CompanyHero component process them
//   const heroData = {
//     heroImage: companyData.image || "", // Pass raw path from API
//     logo: companyData.image || "",      // Pass raw path from API (or add separate logo field)
//     name: companyData.title,
//     shortName: companyData.title,
//     category: companyData.category || "Business",
//   };

//   console.log("Hero data being passed to CompanyHero:", heroData);

//   const infoData = {
//     shortName: companyData.title,
//     description: companyData.longDes || companyData.shortDes,
//     yearFounded: companyData.founded || "N/A",
//     employeeCount: companyData.teamSize || "N/A",
//     location: companyData.location || "N/A",
//     category: companyData.category || "N/A",
//   };

//   const statsData = [
//     {
//       label: "Global Presence",
//       value: companyData.globalPresence || "10+ Countries",
//     },
//     { label: "Annual Revenue", value: companyData.revenue || "N/A" },
//     {
//       label: "Client Satisfaction",
//       value: companyData.clientSatisfaction || "N/A",
//     },
//   ];

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//         <CompanyHero data={heroData} />
//         <CompanyInfo data={infoData} />
//         <CompanyStats data={statsData} />
//       </ParallaxProvider>
//     </main>
//   );
// }



// // app/companies/[slug]/page.tsx (Server Component)
// import { use } from "react";
// import CompanyPageClient from "./CompanyPageClient";

// // This function runs on the server for static generation
// export async function generateStaticParams() {
//   try {
//     const res = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies');
//     if (!res.ok) return [];
//     const data = await res.json();
//     const companies = data.data || [];
//     return companies.map((company: any) => ({ slug: company.slug }));
//   } catch {
//     return [];
//   }
// }

// // Server component that wraps the client component
// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   return <CompanyPageClient params={params} />;
// }



// // app/companies/[slug]/page.tsx (Server Component)
// import CompanyPageClient from "./CompanyPageClient";

// // This function runs on the server for static generation
// export async function generateStaticParams() {
//   // Option 1: If you know your company slugs, add them here for immediate fix
//   const knownSlugs = [
//     // Add your known company slugs here, e.g.:
//     // 'company-1',
//     // 'company-2',
//     // 'acme-corp',
//   ];
  
//   if (knownSlugs.length > 0) {
//     return knownSlugs.map(slug => ({ slug }));
//   }
  
//   // Option 2: Try to fetch from API with robust error handling
//   try {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
//     const res = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
//       headers: {
//         'Content-Type': 'application/json',
//         'User-Agent': 'NextJS-Static-Generator',
//       },
//       cache: 'force-cache',
//       signal: controller.signal
//     });
    
//     clearTimeout(timeoutId);
    
//     if (!res.ok) {
//       console.warn(`Companies API responded with status ${res.status}`);
//       return [];
//     }
    
//     const data = await res.json();
//     console.log('Companies API Response:', JSON.stringify(data, null, 2));
    
//     // Handle different possible API response structures
//     let companies = [];
    
//     if (Array.isArray(data)) {
//       companies = data;
//     } else if (data?.data?.business && Array.isArray(data.data.business)) {
//       // ✅ FIXED: The companies are under data.business
//       companies = data.data.business;
//     } else if (data?.data && Array.isArray(data.data)) {
//       companies = data.data;
//     } else if (data?.companies && Array.isArray(data.companies)) {
//       companies = data.companies;
//     } else if (data?.result && Array.isArray(data.result)) {
//       companies = data.result;
//     } else {
//       console.warn('Could not find companies array in API response. Response keys:', Object.keys(data || {}));
//       console.warn('data.data keys:', data?.data ? Object.keys(data.data) : 'no data.data');
//       return [];
//     }
    
//     if (!Array.isArray(companies) || companies.length === 0) {
//       console.warn('No companies found or not an array:', companies);
//       return [];
//     }
    
//     const validParams = companies
//       .filter(company => company && (company.slug || company.id))
//       .map((company: any) => ({
//         slug: String(company.slug || company.id)
//       }));
    
//     console.log(`Generated ${validParams.length} company static params:`, validParams);
//     return validParams;
    
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       console.error('Companies API request timed out');
//     } else {
//       console.error('Error in generateStaticParams for companies:', error);
//     }
//     return [];
//   }
// }

// // Server component that wraps the client component
// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   return <CompanyPageClient params={params} />;
// }




// // app/companies/[slug]/page.tsx
// import CompanyPageClient from "./CompanyPageClient";

// // ✅ FIXED: Use internal API route for generateStaticParams
// export async function generateStaticParams() {
//   try {
//     console.log('Generating static params for companies...');
    
//     // Use the internal API route instead of direct external API call
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//     const response = await fetch(`${baseUrl}/api/companies`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // Disable caching during build to ensure fresh data
//       cache: 'no-store'
//     });

//     if (!response.ok) {
//       console.error(`Internal API responded with status ${response.status}`);
      
//       // Fallback: Return known slugs if API fails
//       console.log('Falling back to known company slugs...');
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//         // Add more known slugs here
//       ];
//     }

//     const data = await response.json();
//     console.log('Companies API Response for static generation:', data);

//     // Handle the API response structure
//     let companies = [];
    
//     if (data?.data?.business && Array.isArray(data.data.business)) {
//       companies = data.data.business;
//     } else if (data?.data && Array.isArray(data.data)) {
//       companies = data.data;
//     } else if (Array.isArray(data)) {
//       companies = data;
//     } else {
//       console.warn('Unexpected API response structure:', data);
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }

//     if (!Array.isArray(companies) || companies.length === 0) {
//       console.warn('No companies found in API response');
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }

//     const validParams = companies
//       .filter(company => company && (company.slug || company.id))
//       .map((company: any) => ({
//         slug: String(company.slug || company.id)
//       }));

//     console.log(`Generated ${validParams.length} company static params:`, validParams);
    
//     // Ensure we have at least some params
//     if (validParams.length === 0) {
//       console.log('No valid params generated, using fallback slugs');
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     return validParams;

//   } catch (error) {
//     console.error('Error in generateStaticParams for companies:', error);
    
//     // Always return fallback slugs on error
//     console.log('Using fallback company slugs due to error...');
//     return [
//       { slug: 'bay-chicks-ltd' },
//       { slug: 'aqua-breeders-ltd' },
//       { slug: 'paragon-feed-ltd' },
//     ];
//   }
// }

// // Optional: Generate metadata for each page
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//     const response = await fetch(`${baseUrl}/api/companies/${params.slug}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     if (!response.ok) {
//       return {
//         title: 'Company Not Found',
//         description: 'The requested company could not be found.',
//       };
//     }

//     const data = await response.json();
//     const company = data.data?.companyDetail;

//     return {
//       title: company?.title || 'Company',
//       description: company?.shortDes || 'Company information',
//       openGraph: {
//         title: company?.title || 'Company',
//         description: company?.shortDes || 'Company information',
//         images: company?.image ? [company.image] : [],
//       },
//     };
//   } catch (error) {
//     console.error('Error generating metadata:', error);
//     return {
//       title: 'Company',
//       description: 'Company information',
//     };
//   }
// }

// // Server component that wraps the client component
// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   return <CompanyPageClient params={params} />;
// }



// // app/companies/[slug]/page.tsx
// import CompanyPageClient from "./CompanyPageClient";

// // ✅ FIXED: Use direct external API for build-time functions
// export async function generateStaticParams() {
//   try {
//     console.log('Generating static params for companies...');
    
//     // Use external API directly during build (not localhost)
//     const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // Disable caching during build to ensure fresh data
//       cache: 'no-store'
//     });

//     if (!response.ok) {
//       console.error(`External API responded with status ${response.status}`);
      
//       // Fallback: Return known slugs if API fails
//       console.log('Falling back to known company slugs...');
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//         // Add more known slugs here
//       ];
//     }

//     const data = await response.json();
//     console.log('Companies API Response for static generation:', data);

//     // Handle the API response structure
//     let companies = [];
    
//     if (data?.data?.business && Array.isArray(data.data.business)) {
//       companies = data.data.business;
//     } else if (data?.data && Array.isArray(data.data)) {
//       companies = data.data;
//     } else if (Array.isArray(data)) {
//       companies = data;
//     } else {
//       console.warn('Unexpected API response structure:', data);
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }

//     if (!Array.isArray(companies) || companies.length === 0) {
//       console.warn('No companies found in API response');
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }

//     const validParams = companies
//       .filter(company => company && (company.slug || company.id))
//       .map((company: any) => ({
//         slug: String(company.slug || company.id)
//       }));

//     console.log(`Generated ${validParams.length} company static params:`, validParams);
    
//     // Ensure we have at least some params
//     if (validParams.length === 0) {
//       console.log('No valid params generated, using fallback slugs');
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     return validParams;

//   } catch (error) {
//     console.error('Error in generateStaticParams for companies:', error);
    
//     // Always return fallback slugs on error
//     console.log('Using fallback company slugs due to error...');
//     return [
//       { slug: 'bay-chicks-ltd' },
//       { slug: 'aqua-breeders-ltd' },
//       { slug: 'paragon-feed-ltd' },
//     ];
//   }
// }

// // Optional: Generate metadata for each page
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   try {
//     // Use external API directly during build (not localhost)
//     const response = await fetch(`http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${params.slug}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     if (!response.ok) {
//       return {
//         title: 'Company Not Found',
//         description: 'The requested company could not be found.',
//       };
//     }

//     const data = await response.json();
//     const company = data.data?.companyDetail;

//     return {
//       title: company?.title || 'Company',
//       description: company?.shortDes || 'Company information',
//       openGraph: {
//         title: company?.title || 'Company',
//         description: company?.shortDes || 'Company information',
//         images: company?.image ? [company.image] : [],
//       },
//     };
//   } catch (error) {
//     console.error('Error generating metadata:', error);
//     return {
//       title: 'Company',
//       description: 'Company information',
//     };
//   }
// }

// // Server component that wraps the client component
// export default function CompanyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   return <CompanyPageClient params={params} />;
// }




// // app/companies/[slug]/page.tsx
// import { Suspense } from 'react';
// import Link from 'next/link';
// import Loading from '@/components/layout/loading';
// import CompanyClientWrapper from '@/components/company/CompanyClientWrapper';

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

// // REQUIRED for static export - This function must be exported
// export async function generateStaticParams() {
//   try {
//     console.log('Generating static params for companies...');
    
//     const res = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       cache: 'force-cache'
//     });
    
//     if (!res.ok) {
//       console.warn('Failed to fetch companies for static generation:', res.status);
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     const data = await res.json();
//     console.log('Companies API Response structure:', JSON.stringify(data, null, 2));
    
//     // Handle different possible API response structures
//     let companies = [];
    
//     if (Array.isArray(data)) {
//       companies = data;
//     } else if (data?.data?.business && Array.isArray(data.data.business)) {
//       // ✅ Same pattern as business - companies are under data.business
//       companies = data.data.business;
//     } else if (data.data && Array.isArray(data.data)) {
//       companies = data.data;
//     } else if (data.companies && Array.isArray(data.companies)) {
//       companies = data.companies;
//     } else {
//       console.warn('Unexpected API response structure:', data);
//       console.warn('Available keys:', Object.keys(data || {}));
//       console.warn('data.data keys:', data?.data ? Object.keys(data.data) : 'no data.data');
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     if (!Array.isArray(companies) || companies.length === 0) {
//       console.warn('Companies is not an array or empty:', companies);
//       // Fallback to known slugs
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     const params = companies
//       .filter(company => company && (company.slug || company.id)) // Filter out invalid entries
//       .map((company: any) => ({
//         slug: String(company.slug || company.id) // Ensure slug is a string, use id as fallback
//       }));
    
//     console.log('Generated company params:', params);
    
//     // If no valid params, use fallback
//     if (params.length === 0) {
//       return [
//         { slug: 'bay-chicks-ltd' },
//         { slug: 'aqua-breeders-ltd' },
//         { slug: 'paragon-feed-ltd' },
//       ];
//     }
    
//     return params;
    
//   } catch (error) {
//     console.error('Error generating static params for companies:', error);
//     // Return fallback slugs
//     return [
//       { slug: 'bay-chicks-ltd' },
//       { slug: 'aqua-breeders-ltd' },
//       { slug: 'paragon-feed-ltd' },
//     ];
//   }
// }

// // Optional: Generate metadata for each page
// export async function generateMetadata(props: { params: Params }) {
//   const params = await props.params;
  
//   try {
//     const res = await fetch(`https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${params.slug}`, {
//       cache: 'force-cache',
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     if (!res.ok) {
//       return {
//         title: 'Company Not Found',
//         description: 'The requested company could not be found.',
//       };
//     }

//     const data = await res.json();
//     const company = data.data?.companyDetail;

//     return {
//       title: company?.title || 'Company',
//       description: company?.shortDes || 'Company information',
//       openGraph: {
//         title: company?.title || 'Company',
//         description: company?.shortDes || 'Company information',
//         images: company?.image ? [company.image] : [],
//       },
//     };
//   } catch (error) {
//     console.error('Error generating metadata:', error);
//     return {
//       title: 'Company',
//       description: 'Company information',
//     };
//   }
// }

// // Page component using params - proper Promise type
// export default async function Page(props: { params: Params }) {
//   // Await the params promise to get the actual slug
//   const params = await props.params;
  
//   return (
//     <Suspense fallback={<Loading />}>
//       <CompanyContent slug={params.slug} />
//     </Suspense>
//   );
// }

// // Company content component that handles data fetching
// async function CompanyContent({ slug }: { slug: string }) {
//   try {
//     console.log(`Fetching company data for slug: ${slug}`);
    
//     // Fetch company data - use force-cache for static generation (same as business)
//     const res = await fetch(`https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`, {
//       cache: 'force-cache', // ✅ Same as business page - use force-cache for static export
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
    
//     if (!res.ok) {
//       throw new Error(`Failed to fetch company data: ${res.status}`);
//     }
    
//     const data = await res.json();
//     console.log("Company data from API:", data.data);
    
//     const companyData: CompanyData = data.data;
    
//     if (!companyData || !companyData.companyDetail) {
//       throw new Error('Company not found');
//     }
    
//     const company = companyData.companyDetail;
    
//     // Prepare data for components (same structure as CompanyPageClient)
//     const heroData = {
//       heroImage: company.image || "",
//       logo: company.image || "",
//       name: company.title,
//       shortName: company.title,
//       category: company.category || "Business",
//     };

//     const infoData = {
//       shortName: company.title,
//       description: company.longDes || company.shortDes,
//       yearFounded: company.founded || "N/A",
//       employeeCount: company.teamSize || "N/A",
//       location: company.location || "N/A",
//       category: company.category || "N/A",
//     };

//     const statsData = [
//       {
//         label: "Global Presence",
//         value: company.globalPresence || "10+ Countries",
//       },
//       { label: "Annual Revenue", value: company.revenue || "N/A" },
//       {
//         label: "Client Satisfaction",
//         value: company.clientSatisfaction || "N/A",
//       },
//     ];

//     return (
//       <main className="min-h-screen">
//         <CompanyClientWrapper 
//           heroData={heroData}
//           infoData={infoData}
//           statsData={statsData}
//         />
//       </main>
//     );
    
//   } catch (error) {
//     console.error('Error in CompanyContent:', error);
    
//     // Return error page
//     return (
//       <main className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-200">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700 mb-4">
//             The requested company could not be found or there was an error loading the data.
//           </p>
//           <Link
//             href="/companies"
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors inline-block"
//           >
//             Back to Companies
//           </Link>
//         </div>
//       </main>
//     );
//   }
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

// STATIC PARAMS for build (minimal set) - SERVER COMPONENT
export async function generateStaticParams() {
  try {
    console.log('Generating static params for companies...');
    
    const res = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Don't cache during build
    });
    
    if (!res.ok) {
      console.warn('Failed to fetch companies for static generation:', res.status);
      // Fallback to known slugs
      return [
        { slug: 'bay-chicks-ltd' },
        { slug: 'aqua-breeders-ltd' },
        { slug: 'paragon-feed-ltd' },
      ];
    }
    
    const data = await res.json();
    console.log('Companies API Response structure:', JSON.stringify(data, null, 2));
    
    // Handle different possible API response structures
    let companies = [];
    
    if (Array.isArray(data)) {
      companies = data;
    } else if (data?.data?.business && Array.isArray(data.data.business)) {
      // ✅ Same pattern as business - companies are under data.business
      companies = data.data.business;
    } else if (data.data && Array.isArray(data.data)) {
      companies = data.data;
    } else if (data.companies && Array.isArray(data.companies)) {
      companies = data.companies;
    } else {
      console.warn('Unexpected API response structure:', data);
      console.warn('Available keys:', Object.keys(data || {}));
      console.warn('data.data keys:', data?.data ? Object.keys(data.data) : 'no data.data');
      // Fallback to known slugs
      return [
        { slug: 'bay-chicks-ltd' },
        { slug: 'aqua-breeders-ltd' },
        { slug: 'paragon-feed-ltd' },
      ];
    }
    
    if (!Array.isArray(companies) || companies.length === 0) {
      console.warn('Companies is not an array or empty:', companies);
      // Fallback to known slugs
      return [
        { slug: 'bay-chicks-ltd' },
        { slug: 'aqua-breeders-ltd' },
        { slug: 'paragon-feed-ltd' },
      ];
    }
    
    const params = companies
      .filter(company => company && (company.slug || company.id)) // Filter out invalid entries
      .map((company: any) => ({
        slug: String(company.slug || company.id) // Ensure slug is a string, use id as fallback
      }));
    
    console.log('Generated company params:', params);
    
    // If no valid params, use fallback
    if (params.length === 0) {
      return [
        { slug: 'bay-chicks-ltd' },
        { slug: 'aqua-breeders-ltd' },
        { slug: 'paragon-feed-ltd' },
      ];
    }
    
    return params;
    
  } catch (error) {
    console.error('Error generating static params for companies:', error);
    // Return fallback slugs
    return [
      { slug: 'bay-chicks-ltd' },
      { slug: 'aqua-breeders-ltd' },
      { slug: 'paragon-feed-ltd' },
    ];
  }
}

// Optional: Generate metadata for each page
export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  
  try {
    const res = await fetch(`https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${params.slug}`, {
      cache: 'force-cache', // ✅ FIXED: Use force-cache for static export
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      return {
        title: 'Company Not Found',
        description: 'The requested company could not be found.',
      };
    }

    const data = await res.json();
    const company = data.data?.companyDetail;

    return {
      title: company?.title || 'Company',
      description: company?.shortDes || 'Company information',
      openGraph: {
        title: company?.title || 'Company',
        description: company?.shortDes || 'Company information',
        images: company?.image ? [company.image] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Company',
      description: 'Company information',
    };
  }
}

// SERVER COMPONENT PAGE
export default async function Page(props: { params: Params }) {
  // Await the params promise to get the actual slug
  const params = await props.params;
  
  return (
    <Suspense fallback={<Loading />}>
      <CompanyPageClient slug={params.slug} />
    </Suspense>
  );
}