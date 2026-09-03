'use client'

import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper: fade + subtle rise, once, on enter.
 * Replaces the repeated initial/whileInView boilerplate across the site.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 16,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
