'use client'

import Reveal from './Reveal'
import Button from './Button'

/**
 * Shared closing call-to-action: a floating gradient card on a dark section.
 */
export default function CtaBand({
  title = "Let's build something together",
  description = "Tell us about your goals and we'll put together the right team to make it happen.",
  primaryHref = '/contact',
  primaryLabel = 'Book a call',
  secondaryHref = '/portfolio',
  secondaryLabel = 'View our work',
}) {
  return (
    <section className="bg-[#0d1030] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 p-8 shadow-2xl md:p-12 lg:p-14">
            {/* Geometric line accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <svg
                className="absolute -right-16 -top-20 h-[420px] w-[420px] text-white/10"
                viewBox="0 0 400 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="300" cy="120" r="90" />
                <circle cx="300" cy="120" r="150" />
                <circle cx="230" cy="260" r="120" />
              </svg>
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 text-lg text-white/80">{description}</p>
              </div>

              <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href={primaryHref} variant="light" size="lg" icon>
                  {primaryLabel}
                </Button>
                {secondaryHref && (
                  <Button
                    href={secondaryHref}
                    variant="outlineLight"
                    size="lg"
                    icon={false}
                  >
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
