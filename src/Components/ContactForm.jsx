'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        service: '',
        name: '',
        email: '',
        organization: '',
        message: '',
      })
    }, 1000)
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-primary-50/20 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-900">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Let's Get <span className="bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">Started</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-900 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-900/10 outline-none transition-all bg-white hover:border-gray-300"
                >
                  <option value="">How Can We Help You</option>
                  <option value="consulting">Consulting</option>
                  <option value="support">Support</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-900/10 outline-none transition-all bg-white hover:border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-900/10 outline-none transition-all bg-white hover:border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-900/10 outline-none transition-all bg-white hover:border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="8"
                required
                className="flex-1 w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-900 focus:ring-4 focus:ring-primary-900/10 outline-none transition-all resize-none bg-white hover:border-gray-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 group relative px-10 py-4 bg-gradient-to-r from-primary-900 to-primary-800 hover:from-primary-800 hover:to-primary-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiSend className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'SEND MESSAGE'}</span>
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

