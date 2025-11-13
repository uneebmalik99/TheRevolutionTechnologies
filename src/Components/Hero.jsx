'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const partners = [
    { name: 'Mesob Store', image: '/images/meso.jpg' },
    { name: 'AFG Shipping', image: '/images/afg.webp' },
    { name: '3Line Shipping', image: '/images/3line.webp' },
  ]

  // Duplicate for seamless loop
  const stats = [
    { value: '150+', label: 'Successful Projects' },
    { value: '35+', label: 'Industry Experts' },
    { value: '20+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/40 to-white pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[26rem] h-[26rem] bg-primary-900/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent-yellow/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-16 items-center">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-primary-100 text-xs font-semibold uppercase tracking-[0.28em] text-primary-900 rounded-full"
            >
              Digital Excellence Since 2015
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold text-primary-900 leading-tight"
            >
              Building resilient digital platforms for enterprise growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              We partner with ambitious teams to design, engineer, and scale solutions that
              unlock new value—across cloud, product, and experience. Every engagement is led
              with strategy, rigor, and measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-900 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary-900/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary-900 text-primary-900 font-semibold hover:bg-primary-900 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-8 border-t border-primary-100 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-500">
                Trusted by teams at
              </span>
              <div className="flex items-center gap-6">
                {partners.map((partner) => (
                  <Image
                    key={partner.name}
                    src={partner.image}
                    alt={partner.name}
                    width={90}
                    height={40}
                    className="h-8 w-auto object-contain opacity-70"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur rounded-[32px] border border-primary-100 shadow-[0_28px_60px_rgba(26,35,126,0.12)] p-10 space-y-10"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-900">
                Snapshot
              </span>
              <h3 className="mt-3 text-2xl font-bold text-primary-900">
                A proven partner for mission-critical programs
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-primary-100/60 px-4 py-6 text-center">
                  <span className="block text-3xl font-extrabold text-primary-900">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-primary-50/80 border border-primary-100 p-5">
              <p className="text-sm text-primary-900 leading-relaxed">
                “The Revolution Technologies team embeds with stakeholders, maps value streams,
                and executes with precision. They treat every release like it matters.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
