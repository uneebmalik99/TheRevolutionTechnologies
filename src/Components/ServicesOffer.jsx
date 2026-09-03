'use client'

import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiShare2,
  FiSettings,
  FiCheckCircle,
  FiCpu,
} from 'react-icons/fi'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/FAQ'
import { generalFaqs, techFaqs } from '@/components/faqData'

const services = [
  {
    id: 'web',
    icon: FiCode,
    title: 'Web Development',
    tagline: 'Build powerful digital experiences',
    description:
      'Transform your vision into high-performance web applications that scale with your business.',
    features: [
      'Custom full-stack solutions',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'API integration & development',
      'Performance optimization',
      'Cloud deployment',
    ],
    stats: { projects: '200+', satisfaction: '98%' },
  },
  {
    id: 'mobile',
    icon: FiSmartphone,
    title: 'Mobile App Development',
    tagline: 'Native & cross-platform excellence',
    description:
      'Create engaging mobile experiences that users love, available on iOS, Android, and beyond.',
    features: [
      'Native iOS & Android apps',
      'React Native development',
      'Flutter applications',
      'App Store optimization',
      'Push notifications',
      'In-app analytics',
    ],
    stats: { projects: '150+', satisfaction: '97%' },
  },
  {
    id: 'ai',
    icon: FiCpu,
    title: 'AI Development',
    tagline: 'Intelligent automation & insights',
    description:
      'Leverage machine learning, NLP, and predictive analytics to automate workflows and uncover actionable insights.',
    features: [
      'Custom ML model development',
      'AI-powered chatbots',
      'Predictive analytics dashboards',
      'Computer vision solutions',
      'Natural language processing',
      'Data engineering pipelines',
    ],
    stats: { projects: '60+', satisfaction: '96%' },
  },
  {
    id: 'uiux',
    icon: FiPenTool,
    title: 'UI/UX Design',
    tagline: 'Design that converts',
    description:
      'Beautiful, intuitive interfaces that delight users and drive business results.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interaction design',
      'Usability testing',
      'Design handoff',
    ],
    stats: { projects: '180+', satisfaction: '99%' },
  },
  {
    id: 'marketing',
    icon: FiShare2,
    title: 'Social Media Marketing',
    tagline: 'Engage, grow, convert',
    description:
      'Strategic social media campaigns that build communities and drive measurable business growth.',
    features: [
      'Content strategy & creation',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Social listening',
      'Performance analytics',
    ],
    stats: { projects: '250+', satisfaction: '95%' },
  },
  {
    id: 'custom',
    icon: FiSettings,
    title: 'Custom Software Development',
    tagline: 'Tailored solutions for your business',
    description:
      'Enterprise-grade software built specifically for your unique business processes and requirements.',
    features: [
      'ERP & CRM systems',
      'Business automation',
      'Data analytics platforms',
      'Integration services',
      'Legacy system modernization',
      'Ongoing support & maintenance',
    ],
    stats: { projects: '120+', satisfaction: '98%' },
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and requirements.' },
  { step: '02', title: 'Strategy', desc: 'We create a detailed roadmap and technical architecture.' },
  { step: '03', title: 'Development', desc: 'We build your solution in short, transparent sprints.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy and provide ongoing maintenance.' },
]

export default function ServicesOffer() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Our services"
        title="Services that drive results"
        description="From concept to deployment, we deliver end-to-end digital solutions that transform businesses and exceed expectations."
      />

      {/* Services grid */}
      <Section bg="gray">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <div
                  id={service.id}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-8"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-lg bg-primary-50 p-3.5 text-primary-900">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-900">
                        {service.stats.projects}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-500">
                        Projects
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">{service.title}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-gray-100 pt-6 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Process */}
      <Section
        align="center"
        eyebrow="How we work"
        title="A proven delivery process"
        description="A clear process that keeps your project on time, on budget, and aligned with your goals."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((phase, index) => (
            <Reveal key={phase.step} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-sm font-bold text-white">
                  {phase.step}
                </span>
                <h3 className="mb-2 text-base font-bold text-gray-900">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{phase.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="gray" eyebrow="FAQ" title="Common questions about our services">
        <div className="mx-auto max-w-3xl">
          <FAQ items={[...generalFaqs.slice(0, 3), ...techFaqs]} />
        </div>
      </Section>

      <CtaBand
        title="Ready to transform your business?"
        description="Let's discuss how our services can help you achieve your goals. Get a free consultation today."
        secondaryHref="/portfolio"
        secondaryLabel="View our work"
      />
    </div>
  )
}
