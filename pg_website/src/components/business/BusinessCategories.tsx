

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface BusinessItem {
  id: number;
  title: string;
  description: string;
}

interface CategoryData {
  operations: BusinessItem[];
  products: BusinessItem[];
  units: BusinessItem[];
}

interface BusinessCategoriesProps {
  categoryData: CategoryData;
}

const BusinessCategories = ({ categoryData }: BusinessCategoriesProps) => {
  const [activeTab, setActiveTab] = useState<'operations' | 'products' | 'units'>('operations');

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.8 },
    active: { scale: 1.05, opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      y: -5, 
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Category theme configurations
  const categoryThemes = {
    operations: {
      gradient: "from-blue-500 to-indigo-600",
      cardGradient: "from-blue-50 to-indigo-50",
      border: "border-blue-100",
      accent: "bg-blue-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    products: {
      gradient: "from-emerald-500 to-teal-600",
      cardGradient: "from-emerald-50 to-teal-50",
      border: "border-emerald-100",
      accent: "bg-emerald-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    units: {
      gradient: "from-purple-500 to-pink-600",
      cardGradient: "from-purple-50 to-pink-50",
      border: "border-purple-100",
      accent: "bg-purple-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  };

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 rounded-full filter blur-3xl opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Custom Tabs - Centered with reduced top margin */}
        <div className="flex justify-center mb-10 mt-4">
          <div className="bg-white rounded-xl shadow-xl p-3 flex flex-wrap md:flex-nowrap gap-4">
            {(['operations', 'products', 'units'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-4 rounded-lg font-semibold transition-all text-lg flex items-center justify-center min-w-[180px] ${
                  activeTab === tab 
                    ? `bg-gradient-to-r ${categoryThemes[tab].gradient} text-white shadow-lg` 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-100'
                }`}
                variants={tabVariants}
                animate={activeTab === tab ? 'active' : 'inactive'}
                whileHover={{ 
                  scale: activeTab === tab ? 1.05 : 1.03,
                  boxShadow: activeTab === tab ? "0 10px 15px -3px rgba(0, 0, 0, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className={`mr-3 ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}>{categoryThemes[tab].icon}</span>
                <span className="text-base">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-7xl mx-auto"
          >
            <Card className="border-none shadow-2xl rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
              {/* Gradient header */}
              <div className={`h-2 w-full bg-gradient-to-r ${categoryThemes[activeTab].gradient}`}></div>
              
              <CardContent className="p-8 md:p-10">
                {activeTab === 'operations' && categoryData.operations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.operations.map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        whileHover="hover"
                        className={`bg-gradient-to-br ${categoryThemes.operations.cardGradient} rounded-xl overflow-hidden border ${categoryThemes.operations.border} relative`}
                        style={{ height: "450px" }} // Fixed height
                      >
                        {/* Top accent */}
                        <div className={`h-1 w-full bg-gradient-to-r ${categoryThemes.operations.gradient}`}></div>
                        
                        <div className="p-6 flex flex-col h-full">
                          {/* Decorative elements */}
                          <motion.div 
                            className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${categoryThemes.operations.accent} opacity-20`}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 45, 0],
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          
                          <h4 className="text-xl font-bold text-gray-800 mb-4 relative">
                            {item.title}
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "40%" }}
                              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                              className={`h-0.5 bg-gradient-to-r ${categoryThemes.operations.gradient} mt-2 opacity-60`}
                            />
                          </h4>
                          
                          {/* Scrollable content area */}
                          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                            <div
                              className="text-gray-600 prose max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : activeTab === 'products' && categoryData.products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.products.map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        whileHover="hover"
                        className={`bg-gradient-to-br ${categoryThemes.products.cardGradient} rounded-xl overflow-hidden border ${categoryThemes.products.border} relative`}
                        style={{ height: "450px" }} // Fixed height
                      >
                        {/* Top accent */}
                        <div className={`h-1 w-full bg-gradient-to-r ${categoryThemes.products.gradient}`}></div>
                        
                        <div className="p-6 flex flex-col h-full">
                          {/* Decorative elements */}
                          <motion.div 
                            className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${categoryThemes.products.accent} opacity-20`}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 45, 0],
                            }}
                            transition={{ 
                              duration: 9,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          
                          <h4 className="text-xl font-bold text-gray-800 mb-4 relative">
                            {item.title}
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "40%" }}
                              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                              className={`h-0.5 bg-gradient-to-r ${categoryThemes.products.gradient} mt-2 opacity-60`}
                            />
                          </h4>
                          
                          {/* Scrollable content area */}
                          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                            <div
                              className="text-gray-600 prose max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : activeTab === 'units' && categoryData.units.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.units.map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        whileHover="hover"
                        className={`bg-gradient-to-br ${categoryThemes.units.cardGradient} rounded-xl overflow-hidden border ${categoryThemes.units.border} relative`}
                        style={{ height: "450px" }} // Fixed height
                      >
                        {/* Top accent */}
                        <div className={`h-1 w-full bg-gradient-to-r ${categoryThemes.units.gradient}`}></div>
                        
                        <div className="p-6 flex flex-col h-full">
                          {/* Decorative elements */}
                          <motion.div 
                            className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${categoryThemes.units.accent} opacity-20`}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 45, 0],
                            }}
                            transition={{ 
                              duration: 8.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          
                          <h4 className="text-xl font-bold text-gray-800 mb-4 relative">
                            {item.title}
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "40%" }}
                              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                              className={`h-0.5 bg-gradient-to-r ${categoryThemes.units.gradient} mt-2 opacity-60`}
                            />
                          </h4>
                          
                          {/* Scrollable content area */}
                          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                            <div
                              className="text-gray-600 prose max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    variants={itemVariants}
                    className="py-16 text-center"
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-r ${categoryThemes[activeTab].gradient} text-white inline-block mb-6`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xl">
                      No items found for this category.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Add a style for custom scrollbars */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.4);
        }
      `}</style>
    </section>
  );
};

export default BusinessCategories;