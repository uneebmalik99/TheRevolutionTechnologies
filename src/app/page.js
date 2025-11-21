'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiUsers,
  FiAward,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiCloud,
  FiTarget,
  FiClock,
  FiStar,
} from 'react-icons/fi'

const heroStats = [
  { label: 'Products launched', value: '150+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Countries served', value: '20+' },
]

const heroHighlights = [
  {
    title: 'Product leadership',
    detail: 'Fractional heads of product, design, and engineering embedded with your team.',
  },
  {
    title: 'Velocity + craft',
    detail: 'Dual-track agile squads that ship ambitious releases every 2 weeks.',
  },
  {
    title: 'Enterprise rigor',
    detail: 'Security reviews, documentation, and observability baked into every sprint.',
  },
]

const heroShowcase = [
  {
    badge: 'Live',
    title: 'Global logistics OS',
    meta: 'Web • Cloud • Data',
    impact: '42% faster dispatch decisions',
  },
  {
    badge: 'Beta',
    title: 'Fintech super app',
    meta: 'iOS • Android • Payments',
    impact: '3M users onboarded in 7 months',
  },
  {
    badge: 'Discovery',
    title: 'Retail intelligence suite',
    meta: 'AI • Automation • Analytics',
    impact: 'Automated insights for 1K+ stores',
  },
]

const solutions = [
  {
    icon: FiMonitor,
    title: 'Enterprise Web Platforms',
    desc: 'Composable architectures, headless CMS, and custom integrations built for scale.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Experiences',
    desc: 'Native-quality iOS and Android apps with shared codebases and delightful UX.',
  },
  {
    icon: FiLayers,
    title: 'Product Discovery',
    desc: 'Design sprints, rapid prototyping, and CX research to validate ideas before build.',
  },
  {
    icon: FiCpu,
    title: 'Intelligent Automation',
    desc: 'Workflow automation, AI copilots, and data platforms that unlock new efficiencies.',
  },
]

const process = [
  { title: 'Co-create the vision', text: 'In-depth workshops to align strategy, users, and value.' },
  { title: 'Design with intent', text: 'Prototypes and systems thinking to shape the right product.' },
  { title: 'Build in public', text: 'Transparent sprints, live demos, and measurable increments.' },
  { title: 'Launch + evolve', text: 'Adoption playbooks, observability, and continuous improvement.' },
]

const caseStudies = [
  {
    title: 'Logistics Command Center',
    category: 'Enterprise platform',
    result: 'Reduced dispatch times by 42%',
    image: '/images/imgport22.png',
  },
  {
    title: 'Fintech Super App',
    category: 'Mobile + Cloud',
    result: '3M users onboarded in 7 months',
    image: '/images/ios1.png',
  },
  {
    title: 'Retail Intelligence Suite',
    category: 'Data & AI',
    result: 'Automated insights for 1K+ stores',
    image: '/images/imgport33.png',
  },
]

const testimonials = [
  {
    quote:
      'They feel less like a vendor and more like a strategic co-founder. Every sprint ends with something tangible and thoughtful.',
    person: 'Sarah Bennett',
    title: 'Chief Digital Officer, Beacon Logistics',
  },
  {
    quote:
      'From discovery to launch, their team challenged assumptions and shipped an experience our customers genuinely love.',
    person: 'Rizwan Khalid',
    title: 'Founder, PayFloat',
  },
]

const partners = [
  { name: 'Mesob Store', image: '/images/meso.jpg' },
  { name: 'AFG Shipping', image: '/images/afg.webp' },
  { name: '3Line Shipping', image: '/images/3line.webp' },
]

const whyChooseUs = [
  {
    icon: FiAward,
    title: 'Award-Winning Quality',
    description: 'Recognized for excellence in digital innovation and client satisfaction.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FiZap,
    title: 'Lightning Fast Delivery',
    description: 'Agile methodologies ensure rapid development without compromising quality.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Bank-level security protocols protect your data and applications.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering measurable business impact and ROI.',
    color: 'from-purple-500 to-pink-500',
  },
]

const technologies = [
  { name: 'React', category: 'Frontend', icon: FiLayers },
  { name: 'Next.js', category: 'Frontend', icon: FiGlobe },
  { name: 'Node.js', category: 'Backend', icon: FiCpu },
  { name: 'Python', category: 'Backend', icon: FiCode },
  { name: 'Flutter', category: 'Mobile', icon: FiSmartphone },
  { name: 'React Native', category: 'Mobile', icon: FiSmartphone },
  { name: 'AWS', category: 'Cloud', icon: FiCloud },
  { name: 'Docker', category: 'DevOps', icon: FiCpu },
  { name: 'MongoDB', category: 'Database', icon: FiDatabase },
  { name: 'PostgreSQL', category: 'Database', icon: FiDatabase },
  { name: 'TypeScript', category: 'Language', icon: FiCode },
  { name: 'GraphQL', category: 'API', icon: FiLayers },
]

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <PartnerBand />
      <WhyChooseUsSection />
      <SolutionsSection />
      <TechnologiesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <QuickStats />
      <ContactCta />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-900"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider text-white/90">
              <FiGlobe className="w-4 h-4 text-accent-yellow" />
              Leading Digital Solutions Provider Since 2015
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Transform Your Business with
            <br />
            <span className="bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-clip-text text-transparent">
              Innovative Technology Solutions
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/85 leading-relaxed mb-12 max-w-3xl mx-auto font-medium"
          >
            We deliver cutting-edge web development, mobile applications, and digital transformation services 
            that drive growth and competitive advantage for businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent-yellow/50"
              >
                <span>Get Started Today</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <span>View Our Work</span>
                <FiArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-white to-accent-yellow bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32  pointer-events-none"></div>
    </section>
  )
}

function PartnerBand() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-row ">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="flex gap-10 sm:gap-16 items-center flex-row "
        >
          <div className="flex-row flex">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-4 sm:gap-6 mr-10 sm:mr-16 flex-row">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="text-sm sm:text-base font-semibold text-primary-900 whitespace-nowrap">
                {partner.name}
              </div>
            </div>
          ))}
          </div>
         
        </marquee>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary-900"
          >
            Excellence in Every Project
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-black text-primary-900 mb-3 relative z-10 group-hover:text-primary-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{item.description}</p>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-3"
          >
            Technology Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary-900 mb-4"
          >
            Built with Modern Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We leverage cutting-edge tools and frameworks to deliver scalable, performant solutions
          </motion.p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group bg-white rounded-2xl border-2 border-gray-200 p-6 text-center shadow-md hover:shadow-xl hover:border-primary-300 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-6 h-6 text-primary-900" />
                  </div>
                </motion.div>
                <div className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-800 transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  {tech.category}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-2"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary-900"
            >
              Comprehensive Digital Solutions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-900 font-bold text-lg hover:text-primary-800 transition-colors group"
            >
              Explore all services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <FiArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div
                  className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 text-white mb-6 relative z-10 shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-black text-primary-900 mb-4 relative z-10 group-hover:text-primary-800 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10 text-lg">{solution.desc}</p>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-yellow/20 via-primary-100/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-3">
            Delivery Model
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary-900">
            A modern operating system for product delivery
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-gray-100 p-6 bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary-900 text-white font-black text-lg flex items-center justify-center mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                0{index + 1}
              </motion.div>
              <h3 className="text-xl font-black text-primary-900 mb-3 relative z-10 group-hover:text-primary-800 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">{step.text}</p>
              {/* Animated connecting line on hover */}
              {index < process.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200 opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
              Case studies
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Recent launches</h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent-yellow font-semibold"
          >
            View all case studies
            <FiArrowUpRight />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden group cursor-pointer relative"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={study.image} alt={study.title} fill className="object-cover" />
                </motion.div>
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* View button on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-3 bg-accent-yellow text-primary-900 font-bold rounded-xl shadow-xl"
                  >
                    View Case Study
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-2">
                  {study.category}
                </p>
                <h3 className="text-2xl font-black mb-3 group-hover:text-accent-yellow transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/80">{study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-3">
            Voices of our partners
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary-900">
            What leaders say about working with us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.person}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-pointer"
            >
              {/* Quote icon */}
              <motion.div
                className="absolute top-6 right-6 text-primary-100 text-6xl font-black opacity-20 group-hover:opacity-30 transition-opacity"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                "
              </motion.div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10 group-hover:text-gray-900 transition-colors">
                "{testimonial.quote}"
              </p>
              <div className="relative z-10">
                <p className="text-xl font-black text-primary-900 group-hover:text-primary-800 transition-colors">
                  {testimonial.person}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuickStats() {
  const stats = [
    { value: 150, label: 'Products Launched', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 20, label: 'Countries Served', suffix: '+' },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="flex flex-col items-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-accent-yellow/50 via-accent-yellow/30 to-accent-yellow/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 p-10 text-center shadow-2xl hover:bg-white/15 transition-all duration-500">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 0.3}
                    isDark={true}
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent-yellow rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent-yellow rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted By Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <motion.p
              className="text-2xl md:text-3xl font-bold text-white/90 uppercase tracking-[0.3em]"
              animate={{
                letterSpacing: ['0.3em', '0.4em', '0.3em'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Trusted by Industry Leaders
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-accent-yellow/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ end, suffix, label, delay = 0, isDark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2500
    const steps = 80
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="cursor-default relative"
    >
      {/* Animated number with glow effect */}
      <motion.div
        className={`text-6xl md:text-7xl lg:text-8xl font-black mb-4 relative ${
          isDark
            ? 'text-accent-yellow'
            : 'text-primary-900'
        }`}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ 
          duration: 0.8, 
          delay: delay + 0.2, 
          type: 'spring',
          stiffness: 200,
          damping: 15
        }}
      >
        {/* Glow effect behind number */}
        <motion.div
          className={`absolute inset-0 blur-2xl ${
            isDark ? 'bg-accent-yellow/30' : 'bg-primary-900/20'
          }`}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="relative z-10">{count}{suffix}</span>
      </motion.div>
      
      {/* Label with animation */}
      <motion.div
        className={`text-sm md:text-base uppercase tracking-[0.2em] font-bold ${
          isDark ? 'text-white' : 'text-gray-600'
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

function ContactCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Let’s build something together</h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us about your product vision, and we’ll assemble the right squad to make it real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Book a call</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/company"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 border-2 border-gray-500 text-white font-bold rounded-xl hover:bg-gray-600 hover:border-gray-400 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10">Learn about us</span>
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FiArrowUpRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

