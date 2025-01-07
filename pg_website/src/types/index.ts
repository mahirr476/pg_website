// src/types/index.ts
export type BusinessActivity = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    icon?: string;
  };
  
  export type Company = {
    id: string;
    slug: string;
    name: string;
    description: string;
    logo: string;
    yearEstablished: number;
    location: string;
  };
  
  export type MenuItem = {
    title: string;
    href: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
  };
  
  export type NavigationItem = MenuItem;