// // app/companies/[slug]/page.tsx
// "use client";
// import CompanyHero from '@/components/company/CompanyHero';
// import CompanyInfo from '@/components/company/CompanyInfo';
// import CompanyStats from '@/components/company/CompanyStats';
// import CompanyContact from '@/components/company/CompanyContact';
// import { getCompanyBySlug } from '@/lib/data/companies';
// import { ParallaxProvider } from 'react-scroll-parallax';


// export default function CompanyPage({ params }: { params: { slug: string } }) {
//   const companyData = getCompanyBySlug(params.slug);
//   console.log("company data",companyData)

//   if (!companyData) {
//     return <div>Company not found</div>;
//   }

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//             <CompanyHero data={companyData} />
//             <CompanyInfo data={companyData} />
//             <CompanyStats data={companyData} />
//       </ParallaxProvider>
//     </main>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import { getCompanyBySlug } from "@/lib/data/companies";
// import { ParallaxProvider } from "react-scroll-parallax";

// export default function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
//   const [slug, setSlug] = useState<string | null>(null);
//   const [companyData, setCompanyData] = useState<any | null>(null);

//   useEffect(() => {
//     params.then((resolvedParams) => {
//       const fetchedSlug = resolvedParams.slug;
//       setSlug(fetchedSlug);

//       // Mocked or actual function to fetch company data
//       const data = getCompanyBySlug(fetchedSlug);
//       setCompanyData(data);
//     });
//   }, [params]);

//   if (slug === null) {
//     return <div>Loading...</div>;
//   }

//   if (!companyData) {
//     return <div>Company not found</div>;
//   }

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//         <CompanyHero data={companyData} />
//         <CompanyInfo data={companyData} />
//         <CompanyStats data={companyData} />
//       </ParallaxProvider>
//     </main>
//   );
// }



// "use client";

// import React, { useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import { ParallaxProvider } from "react-scroll-parallax";
// import Loading from '@/components/layout/loading';

// interface CompanyData {
//   id: number;
//   title: string;
//   shortDes: string;
//   longDes?: string;
//   bannerImage?: string;
//   image?: string;
//   videoLink?: string;
//   // Add other fields as needed
// }

// export default function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
//   const [slug, setSlug] = useState<string | null>(null);
//   const [companyData, setCompanyData] = useState<CompanyData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async (fetchedSlug: string) => {
//       try {
//         setLoading(true);
//         // Fetch company data by slug
//         const response = await fetch(`http://localhost:7000/api/v1/pg/company/${fetchedSlug}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch company data');
//         }
        
//         const data = await response.json();
//         console.log("Company data:", data.data);
        
//         if (!data.data || !data.data.company) {
//           throw new Error('Company not found');
//         }
        
//         // Set the fetched company data
//         setCompanyData(data.data.company);
//       } catch (err) {
//         console.error('Error fetching company data:', err);
//         setError('Failed to load company data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     params.then((resolvedParams) => {
//       const fetchedSlug = resolvedParams.slug;
//       setSlug(fetchedSlug);
//       fetchCompanyData(fetchedSlug);
//     });
//   }, [params]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700">{error || "The requested company could not be found."}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen">
//       <ParallaxProvider>
//         <CompanyHero data={companyData} />
//         <CompanyInfo data={companyData} />
//         <CompanyStats data={companyData} />
//       </ParallaxProvider>
//     </main>
//   );
// }



// "use client";

// import React, { useEffect, useState } from "react";
// import CompanyHero from "@/components/company/CompanyHero";
// import CompanyInfo from "@/components/company/CompanyInfo";
// import CompanyStats from "@/components/company/CompanyStats";
// import { ParallaxProvider } from "react-scroll-parallax";
// import Loading from '@/components/layout/loading';

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

// export default function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
//    // Unwrap params using React.use()
//     const unwrappedParams = use(params);
//     const slug = unwrappedParams.slug;

//   const [slug1, setSlug1] = useState<string | null>(null);
//   const [companyData, setCompanyData] = useState<CompanyData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         setLoading(true);
//         // Fetch company data by slug
//         const response = await fetch(`http://localhost:7000/api/v1/pg/company/${slug}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch company data');
//         }
        
//         const data = await response.json();
//         console.log("Company data:", data.data);
        
//         if (!data.data || !data.data.companyDetail) {
//           throw new Error('Company not found');
//         }
        
//         // Set the fetched company data
//         setCompanyData(data.data.companyDetail);
//       } catch (err) {
//         console.error('Error fetching company data:', err);
//         setError('Failed to load company data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     params.then((resolvedParams) => {
//       const fetchedSlug = resolvedParams.slug;
//       setSlug1(fetchedSlug);
//       fetchCompanyData(fetchedSlug);
//     });
//   }, [params]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !companyData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
//           <p className="text-gray-700">{error || "The requested company could not be found."}</p>
//         </div>
//       </div>
//     );
//   }

//   // Prepare data for CompanyHero
//   const heroData = {
//     heroImage: companyData.image ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}` : "/images/default-company-hero.jpg",
//     logo: companyData.image ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}` : "/images/default-company-logo.jpg",
//     name: companyData.title,
//     shortName: companyData.title,
//     category: companyData.category || "Business"
//   };

//   // Prepare data for CompanyInfo
//   const infoData = {
//     shortName: companyData.title,
//     description: companyData.longDes || companyData.shortDes,
//     yearFounded: companyData.founded || "N/A",
//     employeeCount: companyData.teamSize || "N/A",
//     location: companyData.location || "N/A",
//     category: companyData.category || "N/A"
//   };

//   // Prepare data for CompanyStats
//   const statsData = [
//     { label: 'Global Presence', value: companyData.globalPresence || '10+ Countries' },
//     { label: 'Annual Revenue', value: companyData.revenue || 'N/A' },
//     { label: 'Client Satisfaction', value: companyData.clientSatisfaction || 'N/A' },
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


"use client";
import { useEffect, useState } from "react";
import { use } from "react";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyStats from "@/components/company/CompanyStats";
import CompanyContact from "@/components/company/CompanyContact";
import Loading from "@/components/layout/loading";
import { ParallaxProvider } from "react-scroll-parallax";

// Define the interface for company data
interface CompanyData {
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
}

export default function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:7000/api/v1/pg/companies/${slug}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch company data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Company data:", data.data);

        if (!data.data || !data.data.companyDetail) {
          throw new Error("Company not found");
        }

        setCompanyData(data.data.companyDetail);
      } catch (err) {
        console.error("Error fetching company data:", err);
        setError("Failed to load company data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  if (error || !companyData) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
          <p className="text-gray-700">{error || "The requested company could not be found."}</p>
        </div>
      </div>
    );
  }

  // Prepare data for CompanyHero
  const heroData = {
    heroImage: companyData.image ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}` : "/images/default-company-hero.jpg",
    logo: companyData.image ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}` : "/images/default-company-logo.jpg",
    name: companyData.title,
    shortName: companyData.title,
    category: companyData.category || "Business",
  };

  // Prepare data for CompanyInfo
  const infoData = {
    shortName: companyData.title,
    description: companyData.longDes || companyData.shortDes,
    yearFounded: companyData.founded || "N/A",
    employeeCount: companyData.teamSize || "N/A",
    location: companyData.location || "N/A",
    category: companyData.category || "N/A",
  };

  // Prepare data for CompanyStats
  const statsData = [
    { label: "Global Presence", value: companyData.globalPresence || "10+ Countries" },
    { label: "Annual Revenue", value: companyData.revenue || "N/A" },
    { label: "Client Satisfaction", value: companyData.clientSatisfaction || "N/A" },
  ];

  return (
    <main className="min-h-screen">
      {/* Wrap the entire page with ParallaxProvider */}
      <ParallaxProvider>
        <CompanyHero data={heroData} />
        <CompanyInfo data={infoData} />
        <CompanyStats data={statsData} />
        {/* <CompanyContact /> */}
      </ParallaxProvider>
    </main>
  );
}