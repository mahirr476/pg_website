
'use client';

import { useState, useEffect } from 'react';
import MilestonesHero from '@/components/milestones/MilestonesHero';
import Timeline from '@/components/milestones/Timeline';
import Loading from '@/components/layout/loading';

// Define TypeScript interfaces
interface MilestoneContent {
  id: number;
  orderIndex: number;
  title: string;
  description: string;
  image: string[]; // Array of image paths
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

  if (loading) return <Loading/>;
  if (error) return <div className="pt-16 text-center">Error: {error}</div>;
  
  // Get hero content (orderIndex 1) and timeline content (orderIndex 2)
  const heroContent = milestoneData?.milestoneContent.find(content => content.orderIndex === 1);
  const timelineContent = milestoneData?.milestoneContent.find(content => content.orderIndex === 2);
  
  // Get the hero image path (first image in the array if it exists)
  const heroImagePath = heroContent?.image && heroContent.image.length > 0 
    ? heroContent.image[0] 
    : undefined;
  
  return (
    <main className="pt-16">
      <MilestonesHero 
        title={heroContent?.title || ""} 
        description={heroContent?.description || ""} 
        imagePath={heroImagePath} // Pass the image path to the component
      />
      <Timeline 
        title={timelineContent?.title || ""} 
        description={timelineContent?.description || ""} 
        milestones={milestoneData?.milestone || []} 
      />
    </main>
  );
}