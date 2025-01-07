'use client';
// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Home,
  Info,
  Award,
  Building2,
  Briefcase,
  Image as ImageIcon,
  UserPlus,
  Phone
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'About',
      icon: <Info className="w-5 h-5" />,
      subItems: [
        { name: 'About Us', href: '/about/about-us' },
        { name: 'CSR', href: '/about/csr' }
      ]
    },
    {
      name: 'Milestones',
      href: '/milestones',
      icon: <Award className="w-5 h-5" />
    },
    {
      name: 'Business Activities',
      href: '/business-activities',
      icon: <Building2 className="w-5 h-5" />
    },
    {
      name: 'Companies',
      href: '/companies',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: 'Media',
      href: '/media',
      icon: <ImageIcon className="w-5 h-5" />
    },
    {
      name: 'Career',
      href: '/career',
      icon: <UserPlus className="w-5 h-5" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ];

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
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="h-10">
                          <span className="flex items-center space-x-1">
                            {item.icon}
                            <span>{item.name}</span>
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-3 p-4">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {subItem.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors relative py-2"
                      >
                        <span className="flex items-center space-x-1">
                          {item.icon}
                          <span>{item.name}</span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

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
          "fixed inset-x-0 bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out",
          isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}>
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <div className="font-medium mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg p-2 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg p-2 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;