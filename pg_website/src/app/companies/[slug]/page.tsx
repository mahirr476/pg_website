// app/companies/[slug]/page.tsx
"use client";
import CompanyHero from '@/components/company/CompanyHero';
import CompanyInfo from '@/components/company/CompanyInfo';
import CompanyStats from '@/components/company/CompanyStats';
import CompanyContact from '@/components/company/CompanyContact';
import { getCompanyBySlug } from '@/lib/data/companies';
import { ParallaxProvider } from 'react-scroll-parallax';


export default function CompanyPage({ params }: { params: { slug: string } }) {
  const companyData = getCompanyBySlug(params.slug);

  if (!companyData) {
    return <div>Company not found</div>;
  }

  return (
    <main className="min-h-screen">
      <ParallaxProvider>
            <CompanyHero data={companyData} />
            <CompanyInfo data={companyData} />
            <CompanyStats data={companyData} />
      </ParallaxProvider>
    </main>
  );
}