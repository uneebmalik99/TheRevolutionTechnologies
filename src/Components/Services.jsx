'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Import animations
import webDevelopmentAnimation from '@/Animations/webdevelopment.json'
import mobileAppAnimation from '@/Animations/mobileapp.json'
import seoAnimation from '@/Animations/seo.json'
import uiuxDesignAnimation from '@/Animations/uiuxdesign.json'
import socialMediaMarketingAnimation from '@/Animations/socialmediamarketing.json'
import customSoftwareDevelopmentAnimation from '@/Animations/customsoftwaredevelopment.json'

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Frontend Development, Backend Development, Full Stack Solutions',
    features: ['Frontend Development', 'Backend Development', 'Full Stack Solutions'],
    animation: webDevelopmentAnimation,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobile',
    title: 'App Development',
    description: 'iOS Development, Android Development, Cross-Platform Solutions',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Solutions'],
    animation: mobileAppAnimation,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'On-Page SEO, Off-Page SEO, Technical SEO',
    features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO'],
    animation: seoAnimation,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'uiux',
    title: 'UI/UX Graphic Design',
    description: 'User Interface Design, User Experience Optimization, Wireframing',
    features: ['User Interface Design', 'User Experience Optimization', 'Wireframing'],
    animation: uiuxDesignAnimation,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    description: 'Content Strategy, Paid Advertising, Analytics and Reporting',
    features: ['Content Strategy', 'Paid Advertising', 'Analytics and Reporting'],
    animation: socialMediaMarketingAnimation,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    description: 'Custom ERP Solutions, Enterprise Software, Tailored Applications',
    features: ['Custom ERP Solutions', 'Enterprise Software', 'Tailored Applications'],
    animation: customSoftwareDevelopmentAnimation,
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function Services() {
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-xs font-semibold uppercase tracking-[0.25em] text-primary-900">
            Capabilities
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary-900">
            Solutions engineered for enterprise impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            From strategy through delivery, our cross-functional teams design and launch digital experiences
            that deliver measurable value. Every engagement is backed by repeatable frameworks, senior leadership,
            and transparent delivery cadences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-full rounded-3xl border border-primary-100/60 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 border border-primary-100">
                  {mounted && (
                    <Lottie
                      animationData={service.animation}
                      loop={true}
                      className="h-12 w-12"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900">{service.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-gray-500 font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-900/80"></span>
                    <span className="flex-1 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-primary-50 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                  Engagement score
                </span>
                <span className="text-sm font-semibold text-primary-900">
                  {hoveredIndex === index ? 'Available Now' : 'Recommended'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 grid lg:grid-cols-[1fr_auto] gap-12 items-center rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50/70 via-white to-primary-50/40 p-10 md:p-14 shadow-xl"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold uppercase tracking-[0.25em] text-primary-900 shadow-sm">
              Delivery assurance
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-900">
              A partner with reach—and accountability
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our practitioners operate across North America, Europe, and the Middle East, combining
              local market knowledge with global delivery hubs. Structured governance, transparent
              communications, and measurable KPIs ensure every initiative stays on course.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white border border-primary-100 px-6 py-5 shadow-sm">
              <span className="block text-3xl font-extrabold text-primary-900">24/7</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
                Global delivery coverage
              </span>
            </div>
            <div className="rounded-2xl bg-white border border-primary-100 px-6 py-5 shadow-sm">
              <span className="block text-3xl font-extrabold text-primary-900">45%</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
                Faster time-to-value
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

