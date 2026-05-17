'use client';
import { useState } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    image: '/images/publications/gulf-news.jpeg',
    label: 'International Press',
    title: 'Gulf News Feature',
    href: 'https://features.gulfnews.com/books/kaxv/#p=5',
  },
  {
    image: '/images/publications/Fdi-report.jpeg',
    label: 'Investment Recognition',
    title: 'Global FDI Reports',
    href: 'https://globalfdireports.com/bangladesh-leading-companies/',
  },
  {
    image: '/images/publications/podcast.png',
    label: 'MD Moshiur Rahman',
    title: 'Global FDI Podcast',
    href: 'https://podcasts.apple.com/us/podcast/bangladesh-interview-with-moshiur-rahman-managing/id1848082682?i=1000766760950',
  },
];

const MediaPopup = () => {
  const [visible, setVisible] = useState(true);
  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[90]"
        onClick={dismiss}
      />

      {/* Card */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
        <div className="w-[620px] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
          {/* Header */}
          <div className="bg-company-royal px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-company-orange text-xs font-semibold uppercase tracking-widest">
                Paragon in the Spotlight
              </p>
              <p className="text-white font-bold text-base leading-tight mt-0.5">
                We've been featured!
              </p>
            </div>
            <button
              onClick={dismiss}
              className="text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 3 image cards in a row */}
          <div className="p-4 grid grid-cols-3 gap-3">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[190px] w-full bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="160px"
                  />
                </div>

                {/* Text */}
                <div className="bg-white p-2.5 flex-1 flex flex-col justify-between">
                  <p className="text-[10px] text-gray-400 font-medium leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-xs font-bold text-company-royal group-hover:text-company-orange transition-colors leading-tight">
                    {item.title}
                  </p>
                  <span className="inline-flex items-center gap-0.5 mt-2 text-[10px] text-company-orange font-semibold">
                    View <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-4 pb-4">
            <Link
              href="/media"
              onClick={dismiss}
              className="flex items-center justify-center gap-2 w-full bg-company-royal hover:bg-company-orange text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Visit Media Center
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPopup;
