'use client'

import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import FAQ from '@/components/FAQ'
import {
  generalFaqs,
  engagementFaqs,
  techFaqs,
  hiringFaqs,
} from '@/components/faqData'

const groups = [
  { title: 'General', items: generalFaqs },
  { title: 'Working together', items: engagementFaqs },
  { title: 'Technology', items: techFaqs },
  { title: 'Careers', items: hiringFaqs },
]

export default function FaqPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Support"
        title="Frequently asked questions"
        description="Everything you need to know about working with The Revolution Technologies. Can't find an answer? Get in touch and we'll help."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">
                {group.title}
              </h2>
              <FAQ items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Still have questions?"
        description="Send us a message and a member of the team will get back to you within one business day."
        secondaryHref="/services"
        secondaryLabel="Browse services"
      />
    </div>
  )
}
