// // app/companies/[slug]/CompanyPageClient.tsx
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



// export default function CompanyPageClient({
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



// // app/companies/[slug]/CompanyPageClient.tsx
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

// export default function CompanyPageClient({
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
//           `http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`,
//           {
//             // ✅ FIXED: Use default cache behavior for client-side fetches
//             // The cache: 'no-store' was causing issues with static export
//             headers: {
//               'Content-Type': 'application/json',
//             }
//           }
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



// // app/companies/[slug]/CompanyPageClient.tsx
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

// export default function CompanyPageClient({
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
        
//         // ✅ Use external API directly for static build
//         console.log(`Fetching company data for slug: ${slug}`);
        
//         const response = await fetch(
//           `http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             }
//           }
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch company data: ${response.status} ${response.statusText}`
//           );
//         }

//         const data = await response.json();
//         console.log("Company data from API:", data.data);

//         if (!data.data || !data.data.companyDetail) {
//           throw new Error("Company not found - invalid data structure");
//         }

//         const companyDetail = data.data.companyDetail;
//         console.log("Company detail:", companyDetail);
        
//         setCompanyData(companyDetail);
//       } catch (err) {
//         console.error("Error fetching company data:", err);
//         setError("Failed to load company data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchCompanyData();
//     }
//   }, [slug]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-200">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700 mb-4">
//             {error || "The requested company could not be found."}
//           </p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
//           >
//             Try Again
//           </button>
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





// app/companies/[slug]/CompanyPageClient.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '@/components/layout/loading';
import CompanyClientWrapper from '@/components/company/CompanyClientWrapper';

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

interface CompanyPageClientProps {
  slug: string;
}

export default function CompanyPageClient({ slug }: CompanyPageClientProps) {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log(`Fetching company data for slug: ${slug}`);
        
        // ALWAYS fetch fresh data from API
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}?t=${Date.now()}`,
          {
            cache: 'no-store', // Always get fresh data
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch company data: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Company data from API:", data.data);
        
        if (!data.data || !data.data.companyDetail) {
          throw new Error('Company not found');
        }
        
        setCompanyData(data.data);
      } catch (err) {
        console.error('Error fetching company data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load company data');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [slug]);

  // Manual refresh function
  const handleRefresh = () => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setError(null);
        
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}?t=${Date.now()}`,
          {
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data.data && data.data.companyDetail) {
          setCompanyData(data.data);
        }
      } catch (err) {
        console.error('Error refreshing company data:', err);
        setError(err instanceof Error ? err.message : 'Failed to refresh data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  if (loading && !companyData) {
    return <Loading />;
  }

  if (error && !companyData) {
    return (
      <main className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Error Loading Company</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <div className="space-y-2">
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors block w-full"
            >
              Retry
            </button>
            <Link
              href="/companies"
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors inline-block"
            >
              Back to Companies
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!companyData || !companyData.companyDetail) {
    return (
      <main className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Company Not Found</h2>
          <p className="text-gray-600 mb-4">
            The requested company could not be found.
          </p>
          <div className="space-y-2">
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors block w-full"
            >
              Refresh
            </button>
            <Link
              href="/companies"
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors inline-block"
            >
              Back to Companies
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const company = companyData.companyDetail;
  
  // Prepare data for components (same structure as your original)
  const heroData = {
    heroImage: company.image || "",
    logo: company.image || "",
    name: company.title,
    shortName: company.title,
    category: company.category || "Business",
  };

  const infoData = {
    shortName: company.title,
    description: company.longDes || company.shortDes,
    yearFounded: company.founded || "N/A",
    employeeCount: company.teamSize || "N/A",
    location: company.location || "N/A",
    category: company.category || "N/A",
  };

  const statsData = [
    {
      label: "Global Presence",
      value: company.globalPresence || "10+ Countries",
    },
    { label: "Annual Revenue", value: company.revenue || "N/A" },
    {
      label: "Client Satisfaction",
      value: company.clientSatisfaction || "N/A",
    },
  ];

  return (
    <main className="min-h-screen">


      <CompanyClientWrapper 
        heroData={heroData}
        infoData={infoData}
        statsData={statsData}
      />
    </main>
  );
}