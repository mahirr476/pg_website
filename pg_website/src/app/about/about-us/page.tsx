// // src/app/about/about-us/page.tsx
// import AboutHero from '@/components/about/about-us/AboutHero';
// import BoardOfDirectors from '@/components/about/about-us/BoardOfDirectors';
// import CompanyHistory from '@/components/about/about-us/CompanyHistory';
// import OurMission from '@/components/about/about-us/OurMission';

// export default function AboutUsPage() {
//   return (
//     <main className="pt-16">
//       <AboutHero />
//       <OurMission />
//       <CompanyHistory />
//       <BoardOfDirectors />
//     </main>
//   );
// }



// "use client";

// import { useEffect, useState } from 'react';
// import AboutHero from '@/components/about/about-us/AboutHero';
// import BoardOfDirectors from '@/components/about/about-us/BoardOfDirectors';
// import CompanyHistory from '@/components/about/about-us/CompanyHistory';
// import OurMission from '@/components/about/about-us/OurMission';

// // Define TypeScript interfaces for our data structure
// interface AboutUs {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   mission: string;
//   vision: string;
//   commitedTitle: string;
//   commitedDescrip: string;
//   about: string;
//   greenMission: string;
// }

// interface BoardContent {
//   id: number;
//   title: string;
//   description: string;
// }

// interface Director {
//   id: number;
//   orderIndex: number;
//   name: string;
//   designation: string;
//   image: string;
//   shortDescription: string;
// }

// interface AboutData {
//   aboutUs: AboutUs;
//   boardContent: BoardContent;
//   boardDirector: Director[];
// }

// export default function AboutUsPage() {
//   const [aboutData, setAboutData] = useState<AboutData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const response = await fetch('http://localhost:7000/api/v1/pg/about-us');
//         if (!response.ok) {
//           throw new Error('Failed to fetch about us data');
//         }
//         const jsonData = await response.json();
//         setAboutData(jsonData.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) return <div className="pt-16 text-center">Loading...</div>;
//   if (error) return <div className="pt-16 text-center">Error: {error}</div>;
  
//   const { aboutUs, boardContent, boardDirector } = aboutData;

//   return (
//     <main className="pt-16">
//       <AboutHero 
//         title={aboutUs.title}
//         description={aboutUs.description}
//         image={aboutUs.image}

//       />
//       <OurMission 
//         mission={aboutUs.mission}
//         vision={aboutUs.vision}
//         commitedTitle={aboutUs.commitedTitle}
//         commitedDescrip={aboutUs.commitedDescrip}
//       />
//       <CompanyHistory 
//         about={aboutUs.about}
//         greenMission={aboutUs.greenMission}
//       />
//       <BoardOfDirectors 
//         title={boardContent.title}
//         description={boardContent.description}
//         directors={boardDirector}
//       />
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import AboutHero from '@/components/about/about-us/AboutHero';
import BoardOfDirectors from '@/components/about/about-us/BoardOfDirectors';
import CompanyHistory from '@/components/about/about-us/CompanyHistory';
import OurMission from '@/components/about/about-us/OurMission';

// Define TypeScript interfaces for our data structure
interface AboutUs {
  id: number;
  title: string;
  description: string;
  image: string;
  mission: string;
  vision: string;
  commitedTitle: string;
  commitedDescrip: string;
  about: string;
  greenMission: string;
}

interface Impact {
  id: number;
  title: string;
  number: string;
  description: string;
}

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface BoardContent {
  id: number;
  title: string;
  description: string;
}

interface Director {
  id: number;
  orderIndex: number;
  name: string;
  designation: string;
  image: string;
  shortDescription: string;
  longDescription: string;
}

interface AboutData {
  aboutUs: AboutUs;
  impacts: Impact[];
  milestone: Milestone[];
  boardContent: BoardContent;
  boardDirector: Director[];
}

export default function AboutUsPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/v1/pg/about-us');
        if (!response.ok) {
          throw new Error('Failed to fetch about us data');
        }
        const jsonData = await response.json();
        setAboutData(jsonData.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div className="pt-16 text-center">Loading...</div>;
  if (error) return <div className="pt-16 text-center">Error: {error}</div>;
  
  const { aboutUs, impacts, milestone, boardContent, boardDirector } = aboutData;

  // Find the Companies and Years impacts
  const companiesImpact = impacts.find(impact => impact.title.toLowerCase() === "companies");
  const yearsImpact = impacts.find(impact => impact.title.toLowerCase() === "years");

  return (
    <main className="pt-16">
      <AboutHero 
        title={aboutUs.title}
        description={aboutUs.description}
        image={aboutUs.image}
        companiesNumber={companiesImpact?.number || "20+"}
        companiesTitle={companiesImpact?.title || "Companies"}
        yearsNumber={yearsImpact?.number || "30+"}
        yearsTitle={yearsImpact?.title || "Years"}
      />
      <OurMission 
        mission={aboutUs.mission}
        vision={aboutUs.vision}
        commitedTitle={aboutUs.commitedTitle}
        commitedDescrip={aboutUs.commitedDescrip}
      />
      <CompanyHistory 
        about={aboutUs.about}
        greenMission={aboutUs.greenMission}
        milestones={milestone || []}
      />
      <BoardOfDirectors 
        title={boardContent.title}
        description={boardContent.description}
        directors={boardDirector}
      />
    </main>
  );
}