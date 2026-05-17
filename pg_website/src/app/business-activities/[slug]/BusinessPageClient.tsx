// app/business-activities/[slug]/BusinessPageClient.tsx
'use client';
import { useEffect, useState } from 'react';
import Loading from '@/components/layout/loading';
import BusinessHero from '@/components/business/BusinessHero';
import BusinessInfo from '@/components/business/BusinessInfo';
import BusinessCategories from '@/components/business/BusinessCategories';
import Certificates from '@/components/business/Certificates';

// Define interfaces
interface BusinessItem {
  id: number;
  title: string;
  description: string;
}

interface ApiCertificate {
  id: number;
  title: string;
  description: string;
  image?: string | string[];
}

interface BusinessData {
  business: {
    id: number;
    title: string;
    shortDes: string;
    longDes?: string;
    bannerImage?: string;
    image?: string;
    videoLink?: string;
  };
  operation: BusinessItem[];
  product: BusinessItem[];
  units: BusinessItem[];
  certifications: ApiCertificate[];
}

interface BusinessPageClientProps {
  slug: string;
}

export default function BusinessPageClient({ slug }: BusinessPageClientProps) {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBusinessData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // ALWAYS fetch fresh data from API
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business/${slug}?t=${Date.now()}`,
          {
            cache: 'no-store', // Always get fresh data
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch business data: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (!data.data) {
          throw new Error('Business not found');
        }
        
        setBusinessData(data.data);
      } catch (err) {
        console.error('Error fetching business data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load business data');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [slug]);

  // Manual refresh function
  const handleRefresh = () => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setError(null);
        
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business/${slug}?t=${Date.now()}`,
          {
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data.data) {
          setBusinessData(data.data);
        }
      } catch (err) {
        console.error('Error refreshing data:', err);
        setError(err instanceof Error ? err.message : 'Failed to refresh data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  if (loading && !businessData) {
    return <Loading />;
  }

  if (error && !businessData) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!businessData) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Business Not Found</h1>
          <button 
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  // Prepare category data
  const categoryData = {
    operations: businessData.operation || [],
    products: businessData.product || [],
    units: businessData.units || []
  };

  // Handle certificates with proper image handling
  const DEFAULT_FALLBACK_IMAGE_URL = '/images/placeholder.png';
  
  const certificationsWithImageField = businessData.certifications.map(cert => {
    let imageUrl = DEFAULT_FALLBACK_IMAGE_URL;
    
    if (cert.image) {
      if (Array.isArray(cert.image)) {
        // If image is an array, take the first one
        imageUrl = cert.image[0] || DEFAULT_FALLBACK_IMAGE_URL;
      } else {
        imageUrl = cert.image;
      }
    }
    
    return {
      id: cert.id,
      title: cert.title,
      description: cert.description,
      image: imageUrl
    };
  });

  return (
    <main className="pt-16">

      <BusinessHero
        data={{
          title: businessData.business.title,
          shortDes: businessData.business.shortDes,
          longDes: businessData.business.longDes || '',
          img: businessData.business.image || '',
        }}
      />
      <BusinessInfo
        data={{
          description: businessData.business.longDes || businessData.business.shortDes || ''
        }}
      />
      <BusinessCategories categoryData={categoryData} />
      
      {businessData.certifications && businessData.certifications.length > 0 && (
        <Certificates certificates={certificationsWithImageField} />
      )}
    </main>
  );
}