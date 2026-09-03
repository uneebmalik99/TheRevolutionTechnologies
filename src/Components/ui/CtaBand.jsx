'use client'

import Reveal from './Reveal'
import Button from './Button'

/**
 * Shared closing call-to-action band (navy).
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
    <section className="bg-primary-900 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant="light" size="lg" icon={false}>
              {primaryLabel}
            </Button>
            {secondaryHref && (
              <Button href={secondaryHref} variant="outlineLight" size="lg" icon={false}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
