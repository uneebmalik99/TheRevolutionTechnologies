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
  FiArrowRight,
  FiCheckCircle,
  FiUser,
  FiShield
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Map from './Map'

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
    const recipients = [
      'info@therevolutiontechnologies.io',
      'uneebmalik99@gmail.com'
    ].join(',')
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

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: [
        'Office no 12, Aries Tower',
        'Maryam Business Center, Murree Rd',
        'Shamsabad, Rawalpindi'
      ],
      color: 'from-blue-500 to-cyan-500',
      link: null
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: ['info@therevolutiontechnologies.io'],
      color: 'from-purple-500 to-pink-500',
      link: 'mailto:info@therevolutiontechnologies.io'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: ['051-611-2452', '0349-076-4229'],
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+92516112452'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['Monday - Friday: 11:00 AM - 12:30 AM'],
      color: 'from-orange-500 to-red-500',
      link: null
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
      <section className="pt-32 pb-16 bg-white border-b-4 border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-black text-primary-900 mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Share your project goals or questions and our team will get back to you right away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const Component = info.link ? 'a' : 'div'
              
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Component
                    href={info.link || undefined}
                    className={`block h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 ${
                      info.link ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-primary-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <FiMessageCircle className="w-6 h-6 text-primary-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-primary-900">
                  Send a Message
                </h2>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-semibold">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-100 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Additional Info under Form */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Response Time',
                    description: 'We reply within one business day with next steps.',
                    icon: FiClock,
                  },
                  {
                    title: 'Project Discovery Call',
                    description: 'Schedule a 30-minute consultation after we review your message.',
                    icon: FiMessageCircle,
                  },
                  {
                    title: 'Dedicated Account Manager',
                    description: 'A single point of contact guides you through the process.',
                    icon: FiUser,
                  },
                  {
                    title: 'Secure & Confidential',
                    description: 'All shared information is kept private and secure.',
                    icon: FiShield,
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50"
                    >
                      <div className="p-3  ">
                        <Icon className="w-5 h-5 text-primary-900" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <FiMapPin className="w-6 h-6 text-primary-900" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary-900">
                    Find Us
                  </h2>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
                  <Map />
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-primary-900">Office Location:</strong> Office no 12, Aries Tower, Maryam Business Center, Murree Rd, Shamsabad, Rawalpindi
                  </p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Need Immediate Assistance?</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  For urgent matters, feel free to call us directly or send an email.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+92516112452"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <FiPhone className="w-5 h-5 text-accent-yellow" />
                    <span className="font-semibold">051-611-2452</span>
                  </a>
                  <a
                    href="tel:+92490764229"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <FiPhone className="w-5 h-5 text-accent-yellow" />
                    <span className="font-semibold">0349-076-4229</span>
                  </a>
                  <a
                    href="mailto:info@therevolutiontechnologies.io"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <FiMail className="w-5 h-5 text-accent-yellow" />
                    <span className="font-semibold">info@therevolutiontechnologies.io</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative py-16 bg-white">
        <motion.a
          href="https://wa.me/923490764229"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 hover:shadow-[#25D366]/60 transition-all duration-300 fixed right-4 bottom-12 lg:right-8 lg:bottom-12 z-40 border-4 border-white"
        >
          <FaWhatsapp className="w-6 h-6 lg:w-7 lg:h-7" />
        </motion.a>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                <FiClock className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-2">Response Time</h3>
              <p className="text-gray-600">
                We typically respond within 24 hours on business days
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                <FiMessageCircle className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                Get a free consultation for your project needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                <FiCheckCircle className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of experts is ready to help you succeed
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
