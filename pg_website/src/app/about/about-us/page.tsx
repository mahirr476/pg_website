// src/app/about/about-us/page.tsx
import AboutHero from '@/components/about/about-us/AboutHero';
import BoardOfDirectors from '@/components/about/about-us/BoardOfDirectors';
import CompanyHistory from '@/components/about/about-us/CompanyHistory';
import OurMission from '@/components/about/about-us/OurMission';

export default function AboutUsPage() {
  return (
    <main className="pt-16">
      <AboutHero />
      <OurMission />
      <CompanyHistory />
      <BoardOfDirectors />
    </main>
  );
}