'use client'

import Reveal from './Reveal'

/**
 * Compact navy page header used across internal pages.
 */
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="bg-primary-900 pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-yellow">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
