'use client';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Globe } from 'lucide-react';

const publications = [
  {
    id: 1,
    publication: 'Gulf News',
    category: 'International Press',
    title: 'Paragon Group Featured in Gulf News',
    description:
      "Paragon Group was featured in Gulf News — one of the most widely read English-language newspapers in the Arab world — highlighting the company's vision, leadership, and growing presence on the global stage.",
    link: 'https://features.gulfnews.com/books/kaxv/#p=5',
    icon: BookOpen,
    headerBg: 'bg-company-royal',
    badgeBg: 'bg-company-royal/10 text-company-royal',
  },
  {
    id: 2,
    publication: 'Global FDI Reports',
    category: 'Investment Recognition',
    title: 'Bangladesh Leading Companies',
    description:
      "Paragon Group has been recognized in the Global FDI Reports' Bangladesh Leading Companies edition, acknowledging its significant contribution to Bangladesh's economy and its role as a leading enterprise attracting foreign direct investment.",
    link: 'https://globalfdireports.com/bangladesh-leading-companies/',
    icon: Globe,
    headerBg: 'bg-company-orange',
    badgeBg: 'bg-company-orange/10 text-company-orange',
  },
];

const FeaturedIn = () => {
  return (
    <section className="py-20 bg-white">
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
            <h2 className="relative text-4xl font-bold text-company-royal">Featured In</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Paragon Group's global recognition through leading international publications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Top banner */}
                  <div className={`${item.headerBg} px-6 py-5 flex items-center gap-4`}>
                    <div className="bg-white/20 rounded-xl p-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white/70 text-xs font-medium uppercase tracking-widest">
                        {item.category}
                      </span>
                      <p className="text-white font-bold text-lg leading-tight">{item.publication}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6 flex flex-col flex-1">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${item.badgeBg}`}>
                      {item.publication}
                    </span>
                    <h3 className="text-xl font-bold text-company-royal mb-3 group-hover:text-company-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{item.description}</p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-company-orange font-semibold hover:text-company-royal transition-colors duration-300 group/link"
                    >
                      Read the Feature
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
