'use client';
import { motion } from 'framer-motion';
import { Mic, ExternalLink, Headphones } from 'lucide-react';

const LeadershipPodcast = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-block relative mb-4">
            <span className="absolute -inset-1 bg-gradient-to-r from-company-royal/20 to-company-orange/20 blur-sm" />
            <h2 className="relative text-4xl font-bold text-company-royal">Leadership Podcast</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Hear directly from our Managing Director on global investment and business leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Left — visual panel */}
              <div className="lg:w-2/5 bg-company-royal p-10 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-white/10"
                      style={{ width: `${i * 120}px`, height: `${i * 120}px` }}
                      animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.2, 0.4] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    />
                  ))}
                </div>

                {/* Mic icon */}
                <div className="relative z-10 bg-company-orange rounded-full p-6 shadow-lg mb-6">
                  <Mic className="w-10 h-10 text-white" />
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Hosted by</p>
                  <p className="text-white font-bold text-xl">Moshiur Rahman</p>
                  <p className="text-company-orange text-sm font-medium mt-1">Managing Director, Paragon Group</p>
                </div>

                {/* Listen badge */}
                <div className="relative z-10 mt-8 flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <Headphones className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-xs font-medium">Available on Apple Podcasts</span>
                </div>
              </div>

              {/* Right — content */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold bg-company-orange/10 text-company-orange px-3 py-1 rounded-full mb-5 w-fit">
                  Global FDI Podcast
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-company-royal mb-4 group-hover:text-company-orange transition-colors duration-300">
                  The Global FDI Podcast
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Paragon Group's Managing Director, <strong>Moshiur Rahman</strong>, shares his insights on
                  foreign direct investment, Bangladesh's growing business landscape, and what it takes to
                  build a leading conglomerate. A candid conversation on leadership, vision, and global opportunity.
                </p>

                {/* Embedded Apple Podcasts player */}
                <div className="w-full rounded-xl overflow-hidden shadow-md mb-4">
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{ width: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/bangladesh-interview-with-moshiur-rahman-managing/id1848082682?i=1000766760950"
                  />
                </div>

                <a
                  href="https://podcasts.apple.com/us/podcast/bangladesh-interview-with-moshiur-rahman-managing/id1848082682?i=1000766760950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-company-royal hover:bg-company-orange text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipPodcast;
