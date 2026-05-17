

'use client';
// src/app/page.tsx
import { useEffect, useState, useRef } from 'react';
import HomeHero from '@/components/home/HomeHero';
import BusinessHighlight from '@/components/home/BusinessHighlight';
import CompanyOverview from '@/components/home/CompanyOverview';
import StatsSection from '@/components/home/StatsSection';
import LatestNews from '@/components/home/LatestNews';
import CTASection from '@/components/home/CTASection';
import Loading from '@/components/layout/loading';
import MediaPopup from '@/components/layout/MediaPopup';

// Define types for our API response
interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
  images: string[]; // Added images array
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
  slug: string;
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
  
  // Create refs for sections we want to scroll to
  const businessRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/home');
        
        if (!response.ok) {
          throw new Error('Failed to fetch home data');
        }
        
        const result: ApiResponse = await response.json();

        console.log('API Response:', result); // Log the API response for debugging
        
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

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (loading) {
    return <Loading/>
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
      <MediaPopup />
      <HomeHero 
        heroes={safeHomeData.heroes} 
        impacts={safeHomeData.impacts} 
        onBusinessClick={() => scrollToSection(businessRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
      />
      <StatsSection impacts={safeHomeData.impacts} heroes={safeHomeData.heroes} />
      <div ref={businessRef}>
        <BusinessHighlight heroes={safeHomeData.heroes} businesses={safeHomeData.business} />
      </div>
      <div ref={aboutRef}>
        <CompanyOverview heroes={safeHomeData.heroes} />
      </div>
      <LatestNews heroes={safeHomeData.heroes} news={safeHomeData.news} />
      <CTASection heroes={safeHomeData.heroes} />
    </main>
  );
}