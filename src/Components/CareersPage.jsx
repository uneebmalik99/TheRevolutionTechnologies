'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMapPin,
  FiBriefcase,
  FiChevronDown,
  FiCode,
  FiTarget,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiHeart,
  FiZap,
  FiDollarSign,
  FiBookOpen,
} from 'react-icons/fi'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import FAQ from '@/components/FAQ'
import { hiringFaqs } from '@/components/faqData'

const jobData = [
  {
    id: 1,
    title: 'Web Developer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Development',
    shortDesc: 'We are looking for a skilled Full Stack Developer.',
    fullDesc:
      'We are looking for a Full Stack Developer skilled in React, Node.js, and modern frameworks. You will collaborate with designers and developers to build high-quality web applications.',
    requirements: [
      '3+ years of experience in web development',
      'Proficiency in React, Node.js, and modern JavaScript',
      'Experience with databases (MongoDB, PostgreSQL)',
      'Strong problem-solving skills',
      'Excellent communication skills',
    ],
    icon: FiCode,
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Development',
    shortDesc: 'We are looking for talented Mobile App Developers.',
    fullDesc:
      "You should have experience in Flutter or React Native. You'll work on developing apps that deliver exceptional user experiences across Android and iOS.",
    requirements: [
      '2+ years of mobile app development experience',
      'Proficiency in Flutter or React Native',
      'Experience with native iOS/Android development',
      'Understanding of mobile UI/UX principles',
      'Portfolio of published apps',
    ],
    icon: FiCode,
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Design',
    shortDesc: 'We are hiring creative UI/UX designers.',
    fullDesc:
      'Your role will focus on creating engaging, user-friendly interfaces. Experience with Figma, Adobe XD, and modern design trends is a plus.',
    requirements: [
      '2+ years of UI/UX design experience',
      'Proficiency in Figma, Adobe XD, or Sketch',
      'Strong portfolio showcasing design skills',
      'Understanding of user-centered design principles',
      'Experience with prototyping tools',
    ],
    icon: FiTarget,
  },
]

const benefits = [
  { icon: FiTrendingUp, title: 'Career Growth', description: 'Continuous learning and clear progression paths.' },
  { icon: FiZap, title: 'Innovative Projects', description: 'Work on cutting-edge technologies.' },
  { icon: FiUsers, title: 'Great Team', description: 'Collaborate with talented professionals.' },
  { icon: FiAward, title: 'Recognition', description: 'Your contributions are valued.' },
  { icon: FiHeart, title: 'Work-Life Balance', description: 'Flexible hours and a supportive environment.' },
  { icon: FiDollarSign, title: 'Competitive Salary', description: 'Attractive compensation packages.' },
  { icon: FiBookOpen, title: 'Learning Budget', description: 'Invest in your professional development.' },
  { icon: FiClock, title: 'Modern Tooling', description: 'The equipment and software you need to do great work.' },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Join our team"
        title="Build your dream career"
        description="Join a team of innovators, creators, and problem-solvers. Work on exciting projects, grow your skills, and make a real impact."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="#jobs" variant="light" icon={false}>
            View openings
          </Button>
          <Button href="/contact" variant="outlineLight" icon={false}>
            Send resume
          </Button>
        </div>
      </PageHeader>

      {/* Benefits */}
      <Section
        bg="gray"
        align="center"
        eyebrow="Why choose us"
        title="Perks & benefits"
        description="We invest in our team's success with real benefits and room to grow."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 0.04}>
                <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="mb-4 inline-flex w-fit rounded-lg bg-primary-50 p-3 text-primary-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-base font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Openings */}
      <Section
        id="jobs"
        align="center"
        eyebrow="Open positions"
        title="Current opportunities"
        description="Explore our open positions and find the role to advance your career."
      >
        <div className="mx-auto max-w-3xl space-y-4">
          {jobData.map((job, index) => {
            const Icon = job.icon
            const isOpen = selectedJob === job.id
            return (
              <Reveal key={job.id} delay={index * 0.05}>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card">
                  <button
                    onClick={() => setSelectedJob(isOpen ? null : job.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-gray-50"
                  >
                    <div className="flex gap-4">
                      <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-900 sm:inline-flex">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1.5">
                            <FiMapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <FiClock className="h-3.5 w-3.5" />
                            {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <FiBriefcase className="h-3.5 w-3.5" />
                            {job.department}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{job.shortDesc}</p>
                      </div>
                    </div>
                    <FiChevronDown
                      className={`mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-6 py-6">
                          <h4 className="text-sm font-bold text-gray-900">Job description</h4>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            {job.fullDesc}
                          </p>
                          <h4 className="mt-5 text-sm font-bold text-gray-900">Requirements</h4>
                          <ul className="mt-2 space-y-2">
                            {job.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2.5 text-sm text-gray-600">
                                <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700" />
                                {req}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <Button href="/contact" icon>
                              Apply now
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="gray" eyebrow="FAQ" title="Hiring questions">
        <div className="mx-auto max-w-3xl">
          <FAQ items={hiringFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Don't see your role?"
        description="We're always looking for talented individuals. Send your resume and we'll keep you in mind."
        primaryHref="/contact"
        primaryLabel="Send your resume"
        secondaryHref="/team"
        secondaryLabel="Meet the team"
      />
    </div>
  )
}
