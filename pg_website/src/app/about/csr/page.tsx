// // src/app/about/csr/page.tsx
// import CSRHero from '@/components/about/csr/CSRHero';
// import CSRFramework from '@/components/about/csr/CSRFramework';
// import CSRActivities from '@/components/about/csr/CSRActivities';
// import ImpactMetrics from '@/components/about/csr/ImpactMetrics';

// export default function CSRPage() {
//   return (
//     <main className="pt-16">
//       <CSRHero />
//       <CSRFramework />
//       <CSRActivities />
//       <ImpactMetrics />
//     </main>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import CSRHero from '@/components/about/csr/CSRHero';
import CSRFramework from '@/components/about/csr/CSRFramework';
import CSRActivities from '@/components/about/csr/CSRActivities';
import ImpactMetrics from '@/components/about/csr/ImpactMetrics';
import Loading from '@/components/layout/loading';

// Define TypeScript interfaces
interface CSRDetail {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CSRSection {
  id: number;
  orderIndex: number;
  title: string;
  description: string;
  details: CSRDetail[];
}

interface CSRData {
  getCSRWithDetails: CSRSection[];
}

export default function CSRPage() {
  const [csrData, setCsrData] = useState<CSRData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCSRData = async () => {
      try {
        const response = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/about-csr');
        if (!response.ok) {
          throw new Error('Failed to fetch CSR data');
        }
        const jsonData = await response.json();
        setCsrData(jsonData.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCSRData();
  }, []);

  if (loading) return <Loading/>
  if (error) return <div className="pt-16 text-center">Error: {error}</div>;
  
  // Get the sections based on orderIndex
  const heroSection = csrData.getCSRWithDetails.find(section => section.orderIndex === 1);
  const frameworkSection = csrData.getCSRWithDetails.find(section => section.orderIndex === 2);
  const activitiesSection = csrData.getCSRWithDetails.find(section => section.orderIndex === 3);
  // const impactSection = csrData.getCSRWithDetails.find(section => section.orderIndex === 4);
  const impactLasting = csrData.getCSRWithDetails.find(section => section.orderIndex === 5);

  return (
    <main className="pt-16">
      <CSRHero 
        title={heroSection?.title || ""}
        description={heroSection?.description || ""}
        details={heroSection?.details || []}
      />
      <CSRFramework 
        title={frameworkSection?.title || ""}
        description={frameworkSection?.description || ""}
        details={frameworkSection?.details || []}
      />
      <CSRActivities 
        title={activitiesSection?.title || ""}
        description={activitiesSection?.description || ""}
        details={activitiesSection?.details || []}
      />
      <ImpactMetrics 
        // titleMain={impactSection?.title || ""}
        // descriptionMain={impactSection?.description || ""}
        titleLasting={impactLasting?.title || ""}
        descriptionLasting={impactLasting?.description || ""}
      />
    </main>
  );
}