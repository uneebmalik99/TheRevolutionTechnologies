'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  { name: 'ECOMMERCE', image: '/images/F1.png' },
  { name: 'BEAUTY & WELLNESS', image: '/images/F2.png' },
  { name: 'HEALTH', image: '/images/F3.png' },
  { name: 'REAL ESTATE', image: '/images/F4.png' },
  { name: 'ON DEMAND SERVICES', image: '/images/F5.png' },
  { name: 'FINANCE', image: '/images/F6.png' },
  { name: 'INDUSTRIALS', image: '/images/F7.png' },
  { name: 'TRAVEL AND TOURISM', image: '/images/F8.png' },
  { name: 'AVAITION', image: '/images/F9.png' },
  { name: 'EDUCATION', image: '/images/F10.png' },
]

const values = [
  { name: 'FLEXIBILITY', image: '/images/flexbility.png' },
  { name: 'EMPOWERMENT', image: '/images/exp2.png' },
  { name: 'INCLUSIVITY', image: '/images/exp3.png' },
  { name: 'DISCIPLINE', image: '/images/exp4.png' },
  { name: 'GROWTH MINDSET', image: '/images/exp5.png' },
]

export default function Expert() {
  const [activeTab, setActiveTab] = useState('industries')

  const tabs = [
    { id: 'industries', label: 'Industries' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'values', label: 'Values' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-900">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Why The Revolution <span className="bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">Technologies</span> Experts
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-900 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-yellow to-accent-yellow-dark text-primary-900 shadow-xl scale-105 ring-2 ring-accent-yellow/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200 hover:border-primary-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          We go the extra mile to ensure everyone feels safe, valued, and motivated in the workspace
        </motion.p>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'industries' && (
            <motion.div
              key="industries"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-50 flex items-center justify-center">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      width={30}
                      height={52}
                      className="object-contain"
                      priority={index < 5}
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {industry.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-yellow/15 flex items-center justify-center">
                    <Image
                      src={value.image}
                      alt={value.name}
                      width={52}
                      height={52}
                      className="object-contain"
                      priority={index < 3}
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {value.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="bg-gradient-to-br from-primary-50 via-white to-accent-yellow/5 rounded-3xl p-10 md:p-14 shadow-xl border border-primary-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-6xl text-primary-900/20 font-serif mb-4">"</div>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                    It was nice working with your team because no matter what ideas we come with, 
                    you guys know how to implement them! Great work, guys! Our app has never looked 
                    better, ever. Thank you.
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/g9.png"
                  alt="Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

