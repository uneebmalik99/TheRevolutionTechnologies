'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    icon: '/images/icon1.png',
    title: 'Web Development',
    description:
      'We design and develop responsive, high-quality websites that combine functionality with creativity. Our solutions are built to enhance user experience and help your business achieve measurable results.',
  },
  {
    icon: '/images/i2.png',
    title: 'Mobile App Development',
    description:
      'We create feature-rich, user-friendly mobile applications that deliver seamless performance across platforms. Our apps are designed to engage users and drive lasting business growth.',
  },
  {
    icon: '/images/i3.png',
    title: 'SEO',
    description:
      'We help your business stand out online with proven SEO strategies that boost visibility, rankings, and organic traffic. Our data-driven approach ensures sustainable growth and measurable results.',
  },
  {
    icon: '/images/i4.png',
    title: 'Digital Marketing',
    description:
      'We deliver targeted digital marketing campaigns that connect your brand with the right audience. From content and social media to paid ads, we turn engagement into conversions.',
  },
  {
    icon: '/images/i2.png',
    title: 'Social Media Marketing',
    description:
      'We help your brand grow with creative social media strategies that inspire, engage, and convert. Our campaigns build meaningful connections and strengthen your online presence across all platforms.',
  },
]

export default function ServicesOffer() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-2xl flex items-center justify-center p-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

