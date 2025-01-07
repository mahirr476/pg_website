'use client';
// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = {
    about: [
      { label: "About Us", href: "/about/about-us" },
      { label: "CSR", href: "/about/csr" },
      { label: "Milestones", href: "/milestones" },
      { label: "Career", href: "/career" }
    ],
    businesses: [
      { label: "Poultry Farming", href: "/business-activities/poultry-farming" },
      { label: "Processing Plant", href: "/business-activities/processing-plant" },
      { label: "Feed Mills", href: "/business-activities/feed-mills" },
      { label: "View All", href: "/business-activities" }
    ],
    companies: [
      { label: "Aqua Breeders Ltd.", href: "/companies/aqua-breeders" },
      { label: "Bay Chicks Ltd.", href: "/companies/bay-chicks" },
      { label: "Paragon Feed Ltd.", href: "/companies/paragon-feed" },
      { label: "View All", href: "/companies" }
    ],
    social: [
      { label: "Facebook", href: "#", icon: <Facebook className="w-5 h-5" /> },
      { label: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
      { label: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
      { label: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> }
    ]
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      info: "123 Business Avenue, City, Country"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      info: "+1 (234) 567-8900"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      info: "info@company.com"
    }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="block mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Company Logo"
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-600 mb-6 max-w-sm">
                Leading the way in sustainable business practices across multiple industries.
                Committed to excellence, innovation, and community development.
              </p>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600">
                    {item.icon}
                    <span>{item.info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                {quickLinks.about.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-primary inline-flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Business Activities</h3>
              <ul className="space-y-2">
                {quickLinks.businesses.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-primary inline-flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Companies</h3>
              <ul className="space-y-2">
                {quickLinks.companies.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-primary inline-flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {quickLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;