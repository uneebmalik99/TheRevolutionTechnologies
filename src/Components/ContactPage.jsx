'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiMessageCircle,
  FiCheckCircle,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Map from './Map'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/FAQ'
import { generalFaqs } from '@/components/faqData'

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Visit Us',
    details: [
      'Office no 12, Aries Tower',
      'Maryam Business Center, Murree Rd',
      'Shamsabad, Rawalpindi',
    ],
    link: null,
  },
  {
    icon: FiMail,
    title: 'Email Us',
    details: ['info@therevolutiontechnologies.io'],
    link: 'mailto:info@therevolutiontechnologies.io',
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    details: ['051-611-2452', '0349-076-4229'],
    link: 'tel:+92516112452',
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    details: ['Monday - Friday', '11:00 AM - 12:30 AM'],
    link: null,
  },
]

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-900 focus:ring-2 focus:ring-primary-100'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!formData.email.match(emailRegex)) {
      alert('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const subject = formData.subject || 'Contact Form Submission'
    const recipients = ['info@therevolutiontechnologies.io', 'uneebmalik99@gmail.com'].join(',')
    const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Share your project goals or questions and our team will get back to you within one business day."
      />

      {/* WhatsApp FAB (stacked above the scroll-to-top button) */}
      <motion.a
        href="https://wa.me/923490764229"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:right-8"
      >
        <FaWhatsapp className="h-6 w-6" />
      </motion.a>

      {/* Contact info cards */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const Wrapper = info.link ? 'a' : 'div'
            return (
              <Reveal key={info.title} delay={index * 0.05}>
                <Wrapper
                  href={info.link || undefined}
                  className={`block h-full rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 ${
                    info.link ? 'hover:-translate-y-1 hover:shadow-card-hover' : ''
                  }`}
                >
                  <span className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-base font-bold text-gray-900">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm leading-relaxed text-gray-600">
                      {detail}
                    </p>
                  ))}
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Form + map */}
      <Section bg="gray">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Send a message</h2>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                  <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <p className="text-sm font-medium text-green-800">
                    Message sent! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows="6"
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card">
                <div className="mb-4 flex items-center gap-2">
                  <FiMapPin className="h-5 w-5 text-primary-900" />
                  <h2 className="text-xl font-bold text-gray-900">Find us</h2>
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <Map />
                </div>
                <p className="mt-4 rounded-lg bg-primary-50 p-4 text-sm leading-relaxed text-gray-700">
                  <strong className="text-primary-900">Office:</strong> Office no 12, Aries Tower,
                  Maryam Business Center, Murree Rd, Shamsabad, Rawalpindi
                </p>
              </div>

              <div className="rounded-2xl bg-primary-900 p-6 text-white">
                <h3 className="text-lg font-bold">Need immediate assistance?</h3>
                <p className="mt-2 text-sm text-white/80">
                  For urgent matters, call us directly or send an email.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+92516112452"
                    className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    <FiPhone className="h-4 w-4 text-accent-yellow" />
                    051-611-2452
                  </a>
                  <a
                    href="tel:+923490764229"
                    className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    <FiPhone className="h-4 w-4 text-accent-yellow" />
                    0349-076-4229
                  </a>
                  <a
                    href="mailto:info@therevolutiontechnologies.io"
                    className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    <FiMail className="h-4 w-4 text-accent-yellow" />
                    info@therevolutiontechnologies.io
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Before you reach out">
        <div className="mx-auto max-w-3xl">
          <FAQ items={generalFaqs} />
        </div>
      </Section>

      {/* Reassurance strip */}
      <Section bg="gray" align="center">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: FiClock, title: 'Response Time', text: 'We typically respond within 24 hours on business days.' },
            { icon: FiMessageCircle, title: 'Free Consultation', text: 'Get a free consultation for your project needs.' },
            { icon: FiCheckCircle, title: 'Expert Support', text: 'Our team of experts is ready to help you succeed.' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.06} className="text-center">
                <span className="mx-auto mb-4 inline-flex rounded-lg bg-white p-3 text-primary-900 shadow-card">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
