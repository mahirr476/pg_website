'use client';
import { useState, useEffect } from 'react';
import { X, BookOpen, Mic, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('announcement-dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-company-royal text-white text-sm relative z-[60]">
      <div className="container max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Items */}
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-white/80">
            <BookOpen className="w-3.5 h-3.5 text-company-orange flex-shrink-0" />
            <span className="hidden sm:inline">Featured in</span>
            <span className="font-semibold text-white">Gulf News</span>
            <span className="text-white/50 hidden sm:inline">&</span>
            <span className="font-semibold text-white hidden sm:inline">Global FDI Reports</span>
          </div>

          <span className="text-white/30 hidden md:inline">|</span>

          <div className="flex items-center gap-1.5 text-white/80 hidden md:flex">
            <Mic className="w-3.5 h-3.5 text-company-orange flex-shrink-0" />
            <span>MD Moshiur Rahman's</span>
            <span className="font-semibold text-white">Global FDI Podcast</span>
          </div>
        </div>

        {/* CTA + Close */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/media"
            className="flex items-center gap-1 text-company-orange hover:text-white font-semibold transition-colors duration-200 whitespace-nowrap"
          >
            View More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="text-white/50 hover:text-white transition-colors duration-200 p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
