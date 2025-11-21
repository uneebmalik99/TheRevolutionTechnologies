'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FiCode, 
  FiSmartphone, 
  FiSearch, 
  FiPenTool, 
  FiSettings,
  FiExternalLink,
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiAward
} from 'react-icons/fi'
import { FaAndroid, FaApple } from 'react-icons/fa'

const AppStoreBadge = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="appstoreGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4facfe" />
        <stop offset="1" stopColor="#00f2fe" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="12" fill="url(#appstoreGradient)" />
    <path
      d="M12 27h16M15 13l10 14M25 13l-10 14"
      stroke="white"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PlayStoreBadge = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="12" fill="#0F172A" />
    <path d="M12 9l16 11-16 11V9z" fill="#34A853" />
    <path d="M12 9l10.5 14.5L12 31V9z" fill="#188038" />
    <path d="M28 20L12 9l7.5 10.5L28 20z" fill="#FBBC04" />
    <path d="M19.5 22.5L12 31l16-11-8.5 2.5z" fill="#EA4335" />
  </svg>
)

const portfolioData = [
  {
    id: 1,
    image: '/images/ios1.png',
    title: 'American Shipping and Towing',
    category: 'IOS App',
    description: 'Enterprise mobile solution for logistics management with real-time tracking and automated workflows.',
    tech: ['Swift', 'iOS', 'Firebase'],
    platforms: ['ios']
  },
  {
    id: 2,
    image: '/images/ios5.png',
    title: 'Olfat Shipping',
    category: 'IOS App',
    description: 'Comprehensive shipping management platform with integrated payment processing and route optimization.',
    tech: ['Swift', 'Core Data', 'MapKit'],
    platforms: ['ios']
  },
  {
    id: 3,
    image: '/images/ios2.png',
    title: 'ASL Shipping',
    category: 'IOS App',
    description: 'Advanced logistics application with AI-powered route planning and customer engagement tools.',
    tech: ['Swift', 'Machine Learning', 'CloudKit'],
    platforms: ['ios']
  },
  {
    id: 4,
    image: '/images/imgport22.png',
    title: 'Galaxy World Wide',
    category: 'Web Development',
    description: 'Modern e-commerce platform with advanced inventory management and multi-vendor support.',
    tech: ['React', 'Node.js', 'MongoDB'],
    platforms: []
  },
 
  {
    id: 7,
    image: '/images/Instagram post - 45.png',
    title: 'Health Care Pronto',
    category: 'Web Development',
    description: 'Healthcare management system with patient portals, appointment scheduling, and telemedicine capabilities.',
    tech: ['Next.js', 'PostgreSQL', 'WebRTC'],
    platforms: ['android', 'ios']
  },
  {
    id: 8,
    image: '/images/Instagram post - 45.png',
    title: 'UI/UX Design System',
    category: 'UI/UX Graphics',
    description: 'Comprehensive design system with component library, style guide, and accessibility standards.',
    tech: ['Figma', 'Design Tokens', 'Prototyping'],
    platforms: []
  },
  {
    id: 9,
    image: '/images/Instagram post - 45.png',
    title: 'Business Automation Suite',
    category: 'Automation',
    description: 'Enterprise automation platform streamlining workflows and reducing manual processes.',
    tech: ['Python', 'RPA', 'API Integration'],
    platforms: []
  },

]

const categories = [
  { id: 'All', label: 'All Projects', icon: FiCode },
  { id: 'IOS App', label: 'iOS Apps', icon: FiSmartphone },
  { id: 'Web Development', label: 'Web Apps', icon: FiCode },
  { id: 'Mobile App', label: 'Mobile Apps', icon: FiSmartphone },
  { id: 'UI/UX Graphics', label: 'UI/UX Design', icon: FiPenTool },
  { id: 'Automation', label: 'Automation', icon: FiSettings },
  { id: 'SEO', label: 'SEO', icon: FiSearch },
]

const stats = [
  { value: '150+', label: 'Projects Delivered', icon: FiCheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: FiAward },
  { value: '50+', label: 'Industries Served', icon: FiTrendingUp },
  { value: '20+', label: 'Countries', icon: FiUsers },
]

const platformIcons = {
  ios: { icon: FaApple, label: 'iOS' },
  android: { icon: FaAndroid, label: 'Android' },
}

const platformStoreBadges = {
  ios: AppStoreBadge,
  android: PlayStoreBadge,
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory)

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-28 pb-12">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
            >
              <FiAward className="w-4 h-4 text-accent-yellow" />
              Our Work
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Projects That
              <span className="block bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-clip-text text-transparent">
                Drive Success
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto">
              Explore our portfolio of innovative solutions that have transformed businesses and delivered measurable results across industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 text-center"
                  >
                    <Icon className="w-5 h-5 text-accent-yellow mx-auto mb-1.5" />
                    <div className="text-2xl font-extrabold mb-0.5">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-20 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/30'
                      : 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-900 border border-gray-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-accent-yellow' : 'text-gray-500 group-hover:text-primary-700'}`} />
                  <span className="relative z-10">{category.label}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-primary-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-primary-900 shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      {/* Store Icons */}
                      {Array.isArray(project.platforms) &&
                        project.platforms.some((platform) => platformStoreBadges[platform?.toLowerCase()]) && (
                          <div className="absolute top-4 right-4 z-10 flex gap-2">
                            {project.platforms
                              .filter((platform) => platformStoreBadges[platform?.toLowerCase()])
                              .map((platform) => {
                                const key = platform?.toLowerCase()
                                const Badge = platformStoreBadges[key]
                                if (!Badge) return null
                               
                              })}
                          </div>
                        )}

                      {/* View Button on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-3 bg-accent-yellow text-primary-900 font-bold rounded-xl shadow-xl flex items-center gap-2"
                        >
                          <span>View Project</span>
                          <FiExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-extrabold text-primary-900 mb-2 group-hover:text-primary-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-primary-50 text-primary-900 text-xs font-medium rounded-md border border-primary-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      {Array.isArray(project.results) && project.results.length > 0 && (
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex flex-wrap gap-2.5">
                            {project.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <FiCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-xs font-semibold text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-5">
                        <Link
                          href={project.caseStudy || '/contact'}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-900 border border-primary-200 rounded-xl bg-primary-50 hover:bg-primary-100 hover:border-primary-300 transition-all duration-300"
                        >
                          <span>View Case Study</span>
                          <FiExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    {/* Platform Icons bottom-right */}
                    {Array.isArray(project.platforms) && project.platforms.length > 0 && (
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {project.platforms.map((platform) => {
                          const key = platform?.toLowerCase()
                          const Badge = platformStoreBadges[key]
                          if (!Badge) return null
                          return (
                            <div
                              key={`${project.id}-${key}-corner`}
                              className="w-9 h-9"
                            >
                              <Badge className="w-9 h-9" />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1239b0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Let's discuss how we can bring your vision to life with innovative solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50"
              >
                <span>Get Started Today</span>
                <FiArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
