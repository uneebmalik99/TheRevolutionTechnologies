'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const portfolioData = [
  {
    image: '/images/ios1.png',
    title: 'American Shipping and Towing',
    category: 'IOS App',
  },
  {
    image: '/images/ios5.png',
    title: 'Olfat Shipping',
    category: 'IOS App',
  },
  {
    image: '/images/ios2.png',
    title: 'ASL Shipping',
    category: 'IOS App',
  },
  {
    image: '/images/imgport22.png',
    title: 'Galaxy world wide',
    category: 'Web Development',
  },
  {
    image: '/images/imgport33.png',
    title: 'Galaxy world wide',
    category: 'Mobile App',
  },
  {
    image: '/images/imgport11.png',
    title: 'Galaxy world wide',
    category: 'IOS App',
  },
  {
    image: '/images/Instagram post - 45.png',
    title: 'Health care Pronto',
    category: 'Web Development',
  },
  {
    image: '/images/Instagram post - 45.png',
    title: 'UI/UX Design Project',
    category: 'UI/UX Graphics',
  },
  {
    image: '/images/Instagram post - 45.png',
    title: 'Automation',
    category: 'Automation',
  },
  {
    image: '/images/Instagram post - 45.png',
    title: 'SEO',
    category: 'SEO',
  },
]

const categories = ['All', 'IOS App', 'Web Development', 'Mobile App', 'UI/UX Graphics', 'Automation', 'SEO']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-xs font-semibold uppercase tracking-[0.25em] text-primary-900">
            Case Studies
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary-900">
            Demonstrating outcomes across industries
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Explore a selection of programs where we modernized legacy platforms, launched new digital
            products, and scaled operations alongside our clients.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                selectedCategory === category
                  ? 'border-primary-900 bg-primary-900 text-white'
                  : 'border-gray-200 text-gray-700 hover:border-primary-200 hover:text-primary-900'
              }`}
            >
              {category === 'IOS App' ? 'Mobile App (Android/iOS)' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex h-full flex-col rounded-3xl border border-primary-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary-900">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Digitally enabled solution designed to streamline operations and deliver measurable
                  efficiency gains across the organization.
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary-50">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                    View Details
                  </span>
                  <span className="text-primary-900 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Case Study →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

