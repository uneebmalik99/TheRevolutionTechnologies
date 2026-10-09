'use client'

import Image from '@/components/ui/SiteImage'
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiZap,
  FiHeart,
  FiGlobe,
  FiCode,
  FiCheckCircle,
  FiCalendar,
} from 'react-icons/fi'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/FAQ'
import { generalFaqs, engagementFaqs } from '@/components/faqData'

const stats = [
  { value: '8+', label: 'Years of Excellence', icon: FiCalendar },
  { value: '150+', label: 'Projects Delivered', icon: FiCode },
  { value: '35+', label: 'Team Members', icon: FiUsers },
  { value: '98%', label: 'Client Satisfaction', icon: FiAward },
]

const values = [
  {
    icon: FiTarget,
    title: 'Mission-Driven',
    description:
      'We deliver sustainable digital solutions that create real business value and long-term success.',
  },
  {
    icon: FiZap,
    title: 'Innovation First',
    description:
      'We embrace new technologies and fresh ideas to keep our clients ahead in a changing landscape.',
  },
  {
    icon: FiHeart,
    title: 'Client-Centric',
    description:
      'We build lasting relationships through trust, transparency, and consistent delivery.',
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description:
      'We serve clients worldwide with scalable solutions that cross borders and industries.',
  },
]

const milestones = [
  { year: '2015', title: 'Company Founded', description: 'Started with a vision to revolutionise digital solutions.' },
  { year: '2017', title: 'First Major Client', description: 'Secured partnerships with leading enterprises.' },
  { year: '2019', title: 'Team Expansion', description: 'Grew to 20+ talented professionals.' },
  { year: '2021', title: 'Global Recognition', description: 'Passed the 100+ successful projects milestone.' },
  { year: '2023', title: 'Industry Leader', description: 'Recognised as a top digital solutions provider.' },
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
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Our story"
        title="Building the future of digital solutions"
        description="A purpose-driven team dedicated to digital solutions that transform businesses and drive measurable success."
      />

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={index * 0.05} className="text-center">
                <span className="mx-auto mb-3 inline-flex rounded-lg bg-primary-50 p-3 text-primary-900">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="text-3xl font-bold text-primary-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Mission */}
      <Section bg="gray">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
              Our mission
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Sustainable digital solutions for ambitious teams
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              We are a purpose-driven team of developers, designers, and strategists who aim to make
              your success scalable. We combine creativity and technical expertise to deliver
              solutions that exceed expectations.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              We embrace fresh ideas and modern technologies to keep your business ahead in a
              fast-changing digital world.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-2.5">
                  <FiCheckCircle className="h-4 w-4 flex-shrink-0 text-primary-700" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-card">
              <Image
                src="/images/aboutus.png"
                alt="The Revolution Technologies team"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section
        align="center"
        eyebrow="Our values"
        title="What drives us forward"
        description="The core principles that guide everything we do."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="mb-5 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section
        bg="gray"
        align="center"
        eyebrow="Our journey"
        title="Milestones that define us"
      >
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l border-gray-300 pl-8">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.05} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-gray-50 bg-primary-900 text-[10px] font-bold text-white">
                  {milestone.year.slice(2)}
                </span>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-card">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {milestone.year}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech partners */}
      <Section align="center">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Trusted technology partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {techPartners.map((partner, index) => (
            <Reveal key={partner} delay={index * 0.05}>
              <Image
                src={partner}
                alt={`Technology partner ${index + 1}`}
                width={120}
                height={48}
                className="h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                unoptimized
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="gray" eyebrow="FAQ" title="Getting to know us">
        <div className="mx-auto max-w-3xl">
          <FAQ items={[generalFaqs[0], generalFaqs[3], engagementFaqs[0], engagementFaqs[3]]} />
        </div>
      </Section>

      <CtaBand
        title="Ready to work with us?"
        description="Let's discuss how we can help transform your business with the right digital solution."
        secondaryHref="/team"
        secondaryLabel="Meet the team"
      />
    </div>
  )
}
