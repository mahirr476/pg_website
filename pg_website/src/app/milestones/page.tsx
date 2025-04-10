// // src/app/milestones/page.tsx
// import MilestonesHero from '@/components/milestones/MilestonesHero';
// import Timeline from '@/components/milestones/Timeline';

// export default function MilestonesPage() {
//   return (
//     <main className="pt-16">
//       <MilestonesHero />
//       <Timeline />
//     </main>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import MilestonesHero from '@/components/milestones/MilestonesHero';
import Timeline from '@/components/milestones/Timeline';

// Define TypeScript interfaces
interface MilestoneContent {
  id: number;
  orderIndex: number;
  title: string;
  description: string;
}

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface MilestoneData {
  milestoneContent: MilestoneContent[];
  milestone: Milestone[];
}

export default function MilestonesPage() {
  const [milestoneData, setMilestoneData] = useState<MilestoneData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMilestoneData = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/v1/pg/milestone');
        if (!response.ok) {
          throw new Error('Failed to fetch milestone data');
        }
        const jsonData = await response.json();
        setMilestoneData(jsonData.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMilestoneData();
  }, []);

  if (loading) return <div className="pt-16 text-center">Loading...</div>;
  if (error) return <div className="pt-16 text-center">Error: {error}</div>;
  
  // Get hero content (orderIndex 1) and timeline content (orderIndex 2)
  const heroContent = milestoneData?.milestoneContent.find(content => content.orderIndex === 1);
  const timelineContent = milestoneData?.milestoneContent.find(content => content.orderIndex === 2);
  
  return (
    <main className="pt-16">
      <MilestonesHero 
        title={heroContent?.title || ""} 
        description={heroContent?.description || ""} 
      />
      <Timeline 
        title={timelineContent?.title || ""} 
        description={timelineContent?.description || ""} 
        milestones={milestoneData?.milestone || []} 
      />
    </main>
  );
}