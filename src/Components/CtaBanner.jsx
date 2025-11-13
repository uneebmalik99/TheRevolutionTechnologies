'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
        >
          <div className="space-y-4">
            <span className="inline-flex px-4 py-1.5 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.25em]">
              Let’s build together
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Need to accelerate digital programs without slowing live operations?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              Our consultants, architects, and product teams embed with your leaders to blueprint,
              deliver, and sustain mission-critical platforms. We’ll craft a tailored engagement model
              within five business days.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
          >
            Schedule a working session
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


