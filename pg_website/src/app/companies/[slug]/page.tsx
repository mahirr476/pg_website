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


"use client";

import React, { useEffect, useState } from "react";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyStats from "@/components/company/CompanyStats";
import { getCompanyBySlug } from "@/lib/data/companies";
import { ParallaxProvider } from "react-scroll-parallax";

export default function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [companyData, setCompanyData] = useState<any | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      const fetchedSlug = resolvedParams.slug;
      setSlug(fetchedSlug);

      // Mocked or actual function to fetch company data
      const data = getCompanyBySlug(fetchedSlug);
      setCompanyData(data);
    });
  }, [params]);

  if (slug === null) {
    return <div>Loading...</div>;
  }

  if (!companyData) {
    return <div>Company not found</div>;
  }

  return (
    <main className="min-h-screen">
      <ParallaxProvider>
        <CompanyHero data={companyData} />
        <CompanyInfo data={companyData} />
        <CompanyStats data={companyData} />
      </ParallaxProvider>
    </main>
  );
}
