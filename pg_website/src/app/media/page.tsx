// app/media/page.tsx
import MediaHero from '@/components/media/MediaHero';
import PressReleases from '@/components/media/PressReleases';
import VideoGallery from '@/components/media/VideoGallery';
import NewsArticles from '@/components/media/NewsArticles';
import MediaContact from '@/components/media/MediaContact';

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <MediaHero />
      <PressReleases />
      <VideoGallery />
      <NewsArticles />
      <MediaContact />
    </main>
  );
}