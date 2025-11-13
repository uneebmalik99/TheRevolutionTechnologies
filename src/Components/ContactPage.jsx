'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import Map from './Map'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const subject = 'Contact Form Submission'
    const mailtoLink = `mailto:info@therevolutiontechnologies.tech?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
          </motion.p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We will be happy to answer your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Our Address
                  </h3>
                  <p className="text-gray-600">
                    Office no 12, Aries Tower Maryam Business Center, Murree Rd, Shamsabad, Rawalpindi
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MdEmail className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@therevolutiontechnologies.tech"
                    className="text-primary-900 hover:text-primary-800"
                  >
                    info@therevolutiontechnologies.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MdPhone className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Contact Us
                  </h3>
                  <a
                    href="tel:+92516112452"
                    className="text-primary-900 hover:text-primary-800"
                  >
                    051-611-2452
                  </a>
                  <br />
                  <a
                    href="tel:+923317766777"
                    className="text-primary-900 hover:text-primary-800"
                  >
                    +92-331-7766-777
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-900 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-900 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Map />
        </motion.div>
      </div>
    </div>
  )
}

