
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



// app/companies/[slug]/page.tsx (Server Component)
import CompanyPageClient from "./CompanyPageClient";

// This function runs on the server for static generation
export async function generateStaticParams() {
  // Option 1: If you know your company slugs, add them here for immediate fix
  const knownSlugs = [
    // Add your known company slugs here, e.g.:
    // 'company-1',
    // 'company-2',
    // 'acme-corp',
  ];
  
  if (knownSlugs.length > 0) {
    return knownSlugs.map(slug => ({ slug }));
  }
  
  // Option 2: Try to fetch from API with robust error handling
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const res = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies', {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'NextJS-Static-Generator',
      },
      cache: 'force-cache',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.warn(`Companies API responded with status ${res.status}`);
      return [];
    }
    
    const data = await res.json();
    console.log('Companies API Response:', JSON.stringify(data, null, 2));
    
    // Handle different possible API response structures
    let companies = [];
    
    if (Array.isArray(data)) {
      companies = data;
    } else if (data?.data?.business && Array.isArray(data.data.business)) {
      // ✅ FIXED: The companies are under data.business
      companies = data.data.business;
    } else if (data?.data && Array.isArray(data.data)) {
      companies = data.data;
    } else if (data?.companies && Array.isArray(data.companies)) {
      companies = data.companies;
    } else if (data?.result && Array.isArray(data.result)) {
      companies = data.result;
    } else {
      console.warn('Could not find companies array in API response. Response keys:', Object.keys(data || {}));
      console.warn('data.data keys:', data?.data ? Object.keys(data.data) : 'no data.data');
      return [];
    }
    
    if (!Array.isArray(companies) || companies.length === 0) {
      console.warn('No companies found or not an array:', companies);
      return [];
    }
    
    const validParams = companies
      .filter(company => company && (company.slug || company.id))
      .map((company: any) => ({
        slug: String(company.slug || company.id)
      }));
    
    console.log(`Generated ${validParams.length} company static params:`, validParams);
    return validParams;
    
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Companies API request timed out');
    } else {
      console.error('Error in generateStaticParams for companies:', error);
    }
    return [];
  }
}

// Server component that wraps the client component
export default function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <CompanyPageClient params={params} />;
}