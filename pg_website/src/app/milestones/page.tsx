// src/app/milestones/page.tsx
import MilestonesHero from '@/components/milestones/MilestonesHero';
import Timeline from '@/components/milestones/Timeline';

export default function MilestonesPage() {
  return (
    <main className="pt-16">
      <MilestonesHero />
      <Timeline />
    </main>
  );
}