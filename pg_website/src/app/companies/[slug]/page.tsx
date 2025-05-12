
"use client";
import { use, useEffect, useState } from "react";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyStats from "@/components/company/CompanyStats";
import Loading from "@/components/layout/loading";
import { ParallaxProvider } from "react-scroll-parallax";

// Define the interface for company data
interface CompanyData {
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
}

export default function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // ✅ Proper unwrapping with React.use

  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:7000/api/v1/pg/companies/${slug}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch company data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("Company data:", data.data);

        if (!data.data || !data.data.companyDetail) {
          throw new Error("Company not found");
        }

        setCompanyData(data.data.companyDetail);
      } catch (err) {
        console.error("Error fetching company data:", err);
        setError("Failed to load company data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  if (error || !companyData) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Company Not Found</h2>
          <p className="text-gray-700">
            {error || "The requested company could not be found."}
          </p>
        </div>
      </div>
    );
  }

  const heroData = {
    heroImage: companyData.image
      ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
      : "/images/default-company-hero.jpg",
    logo: companyData.image
      ? `http://localhost:7000/${companyData.image.replace(/^public\//, "")}`
      : "/images/default-company-logo.jpg",
    name: companyData.title,
    shortName: companyData.title,
    category: companyData.category || "Business",
  };

  const infoData = {
    shortName: companyData.title,
    description: companyData.longDes || companyData.shortDes,
    yearFounded: companyData.founded || "N/A",
    employeeCount: companyData.teamSize || "N/A",
    location: companyData.location || "N/A",
    category: companyData.category || "N/A",
  };

  const statsData = [
    {
      label: "Global Presence",
      value: companyData.globalPresence || "10+ Countries",
    },
    { label: "Annual Revenue", value: companyData.revenue || "N/A" },
    {
      label: "Client Satisfaction",
      value: companyData.clientSatisfaction || "N/A",
    },
  ];

  return (
    <main className="min-h-screen">
      <ParallaxProvider>
        <CompanyHero data={heroData} />
        <CompanyInfo data={infoData} />
        <CompanyStats data={statsData} />
      </ParallaxProvider>
    </main>
  );
}
