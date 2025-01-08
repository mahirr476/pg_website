'use client';
// src/components/layout/Header.tsx
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
import { businessActivities, companies } from '@/lib/data/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem href="/about/about-us" title="About Us">
                        Learn about our history, vision, and mission.
                      </ListItem>
                      <ListItem href="/about/csr" title="CSR">
                        Our commitment to social responsibility and community development.
                      </ListItem>
                    </ul>
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
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {businessActivities.map((activity) => (
                        <ListItem
                          key={activity.href}
                          title={activity.title}
                          href={activity.href}
                        >
                          {activity.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {companies.map((company) => (
                        <ListItem
                          key={company.href}
                          title={company.title}
                          href={company.href}
                        >
                          {company.description}
                        </ListItem>
                      ))}
                    </ul>
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
                    key={activity.href}
                    href={activity.href}
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
                    key={company.href}
                    href={company.href}
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
    </header>
  );
};

export default Header;