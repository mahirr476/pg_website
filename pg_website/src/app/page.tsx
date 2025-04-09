// // src/app/page.tsx
// import HomeHero from '@/components/home/HomeHero';
// import BusinessHighlight from '@/components/home/BusinessHighlight';
// import CompanyOverview from '@/components/home/CompanyOverview';
// import StatsSection from '@/components/home/StatsSection';
// import LatestNews from '@/components/home/LatestNews';
// import CTASection from '@/components/home/CTASection';

// export default function HomePage() {
//   return (
//     <main className="pt-16">
//       <HomeHero />
//       <StatsSection />
//       <BusinessHighlight />
//       <CompanyOverview />
//       <LatestNews />
//       <CTASection />
//     </main>
//   );
// }


'use client';
// src/app/page.tsx
import { useEffect, useState } from 'react';
import HomeHero from '@/components/home/HomeHero';
import BusinessHighlight from '@/components/home/BusinessHighlight';
import CompanyOverview from '@/components/home/CompanyOverview';
import StatsSection from '@/components/home/StatsSection';
import LatestNews from '@/components/home/LatestNews';
import CTASection from '@/components/home/CTASection';

// Define types for our API response
interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
}

interface Impact {
  id: number;
  title: string;
  number: string;
  description: string;
}

interface Business {
  id: number;
  title: string;
  bannerImage: string;
  shortDes: string;
}

interface News {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  date: string;
}

interface HomeData {
  heroes: Hero[];
  impacts: Impact[];
  business: Business[];
  news: News[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: HomeData;
}

export default function HomePage() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/v1/pg/home');
        
        if (!response.ok) {
          throw new Error('Failed to fetch home data');
        }
        
        const result: ApiResponse = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch home data');
        }
        
        setHomeData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching home data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return <div className="pt-16 flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error || !homeData) {
    return <div className="pt-16 flex justify-center items-center min-h-screen">Error loading data: {error}</div>;
  }
  
  // Ensure all required data properties exist
  const safeHomeData = {
    heroes: homeData.heroes || [],
    impacts: homeData.impacts || [],
    business: homeData.business || [],
    news: homeData.news || []
  };

  return (
    <main className="pt-16">
      <HomeHero heroes={safeHomeData.heroes} impacts={safeHomeData.impacts} />
      <StatsSection impacts={safeHomeData.impacts} heroes={safeHomeData.heroes} />
      <BusinessHighlight heroes={safeHomeData.heroes} businesses={safeHomeData.business} />
      <CompanyOverview heroes={safeHomeData.heroes} />
      <LatestNews heroes={safeHomeData.heroes} news={safeHomeData.news} />
      <CTASection heroes={safeHomeData.heroes} />
    </main>
  );
}