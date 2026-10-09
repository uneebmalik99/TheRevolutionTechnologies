'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '@/components/ui/SiteImage'
import Link from 'next/link'
import {
  FiCode,
  FiSmartphone,
  FiSearch,
  FiPenTool,
  FiSettings,
  FiArrowRight,
} from 'react-icons/fi'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import FAQ from '@/components/FAQ'
import { engagementFaqs } from '@/components/faqData'

const portfolioData = [
  {
    id: 1,
    image: '/images/ios1.png',
    title: 'American Shipping and Towing',
    category: 'IOS App',
    description:
      'Enterprise mobile solution for logistics management with real-time tracking and automated workflows.',
    tech: ['Swift', 'iOS', 'Firebase'],
  },
  {
    id: 2,
    image: '/images/ios5.png',
    title: 'Olfat Shipping',
    category: 'IOS App',
    description:
      'Comprehensive shipping management platform with integrated payment processing and route optimization.',
    tech: ['Swift', 'Core Data', 'MapKit'],
  },
  {
    id: 3,
    image: '/images/ios2.png',
    title: 'ASL Shipping',
    category: 'IOS App',
    description:
      'Advanced logistics application with AI-powered route planning and customer engagement tools.',
    tech: ['Swift', 'Machine Learning', 'CloudKit'],
  },
  {
    id: 4,
    image: '/images/imgport22.png',
    title: 'Galaxy World Wide',
    category: 'Web Development',
    description:
      'Modern e-commerce platform with advanced inventory management and multi-vendor support.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 7,
    image: '/images/Instagram post - 45.png',
    title: 'Health Care Pronto',
    category: 'Web Development',
    description:
      'Healthcare management system with patient portals, appointment scheduling, and telemedicine capabilities.',
    tech: ['Next.js', 'PostgreSQL', 'WebRTC'],
  },
  {
    id: 8,
    image: '/images/Instagram post - 45.png',
    title: 'UI/UX Design System',
    category: 'UI/UX Graphics',
    description:
      'Comprehensive design system with component library, style guide, and accessibility standards.',
    tech: ['Figma', 'Design Tokens', 'Prototyping'],
  },
  {
    id: 9,
    image: '/images/Instagram post - 45.png',
    title: 'Business Automation Suite',
    category: 'Automation',
    description:
      'Enterprise automation platform streamlining workflows and reducing manual processes.',
    tech: ['Python', 'RPA', 'API Integration'],
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
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
  { value: '20+', label: 'Countries' },
]

const featuredProducts = [
  {
    id: 'a1-global',
    badge: 'Featured Product',
    title: 'A1 Global Logistics Suite',
    description:
      'A unified command center for international shipping teams. The platform synchronizes fleet tracking, warehouse inventory, and customer communication across iOS, Android, and web.',
    highlights: [
      '42% faster dispatch planning',
      'Real-time visibility for 150+ routes',
      'Integrated customer portal & billing',
    ],
    metrics: [
      { label: 'Active Fleets', value: '85+' },
      { label: 'Markets Served', value: '27' },
      { label: 'Platform Uptime', value: '99.9%' },
    ],
    image: '/images/ios1.png',
    images: null,
    cta: { label: 'Explore Case Study', href: '/contact' },
  },
  {
    id: 'envoy',
    badge: 'Newly Launched',
    title: 'Envoy Hotel',
    description:
      'A comprehensive hotel management platform that unifies booking systems, guest services, and property operations, with AI-powered insights for personalized service.',
    highlights: [
      'Streamlined booking and check-in process',
      'Real-time room availability and inventory management',
      'Personalized guest experiences powered by AI insights',
    ],
    metrics: [
      { label: 'Properties Live', value: '42' },
      { label: 'Monthly Bookings', value: '120K' },
      { label: 'Guest Satisfaction', value: '+67%' },
    ],
    image: null,
    images: ['/images/ennvoy.png', '/images/ennvoy1.png', '/images/ennvoy2.png'],
    cta: { label: 'View Envoy Demo', href: 'https://www.envoyhotel.com/' },
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory)

  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Our work"
        title="Projects that drive success"
        description="Innovative solutions that have transformed businesses and delivered measurable results across industries."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Featured products */}
      <Section eyebrow="Featured products" title="Products we're proud of">
        <div className="space-y-10">
          {featuredProducts.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.05}>
              <div className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-card md:p-10 lg:grid-cols-2">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700">
                    {product.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    {product.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{product.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {product.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-700" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {product.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-3 text-center"
                      >
                        <div className="text-lg font-bold text-primary-900">{metric.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Button href={product.cta.href} icon>
                      {product.cta.label}
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                  {product.images ? (
                    <div className="grid grid-cols-3 gap-2 p-3">
                      {product.images.map((image, imageIdx) => (
                        <div
                          key={image}
                          className="relative h-32 overflow-hidden rounded-lg border border-gray-200"
                        >
                          <Image
                            src={image}
                            alt={`${product.title} screen ${imageIdx + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={900}
                      height={640}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Filter + grid */}
      <Section bg="gray" eyebrow="Portfolio" title="Explore our projects">
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-900 text-white'
                    : 'border border-gray-300 bg-white text-gray-700 hover:border-primary-900 hover:text-primary-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-900 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-900"
                  >
                    Discuss a similar project
                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-gray-500">
            No projects found in this category yet.
          </p>
        )}
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Working with us on a project">
        <div className="mx-auto max-w-3xl">
          <FAQ items={engagementFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Ready to start your project?"
        description="Let's discuss how we can bring your vision to life with the right team and technology."
        secondaryHref="/services"
        secondaryLabel="Browse services"
      />
    </div>
  )
}
