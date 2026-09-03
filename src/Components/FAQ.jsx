'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

/**
 * Accessible single-open FAQ accordion.
 * items: [{ q: string, a: string | ReactNode }]
 */
export default function FAQ({ items = [], defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 md:px-6"
              >
                <span className="text-base font-semibold text-gray-900 md:text-lg">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen
                      ? 'border-primary-900 bg-primary-900 text-white'
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  {isOpen ? (
                    <FiMinus className="h-4 w-4" />
                  ) : (
                    <FiPlus className="h-4 w-4" />
                  )}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 pt-0 text-sm leading-relaxed text-gray-600 md:px-6 md:text-base">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
