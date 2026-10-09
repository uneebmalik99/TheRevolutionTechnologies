'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import Image from '@/components/ui/SiteImage'
import Link from 'next/link'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiStar,
  FiShare2,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiAward,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiPenTool,
  FiCode,
  FiActivity,
  FiShoppingBag,
  FiTruck,
  FiHeart,
  FiBriefcase,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi'
import { FaBrain, FaAws, FaRocket } from 'react-icons/fa'
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiJira,
  SiGit,
  SiGithub,
  SiPlaywright,
  SiCypress,
  SiPostman,
  SiAppstore,
  SiGoogleplay,
  SiCloudflare,
  SiSentry,
  SiGrafana,
  SiDatadog,
} from 'react-icons/si'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import FAQ from '@/components/FAQ'
import { homeFaqs } from '@/components/faqData'

const heroStats = [
  { label: 'Products launched', value: '150+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Countries served', value: '20+' },
]

const solutions = [
  {
    icon: FiMonitor,
    title: 'Web Development',
    desc: 'Composable architectures, headless CMS, and custom integrations built to scale.',
    href: '/services#web',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Experiences',
    desc: 'Native-quality iOS and Android apps with shared codebases and delightful UX.',
    href: '/services#mobile',
  },
  {
    icon: FiCpu,
    title: 'AI & Automation',
    desc: 'Workflow automation, AI copilots, and data platforms that unlock new efficiencies.',
    href: '/services#ai',
  },
  {
    icon: FiLayers,
    title: 'Custom Software',
    desc: 'Enterprise-grade systems built around your processes, from discovery to launch.',
    href: '/services#custom',
  },
]

const industries = [
  {
    icon: FiShoppingBag,
    title: 'E-Commerce & Retail',
    desc: 'Storefronts, inventory, and personalised buying experiences that convert.',
  },
  {
    icon: FiTruck,
    title: 'Logistics & Shipping',
    desc: 'Fleet tracking, route planning, and customer portals for shipping teams.',
  },
  {
    icon: FiHeart,
    title: 'Healthcare & Wellness',
    desc: 'Patient portals, scheduling, and telemedicine with security built in.',
  },
  {
    icon: FiBriefcase,
    title: 'Hospitality & Travel',
    desc: 'Booking systems, guest services, and operations for properties and venues.',
  },
  {
    icon: FiDollarSign,
    title: 'Fintech',
    desc: 'Payments, onboarding, and dashboards engineered for trust and compliance.',
  },
  {
    icon: FiSettings,
    title: 'Custom Software & Automation',
    desc: 'Internal tools, integrations, and automation that remove manual work.',
  },
]

const whyChooseUs = [
  {
    icon: FiAward,
    title: 'Award-Winning Quality',
    description: 'Recognised for excellence in digital innovation and client satisfaction.',
  },
  {
    icon: FiZap,
    title: 'Fast, Predictable Delivery',
    description: 'Agile squads ship working increments every sprint without cutting corners.',
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Security reviews, access control, and observability baked into every build.',
  },
  {
    icon: FiTrendingUp,
    title: 'Measurable Results',
    description: 'A track record of delivering real business impact and return on investment.',
  },
]

const technologies = [
  { name: 'AI & Machine Learning', category: 'Artificial Intelligence', icon: FaBrain, color: '#7c3aed' },
  { name: 'Automation & Workflows', category: 'Automation', icon: FiZap, color: '#0ea5e9' },
  { name: 'n8n', category: 'Workflow Automation', icon: FiShare2, color: '#ea4b71' },
  { name: 'Python', category: 'Backend / AI', icon: SiPython, color: '#3776ab' },
  { name: 'React', category: 'Frontend', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#0f172a' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'React Native', category: 'Mobile', icon: SiReact, color: '#61dafb' },
  { name: 'Flutter', category: 'Mobile', icon: SiFlutter, color: '#02569b' },
  { name: 'AWS', category: 'Cloud', icon: FaAws, color: '#ff9900' },
  { name: 'Docker', category: 'DevOps', icon: SiDocker, color: '#2496ed' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47a248' },
  { name: 'TypeScript', category: 'Language', icon: SiTypescript, color: '#3178c6' },
  { name: 'GraphQL', category: 'API', icon: SiGraphql, color: '#e10098' },
]

const process = [
  { title: 'Co-create the vision', text: 'Workshops to align strategy, users, and business value.' },
  { title: 'Design with intent', text: 'Prototypes and systems thinking to shape the right product.' },
  { title: 'Build in the open', text: 'Transparent sprints, live demos, and measurable increments.' },
  { title: 'Launch and evolve', text: 'Adoption support, observability, and continuous improvement.' },
]

const lifecycle = [
  {
    step: 'Step 1',
    title: 'Planning',
    icon: FiFileText,
    desc: 'We gather and analyze business requirements to define clear project goals.',
    action: { label: 'View Specifications', href: '/contact' },
  },
  {
    step: 'Step 2',
    title: 'Designs',
    icon: FiPenTool,
    desc: 'UI/UX and system architecture are designed for optimal performance and usability.',
    action: { label: 'View Design', href: '/contact' },
  },
  {
    step: 'Step 3',
    title: 'Build',
    icon: FiCode,
    desc: 'Developers build scalable and efficient solutions using modern technologies.',
    tools: [
      { name: 'Jira', icon: SiJira },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
  {
    step: 'Step 4',
    title: 'Test',
    icon: FiShield,
    desc: 'Rigorous testing ensures quality, security, and bug-free performance.',
    tools: [
      { name: 'Playwright', icon: SiPlaywright },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    step: 'Step 5',
    title: 'Deploy',
    icon: FaRocket,
    desc: 'We launch your product smoothly into production environments.',
    tools: [
      { name: 'App Store', icon: SiAppstore },
      { name: 'Google Play', icon: SiGoogleplay },
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'AWS', icon: FaAws },
    ],
  },
  {
    step: 'Step 6',
    title: 'Maintain',
    icon: FiActivity,
    desc: 'Ongoing support and updates keep your system running flawlessly.',
    tools: [
      { name: 'Sentry', icon: SiSentry },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Datadog', icon: SiDatadog },
    ],
  },
]

const caseStudies = [
  {
    type: 'web',
    icon: FiMonitor,
    category: 'Enterprise Web Platform',
    title: 'Logistics Command Center',
    description:
      'A unified command center for international shipping teams. We designed and built the dispatch console, real-time fleet map, and warehouse inventory sync into a single responsive web app — cutting average dispatch time by 42%.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    deliverables: [
      'UX research & design system',
      'Real-time web application',
      'Ops analytics dashboard',
    ],
    image: '/images/imgport22.png',
    cardBg: 'from-sky-100 to-blue-200',
    flag: 'Web',
  },
  {
    type: 'mobile',
    icon: FiSmartphone,
    category: 'iOS + Cloud',
    title: 'Fintech Super App',
    description:
      'A consumer finance app covering payments, onboarding, and spend insights. We shipped the full iOS experience with a compliance-ready KYC flow and onboarded 3M users within seven months of launch.',
    tech: ['Swift', 'Machine Learning', 'CloudKit', 'AWS'],
    deliverables: [
      'Native iOS application',
      'KYC / onboarding flow',
      'Personalised insights engine',
    ],
    image: '/images/ios1.png',
    cardBg: 'from-amber-300 to-orange-400',
    flag: 'iOS',
  },
  {
    type: 'web',
    icon: FiLayers,
    category: 'Data & AI',
    title: 'Retail Intelligence Suite',
    description:
      'An analytics workspace that turns raw store data into automated merchandising insights for 1,000+ locations. We built the ingestion pipeline, the reporting web UI, and the alerting layer end to end.',
    tech: ['React', 'Python', 'GraphQL', 'Docker'],
    deliverables: ['Data ingestion pipeline', 'Insights web console', 'Automated alerting'],
    image: '/images/imgport33.png',
    cardBg: 'from-violet-200 to-indigo-300',
    flag: 'Web',
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

const clientReviews = [
  {
    quote:
      'They feel less like a vendor and more like a strategic co-founder. Every sprint ends with something tangible and thoughtful.',
    person: 'Sarah Bennett',
    title: 'Chief Digital Officer, Beacon Logistics',
    avatar: '/images/man.png',
  },
  {
    quote:
      'From discovery to launch, their team challenged our assumptions and shipped an experience our customers genuinely love.',
    person: 'Rizwan Khalid',
    title: 'Founder, PayFloat',
    avatar: '/images/man2.png',
  },
  {
    quote:
      'Delivery was on time, on budget, and communication throughout was outstanding. We would work with them again in a heartbeat.',
    person: 'Daniel Meyer',
    title: 'VP Engineering, NorthPeak Retail',
    avatar: '/images/man3.png',
  },
  {
    quote:
      'A rare mix of design craft and engineering discipline. They turned a rough idea into a polished product our whole team is proud of.',
    person: 'Amina Yusuf',
    title: 'Head of Product, Credence Health',
    avatar: '/images/ceo.png',
  },
]

const partners = [
  { name: 'Mesob Store', image: '/images/meso.jpg' },
  { name: 'AFG Shipping', image: '/images/afg.webp' },
  { name: '3Line Shipping', image: '/images/3line.webp' },
  { name: 'Envoy Hotel', image: '/images/ennvoy.png' },
]

const recognitions = [
  { name: 'Clutch', metric: '4 Reviews', color: 'text-[#17313b]' },
  { name: 'Upwork', metric: '70+ Reviews', color: 'text-[#14a800]' },
  { name: 'LinkedIn', metric: '1k+ Community', color: 'text-[#0a66c2]' },
  { name: 'Google', metric: '30+ Reviews', color: 'text-[#4285f4]' },
]

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <PartnerBand />
      <RecognitionSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <LifecycleSection />
      <ProcessSection />
      <ClientReviewsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCta />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(26,35,126,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,35,126,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse at 50% 40%, black 35%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 40%, black 35%, transparent 78%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary-50 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {partners.map((partner) => (
                  <span
                    key={partner.name}
                    className="relative inline-block h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-gray-100 shadow-sm"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-accent-yellow">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <FiStar key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">5.0</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Trusted by 100+ companies and individuals around the globe.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Technology that moves your business forward
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            We design and build web platforms, mobile apps, and AI-driven software that help
            companies ship faster, operate smarter, and grow with confidence.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={false}>
              Get Started
            </Button>
            <Button href="/portfolio" size="lg" variant="secondary" icon={false}>
              View Our Work
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary-900">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PartnerBand() {
  const track = [...partners, ...partners]
  return (
    <section className="border-b border-gray-100 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Trusted by teams building ambitious products
        </p>
        <div className="marquee-group relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-12">
            {track.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function RecognitionCard({ name, metric, color, elevated = false }) {
  return (
    <div className="rounded-2xl bg-white/15 p-1 ring-1 ring-white/60">
      <div
        className={`overflow-hidden rounded-xl bg-white ${
          elevated ? 'shadow-2xl' : 'shadow-lg'
        }`}
      >
        {/* Top: platform name */}
        <div className="flex items-center justify-center px-6 py-4">
          <span className={`text-lg font-extrabold tracking-tight ${color}`}>{name}</span>
        </div>
        {/* Bottom: shaded rating strip */}
        <div className="flex flex-col items-center gap-1 border-t border-slate-100 bg-slate-50 px-6 py-3">
          <div className="flex items-center gap-0.5 text-[#2563eb]">
            {[0, 1, 2, 3, 4].map((i) => (
              <FiStar key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">{metric}</span>
        </div>
      </div>
    </div>
  )
}

function RecognitionSection() {
  const [clutch, upwork, linkedin, google] = recognitions
  return (
    <section className="relative bg-gradient-to-r from-[#0b63e5] via-[#0088ff] to-[#00a3ff] pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-wide text-white md:text-3xl lg:text-4xl">
            Recognized Excellence Across Clutch, Upwork, LinkedIn &amp; Google
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            {/* Top row: three across */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[clutch, upwork, linkedin].map((r) => (
                <RecognitionCard key={r.name} {...r} />
              ))}
            </div>
            {/* Bottom row: Google centered, overlapping into the section below */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="relative z-10 -mb-28 sm:col-start-2">
                <RecognitionCard {...google} elevated />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(26,35,126,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,35,126,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse at 50% 30%, black 35%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 30%, black 35%, transparent 80%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left: pill + title */}
            <div>
              <span className="inline-flex items-center rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                What we do
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Comprehensive <span className="text-[#2563eb]">digital solutions</span>
              </h2>
            </div>
            {/* Right: subtext + outline button */}
            <div className="flex flex-col items-start gap-5 md:pt-1">
              <p className="text-lg leading-relaxed text-gray-600">
                One team across strategy, design, and engineering — so your product ships as a
                coherent whole.
              </p>
              <Button
                href="/services"
                variant="secondary"
                size="md"
                className="transition-all duration-300 ease-in-out hover:border-primary-900 hover:bg-primary-900 hover:text-white"
              >
                View All Services
              </Button>
            </div>
          </div>
        </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <Reveal key={solution.title} delay={index * 0.06}>
              <Link
                href={solution.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-900 hover:shadow-card-hover"
              >
                {/* Bottom-up dark fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 translate-y-full bg-primary-900 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-5 text-xs font-semibold text-gray-400 transition-colors duration-300 group-hover:text-white/60">
                    0{index + 1}
                  </span>
                  <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {solution.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/70">
                    {solution.desc}
                  </p>
                  <span className="-ml-3 mt-auto inline-flex w-fit items-center gap-1 rounded-lg border border-transparent px-3 py-1.5 text-sm font-semibold text-primary-900 transition-all duration-300 ease-in-out group-hover:border-white group-hover:bg-white group-hover:text-primary-900">
                    Explore service
                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <Section
      bg="gray"
      eyebrow="Industries"
      title="We speak your industry's language"
      description="Patterns and constraints differ by sector. We bring context from work across these areas."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon
          return (
            <Reveal key={industry.title} delay={index * 0.05}>
              <Link
                href="/services"
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-900 hover:shadow-card-hover"
              >
                {/* Bottom-up dark fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 translate-y-full bg-[#0B0F19] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />

                {/* Large faint background number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3 text-5xl font-bold text-gray-100 transition-colors duration-300 ease-in-out group-hover:text-white/15"
                >
                  0{index + 1}
                </span>

                {/* Decorative corner icon */}
                <Icon
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-24 w-24 text-gray-100 transition-colors duration-300 ease-in-out group-hover:text-white/10"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900 transition-colors duration-300 ease-in-out group-hover:bg-white/10 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {industry.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-slate-300">
                    {industry.desc}
                  </p>
                  <span className="-ml-3 mt-auto inline-flex w-fit items-center gap-1 rounded-lg border border-transparent px-3 py-1.5 text-sm font-semibold text-primary-900 transition-all duration-300 ease-in-out group-hover:border-white group-hover:bg-white group-hover:text-primary-900">
                    Explore Industry
                    <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function WhyChooseUsSection() {
  return (
    <Section
      align="center"
      eyebrow="Why choose us"
      title="Excellence in every project"
      description="The things our clients tell us make the difference when they choose to work with us again."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-900 hover:shadow-xl">
                {/* Bottom-up dark fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 translate-y-full bg-[#0B0F19] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900 transition-colors duration-300 ease-in-out group-hover:bg-white/10 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function TechnologiesSection() {
  return (
    <Section
      bg="gray"
      align="center"
      eyebrow="Capabilities"
      title="Built with modern technologies"
      description="We choose the right tools for each project rather than forcing a single stack."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <Reveal key={`${tech.name}-${index}`} delay={index * 0.03}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white p-5 text-center shadow-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl">
                {/* Bottom-up gradient fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 translate-y-full bg-gradient-to-b from-[#111a3a] to-[#0b0f19] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />

                <div className="relative z-10 flex h-full flex-col items-center">
                  <span className="relative mb-3 inline-flex rounded-xl bg-gradient-to-br from-blue-50 to-primary-50 p-3 ring-1 ring-blue-100/80 transition-all duration-300 ease-in-out group-hover:from-white/10 group-hover:to-white/5 group-hover:ring-white/20">
                    {/* Soft blue glow */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-xl bg-blue-400/25 blur-md transition-all duration-300 ease-in-out group-hover:bg-blue-400/40"
                    />
                    <Icon
                      className="h-6 w-6 text-[color:var(--tech-color)] transition-colors duration-300 ease-in-out group-hover:text-white"
                      style={{ ['--tech-color']: tech.color }}
                    />
                  </span>
                  <div className="text-sm font-bold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {tech.name}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-slate-300">
                    {tech.category}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function CaseStudiesSection() {
  return (
    <Section
      eyebrow="Selected work"
      title="Recent launches"
      description="A snapshot of products we've helped design, build, and scale."
      className="scroll-mt-28 pt-24 md:pt-28"
      cta={
        <Button href="/portfolio" variant="ghost">
          View all work
        </Button>
      }
    >
      <div className="space-y-8 lg:space-y-12">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={0.05}>
            <CaseStudyItem study={study} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CaseStudyItem({ study, reversed }) {
  const Icon = study.icon

  const header = (
    <>
      <span className="mb-6 inline-flex w-fit rounded-2xl bg-primary-50 p-3.5 text-primary-900 transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
        {study.category}
      </p>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-900 md:text-3xl">
        {study.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
        {study.description}
      </p>
    </>
  )

  const techStack = (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tech stack</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {study.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-transform duration-200 hover:scale-105 hover:bg-primary-50 hover:text-primary-900"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )

  const deliverables = (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Deliverables</p>
      <ul className="mt-2 space-y-1.5">
        {study.deliverables.map((d) => (
          <li key={d} className="group/item flex items-start gap-2 text-sm text-gray-600">
            <FiArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700 transition-transform duration-200 group-hover:translate-x-1.5 group-hover/item:translate-x-1.5" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  )

  const device =
    study.type === 'web' ? (
      <LaptopMockup src={study.image} alt={study.title} />
    ) : (
      <PhoneCluster src={study.image} alt={study.title} />
    )

  const flag = (
    <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur sm:right-5 sm:top-5">
      {study.flag}
    </span>
  )

  return (
    <div className="group">
      {/* Mobile: single unified card */}
      <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:hidden">
        <div className="p-6">{header}</div>
        <div
          className={`relative flex items-center justify-center bg-gradient-to-br ${study.cardBg} px-6 py-8`}
        >
          {flag}
          <div className="w-full max-w-[300px] p-4">{device}</div>
        </div>
        <div className="space-y-5 p-6">
          {techStack}
          {deliverables}
        </div>
      </div>

      {/* Desktop: alternating 2-column grid */}
      <div className="hidden md:grid md:grid-cols-2 md:items-stretch md:gap-8">
        <div
          className={`flex flex-col justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-card lg:p-10 ${
            reversed ? 'md:order-2' : ''
          }`}
        >
          <Reveal delay={0.15} y={12}>
            {header}
            <div className="mt-6">{techStack}</div>
            <div className="mt-5">{deliverables}</div>
          </Reveal>
        </div>
        <div
          className={`relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${study.cardBg} p-8 lg:p-10 ${
            reversed ? 'md:order-1' : ''
          }`}
        >
          {flag}
          {device}
        </div>
      </div>
    </div>
  )
}

function LaptopMockup({ src, alt }) {
  return (
    <div className="w-full max-w-full transition-transform duration-500 group-hover:-translate-y-1 sm:max-w-md">
      {/* Screen */}
      <div className="rounded-t-xl border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-top"
            unoptimized
          />
        </div>
      </div>
      {/* Base */}
      <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gray-800 shadow-2xl">
        <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-lg bg-gray-600 sm:w-20" />
      </div>
    </div>
  )
}

function PhoneCluster({ src, alt }) {
  return (
    <div className="flex w-full max-w-full items-end justify-center gap-2 transition-transform duration-500 group-hover:-translate-y-1 sm:gap-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`relative shrink-0 overflow-hidden rounded-[1.2rem] border-[5px] border-gray-900 bg-gray-900 shadow-xl sm:rounded-[1.4rem] ${
            i === 1 ? 'z-10 w-24 sm:w-28 md:w-32' : 'w-16 opacity-95 sm:w-20 md:w-24'
          }`}
        >
          <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[0.5rem] bg-white sm:rounded-[0.6rem]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-top"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function LifecycleSection() {
  return (
    <Section
      align="center"
      eyebrow="Process"
      title={
        <>
          Our Development <span className="text-blue-600">Lifecycle</span>
        </>
      }
      description="Our proven methodology ensures every project is delivered on time, within budget, and exceeds expectations."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {lifecycle.map((item, index) => {
          const Icon = item.icon
          const Visual = lifecycleVisuals[item.title]
          return (
            <Reveal key={item.step} delay={index * 0.05}>
              <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary-900 hover:shadow-xl">
                {/* Bottom-up dark fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 translate-y-full bg-[#0B0F19] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                />

                {/* Static content */}
                <div className="relative z-10 flex h-full flex-col transition-all duration-300 ease-in-out group-hover:pointer-events-none group-hover:-translate-y-1 group-hover:opacity-0">
                  <span className="mb-4 inline-flex w-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    {item.step}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>

                  {item.action && (
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700">
                      {item.action.label}
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}

                  {item.tools && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {item.tools.map((tool) => {
                        const ToolIcon = tool.icon
                        return (
                          <span
                            key={tool.name}
                            title={tool.name}
                            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-600"
                          >
                            <ToolIcon className="h-3.5 w-3.5" />
                            {tool.name}
                          </span>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Interactive hover visual */}
                <div className="pointer-events-none absolute inset-0 z-20 flex translate-y-3 flex-col p-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
                    <Icon className="h-3.5 w-3.5" />
                    {item.step} · {item.title}
                  </div>
                  <div className="flex-1">{Visual && <Visual />}</div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ---- Lifecycle hover visuals (CSS-animated, shown over the dark reveal) ---- */

function PlanningVisual() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
        <svg viewBox="0 0 224 74" className="w-full">
          <path
            d="M46 20 H112 M84 20 V44 M84 44 H150 M150 44 V20"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="140"
            className="animate-lc-dash"
          />
          {[
            [18, 11, 'Goals'],
            [86, 11, 'Scope'],
            [154, 11, 'Spec'],
            [52, 35, 'Users'],
          ].map(([x, y, label], i) => (
            <g key={label} className="animate-lc-pop" style={{ animationDelay: `${i * 0.15}s` }}>
              <rect x={x} y={y} width="52" height="18" rx="4" fill="#1e3a8a" stroke="#3b82f6" />
              <text x={Number(x) + 26} y={Number(y) + 12} textAnchor="middle" fill="#bfdbfe" fontSize="8">
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 font-mono text-[11px] leading-relaxed text-slate-300">
        <span className="text-slate-500"># requirements.md</span>
        <br />- Auth &amp; role matrix
        <br />- Dashboard KPIs
        <span className="ml-0.5 inline-block h-3 w-1.5 -translate-y-px bg-blue-400 align-middle animate-lc-blink" />
      </div>
    </div>
  )
}

function DesignVisual() {
  return (
    <div className="relative flex h-full flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="flex gap-2">
        <div className="h-3 w-10 animate-lc-rise rounded bg-blue-400/70" style={{ animationDelay: '0s' }} />
        <div className="h-3 w-20 animate-lc-rise rounded bg-white/20" style={{ animationDelay: '.1s' }} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-9 animate-lc-rise rounded bg-white/10" style={{ animationDelay: '.2s' }} />
        <div className="col-span-2 h-9 animate-lc-rise rounded bg-white/10" style={{ animationDelay: '.3s' }} />
        <div className="col-span-2 h-8 animate-lc-rise rounded bg-white/10" style={{ animationDelay: '.4s' }} />
        <div className="h-8 animate-lc-rise rounded bg-blue-500/40" style={{ animationDelay: '.5s' }} />
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-[10px] text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400" /> Auto-layout applied
      </div>
      <div className="absolute left-7 top-8 flex items-center animate-lc-drift">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#f472b6">
          <path d="M4 2l7 18 2-7 7-2z" />
        </svg>
        <span className="ml-1 rounded bg-pink-500 px-1 py-0.5 text-[8px] font-semibold text-white">
          Designer
        </span>
      </div>
    </div>
  )
}

function BuildVisual() {
  const lines = [
    ['$ ', 'git add .', 'text-slate-300'],
    ['$ ', 'git commit -m "feat: core module"', 'text-slate-300'],
    ['', '[main 9f3c1a] feat: core module', 'text-sky-300'],
    ['', ' 12 files changed, 318 insertions(+)', 'text-slate-400'],
    ['', '✔ vitest 42 passed', 'text-emerald-400'],
  ]
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-black/50 font-mono text-[11px]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-2 text-[10px] text-slate-400">bash — core-module</span>
      </div>
      <div className="space-y-1 p-2.5 leading-relaxed">
        {lines.map(([prompt, text, cls], i) => (
          <div
            key={text}
            className={`animate-lc-rise ${cls}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <span className="text-emerald-400">{prompt}</span>
            {text}
            {i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-3 w-1.5 -translate-y-px bg-emerald-400 align-middle animate-lc-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function TestVisual() {
  const rows = [
    ['E2E checkout flow', 'Playwright'],
    ['Unit — services', 'Vitest'],
    ['API contract', 'Postman'],
    ['Visual regression', 'Cypress'],
  ]
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-lg border border-white/10 bg-white/5 p-3">
      {rows.map(([name, tool], i) => (
        <div
          key={name}
          className="flex animate-lc-rise items-center justify-between rounded-md bg-black/30 px-2.5 py-1.5"
          style={{ animationDelay: `${i * 0.16}s` }}
        >
          <span className="flex items-center gap-2 text-[11px] text-slate-200">
            <span
              className="flex h-4 w-4 animate-lc-pop items-center justify-center rounded-full bg-emerald-500/20 text-[9px] text-emerald-400"
              style={{ animationDelay: `${i * 0.16 + 0.15}s` }}
            >
              ✓
            </span>
            {name}
          </span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-slate-300">
            {tool}
          </span>
        </div>
      ))}
      <div className="mt-auto h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300" />
      </div>
      <div className="text-[10px] font-semibold text-emerald-400">42 passed · 0 failed</div>
    </div>
  )
}

function DeployVisual() {
  const stages = ['Build', 'Ship', 'Deploy']
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="flex items-center">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <span
              className="flex animate-lc-pop items-center gap-1.5 text-[11px] text-slate-200"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              {s}
            </span>
            {i < stages.length - 1 && (
              <span className="mx-1 h-px flex-1 bg-gradient-to-r from-blue-400/70 to-transparent" />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2 text-[9px]">
        {['AWS', 'Cloudflare'].map((c) => (
          <span key={c} className="rounded bg-white/10 px-1.5 py-0.5 font-semibold text-slate-300">
            {c}
          </span>
        ))}
      </div>
      <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
        <span className="absolute inset-y-0 w-1/3 animate-lc-sweep bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-md bg-emerald-500/15 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-300">
        <FaRocket className="h-3.5 w-3.5 animate-lc-rocket" />
        Deployed to Production v1.0
      </div>
    </div>
  )
}

function MaintainVisual() {
  const services = [
    ['api-gateway', '0s'],
    ['workers', '.4s'],
    ['db-primary', '.8s'],
  ]
  const bars = [5, 7, 4, 8, 6, 9, 5, 7, 10, 6, 8, 7]
  return (
    <div className="flex h-full flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
      {services.map(([name, delay]) => (
        <div key={name} className="flex items-center justify-between text-[11px] text-slate-200">
          <span className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 animate-lc-pulse rounded-full bg-emerald-400"
              style={{ animationDelay: delay }}
            />
            {name}
          </span>
          <span className="text-emerald-400">healthy</span>
        </div>
      ))}
      <div className="flex h-10 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 origin-bottom animate-lc-bar rounded-sm bg-blue-400/70"
            style={{ height: `${h * 10}%`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-amber-300">
          Sentry · 0 new
        </span>
        <span className="text-[11px] font-bold text-emerald-400">99.9% uptime</span>
      </div>
    </div>
  )
}

const lifecycleVisuals = {
  Planning: PlanningVisual,
  Designs: DesignVisual,
  Build: BuildVisual,
  Test: TestVisual,
  Deploy: DeployVisual,
  Maintain: MaintainVisual,
}

function ProcessSection() {
  return (
    <Section
      bg="gray"
      align="center"
      eyebrow="How we work"
      title="A clear path from idea to impact"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-sm font-bold text-white">
                0{index + 1}
              </span>
              <h3 className="mb-2 text-base font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function ReviewPlatformBadge({ platform, starColor, reviews }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
      <div className="border-r border-gray-200 pr-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Reviewed on
        </p>
        <p className="text-sm font-bold text-gray-900">{platform}</p>
      </div>
      <div>
        <div className="flex gap-0.5" style={{ color: starColor }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <FiStar key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          {reviews}
        </p>
      </div>
    </div>
  )
}

function ClientReviewsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = clientReviews.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused, count])

  const current = clientReviews[active]

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(26,35,126,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,35,126,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <ReviewPlatformBadge platform="Clutch" starColor="#e62415" reviews="4 Reviews" />
            <ReviewPlatformBadge platform="Upwork" starColor="#14a800" reviews="75 Reviews" />
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex min-h-[440px] items-start justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl text-center"
              >
                <div className="relative mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full shadow-md">
                  <Image
                    src={current.avatar}
                    alt={current.person}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <blockquote className="text-xl font-medium leading-relaxed text-slate-700 md:text-2xl md:leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <div className="text-base font-bold text-gray-900">{current.person}</div>
                  <div className="text-sm text-gray-500">{current.title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex justify-center gap-2.5">
            {clientReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === active}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: 150, label: 'Products launched', suffix: '+' },
    { value: 98, label: 'Client satisfaction', suffix: '%' },
    { value: 20, label: 'Countries served', suffix: '+' },
  ]

  return (
    <section className="bg-primary-900 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ end, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1800
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <div ref={ref}>
      <div className="text-4xl font-bold text-accent-yellow md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.15em] text-white/70">{label}</div>
    </div>
  )
}

function TestimonialsSection() {
  return (
    <Section
      align="center"
      eyebrow="Testimonials"
      title="What leaders say about working with us"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.person} delay={index * 0.06}>
            <figure className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-card">
              <blockquote className="flex-1 text-base leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-bold text-gray-900">{testimonial.person}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function FaqSection() {
  return (
    <Section
      bg="gray"
      eyebrow="FAQ"
      title="Questions clients ask us"
      cta={
        <Button href="/faq" variant="ghost">
          View all FAQs
        </Button>
      }
    >
      <div className="mx-auto max-w-3xl">
        <FAQ items={homeFaqs} />
      </div>
    </Section>
  )
}

function ContactCta() {
  return (
    <section className="relative z-10 -mb-20 px-4 pt-16 sm:px-6 md:-mb-28 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 p-8 shadow-2xl md:p-12 lg:p-14">
            {/* Geometric line accents */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <svg
                className="absolute -right-16 -top-20 h-[420px] w-[420px] text-white/10"
                viewBox="0 0 400 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="300" cy="120" r="90" />
                <circle cx="300" cy="120" r="150" />
                <circle cx="230" cy="260" r="120" />
              </svg>
            </div>

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Let&apos;s build something together
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Tell us about your product vision and we&apos;ll assemble the right squad to
                  make it real.
                </p>
              </div>

              <div className="flex flex-shrink-0">
                <Button
                  href="/contact"
                  variant="blue"
                  size="lg"
                  icon
                  className="rounded-xl px-8"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
