// src/app/page.tsx
import HomeHero from '@/components/home/HomeHero';
import BusinessHighlight from '@/components/home/BusinessHighlight';
import CompanyOverview from '@/components/home/CompanyOverview';
import StatsSection from '@/components/home/StatsSection';
import LatestNews from '@/components/home/LatestNews';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main className="pt-16">
      <HomeHero />
      <StatsSection />
      <BusinessHighlight />
      <CompanyOverview />
      <LatestNews />
      <CTASection />
    </main>
  );
}