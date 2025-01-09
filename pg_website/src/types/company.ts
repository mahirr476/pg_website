// types/company.ts
export interface Company {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    description: string;
    logo: string;
    heroImage: string;
    yearFounded: number;  // Changed from string to number
    employeeCount: string;
    location: string;
    category: string;
    parentCompany: string;
  }
  
  // Additional interfaces for component props
  export interface CompanyHeroProps {
    data: Company;
  }
  
  export interface CompanyInfoProps {
    data: Company;
  }
  
  export interface CompanyStatsProps {
    data: Company;
  }
  
  export interface CompanyContactProps {
    data: Company;
  }