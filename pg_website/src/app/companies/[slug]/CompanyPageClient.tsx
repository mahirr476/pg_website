

// app/companies/[slug]/CompanyPageClient.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '@/components/layout/loading';
import CompanyClientWrapper from '@/components/company/CompanyClientWrapper';

// Define the interface for company data
interface CompanyData {
  companyDetail: {
    id: number;
    title: string;
    shortDes: string;
    longDes?: string;
    image?: string;
    founded?: string;
    teamSize?: string;
    location?: string;
    category?: string;
    globalPresence?: string;
    revenue?: string;
    clientSatisfaction?: string;
  };
}

interface CompanyPageClientProps {
  slug: string;
}

export default function CompanyPageClient({ slug }: CompanyPageClientProps) {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get base path for proper routing
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    if (!slug) return;

    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log(`Fetching company data for slug: ${slug}`);
        
        // Client-side fetch for fresh data (works with static export)
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch company data: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Company data from API:", data.data);
        
        if (!data.data || !data.data.companyDetail) {
          throw new Error('Company not found');
        }
        
        setCompanyData(data.data);
        
        // Update document title and meta tags on the client
        const company = data.data.companyDetail;
        if (typeof document !== 'undefined') {
          document.title = `${company.title} | Company Profile`;
          
          // Update meta description
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', company.shortDes || 'Company information');
          } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = company.shortDes || 'Company information';
            document.head.appendChild(meta);
          }
          
          // Update Open Graph meta tags
          const updateOrCreateMeta = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (meta) {
              meta.setAttribute('content', content);
            } else {
              meta = document.createElement('meta');
              meta.setAttribute('property', property);
              meta.setAttribute('content', content);
              document.head.appendChild(meta);
            }
          };
          
          updateOrCreateMeta('og:title', `${company.title} | Company Profile`);
          updateOrCreateMeta('og:description', company.shortDes || 'Company information');
          if (company.image) {
            updateOrCreateMeta('og:image', company.image);
          }
          
          // Update canonical URL with basePath
          let canonical = document.querySelector('link[rel="canonical"]');
          if (canonical) {
            canonical.setAttribute('href', `${window.location.origin}${basePath}/companies/${slug}/`);
          } else {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', `${window.location.origin}${basePath}/companies/${slug}/`);
            document.head.appendChild(canonical);
          }
        }
        
      } catch (err) {
        console.error('Error fetching company data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load company data');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [slug, basePath]);

  // Manual refresh function
  const handleRefresh = () => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setError(null);
        
        const res = await fetch(
          `https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies/${slug}`,
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data.data && data.data.companyDetail) {
          setCompanyData(data.data);
          
          // Update metadata on refresh too
          const company = data.data.companyDetail;
          if (typeof document !== 'undefined') {
            document.title = `${company.title} | Company Profile`;
          }
        }
      } catch (err) {
        console.error('Error refreshing company data:', err);
        setError(err instanceof Error ? err.message : 'Failed to refresh data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  if (loading && !companyData) {
    return <Loading />;
  }

  if (error && !companyData) {
    return (
      <main className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Error Loading Company</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <div className="space-y-2">
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors block w-full"
            >
              Retry
            </button>
            <Link
              href={`${basePath}/companies/`}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors inline-block"
            >
              Back to Companies
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!companyData || !companyData.companyDetail) {
    return (
      <main className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Company Not Found</h2>
          <p className="text-gray-600 mb-4">
            The requested company could not be found.
          </p>
          <div className="space-y-2">
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors block w-full"
            >
              Refresh
            </button>
            <Link
              href={`${basePath}/companies/`}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors inline-block"
            >
              Back to Companies
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const company = companyData.companyDetail;
  
  // Prepare data for components
  const heroData = {
    heroImage: company.image || "",
    logo: company.image || "",
    name: company.title,
    shortName: company.title,
    category: company.category || "Business",
  };

  const infoData = {
    shortName: company.title,
    description: company.longDes || company.shortDes,
    yearFounded: company.founded || "N/A",
    employeeCount: company.teamSize || "N/A",
    location: company.location || "N/A",
    category: company.category || "N/A",
  };

  const statsData = [
    {
      label: "Global Presence",
      value: company.globalPresence || "10+ Countries",
    },
    { label: "Annual Revenue", value: company.revenue || "N/A" },
    {
      label: "Client Satisfaction",
      value: company.clientSatisfaction || "N/A",
    },
  ];

  return (
    <main className="min-h-screen">
      <CompanyClientWrapper 
        heroData={heroData}
        infoData={infoData}
        statsData={statsData}
      />
    </main>
  );
}