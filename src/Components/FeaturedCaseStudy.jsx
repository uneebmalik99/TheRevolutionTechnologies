'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

export default function FeaturedCaseStudy() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-[0.28em] rounded-full">
                Featured Case Study
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                Enterprise cloud migration delivers 40% cost reduction
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Partnered with a global logistics company to modernize their infrastructure,
                resulting in improved performance, enhanced security, and significant cost savings.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-yellow flex items-center justify-center mt-0.5">
                  <FiCheck className="w-4 h-4 text-primary-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">40% Cost Reduction</h3>
                  <p className="text-white/70 text-sm">Infrastructure optimization and cloud-native architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-yellow flex items-center justify-center mt-0.5">
                  <FiCheck className="w-4 h-4 text-primary-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">99.9% Uptime</h3>
                  <p className="text-white/70 text-sm">Improved reliability and disaster recovery capabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-yellow flex items-center justify-center mt-0.5">
                  <FiCheck className="w-4 h-4 text-primary-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">6-Month Delivery</h3>
                  <p className="text-white/70 text-sm">Accelerated timeline with zero business disruption</p>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 font-semibold rounded-xl hover:bg-accent-yellow transition-colors duration-300"
            >
              Read Full Case Study
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud Migration Success</h3>
                  <p className="text-white/80">Enterprise Infrastructure Modernization</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

