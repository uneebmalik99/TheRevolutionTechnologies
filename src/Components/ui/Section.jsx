'use client'

import Reveal from './Reveal'

const BG = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-primary-900 text-white',
}

/**
 * Standard section shell: consistent vertical rhythm + container, with an
 * optional heading block (eyebrow / title / description / cta).
 */
export default function Section({
  id,
  bg = 'white',
  eyebrow,
  title,
  description,
  align = 'left',
  cta,
  className = '',
  containerClassName = '',
  children,
}) {
  const isNavy = bg === 'navy'
  const centered = align === 'center'

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${BG[bg] || BG.white} ${className}`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {(eyebrow || title || description || cta) && (
          <div
            className={`mb-12 flex flex-col gap-4 ${
              centered
                ? 'items-center text-center'
                : 'md:flex-row md:items-end md:justify-between'
            }`}
          >
            <Reveal className={centered ? 'max-w-2xl' : 'max-w-3xl'}>
              {eyebrow && (
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
                    isNavy ? 'text-accent-yellow' : 'text-primary-700'
                  }`}
                >
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  className={`text-3xl font-bold tracking-tight md:text-4xl ${
                    isNavy ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className={`mt-4 text-base leading-relaxed md:text-lg ${
                    isNavy ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {description}
                </p>
              )}
            </Reveal>
            {cta && <div className="flex-shrink-0">{cta}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
