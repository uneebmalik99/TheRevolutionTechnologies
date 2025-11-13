'use client'

import { motion } from 'framer-motion'
import { FiAward, FiShield, FiUsers, FiGlobe } from 'react-icons/fi'

export default function TrustIndicators() {
  const indicators = [
    {
      icon: FiAward,
      title: 'Award-Winning',
      description: 'Recognized for excellence in digital innovation',
    },
    {
      icon: FiShield,
      title: 'ISO Certified',
      description: 'Quality management and security standards',
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: '35+ certified professionals across disciplines',
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Serving clients across 20+ countries',
    },
  ]

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 mb-4">
                  <Icon className="w-8 h-8 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{indicator.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

