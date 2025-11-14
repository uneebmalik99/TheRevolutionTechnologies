'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FiAward, 
  FiUsers, 
  FiTrendingUp, 
  FiTarget,
  FiZap,
  FiHeart,
  FiGlobe,
  FiCode,
  FiCheckCircle,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiPhone
} from 'react-icons/fi'

const stats = [
  { value: '8+', label: 'Years of Excellence', icon: FiCalendar, color: 'from-blue-500 to-cyan-500' },
  { value: '150+', label: 'Projects Delivered', icon: FiCode, color: 'from-purple-500 to-pink-500' },
  { value: '35+', label: 'Team Members', icon: FiUsers, color: 'from-green-500 to-emerald-500' },
  { value: '98%', label: 'Client Satisfaction', icon: FiAward, color: 'from-yellow-500 to-orange-500' },
]

const values = [
  {
    icon: FiTarget,
    title: 'Mission-Driven',
    description: 'We are committed to delivering sustainable digital solutions that drive real business value and long-term success for our clients.',
    color: 'from-primary-600 to-primary-800'
  },
  {
    icon: FiZap,
    title: 'Innovation First',
    description: 'Embracing cutting-edge technologies and fresh ideas to keep businesses ahead in an ever-evolving digital landscape.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FiHeart,
    title: 'Client-Centric',
    description: 'Building lasting relationships through trust, transparency, and consistent delivery of exceptional results.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with scalable solutions that transcend geographical boundaries and cultural differences.',
    color: 'from-cyan-500 to-blue-500'
  },
]

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize digital solutions',
  },
  {
    year: '2017',
    title: 'First Major Client',
    description: 'Secured partnerships with leading enterprises',
  },
  {
    year: '2019',
    title: 'Team Expansion',
    description: 'Grew to 20+ talented professionals',
  },
  {
    year: '2021',
    title: 'Global Recognition',
    description: 'Reached 100+ successful projects milestone',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: 'Recognized as top digital solutions provider',
  },
]

const techPartners = [
  '/images/ibm.png',
  '/images/ibm2.png',
  '/images/ibm3.png',
  '/images/ibm4.png',
  '/images/ibm5.png',
]

const achievements = [
  'ISO Certified Quality Standards',
  'Award-Winning Design Team',
  '99.9% Uptime Guarantee',
  '24/7 Support Available',
  'Agile Development Methodology',
  'Data Security Compliant',
]

export default function CompanyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
              Our Story
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Building the Future of
              <span className="block bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto">
              A purpose-driven team dedicated to delivering sustainable digital solutions that transform businesses and drive measurable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-primary-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
                Offering Sustainable Digital Solutions to Amazing People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It is our commitment to development and providing clients sustainable solutions that we rank #1! 
                We are a purpose-driven team of developers who aim to make your success scalable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our experienced team combines creativity and technical expertise to deliver solutions that exceed expectations, 
                embracing fresh ideas and the latest technologies to keep your business ahead in a fast-changing digital world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 4).map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/aboutus.png"
                  alt="About Us"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-yellow/30 to-transparent rounded-3xl blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-primary-300/30 to-transparent rounded-3xl blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="h-full bg-white rounded-3xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold text-primary-900 mb-3 group-hover:text-primary-800 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-primary-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4">
              Milestones That Define Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key moments in our journey of growth, innovation, and excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center shadow-xl border-4 border-white">
                      <span className="text-white font-extrabold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-extrabold text-primary-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Trusted Technology Partners
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={partner}
                  alt={`Tech Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50"
              >
                <span>Get In Touch</span>
                <FiArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
