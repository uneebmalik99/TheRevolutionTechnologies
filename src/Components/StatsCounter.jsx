'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ end, duration = 2, label, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * end)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-2"
      >
        {prefix}{count}{suffix}
      </motion.div>
      <p className="text-sm uppercase tracking-[0.2em] text-gray-600 font-semibold">{label}</p>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={150} label="Projects Delivered" suffix="+" />
          <Counter end={35} label="Team Members" suffix="+" />
          <Counter end={20} label="Countries Served" suffix="+" />
          <Counter end={98} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  )
}

