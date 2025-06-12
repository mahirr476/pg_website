"use client";
// components/company/CompanyClientWrapper.tsx
import { ParallaxProvider } from "react-scroll-parallax";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyStats from "@/components/company/CompanyStats";

interface CompanyClientWrapperProps {
  heroData: {
    heroImage: string;
    logo: string;
    name: string;
    shortName: string;
    category: string;
  };
  infoData: {
    shortName: string;
    description: string;
    yearFounded: string;
    employeeCount: string;
    location: string;
    category: string;
  };
  statsData: Array<{
    label: string;
    value: string;
  }>;
}

export default function CompanyClientWrapper({ 
  heroData, 
  infoData, 
  statsData 
}: CompanyClientWrapperProps) {
  return (
    <ParallaxProvider>
      <CompanyHero data={heroData} />
      <CompanyInfo data={infoData} />
      <CompanyStats data={statsData} />
    </ParallaxProvider>
  );
}