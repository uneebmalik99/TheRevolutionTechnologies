'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Malik Noman',
    position: 'COO - Amsev',
    message:
      'Malik is a motivated, hard-working CEO with exceptional skills and integrity. His leadership inspires the team to excel daily.',
  },
  {
    name: 'Matthias Madeja',
    position: 'CTO - SmileUnion',
    message:
      'Highly recommended! Uneeb is dedicated, reliable, and professional. He brings unique knowledge and patience to every project.',
  },
  {
    name: 'John Galvagno',
    position: 'CTO - Rubicon Performance',
    message:
      "Uneeb has been an absolute treat to work with! He goes above and beyond to deliver exactly what's required.",
  },
  {
    name: 'Waheed',
    position: 'CEO - MMW',
    message:
      'Perfect as always! Uneeb patiently incorporates new inputs and consistently brings better ideas to the table.',
  },
  {
    name: 'Charlie',
    position: 'CTO - XYZ',
    message:
      "Exceptional work! Uneeb's patience with project changes and his innovative ideas make him a valuable partner.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [handleNext])

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent-yellow/15 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary-900 bg-accent-yellow/80 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-900"></span>
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary-900">
            Voices of partnership
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear how teams around the world scale faster with The Revolution Technologies.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-[32px] px-10 md:px-12 py-12 md:py-16 shadow-[0_30px_60px_rgba(26,35,126,0.12)] border border-primary-100"
            >
              <div className="absolute inset-6 rounded-[28px] border-[3px] border-primary-900/80 pointer-events-none"></div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div className="flex items-center justify-center gap-4 text-5xl text-primary-900/80">
                  <span>“</span>
                  <span className="flex-1 h-[2px] bg-primary-900/60"></span>
                  <span className="rotate-180">”</span>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium max-w-3xl">
                  {testimonials[currentIndex].message}
                </p>

                <div className="flex items-center gap-1 text-primary-900 text-xl" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-500 font-semibold">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-primary-900 text-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-900 scale-125'
                      : 'bg-gray-300 hover:bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-primary-900 text-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

