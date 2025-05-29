// // // app/media/page.tsx
// // import MediaHero from '@/components/media/MediaHero';
// // import PressReleases from '@/components/media/PressReleases';
// // import VideoGallery from '@/components/media/VideoGallery';
// // import NewsArticles from '@/components/media/NewsArticles';
// // import MediaContact from '@/components/media/MediaContact';

// // export default function MediaPage() {
// //   return (
// //     <main className="min-h-screen">
// //       <MediaHero />
// //       <PressReleases />
// //       <VideoGallery />
// //       <NewsArticles />
// //       <MediaContact />
// //     </main>
// //   );
// // }



// 'use client';

// import { useEffect, useState } from 'react';
// import MediaHero from '@/components/media/MediaHero';
// // import PressReleases from '@/components/media/PressReleases';
// import VideoGallery from '@/components/media/VideoGallery';
// import NewsArticles from '@/components/media/NewsArticles';
// import MediaContact from '@/components/media/MediaContact';
// import Loading from '@/components/layout/loading';

// // Define interfaces for the media data based on the actual JSON structure
// interface MediaContent {
//   id: number;
//   orderIndex: number;
//   title: string;
//   description: string;
// }

// interface Video {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface NewsArticle {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   tag: string;
//   date: string;
// }

// interface Inquiry {
//   id: number;
//   title: string;
//   description: string;
//   email: string;
//   contactNo: string;
//   website: string;
// }

// interface MediaData {
//   content: MediaContent[];
//   videoGallery: Video[];
//   mediaNews: NewsArticle[];
//   inquiries: Inquiry;
// }

// export default function MediaPage() {
//   const [mediaData, setMediaData] = useState<MediaData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchMediaData = async () => {
//       try {
//         setLoading(true);
//         // Fetch media data from API
//         const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/media');
        
//         if (!response.ok) {
//           throw new Error(`Failed to fetch media data: ${response.status} ${response.statusText}`);
//         }
        
//         const data = await response.json();
//         console.log("Media data:", data);
        
//         if (!data.success || !data.data) {
//           throw new Error('Media data not found in response');
//         }
        
//         // Set the fetched media data
//         setMediaData(data.data);
//       } catch (err) {
//         console.error('Error fetching media data:', err);
//         setError(err instanceof Error ? err.message : "An unknown error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMediaData();
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error || !mediaData) {
//     return (
//       <div className="pt-16 flex items-center justify-center min-h-screen">
//         <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
//           <h2 className="text-2xl font-bold text-red-700 mb-2">Error Loading Media</h2>
//           <p className="text-gray-700">{error || "Failed to load media data. Please try again later."}</p>
//         </div>
//       </div>
//     );
//   }

//   // Get the content item (assuming the first one is for the hero)
//   const heroContent = mediaData.content && mediaData.content.length > 0 
//     ? mediaData.content[0] 
//     : { title: "Media Center", description: "Stay updated with the latest news, press releases, and media coverage about Paragon Group." };

//   // Prepare data for MediaHero
//   const heroData = {
//     title: heroContent.title,
//     description: heroContent.description
//   };

//   // Process video data to include full URLs for images
//   const videoData = mediaData.videoGallery?.map(video => ({
//     id: video.id,
//     title: video.title,
//     description: video.description,
//     thumbnail: video.image ? `http://localhost:7000/${video.image.replace(/^public\//, "")}` : "/images/media/default-video.jpg",
//     videoUrl: video.link || "#",
//     duration: "3:45" // Add a default duration since it's not in the API
//   })) || [];

//   // Process news articles data
//   const newsData = mediaData.mediaNews?.map(article => ({
//     id: article.id,
//     title: article.title,
//     excerpt: article.description,
//     image: article.image ? `http://localhost:7000/${article.image.replace(/^public\//, "")}` : "/images/media/default-news.jpg",
//     source: article.tag || "News",
//     date: article.date,
//     link: article.link || "#"
//   })) || [];

//   // Data for MediaContact from inquiries
//   const contactData = mediaData.inquiries ? {
//     title: mediaData.inquiries.title,
//     description: mediaData.inquiries.description,
//     email: mediaData.inquiries.email,
//     phone: mediaData.inquiries.contactNo,
//     website: mediaData.inquiries.website
//   } : null;

//   return (
//     <main className="min-h-screen">
//       <MediaHero data={heroData} />
//       {/* <PressReleases /> */}
//       <VideoGallery videos={videoData} />
//       <NewsArticles articles={newsData} />
//       <MediaContact data={contactData} />
//     </main>
//   );
// }




'use client';

import { useEffect, useState } from 'react';
import MediaHero from '@/components/media/MediaHero';
// import PressReleases from '@/components/media/PressReleases';
import VideoGallery from '@/components/media/VideoGallery';
import NewsArticles from '@/components/media/NewsArticles';
import MediaContact from '@/components/media/MediaContact';
import Loading from '@/components/layout/loading';

// Define interfaces for the media data based on the actual JSON structure
interface MediaContent {
  id: number;
  orderIndex: number;
  title: string;
  description: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  date: string;
}

interface Inquiry {
  id: number;
  title: string;
  description: string;
  email: string;
  contactNo: string;
  website: string;
}

interface MediaData {
  content: MediaContent[];
  videoGallery: Video[];
  mediaNews: NewsArticle[];
  inquiries: Inquiry;
}

export default function MediaPage() {
  const [mediaData, setMediaData] = useState<MediaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        setLoading(true);
        // Fetch media data from API
        const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/media');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch media data: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Media data from API:", data);
        
        if (!data.success || !data.data) {
          throw new Error('Media data not found in response');
        }
        
        // Log the specific image fields to debug
        console.log("Video gallery data:", data.data.videoGallery);
        console.log("Media news data:", data.data.mediaNews);
        
        // Set the fetched media data
        setMediaData(data.data);
      } catch (err) {
        console.error('Error fetching media data:', err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMediaData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !mediaData) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Error Loading Media</h2>
          <p className="text-gray-700">{error || "Failed to load media data. Please try again later."}</p>
        </div>
      </div>
    );
  }

  // Get the content item (assuming the first one is for the hero)
  const heroContent = mediaData.content && mediaData.content.length > 0 
    ? mediaData.content[0] 
    : { title: "Media Center", description: "Stay updated with the latest news, press releases, and media coverage about Paragon Group." };

  // Prepare data for MediaHero
  const heroData = {
    title: heroContent.title,
    description: heroContent.description
  };

  // ✅ FIXED: Pass raw image paths, let VideoGallery component process them
  const videoData = mediaData.videoGallery?.map(video => {
    console.log("Processing video:", video.title, "Image:", video.image);
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      thumbnail: video.image || "", // Pass raw path from API
      videoUrl: video.link || "#",
      duration: "3:45" // Add a default duration since it's not in the API
    };
  }) || [];

  // ✅ FIXED: Pass raw image paths, let NewsArticles component process them
  const newsData = mediaData.mediaNews?.map(article => {
    console.log("Processing article:", article.title, "Image:", article.image);
    return {
      id: article.id,
      title: article.title,
      excerpt: article.description,
      image: article.image || "", // Pass raw path from API
      source: article.tag || "News",
      date: article.date,
      link: article.link || "#"
    };
  }) || [];

  console.log("Processed video data:", videoData);
  console.log("Processed news data:", newsData);

  // Data for MediaContact from inquiries
  const contactData = mediaData.inquiries ? {
    title: mediaData.inquiries.title,
    description: mediaData.inquiries.description,
    email: mediaData.inquiries.email,
    phone: mediaData.inquiries.contactNo,
    website: mediaData.inquiries.website
  } : null;

  return (
    <main className="min-h-screen">
      <MediaHero data={heroData} />
      {/* <PressReleases /> */}
      <VideoGallery videos={videoData} />
      <NewsArticles articles={newsData} />
      <MediaContact data={contactData} />
    </main>
  );
}