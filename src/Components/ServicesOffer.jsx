'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiSmartphone, 
  FiSearch, 
  FiPenTool, 
  FiShare2, 
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
  FiZap,
  FiShield,
  FiTrendingUp
} from 'react-icons/fi'
import Link from 'next/link'

const services = [
  {
    id: 'web',
    icon: FiCode,
    title: 'Web Development',
    tagline: 'Build powerful digital experiences',
    description: 'Transform your vision into high-performance web applications that scale with your business.',
    features: [
      'Custom full-stack solutions',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'API integration & development',
      'Performance optimization',
      'Cloud deployment'
    ],
    benefits: [
      'Faster load times',
      'Mobile-first design',
      'SEO optimized'
    ],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    accent: 'bg-blue-600',
    stats: { projects: '200+', satisfaction: '98%' }
  },
  {
    id: 'mobile',
    icon: FiSmartphone,
    title: 'Mobile App Development',
    tagline: 'Native & cross-platform excellence',
    description: 'Create engaging mobile experiences that users love, available on iOS, Android, and beyond.',
    features: [
      'Native iOS & Android apps',
      'React Native development',
      'Flutter applications',
      'App Store optimization',
      'Push notifications',
      'In-app analytics'
    ],
    benefits: [
      'Faster development',
      'Single codebase',
      'Native performance'
    ],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    accent: 'bg-purple-600',
    stats: { projects: '150+', satisfaction: '97%' }
  },
  {
    id: 'seo',
    icon: FiSearch,
    title: 'SEO & Digital Visibility',
    tagline: 'Dominate search results',
    description: 'Strategic SEO that drives organic traffic, improves rankings, and boosts your online presence.',
    features: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'Content optimization',
      'Link building campaigns',
      'Local SEO services',
      'Analytics & reporting'
    ],
    benefits: [
      'Higher rankings',
      'More organic traffic',
      'Better ROI'
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    accent: 'bg-green-600',
    stats: { projects: '300+', satisfaction: '96%' }
  },
  {
    id: 'uiux',
    icon: FiPenTool,
    title: 'UI/UX Design',
    tagline: 'Design that converts',
    description: 'Beautiful, intuitive interfaces that delight users and drive business results.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interaction design',
      'Usability testing',
      'Design handoff'
    ],
    benefits: [
      'Better user experience',
      'Higher conversions',
      'Brand consistency'
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    accent: 'bg-orange-600',
    stats: { projects: '180+', satisfaction: '99%' }
  },
  {
    id: 'marketing',
    icon: FiShare2,
    title: 'Social Media Marketing',
    tagline: 'Engage, grow, convert',
    description: 'Strategic social media campaigns that build communities and drive measurable business growth.',
    features: [
      'Content strategy & creation',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Social listening',
      'Performance analytics'
    ],
    benefits: [
      'Brand awareness',
      'Engaged audience',
      'Lead generation'
    ],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    accent: 'bg-indigo-600',
    stats: { projects: '250+', satisfaction: '95%' }
  },
  {
    id: 'custom',
    icon: FiSettings,
    title: 'Custom Software Development',
    tagline: 'Tailored solutions for your business',
    description: 'Enterprise-grade software built specifically for your unique business processes and requirements.',
    features: [
      'ERP & CRM systems',
      'Business automation',
      'Data analytics platforms',
      'Integration services',
      'Legacy system modernization',
      'Ongoing support & maintenance'
    ],
    benefits: [
      'Streamlined operations',
      'Scalable architecture',
      '24/7 support'
    ],
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    accent: 'bg-teal-600',
    stats: { projects: '120+', satisfaction: '98%' }
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function ServicesOffer() {
  const [mounted, setMounted] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
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
              <FiZap className="w-4 h-4 text-accent-yellow" />
              Comprehensive Digital Solutions
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Services That
              <span className="block bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end digital solutions that transform businesses and exceed expectations.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FiShield className="w-5 h-5 text-accent-yellow" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FiTrendingUp className="w-5 h-5 text-accent-yellow" />
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FiCheckCircle className="w-5 h-5 text-accent-yellow" />
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredId === service.id
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <div className="relative h-full bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-500 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-900/25 hover:-translate-y-2 shadow-xl group">
                    {/* Elegant gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03]`}></div>
                    
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-50`}></div>
                    
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}></div>
                    
                    {/* Glowing border effect on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-25 blur-2xl -z-10 transition-opacity duration-500`}></div>
                    
                    {/* Elegant corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-[0.06] rounded-bl-[3rem]`}></div>
                    
                    {/* Bottom accent glow */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-30`}></div>
                    
                    {/* Content */}
                    <div className="relative p-6 lg:p-8">
                      {/* Icon & Stats */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-3xl border-2 border-white/30`}>
                          <Icon className="w-9 h-9 text-white drop-shadow-xl" />
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent-yellow rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                            <FiCheckCircle className="w-4 h-4 text-primary-900" />
                          </div>
                          {/* Shine effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>
                          {/* Hover shine */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="text-right bg-white p-4 rounded-2xl border border-primary-100 shadow-lg group-hover:shadow-xl group-hover:border-primary-200 transition-all relative overflow-hidden">
                          {/* Subtle gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.02]`}></div>
                          <div className="relative">
                            <div className="text-3xl font-extrabold bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 bg-clip-text text-transparent">{service.stats.projects}</div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-0.5">Projects</div>
                            <div className="mt-2 text-base font-bold text-green-600">{service.stats.satisfaction}</div>
                            <div className="text-xs text-gray-500 font-medium">Satisfaction</div>
                          </div>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div className="mb-5">
                        <h3 className="text-2xl lg:text-3xl font-extrabold text-primary-900 mb-2 group-hover:text-primary-800 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`h-1 w-8 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed text-base font-medium">
                          {service.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 group-hover:border-primary-200 group-hover:shadow-md transition-all">
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`flex-shrink-0 w-2 h-2 rounded-full ${service.accent} mt-1.5 shadow-sm`}></div>
                              <span className="text-sm text-gray-700 leading-relaxed font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      
                    </div>

                    {/* Elegant decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100/20 to-transparent rounded-bl-[3rem] blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-yellow/8 to-transparent rounded-tr-[3rem] blur-xl"></div>
                    
                    {/* Hover glow effects */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent-yellow/15 to-transparent rounded-tr-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-white via-primary-50/20 to-white border-y border-gray-200 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-3">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven process that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated connecting line - only on desktop */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-40 origin-left"
            ></motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and requirements' },
                { step: '02', title: 'Strategy', desc: 'We create a detailed roadmap and technical architecture' },
                { step: '03', title: 'Development', desc: 'We build your solution with agile methodology' },
                { step: '04', title: 'Launch & Support', desc: 'We deploy and provide ongoing maintenance' }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative z-10"
                >
                  <div className="text-center group/phase">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 text-white text-2xl font-extrabold mb-4 shadow-xl group-hover/phase:shadow-2xl transition-all duration-300 relative border-2 border-white/20 mx-auto"
                    >
                      {phase.step}
                      {/* Permanent shine */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Hover shine */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/20 to-transparent opacity-0 group-hover/phase:opacity-100 transition-opacity duration-300"></div>
                      {/* Corner accent */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-accent-yellow rounded-full opacity-60"
                      ></motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="text-xl font-bold text-primary-900 mb-2 group-hover/phase:text-primary-800 transition-colors"
                    >
                      {phase.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      className="text-gray-600 leading-relaxed group-hover/phase:text-gray-700 transition-colors text-sm md:text-base"
                    >
                      {phase.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Let's discuss how our services can help you achieve your goals. Get a free consultation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="relative z-10"
                  >
                    Schedule a Consultation
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="relative z-10 ml-2"
                  >
                    <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                  <span className="relative z-10">View Our Work</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
