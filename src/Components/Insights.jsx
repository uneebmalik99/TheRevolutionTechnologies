'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const insights = [
  {
    id: 'ai-modernization',
    tag: 'Point of view',
    title: 'The modernization roadmap for AI-ready enterprises',
    description:
      'How to evolve data platforms, delivery operating models, and governance to ship AI capabilities without compromising compliance.',
    readTime: '7 minute read',
  },
  {
    id: 'payments',
    tag: 'Case insight',
    title: 'Re-platforming a multi-market payments experience in 120 days',
    description:
      'Co-delivery with the client’s engineering team accelerated throughput by 45% while preserving regional compliance requirements.',
    readTime: '5 minute read',
  },
  {
    id: 'experience',
    tag: 'Leadership',
    title: 'Measuring experience: the KPIs that actually move product adoption',
    description:
      'Three layers of product health metrics executives need to monitor to ensure launches convert into sustained customer value.',
    readTime: '4 minute read',
  },
]

export default function Insights() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-xs font-semibold uppercase tracking-[0.25em] text-primary-900">
              Insights & Thinking
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 leading-tight">
              Perspective from engagements that move industries forward
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stories from our client partnerships, frameworks from our practitioners, and the metrics
              we watch to validate impact.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary-900 text-primary-900 font-semibold hover:bg-primary-50 transition-colors duration-200 w-full lg:w-auto text-center"
          >
            Talk with our delivery leads
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex h-full flex-col rounded-3xl border border-primary-100 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-200"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary-900">
                {item.tag}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-primary-900 leading-snug">{item.title}</h3>
              <p className="mt-4 flex-1 text-base text-gray-600 leading-relaxed">{item.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary-900">
                <span>{item.readTime}</span>
                <span className="inline-flex items-center gap-1">
                  Continue
                  <span aria-hidden>→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


