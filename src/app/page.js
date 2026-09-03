'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiAward,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiCloud,
  FiShoppingBag,
  FiTruck,
  FiHeart,
  FiBriefcase,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi'
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

const process = [
  { title: 'Co-create the vision', text: 'Workshops to align strategy, users, and business value.' },
  { title: 'Design with intent', text: 'Prototypes and systems thinking to shape the right product.' },
  { title: 'Build in the open', text: 'Transparent sprints, live demos, and measurable increments.' },
  { title: 'Launch and evolve', text: 'Adoption support, observability, and continuous improvement.' },
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
  { name: 'Envoy Hotel', image: '/images/ennvoy.png' },
]

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <PartnerBand />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <ProcessSection />
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
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary-50 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
            <FiGlobe className="h-3.5 w-3.5" />
            Digital solutions since 2015
          </p>
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

function ServicesSection() {
  return (
    <Section
      eyebrow="What we do"
      title="Comprehensive digital solutions"
      description="One team across strategy, design, and engineering — so your product ships as a coherent whole."
      cta={
        <Button href="/services" variant="ghost">
          Explore all services
        </Button>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <Reveal key={solution.title} delay={index * 0.06}>
              <Link
                href={solution.href}
                className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="mb-5 text-xs font-semibold text-gray-400">
                  0{index + 1}
                </span>
                <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{solution.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
                  {solution.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-900">
                  Explore service
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
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
              <div className="flex h-full gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-900">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1.5 text-base font-bold text-gray-900">{industry.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{industry.desc}</p>
                </div>
              </div>
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
              <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <Reveal key={tech.name} delay={index * 0.03}>
              <div className="flex h-full flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="mb-3 inline-flex rounded-lg bg-primary-50 p-2.5 text-primary-900">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-sm font-bold text-gray-900">{tech.name}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                  {tech.category}
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
      cta={
        <Button href="/portfolio" variant="ghost">
          View all work
        </Button>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.06}>
            <Link
              href="/portfolio"
              className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                  {study.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{study.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{study.result}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
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
    <section className="bg-primary-900 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Tell us about your product vision and we&apos;ll assemble the right squad to make it
            real.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="light" size="lg" icon={false}>
              Book a call
            </Button>
            <Button href="/company" variant="outlineLight" size="lg" icon={false}>
              Learn about us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
