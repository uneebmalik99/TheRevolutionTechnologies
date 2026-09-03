'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const VARIANTS = {
  primary:
    'bg-primary-900 text-white hover:bg-primary-800 border border-transparent shadow-sm hover:shadow-md',
  secondary:
    'bg-white text-gray-900 border border-gray-300 hover:border-primary-900 hover:text-primary-900',
  ghost:
    'bg-transparent text-primary-900 border border-transparent hover:text-primary-700 px-0 py-0 shadow-none',
  light:
    'bg-white text-primary-900 border border-transparent hover:bg-gray-100 shadow-sm',
  outlineLight:
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Unified button. Renders next/link for internal routes, <a> for external/hash,
 * <button> when no href is given.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  children,
  ...rest
}) {
  const isGhost = variant === 'ghost'
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
  const classes = [
    base,
    VARIANTS[variant] || VARIANTS.primary,
    isGhost ? '' : SIZES[size] || SIZES.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (!href) {
    return (
      <button type="button" className={classes} {...rest}>
        {content}
      </button>
    )
  }

  const isInternal = href.startsWith('/') && !href.startsWith('//')

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={classes}
      {...rest}
    >
      {content}
    </a>
  )
}
