'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phases = [
  {
    id: 'discover',
    title: 'Discover & Align',
    duration: 'Weeks 1-2',
    problem: 'Define program goals, stakeholders, and measurable success metrics.',
    activities: [
      'Executive workshops & user interviews',
      'Operating model & value stream mapping',
      'Risk assessment and program charter',
    ],
    outcome:
      'Shared vision with prioritized roadmap, agreed KPIs, and governance structure ready for execution.',
  },
  {
    id: 'design',
    title: 'Design & Prototype',
    duration: 'Weeks 3-6',
    problem: 'Translate insights into a validated solution blueprint.',
    activities: [
      'Experience architecture & service design',
      'Technical spikes and reference implementation',
      'Interactive prototypes with stakeholder reviews',
    ],
    outcome:
      'Experience blueprint, target architecture, and prioritized backlog supported by validated prototypes.',
  },
  {
    id: 'build',
    title: 'Build & Launch',
    duration: 'Weeks 7-16',
    problem: 'Ship high-quality increments with predictable cadence.',
    activities: [
      'Cross-functional squads using dual-track agile',
      'Automated QA, security, and performance gates',
      'Release management and stakeholder playbacks',
    ],
    outcome:
      'Production-ready releases every sprint, with telemetry to monitor adoption and quality.',
  },
  {
    id: 'scale',
    title: 'Scale & Optimize',
    duration: 'Weeks 17+',
    problem: 'Drive adoption, iterate on insights, and embed lasting capability.',
    activities: [
      'Growth experiments and A/B testing',
      'Runbooks, enablement, and playbooks',
      'FinOps and cost-to-serve optimization',
    ],
    outcome:
      'Measured uplift in key KPIs, internal teams enabled to own the roadmap, and optimization backlog in place.',
  },
]

export default function Process() {
  const [active, setActive] = useState(phases[0])

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-semibold uppercase tracking-[0.25em] text-primary-900 shadow-sm">
            Delivery Operating Model
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary-900 leading-tight">
            Proven program framework that de-risks transformation
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Clients choose us for more than execution—we guide them through a clear, outcomes-first
            delivery cadence. Explore the phases and see how we keep programs aligned, predictable, and measurable.
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-16">
          <div className="space-y-3">
            {phases.map((phase) => {
              const isActive = active.id === phase.id
              return (
                <button
                  key={phase.id}
                  onClick={() => setActive(phase)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200 ${
                    isActive
                      ? 'border-primary-900 bg-primary-900 text-white shadow-lg'
                      : 'border-primary-100 bg-white text-primary-900 hover:border-primary-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">{phase.duration}</span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        isActive ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary-900'
                      } rounded-full px-3 py-1`}
                    >
                      Phase {phases.indexOf(phase) + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-bold">{phase.title}</p>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-[32px] border border-primary-100 bg-white p-10 shadow-[0_28px_60px_rgba(26,35,126,0.12)] overflow-hidden"
            >
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary-900/10 blur-3xl"></div>
              <div className="relative space-y-8">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-900">
                    Challenge we solve
                  </span>
                  <p className="mt-3 text-lg text-gray-700 leading-relaxed">{active.problem}</p>
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-900">
                    Core activities
                  </span>
                  <ul className="mt-4 space-y-3">
                    {active.activities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-900/80"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-primary-50/70 border border-primary-100 p-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-900">
                    Tangible outcome
                  </span>
                  <p className="mt-3 text-primary-900 leading-relaxed font-medium">{active.outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}


