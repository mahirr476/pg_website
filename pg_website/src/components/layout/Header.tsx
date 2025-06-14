// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronRight, Building, Briefcase, BarChart2, Award, Heart } from 'lucide-react';

// // Business Activity Interface
// interface BusinessActivity {
//   id: number;
//   title: string;
//   shortDes: string;
//   slug: string;
// }

// // Company Interface
// interface Company {
//   id: number;
//   title: string;
//   shortDes: string;
//   slug: string;
// }

// // Enhanced ListItem with icons and better styling
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
// >(({ className, title, children, icon, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 group",
//             "border border-transparent hover:border-slate-200 hover:shadow-sm",
//             className
//           )}
//           {...props}
//         >
//           <div className="flex items-start gap-3">
//             {icon && (
//               <div className="flex-shrink-0 mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-300 p-2 bg-slate-50 rounded-md group-hover:bg-blue-50 group-hover:scale-110">
//                 {icon}
//               </div>
//             )}
//             <div className="space-y-2">
//               <div className="text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-300 flex items-center">
//                 {title}
//                 <ChevronRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//               </div>
//               <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
//                 {children}
//               </p>
//             </div>
//           </div>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [businessActivities, setBusinessActivities] = useState<BusinessActivity[]>([]);
//   const [companies, setCompanies] = useState<Company[]>([]);
  
//   // Fetch business activities from API
//   useEffect(() => {
//     const fetchBusinessActivities = async () => {
//       try {
//         const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business');
//         if (!response.ok) {
//           throw new Error('Failed to fetch business activities');
//         }
//         const data = await response.json();
//         console.log('Business activities:', data.data.business);
//         setBusinessActivities(data.data.business);
//       } catch (error) {
//         console.error('Error fetching business activities:', error);
//         setBusinessActivities([]);
//       }
//     };

//     fetchBusinessActivities();
//   }, []);

//   // Fetch companies from API
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await fetch('http://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies');
//         if (!response.ok) {
//           throw new Error('Failed to fetch companies');
//         }
//         const data = await response.json();
//         console.log('Companies:', data);
        
//         // Updated to use the correct property path
//         if (data.data && data.data.business) {
//           setCompanies(data.data.business);
//         } else {
//           setCompanies([]);
//         }
//       } catch (error) {
//         console.error('Error fetching companies:', error);
//         setCompanies([]);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Map each type of business activity to a specific icon
//   const getBusinessActivityIcon = (title: string, id: number) => {
//     // First try to match by title keywords
//     const lowerTitle = title.toLowerCase();
    
//     if (lowerTitle.includes('construction') || lowerTitle.includes('build')) {
//       return Building;
//     } else if (lowerTitle.includes('consult') || lowerTitle.includes('service')) {
//       return Briefcase;
//     } else if (lowerTitle.includes('tech') || lowerTitle.includes('software') || lowerTitle.includes('digital')) {
//       return BarChart2;
//     } else if (lowerTitle.includes('investment') || lowerTitle.includes('finance')) {
//       return Award;
//     }
    
//     // Fallback to ID-based assignment for items without specific keywords
//     const icons = [Briefcase, Building, BarChart2, Award];
//     return icons[id % icons.length];
//   };
  
//   // Map each type of company to a specific icon
//   const getCompanyIcon = (title: string, id: number) => {
//     // First try to match by title keywords
//     const lowerTitle = title.toLowerCase();
    
//     if (lowerTitle.includes('group') || lowerTitle.includes('holding')) {
//       return Building;
//     } else if (lowerTitle.includes('tech') || lowerTitle.includes('software') || lowerTitle.includes('digital')) {
//       return BarChart2;
//     } else if (lowerTitle.includes('investment') || lowerTitle.includes('finance') || lowerTitle.includes('capital')) {
//       return Award;
//     } else if (lowerTitle.includes('consult') || lowerTitle.includes('service')) {
//       return Briefcase;
//     }
    
//     // Fallback to ID-based assignment for items without specific keywords
//     const icons = [Building, Briefcase, BarChart2, Award];
//     return icons[id % icons.length];
//   };

//   return (
//     <header className={cn(
//       "fixed w-full top-0 z-50 transition-all duration-300",
//       scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
//     )}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image 
//               src="/images/logo.png" 
//               alt="Company Logo" 
//               width={150}
//               height={48}
//               className="h-12 w-auto"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <Link href="/" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Home
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>About</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[350px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <ul className="grid gap-3">
//                         <ListItem 
//                           href="/about/about-us" 
//                           title="Company Overview" 
//                           icon={<Building className="h-4 w-4" />}
//                           className="hover:bg-blue-50/50 dropdown-item"
//                         >
//                           Learn about our history, vision, and mission.
//                         </ListItem>
//                         <ListItem 
//                           href="/about/csr" 
//                           title="Corporate Social Responsibility" 
//                           icon={<Heart className="h-4 w-4" />}
//                           className="hover:bg-blue-50/50 dropdown-item"
//                         >
//                           Our commitment to social responsibility and community development.
//                         </ListItem>
//                       </ul>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/milestones" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Milestones
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Business Activities</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-3">
//                           {businessActivities.map((activity, index) => {
//                             const IconComponent = getBusinessActivityIcon(activity.title, activity.id);
//                             return (
//                               <ListItem
//                                 key={activity.id}
//                                 title={activity.title}
//                                 href={`/business-activities/${activity.slug}`}
//                                 icon={<IconComponent className="h-4 w-4" />}
//                                 className="hover:bg-blue-50/50 dropdown-item"
//                                 style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                               >
//                                 {activity.shortDes}
//                               </ListItem>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-3">
//                           {companies.map((company, index) => {
//                             const IconComponent = getCompanyIcon(company.title, company.id);
//                             return (
//                               <ListItem
//                                 key={company.id}
//                                 title={company.title}
//                                 href={`/companies/${company.slug}`}
//                                 icon={<IconComponent className="h-4 w-4" />}
//                                 className="hover:bg-blue-50/50 dropdown-item"
//                                 style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                               >
//                                 {company.shortDes}
//                               </ListItem>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/media" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Media
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/contact" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Contact
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={cn(
//           "fixed inset-x-0 bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out max-h-[80vh] overflow-y-auto",
//           isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
//         )}>
//           <nav className="container mx-auto px-4 py-4">
//             <div className="space-y-4">
//               <Link
//                 href="/"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
              
//               <div className="space-y-2">
//                 <div className="font-medium px-2">About</div>
//                 <Link
//                   href="/about/about-us"
//                   className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/about/csr"
//                   className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   CSR
//                 </Link>
//               </div>

//               <Link
//                 href="/milestones"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Milestones
//               </Link>

//               <div className="space-y-2">
//                 <div className="font-medium px-2">Business Activities</div>
//                 {businessActivities.map((activity) => (
//                   <Link
//                     key={activity.id}
//                     href={`/business-activities/${activity.slug}`}
//                     className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {activity.title}
//                   </Link>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 <div className="font-medium px-2">Companies</div>
//                 {companies.map((company) => (
//                   <Link
//                     key={company.id}
//                     href={`/companies/${company.slug}`}
//                     className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {company.title}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/media"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Media
//               </Link>

//               <Link
//                 href="/contact"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
      
//       {/* Custom styles for dropdown animations */}
//       <style jsx global>{`
//         /* Scrollbar styling */
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #d1d5db;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #9ca3af;
//         }
        
//         /* Special dropdown container to manage perspective */
//         .dropdown-container {
//           perspective: 1000px;
//           z-index: 50;
//         }
        
//         /* Dropdown content animation - top to bottom opening */
//         .dropdown-content {
//           animation: dropdown-open 0.8s ease-out forwards;
//           transform-origin: top center;
//           box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//         }
        
//         @keyframes dropdown-open {
//           0% {
//             opacity: 0;
//             transform: translateY(-20px) scaleY(0);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scaleY(1);
//           }
//         }
        
//         /* Individual item animations for staggered entrance */
//         .dropdown-item {
//           animation: item-fade-in 0.5s ease-out forwards;
//           opacity: 0;
//           transform: translateY(10px);
//         }
        
//         @keyframes item-fade-in {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         /* Override shadcn/ui NavigationMenuContent styles to enable animations */
//         [data-radix-navigation-menu-content] {
//           animation-duration: inherit;
//           animation-timing-function: inherit;
//         }
        
//         /* Add closing animation to NavigationMenuContent when closing */
//         [data-state="closed"] [data-radix-navigation-menu-content] {
//           animation: dropdown-close 0.6s ease-in !important;
//           transform-origin: bottom center;
//         }
        
//         @keyframes dropdown-close {
//           0% {
//             opacity: 1;
//             transform: translateY(0) scaleY(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(0) scaleY(0);
//             transform-origin: bottom center;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;





'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, ChevronDown, Building, Briefcase, BarChart2, Award, Heart } from 'lucide-react';

// Business Activity Interface
interface BusinessActivity {
  id: number;
  title: string;
  shortDes: string;
  slug: string;
}

// Company Interface
interface Company {
  id: number;
  title: string;
  shortDes: string;
  slug: string;
}

// Enhanced ListItem with icons and better styling
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 group",
            "border border-transparent hover:border-slate-200 hover:shadow-sm",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {icon && (
              <div className="flex-shrink-0 mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-300 p-2 bg-slate-50 rounded-md group-hover:bg-blue-50 group-hover:scale-110">
                {icon}
              </div>
            )}
            <div className="space-y-2">
              <div className="text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-300 flex items-center">
                {title}
                <ChevronRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessActivities, setBusinessActivities] = useState<BusinessActivity[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  
  // Mobile dropdown states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  
  // Fetch business activities from API
  useEffect(() => {
    const fetchBusinessActivities = async () => {
      try {
        const response = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/business');
        if (!response.ok) {
          throw new Error('Failed to fetch business activities');
        }
        const data = await response.json();
        console.log('Business activities:', data.data.business);
        setBusinessActivities(data.data.business);
      } catch (error) {
        console.error('Error fetching business activities:', error);
        setBusinessActivities([]);
      }
    };

    fetchBusinessActivities();
  }, []);

  // Fetch companies from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('https://api.pg-admin.57.155.183.218.nip.io/api/v1/pg/companies');
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        console.log('Companies:', data);
        
        // Updated to use the correct property path
        if (data.data && data.data.business) {
          setCompanies(data.data.business);
        } else {
          setCompanies([]);
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
        setCompanies([]);
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile dropdowns when main menu closes
  useEffect(() => {
    if (!isOpen) {
      setAboutOpen(false);
      setBusinessOpen(false);
      setCompaniesOpen(false);
    }
  }, [isOpen]);

  // Handle mobile menu item click
  const handleMobileItemClick = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setBusinessOpen(false);
    setCompaniesOpen(false);
  };

  // Map each type of business activity to a specific icon
  const getBusinessActivityIcon = (title: string, id: number) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('construction') || lowerTitle.includes('build')) {
      return Building;
    } else if (lowerTitle.includes('consult') || lowerTitle.includes('service')) {
      return Briefcase;
    } else if (lowerTitle.includes('tech') || lowerTitle.includes('software') || lowerTitle.includes('digital')) {
      return BarChart2;
    } else if (lowerTitle.includes('investment') || lowerTitle.includes('finance')) {
      return Award;
    }
    
    const icons = [Briefcase, Building, BarChart2, Award];
    return icons[id % icons.length];
  };
  
  // Map each type of company to a specific icon
  const getCompanyIcon = (title: string, id: number) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('group') || lowerTitle.includes('holding')) {
      return Building;
    } else if (lowerTitle.includes('tech') || lowerTitle.includes('software') || lowerTitle.includes('digital')) {
      return BarChart2;
    } else if (lowerTitle.includes('investment') || lowerTitle.includes('finance') || lowerTitle.includes('capital')) {
      return Award;
    } else if (lowerTitle.includes('consult') || lowerTitle.includes('service')) {
      return Briefcase;
    }
    
    const icons = [Building, Briefcase, BarChart2, Award];
    return icons[id % icons.length];
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Company Logo" 
              width={150}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent className="dropdown-container">
                    <div className="dropdown-content w-[350px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
                      <ul className="grid gap-3">
                        <ListItem 
                          href="/about/about-us" 
                          title="Company Overview" 
                          icon={<Building className="h-4 w-4" />}
                          className="hover:bg-blue-50/50 dropdown-item"
                        >
                          Learn about our history, vision, and mission.
                        </ListItem>
                        <ListItem 
                          href="/about/csr" 
                          title="Corporate Social Responsibility" 
                          icon={<Heart className="h-4 w-4" />}
                          className="hover:bg-blue-50/50 dropdown-item"
                        >
                          Our commitment to social responsibility and community development.
                        </ListItem>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/milestones" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Milestones
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business Activities</NavigationMenuTrigger>
                  <NavigationMenuContent className="dropdown-container">
                    <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
                      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {businessActivities.map((activity, index) => {
                            const IconComponent = getBusinessActivityIcon(activity.title, activity.id);
                            return (
                              <ListItem
                                key={activity.id}
                                title={activity.title}
                                href={`/business-activities/${activity.slug}`}
                                icon={<IconComponent className="h-4 w-4" />}
                                className="hover:bg-blue-50/50 dropdown-item"
                                style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
                              >
                                {activity.shortDes}
                              </ListItem>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
                  <NavigationMenuContent className="dropdown-container">
                    <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
                      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {companies.map((company, index) => {
                            const IconComponent = getCompanyIcon(company.title, company.id);
                            return (
                              <ListItem
                                key={company.id}
                                title={company.title}
                                href={`/companies/${company.slug}`}
                                icon={<IconComponent className="h-4 w-4" />}
                                className="hover:bg-blue-50/50 dropdown-item"
                                style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
                              >
                                {company.shortDes}
                              </ListItem>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/media" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Media
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "w-6 h-6 absolute transition-all duration-300",
                isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "w-6 h-6 absolute transition-all duration-300",
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
              )} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation with Smooth Animations */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="px-4 py-6 bg-white border-t border-gray-100">
            <div className="space-y-1">
              {/* Home */}
              <div className="mobile-menu-item" style={{animationDelay: '0.1s'}}>
                <Link
                  href="/"
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={handleMobileItemClick}
                >
                  <span className="font-medium">Home</span>
                </Link>
              </div>
              
              {/* About Dropdown */}
              <div className="mobile-menu-item" style={{animationDelay: '0.2s'}}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium">About</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    aboutOpen ? "rotate-180" : "rotate-0"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  aboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 space-y-1 pt-2">
                    <Link
                      href="/about/about-us"
                      className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
                      onClick={handleMobileItemClick}
                    >
                      <Building className="h-4 w-4 mr-3 text-gray-400" />
                      About Us
                    </Link>
                    <Link
                      href="/about/csr"
                      className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
                      onClick={handleMobileItemClick}
                    >
                      <Heart className="h-4 w-4 mr-3 text-gray-400" />
                      CSR
                    </Link>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="mobile-menu-item" style={{animationDelay: '0.3s'}}>
                <Link
                  href="/milestones"
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={handleMobileItemClick}
                >
                  <span className="font-medium">Milestones</span>
                </Link>
              </div>

              {/* Business Activities Dropdown */}
              <div className="mobile-menu-item" style={{animationDelay: '0.4s'}}>
                <button
                  onClick={() => setBusinessOpen(!businessOpen)}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium">Business Activities</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    businessOpen ? "rotate-180" : "rotate-0"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  businessOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 space-y-1 pt-2 max-h-60 overflow-y-auto">
                    {businessActivities.map((activity, index) => {
                      const IconComponent = getBusinessActivityIcon(activity.title, activity.id);
                      return (
                        <Link
                          key={activity.id}
                          href={`/business-activities/${activity.slug}`}
                          className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
                          onClick={handleMobileItemClick}
                          style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                          <span className="truncate">{activity.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Companies Dropdown */}
              <div className="mobile-menu-item" style={{animationDelay: '0.5s'}}>
                <button
                  onClick={() => setCompaniesOpen(!companiesOpen)}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium">Companies</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    companiesOpen ? "rotate-180" : "rotate-0"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  companiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 space-y-1 pt-2 max-h-60 overflow-y-auto">
                    {companies.map((company, index) => {
                      const IconComponent = getCompanyIcon(company.title, company.id);
                      return (
                        <Link
                          key={company.id}
                          href={`/companies/${company.slug}`}
                          className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
                          onClick={handleMobileItemClick}
                          style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                          <span className="truncate">{company.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Media */}
              <div className="mobile-menu-item" style={{animationDelay: '0.6s'}}>
                <Link
                  href="/media"
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={handleMobileItemClick}
                >
                  <span className="font-medium">Media</span>
                </Link>
              </div>

              {/* Contact */}
              <div className="mobile-menu-item" style={{animationDelay: '0.7s'}}>
                <Link
                  href="/contact"
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={handleMobileItemClick}
                >
                  <span className="font-medium">Contact</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        /* Mobile menu item animation */
        .mobile-menu-item {
          animation: mobile-slide-in 0.5s ease-out forwards;
          opacity: 0;
          transform: translateX(-20px);
        }
        
        @keyframes mobile-slide-in {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Scrollbar styling for mobile dropdowns */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        
        /* Desktop dropdown animations */
        .dropdown-container {
          perspective: 1000px;
          z-index: 50;
        }
        
        .dropdown-content {
          animation: dropdown-open 0.8s ease-out forwards;
          transform-origin: top center;
          box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        @keyframes dropdown-open {
          0% {
            opacity: 0;
            transform: translateY(-20px) scaleY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }
        
        .dropdown-item {
          animation: item-fade-in 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(10px);
        }
        
        @keyframes item-fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-radix-navigation-menu-content] {
          animation-duration: inherit;
          animation-timing-function: inherit;
        }
        
        [data-state="closed"] [data-radix-navigation-menu-content] {
          animation: dropdown-close 0.6s ease-in !important;
          transform-origin: bottom center;
        }
        
        @keyframes dropdown-close {
          0% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
          100% {
            opacity: 0;
            transform: translateY(0) scaleY(0);
            transform-origin: bottom center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;




// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronRight, ChevronDown, Building, Briefcase, BarChart2, Award, Heart } from 'lucide-react';

// // Business Activity Interface
// interface BusinessActivity {
//   id: number;
//   title: string;
//   shortDes: string;
//   slug: string;
// }

// // Company Interface
// interface Company {
//   id: number;
//   title: string;
//   shortDes: string;
//   slug: string;
// }

// // ✅ FIXED: Get correct base path for links
// const getBasePath = () => {
//   if (typeof window !== 'undefined' && window.location.pathname.includes('/pg_group/')) {
//     return '/pg_group';
//   }
//   return process.env.NEXT_PUBLIC_BASE_PATH || '';
// };

// // Enhanced ListItem with Next.js Link
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode; href?: string }
// >(({ className, title, children, icon, href, ...props }, ref) => {
//   const basePath = getBasePath();
//   const fullHref = href?.startsWith('/') ? `${basePath}${href}` : href || '#';

//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           href={fullHref}
//           ref={ref}
//           className={cn(
//             "block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 group",
//             "border border-transparent hover:border-slate-200 hover:shadow-sm",
//             className
//           )}
//           {...props}
//         >
//           <div className="flex items-start gap-3">
//             {icon && (
//               <div className="flex-shrink-0 mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-300 p-2 bg-slate-50 rounded-md group-hover:bg-blue-50 group-hover:scale-110">
//                 {icon}
//               </div>
//             )}
//             <div className="space-y-2">
//               <div className="text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-300 flex items-center">
//                 {title}
//                 <ChevronRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//               </div>
//               <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
//                 {children}
//               </p>
//             </div>
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [businessActivities, setBusinessActivities] = useState<BusinessActivity[]>([]);
//   const [companies, setCompanies] = useState<Company[]>([]);
  
//   // Mobile dropdown states
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [businessOpen, setBusinessOpen] = useState(false);
//   const [companiesOpen, setCompaniesOpen] = useState(false);

//   // ✅ FIXED: Get base path for all links
//   const basePath = getBasePath();

//   // ✅ FIXED: Detect protocol and use appropriate API URL
//   const getApiUrl = () => {
//     // In production (HTTPS), try HTTPS first, then fallback to HTTP
//     if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
//       return 'https://api.pg-admin.57.155.183.218.nip.io';
//     }
//     return 'http://api.pg-admin.57.155.183.218.nip.io';
//   };
  
//   // ✅ FIXED: Fetch business activities from API
//   useEffect(() => {
//     const fetchBusinessActivities = async () => {
//       try {
//         const apiUrl = getApiUrl();
//         console.log('Fetching business activities from:', `${apiUrl}/api/v1/pg/business`);
        
//         const response = await fetch(`${apiUrl}/api/v1/pg/business`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch business activities');
//         }
//         const data = await response.json();
//         console.log('Business activities:', data.data.business);
        
//         if (data.data && data.data.business && Array.isArray(data.data.business)) {
//           setBusinessActivities(data.data.business);
//         } else {
//           console.warn('Invalid business activities data structure');
//           setBusinessActivities([]);
//         }
//       } catch (error) {
//         console.error('Error fetching business activities:', error);
//         setBusinessActivities([]);
//       }
//     };

//     fetchBusinessActivities();
//   }, []);

//   // ✅ FIXED: Fetch companies from API
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const apiUrl = getApiUrl();
//         console.log('Fetching companies from:', `${apiUrl}/api/v1/pg/companies`);
        
//         const response = await fetch(`${apiUrl}/api/v1/pg/companies`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch companies');
//         }
//         const data = await response.json();
//         console.log('Companies:', data);
        
//         if (data.data && data.data.business && Array.isArray(data.data.business)) {
//           setCompanies(data.data.business);
//         } else {
//           console.warn('Invalid companies data structure');
//           setCompanies([]);
//         }
//       } catch (error) {
//         console.error('Error fetching companies:', error);
//         setCompanies([]);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Reset mobile dropdowns when main menu closes
//   useEffect(() => {
//     if (!isOpen) {
//       setAboutOpen(false);
//       setBusinessOpen(false);
//       setCompaniesOpen(false);
//     }
//   }, [isOpen]);

//   // ✅ FIXED: Handle mobile menu item click with Next.js navigation
//   const handleMobileItemClick = () => {
//     setIsOpen(false);
//     setAboutOpen(false);
//     setBusinessOpen(false);
//     setCompaniesOpen(false);
//   };

//   // Map each type of business activity to a specific icon
//   const getBusinessActivityIcon = (title: string, id: number) => {
//     const lowerTitle = title.toLowerCase();
    
//     if (lowerTitle.includes('poultry') || lowerTitle.includes('farm')) {
//       return Building;
//     } else if (lowerTitle.includes('process') || lowerTitle.includes('plant')) {
//       return Briefcase;
//     } else if (lowerTitle.includes('feed') || lowerTitle.includes('mill')) {
//       return BarChart2;
//     } else if (lowerTitle.includes('hatchery') || lowerTitle.includes('breeding')) {
//       return Award;
//     } else if (lowerTitle.includes('distribution') || lowerTitle.includes('supply')) {
//       return Heart;
//     }
    
//     const icons = [Building, Briefcase, BarChart2, Award, Heart];
//     return icons[id % icons.length];
//   };
  
//   // Map each type of company to a specific icon
//   const getCompanyIcon = (title: string, id: number) => {
//     const lowerTitle = title.toLowerCase();
    
//     if (lowerTitle.includes('group') || lowerTitle.includes('holding')) {
//       return Building;
//     } else if (lowerTitle.includes('tech') || lowerTitle.includes('software') || lowerTitle.includes('digital')) {
//       return BarChart2;
//     } else if (lowerTitle.includes('feed') || lowerTitle.includes('nutrition')) {
//       return Award;
//     } else if (lowerTitle.includes('aqua') || lowerTitle.includes('fish')) {
//       return Heart;
//     } else if (lowerTitle.includes('agro') || lowerTitle.includes('farm')) {
//       return Briefcase;
//     }
    
//     const icons = [Building, Briefcase, BarChart2, Award, Heart];
//     return icons[id % icons.length];
//   };

//   return (
//     <header className={cn(
//       "fixed w-full top-0 z-50 transition-all duration-300",
//       scrolled ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white shadow-sm"
//     )}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 lg:h-16 md:h-18">
//           {/* ✅ FIXED: Logo with correct path */}
//           <Link href={`${basePath}/`} className="flex items-center">
//             <Image 
//               src={`${basePath}/images/logo.png`}
//               alt="Company Logo" 
//               width={150}
//               height={48}
//               className="h-12 w-auto"
//               priority
//               onError={(e) => {
//                 console.error('Logo failed to load, trying fallback');
//                 e.currentTarget.src = `${basePath}/logo.png`;
//               }}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <Link href={`${basePath}/`} legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Home
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>About</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[350px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <ul className="grid gap-3">
//                         <ListItem 
//                           href="/about/about-us" 
//                           title="Company Overview" 
//                           icon={<Building className="h-4 w-4" />}
//                           className="hover:bg-blue-50/50 dropdown-item"
//                         >
//                           Learn about our history, vision, and mission.
//                         </ListItem>
//                         <ListItem 
//                           href="/about/csr" 
//                           title="Corporate Social Responsibility" 
//                           icon={<Heart className="h-4 w-4" />}
//                           className="hover:bg-blue-50/50 dropdown-item"
//                         >
//                           Our commitment to social responsibility and community development.
//                         </ListItem>
//                       </ul>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href={`${basePath}/milestones`} legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Milestones
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Business Activities</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-3">
//                           {businessActivities.length > 0 ? businessActivities.map((activity, index) => {
//                             const IconComponent = getBusinessActivityIcon(activity.title, activity.id);
//                             return (
//                               <ListItem
//                                 key={activity.id}
//                                 title={activity.title}
//                                 href={`/business-activities/${activity.slug}`}
//                                 icon={<IconComponent className="h-4 w-4" />}
//                                 className="hover:bg-blue-50/50 dropdown-item"
//                                 style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                               >
//                                 {activity.shortDes}
//                               </ListItem>
//                             );
//                           }) : (
//                             <li className="text-sm text-gray-500 p-4">Loading business activities...</li>
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
//                   <NavigationMenuContent className="dropdown-container">
//                     <div className="dropdown-content w-[600px] p-6 rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white/95 backdrop-blur-sm">
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-3">
//                           {companies.length > 0 ? companies.map((company, index) => {
//                             const IconComponent = getCompanyIcon(company.title, company.id);
//                             return (
//                               <ListItem
//                                 key={company.id}
//                                 title={company.title}
//                                 href={`/companies/${company.slug}`}
//                                 icon={<IconComponent className="h-4 w-4" />}
//                                 className="hover:bg-blue-50/50 dropdown-item"
//                                 style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                               >
//                                 {company.shortDes}
//                               </ListItem>
//                             );
//                           }) : (
//                             <li className="text-sm text-gray-500 p-4">Loading companies...</li>
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href={`${basePath}/media`} legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Media
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href={`${basePath}/contact`} legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Contact
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             className="lg:hidden relative p-3"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="relative w-7 h-7">
//               <Menu className={cn(
//                 "w-7 h-7 absolute transition-all duration-300",
//                 isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
//               )} />
//               <X className={cn(
//                 "w-7 h-7 absolute transition-all duration-300",
//                 isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
//               )} />
//             </div>
//           </Button>
//         </div>

//         {/* Mobile Navigation with Smooth Animations */}
//         <div className={cn(
//           "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
//           isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
//         )}>
//           <nav className="px-4 py-6 bg-white border-t border-gray-100">
//             <div className="space-y-1">
//               {/* Home */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.1s'}}>
//                 <Link
//                   href={`${basePath}/`}
//                   className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                   onClick={handleMobileItemClick}
//                 >
//                   <span className="font-medium">Home</span>
//                 </Link>
//               </div>
              
//               {/* About Dropdown */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.2s'}}>
//                 <button
//                   onClick={() => setAboutOpen(!aboutOpen)}
//                   className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                 >
//                   <span className="font-medium">About</span>
//                   <ChevronDown className={cn(
//                     "h-4 w-4 transition-transform duration-300",
//                     aboutOpen ? "rotate-180" : "rotate-0"
//                   )} />
//                 </button>
//                 <div className={cn(
//                   "overflow-hidden transition-all duration-300 ease-in-out",
//                   aboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//                 )}>
//                   <div className="pl-4 space-y-1 pt-2">
//                     <Link
//                       href={`${basePath}/about/about-us`}
//                       className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
//                       onClick={handleMobileItemClick}
//                     >
//                       <Building className="h-4 w-4 mr-3 text-gray-400" />
//                       About Us
//                     </Link>
//                     <Link
//                       href={`${basePath}/about/csr`}
//                       className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
//                       onClick={handleMobileItemClick}
//                     >
//                       <Heart className="h-4 w-4 mr-3 text-gray-400" />
//                       CSR
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Milestones */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.3s'}}>
//                 <Link
//                   href={`${basePath}/milestones`}
//                   className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                   onClick={handleMobileItemClick}
//                 >
//                   <span className="font-medium">Milestones</span>
//                 </Link>
//               </div>

//               {/* Business Activities Dropdown */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.4s'}}>
//                 <button
//                   onClick={() => setBusinessOpen(!businessOpen)}
//                   className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                 >
//                   <span className="font-medium">Business Activities</span>
//                   <ChevronDown className={cn(
//                     "h-4 w-4 transition-transform duration-300",
//                     businessOpen ? "rotate-180" : "rotate-0"
//                   )} />
//                 </button>
//                 <div className={cn(
//                   "overflow-hidden transition-all duration-300 ease-in-out",
//                   businessOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                 )}>
//                   <div className="pl-4 space-y-1 pt-2 max-h-60 overflow-y-auto">
//                     {businessActivities.length > 0 ? businessActivities.map((activity, index) => {
//                       const IconComponent = getBusinessActivityIcon(activity.title, activity.id);
//                       return (
//                         <Link
//                           key={activity.id}
//                           href={`${basePath}/business-activities/${activity.slug}`}
//                           className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
//                           onClick={handleMobileItemClick}
//                           style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                         >
//                           <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
//                           <span className="truncate">{activity.title}</span>
//                         </Link>
//                       );
//                     }) : (
//                       <div className="text-sm text-gray-500 p-2 pl-4">Loading...</div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Companies Dropdown */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.5s'}}>
//                 <button
//                   onClick={() => setCompaniesOpen(!companiesOpen)}
//                   className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                 >
//                   <span className="font-medium">Companies</span>
//                   <ChevronDown className={cn(
//                     "h-4 w-4 transition-transform duration-300",
//                     companiesOpen ? "rotate-180" : "rotate-0"
//                   )} />
//                 </button>
//                 <div className={cn(
//                   "overflow-hidden transition-all duration-300 ease-in-out",
//                   companiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                 )}>
//                   <div className="pl-4 space-y-1 pt-2 max-h-60 overflow-y-auto">
//                     {companies.length > 0 ? companies.map((company, index) => {
//                       const IconComponent = getCompanyIcon(company.title, company.id);
//                       return (
//                         <Link
//                           key={company.id}
//                           href={`${basePath}/companies/${company.slug}`}
//                           className="flex items-center p-2 pl-4 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
//                           onClick={handleMobileItemClick}
//                           style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
//                         >
//                           <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
//                           <span className="truncate">{company.title}</span>
//                         </Link>
//                       );
//                     }) : (
//                       <div className="text-sm text-gray-500 p-2 pl-4">Loading...</div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Media */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.6s'}}>
//                 <Link
//                   href={`${basePath}/media`}
//                   className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                   onClick={handleMobileItemClick}
//                 >
//                   <span className="font-medium">Media</span>
//                 </Link>
//               </div>

//               {/* Contact */}
//               <div className="mobile-menu-item" style={{animationDelay: '0.7s'}}>
//                 <Link
//                   href={`${basePath}/contact`}
//                   className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                   onClick={handleMobileItemClick}
//                 >
//                   <span className="font-medium">Contact</span>
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
      
//       {/* Custom styles for animations */}
//       <style jsx global>{`
//         /* Mobile menu item animation */
//         .mobile-menu-item {
//           animation: mobile-slide-in 0.5s ease-out forwards;
//           opacity: 0;
//           transform: translateX(-20px);
//         }
        
//         @keyframes mobile-slide-in {
//           0% {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         /* Scrollbar styling for mobile dropdowns */
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #d1d5db;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #9ca3af;
//         }
        
//         /* Desktop dropdown animations */
//         .dropdown-container {
//           perspective: 1000px;
//           z-index: 50;
//         }
        
//         .dropdown-content {
//           animation: dropdown-open 0.8s ease-out forwards;
//           transform-origin: top center;
//           box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//         }
        
//         @keyframes dropdown-open {
//           0% {
//             opacity: 0;
//             transform: translateY(-20px) scaleY(0);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scaleY(1);
//           }
//         }
        
//         .dropdown-item {
//           animation: item-fade-in 0.5s ease-out forwards;
//           opacity: 0;
//           transform: translateY(10px);
//         }
        
//         @keyframes item-fade-in {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         [data-radix-navigation-menu-content] {
//           animation-duration: inherit;
//           animation-timing-function: inherit;
//         }
        
//         [data-state="closed"] [data-radix-navigation-menu-content] {
//           animation: dropdown-close 0.6s ease-in !important;
//           transform-origin: bottom center;
//         }
        
//         @keyframes dropdown-close {
//           0% {
//             opacity: 1;
//             transform: translateY(0) scaleY(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(0) scaleY(0);
//             transform-origin: bottom center;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;