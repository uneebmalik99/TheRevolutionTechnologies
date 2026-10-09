'use client'

import Image from '@/components/ui/SiteImage'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import CtaBand from '@/components/ui/CtaBand'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/FAQ'
import { hiringFaqs } from '@/components/faqData'

const teamMembers = [
  {
    image: '/images/uneeb.png',
    name: 'Uneeb Ghazanfer',
    designation: 'Chief Executive Officer',
    role: 'Leadership',
    bio: 'Driving business growth and excellence.',
    email: 'uneebmalik99@gmail.com',
  },
  {
    image: '/images/haseeb.png',
    name: 'Haseeb Malik',
    designation: 'Managing Director',
    role: 'Leadership',
    bio: 'Leading innovation and strategic vision.',
  },
  {
    image: '/images/shifa.jpeg',
    name: 'Shifa Masood',
    designation: 'MERN Stack Developer',
    role: 'Engineering',
    bio: 'Building scalable web solutions.',
  },
  {
    image: '/images/asif.png',
    name: 'Muhammad Asif',
    designation: 'MERN Stack Developer',
    role: 'Engineering',
    bio: 'Building scalable web solutions.',
  },
  {
    image: '/images/razik.jpeg',
    name: 'Abdul Razik',
    designation: 'React Native Developer',
    role: 'Engineering',
    bio: 'Building scalable application solutions.',
  },
  {
    image: '/images/fa.jpeg',
    name: 'Farhan',
    designation: 'React Native Developer',
    role: 'Engineering',
    bio: 'Building scalable application solutions.',
  },
]

const leadership = teamMembers.filter((m) => m.role === 'Leadership')
const otherMembers = teamMembers.filter((m) => m.role !== 'Leadership')

const groupedByRole = otherMembers.reduce((acc, member) => {
  if (!acc[member.role]) acc[member.role] = []
  acc[member.role].push(member)
  return acc
}, {})

const bannerStats = [
  { value: `${teamMembers.length}+`, label: 'Team Members' },
  { value: '8+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function TeamPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Our team"
        title="The people behind the work"
        description="Passionate professionals dedicated to delivering exceptional digital solutions."
      />

      {/* Leadership */}
      <Section align="center" eyebrow="Leadership" title="Visionary leaders">
        <div className="flex flex-wrap justify-center gap-8">
          {leadership.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <div className="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex justify-center bg-primary-50 p-8">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full ring-4 ring-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 font-semibold text-primary-700">{member.designation}</p>
                  <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
                  {member.email && (
                    <div className="mt-4 flex justify-center gap-2">
                      <a
                        href="#"
                        aria-label={`${member.name} on LinkedIn`}
                        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary-900 hover:text-white"
                      >
                        <FiLinkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary-900 hover:text-white"
                      >
                        <FiMail className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Departments */}
      <Section bg="gray">
        {Object.entries(groupedByRole).map(([role, members]) => (
          <div key={role} className="mb-14 last:mb-0">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              {role}
            </h2>
            <div className="mb-8 h-1 w-16 rounded-full bg-primary-900" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {members.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.04}>
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary-50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">{member.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{member.designation}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Stats banner */}
      <section className="bg-primary-900 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {bannerStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-accent-yellow md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Joining the team">
        <div className="mx-auto max-w-3xl">
          <FAQ items={hiringFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Want to join us?"
        description="We're always looking for talented people. Check our open roles or send your resume."
        primaryHref="/careers"
        primaryLabel="View open roles"
        secondaryHref="/contact"
        secondaryLabel="Send your resume"
      />
    </div>
  )
}
