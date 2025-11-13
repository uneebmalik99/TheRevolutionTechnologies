'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Testimonials from './Testimonials'

const cardData = [
  {
    heading: 'Expertise',
    text: 'Our experienced team combines creativity and technical skill to deliver solutions that exceed expectations.',
  },
  {
    heading: 'Innovation',
    text: 'We embrace fresh ideas and the latest technologies to keep your business ahead in a fast-changing digital world.',
  },
  {
    heading: 'Commitment',
    text: "We're dedicated to building long-term relationships through trust, transparency, and consistent results.",
  },
]

const techPartners = [
  '/images/ibm.png',
  '/images/ibm2.png',
  '/images/ibm3.png',
  '/images/ibm4.png',
  '/images/ibm5.png',
]

export default function CompanyPage() {
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
            What We Actually Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-yellow-300"
          >
            EXPERIENCE. EXECUTION. EXCELLENCE
          </motion.p>
        </div>
      </div>

      {/* Tech Partners */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner}
                  alt={`Tech Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Offering Sustainable Digital Solutions to Amazing People
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                It is our commitment to development and providing clients sustainable solutions that we rank #1! 
                We are a purpose-driven team of developers who aim to make your success scalable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/aboutus.png"
                alt="About Us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Cards */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <motion.div
                key={card.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.heading}
                </h4>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

