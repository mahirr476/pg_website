// app/career/page.tsx
import CareerHero from '@/components/career/CareerHero';
import WhyJoinUs from '@/components/career/WhyJoinUs';
import CareerAreas from '@/components/career/CareerAreas';
import CurrentOpenings from '@/components/career/CurrentOpenings';
import ApplicationProcess from '@/components/career/ApplicationProcess';
import CareerContact from '@/components/career/CareerContact';

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <WhyJoinUs />
      <CareerAreas />
      <CurrentOpenings />
      <ApplicationProcess />
      <CareerContact />
    </main>
  );
}