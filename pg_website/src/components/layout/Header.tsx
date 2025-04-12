// 'use client';
// // src/components/layout/Header.tsx
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
// import { businessActivities, companies } from '@/lib/data/navigation';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

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
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4">
//                       <ListItem href="/about/about-us" title="About Us">
//                         Learn about our history, vision, and mission.
//                       </ListItem>
//                       <ListItem href="/about/csr" title="CSR">
//                         Our commitment to social responsibility and community development.
//                       </ListItem>
//                     </ul>
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
//                   <NavigationMenuContent>
//                     <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
//                       {businessActivities.map((activity) => (
//                         <ListItem
//                           key={activity.href}
//                           title={activity.title}
//                           href={activity.href}
//                         >
//                           {activity.description}
//                         </ListItem>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
//                       {companies.map((company) => (
//                         <ListItem
//                           key={company.href}
//                           title={company.title}
//                           href={company.href}
//                         >
//                           {company.description}
//                         </ListItem>
//                       ))}
//                     </ul>
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
//                   <Link href="/career" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Career
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
//                     key={activity.href}
//                     href={activity.href}
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
//                     key={company.href}
//                     href={company.href}
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
//                 href="/career"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Career
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
//     </header>
//   );
// };

// export default Header;





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
// import { companies } from '@/lib/data/navigation';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';

// // Business Activity Interface
// interface BusinessActivity {
//   id: number;
//   title: string;
//   shortDes: string;
//   slug: string;
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
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

//   // Fetch business activities from API
//   useEffect(() => {
//     const fetchBusinessActivities = async () => {
//       try {
//         const response = await fetch('http://localhost:7000/api/v1/pg/business');
//         if (!response.ok) {
//           throw new Error('Failed to fetch business activities');
//         }
//         const data = await response.json();
//         console.log('Business activities:', data.data.business);
//         setBusinessActivities(data.data.business);
//       } catch (error) {
//         console.error('Error fetching business activities:', error);
//         // Set fallback data if API fails
//         setBusinessActivities([]);
//       }
//     };

//     fetchBusinessActivities();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

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
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4">
//                       <ListItem href="/about/about-us" title="About Us">
//                         Learn about our history, vision, and mission.
//                       </ListItem>
//                       <ListItem href="/about/csr" title="CSR">
//                         Our commitment to social responsibility and community development.
//                       </ListItem>
//                     </ul>
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
//                   <NavigationMenuContent>
//                     <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
//                       {businessActivities.map((activity) => (
//                         <ListItem
//                           key={activity.id}
//                           title={activity.title}
//                           href={`/business-activities/${activity.slug}`}
//                         >
//                           {activity.shortDes}
//                         </ListItem>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
//                       {companies.map((company) => (
//                         <ListItem
//                           key={company.href}
//                           title={company.title}
//                           href={company.href}
//                         >
//                           {company.description}
//                         </ListItem>
//                       ))}
//                     </ul>
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
//                   <Link href="/career" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Career
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
//                     href={`/business/${activity.slug}`}
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
//                     key={company.href}
//                     href={company.href}
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
//                 href="/career"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Career
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
//     </header>
//   );
// };

// export default Header;


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
// import { companies } from '@/lib/data/navigation';
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronRight, Building, Briefcase, BarChart2, Award, Heart } from 'lucide-react';

// // Business Activity Interface
// interface BusinessActivity {
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
//             "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 group",
//             className
//           )}
//           {...props}
//         >
//           <div className="flex items-start gap-3">
//             {icon && (
//               <div className="flex-shrink-0 mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-200">
//                 {icon}
//               </div>
//             )}
//             <div className="space-y-1.5">
//               <div className="text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-200 flex items-center">
//                 {title}
//                 <ChevronRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//               </div>
//               <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
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

//   // Fetch business activities from API
//   useEffect(() => {
//     const fetchBusinessActivities = async () => {
//       try {
//         const response = await fetch('http://localhost:7000/api/v1/pg/business');
//         if (!response.ok) {
//           throw new Error('Failed to fetch business activities');
//         }
//         const data = await response.json();
//         console.log('Business activities:', data.data.business);
//         setBusinessActivities(data.data.business);
//       } catch (error) {
//         console.error('Error fetching business activities:', error);
//         // Set fallback data if API fails
//         setBusinessActivities([]);
//       }
//     };

//     fetchBusinessActivities();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Icon mapping for business activities (generates consistent icons based on id)
//   const getBusinessIcon = (id: number) => {
//     const icons = [Briefcase, Building, BarChart2, Award];
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
//                   <NavigationMenuContent>
//                     <div className="w-[350px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
//                       <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
//                         <div className="bg-white p-2 rounded-full shadow-sm mr-3">
//                           <Building className="h-5 w-5 text-primary" />
//                         </div>
//                         <h3 className="text-base font-medium text-primary">About Us</h3>
//                       </div>
                      
//                       <ul className="grid gap-2">
//                         <ListItem 
//                           href="/about/about-us" 
//                           title="Company Overview" 
//                           icon={<Building className="h-4 w-4" />}
//                         >
//                           Learn about our history, vision, and mission.
//                         </ListItem>
//                         <ListItem 
//                           href="/about/csr" 
//                           title="Corporate Social Responsibility" 
//                           icon={<Heart className="h-4 w-4" />}
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
//                   <NavigationMenuContent>
//                     <div className="w-[550px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
//                       <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
//                         <div className="bg-white p-2 rounded-full shadow-sm mr-3">
//                           <Briefcase className="h-5 w-5 text-primary" />
//                         </div>
//                         <h3 className="text-base font-medium text-primary">Our Business Sectors</h3>
//                       </div>
                      
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-2">
//                           {businessActivities.map((activity) => {
//                             const IconComponent = getBusinessIcon(activity.id);
//                             return (
//                               <ListItem
//                                 key={activity.id}
//                                 title={activity.title}
//                                 href={`/business-activities/${activity.slug}`}
//                                 icon={<IconComponent className="h-4 w-4" />}
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
//                   <NavigationMenuContent>
//                     <div className="w-[550px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
//                       <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
//                         <div className="bg-white p-2 rounded-full shadow-sm mr-3">
//                           <Building className="h-5 w-5 text-primary" />
//                         </div>
//                         <h3 className="text-base font-medium text-primary">Our Companies</h3>
//                       </div>
                      
//                       <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="grid md:grid-cols-2 gap-2">
//                           {companies.map((company, index) => {
//                             const IconComponent = getBusinessIcon(index);
//                             return (
//                               <ListItem
//                                 key={company.href}
//                                 title={company.title}
//                                 href={company.href}
//                                 icon={<IconComponent className="h-4 w-4" />}
//                               >
//                                 {company.description}
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
//                   <Link href="/career" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                       Career
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
//                     href={`/business/${activity.slug}`}
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
//                     key={company.href}
//                     href={company.href}
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
//                 href="/career"
//                 className="block p-2 hover:bg-gray-50 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Career
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
      
//       {/* Add a style for custom scrollbars */}
//       <style jsx global>{`
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
import { Menu, X, ChevronRight, Building, Briefcase, BarChart2, Award, Heart } from 'lucide-react';

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
            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 group",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {icon && (
              <div className="flex-shrink-0 mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-200">
                {icon}
              </div>
            )}
            <div className="space-y-1.5">
              <div className="text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-200 flex items-center">
                {title}
                <ChevronRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
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

  // Fetch business activities from API
  useEffect(() => {
    const fetchBusinessActivities = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/v1/pg/business');
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
        const response = await fetch('http://localhost:7000/api/v1/pg/companies');
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

  // Icon mapping for business activities/companies (generates consistent icons based on id)
  const getBusinessIcon = (id: number) => {
    const icons = [Briefcase, Building, BarChart2, Award];
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
                  <NavigationMenuContent>
                    <div className="w-[350px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-base font-medium text-primary">About Us</h3>
                      </div>
                      
                      <ul className="grid gap-2">
                        <ListItem 
                          href="/about/about-us" 
                          title="Company Overview" 
                          icon={<Building className="h-4 w-4" />}
                        >
                          Learn about our history, vision, and mission.
                        </ListItem>
                        <ListItem 
                          href="/about/csr" 
                          title="Corporate Social Responsibility" 
                          icon={<Heart className="h-4 w-4" />}
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
                  <NavigationMenuContent>
                    <div className="w-[550px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-base font-medium text-primary">Our Business Sectors</h3>
                      </div>
                      
                      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <ul className="grid md:grid-cols-2 gap-2">
                          {businessActivities.map((activity) => {
                            const IconComponent = getBusinessIcon(activity.id);
                            return (
                              <ListItem
                                key={activity.id}
                                title={activity.title}
                                href={`/business-activities/${activity.slug}`}
                                icon={<IconComponent className="h-4 w-4" />}
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
                  <NavigationMenuContent>
                    <div className="w-[550px] p-4 rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center p-3 mb-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-base font-medium text-primary">Our Companies</h3>
                      </div>
                      
                      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <ul className="grid md:grid-cols-2 gap-2">
                          {companies.map((company) => {
                            const IconComponent = getBusinessIcon(company.id);
                            return (
                              <ListItem
                                key={company.id}
                                title={company.title}
                                href={`/companies/${company.slug}`}
                                icon={<IconComponent className="h-4 w-4" />}
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
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Career
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
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-x-0 bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out max-h-[80vh] overflow-y-auto",
          isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}>
          <nav className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium px-2">About</div>
                <Link
                  href="/about/about-us"
                  className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/about/csr"
                  className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  CSR
                </Link>
              </div>

              <Link
                href="/milestones"
                className="block p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Milestones
              </Link>

              <div className="space-y-2">
                <div className="font-medium px-2">Business Activities</div>
                {businessActivities.map((activity) => (
                  <Link
                    key={activity.id}
                    href={`/business-activities/${activity.slug}`}
                    className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {activity.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="font-medium px-2">Companies</div>
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/companies/${company.slug}`}
                    className="block p-2 pl-4 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {company.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/media"
                className="block p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Media
              </Link>

              <Link
                href="/career"
                className="block p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>

              <Link
                href="/contact"
                className="block p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Add a style for custom scrollbars */}
      <style jsx global>{`
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
      `}</style>
    </header>
  );
};

export default Header;