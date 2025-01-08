// src/app/business-activities/[slug]/page.tsx
import { getBusinessActivityBySlug } from '@/lib/data/business-activities';
import BusinessHero from '@/components/business/BusinessHero';
import BusinessInfo from '@/components/business/BusinessInfo';
import BusinessCategories from '@/components/business/BusinessCategories';
import Certificates from '@/components/business/Certificates';

export default function BusinessActivityPage({ params }: { params: { slug: string } }) {
  const businessData = getBusinessActivityBySlug(params.slug);

  if (!businessData) {
    return <div>Business not found</div>;
  }

  return (
    <main className="pt-16">
      <BusinessHero data={businessData} />
      <BusinessInfo data={businessData} />
      <BusinessCategories data={businessData} />
      {businessData.certificates && businessData.certificates.length > 0 && (
        <Certificates certificates={businessData.certificates} />
      )}
    </main>
  );
}