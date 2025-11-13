'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiChevronDown } from 'react-icons/fi'

const jobData = [
  {
    title: 'Web Developer',
    location: 'Rawalpindi',
    shortDesc: 'We are looking for a skilled Full Stack Developer.',
    fullDesc:
      'We are looking for a Full Stack Developer skilled in React, Node.js, and modern frameworks. You will collaborate with designers and developers to build high-quality web applications.',
  },
  {
    title: 'Mobile App Developer',
    location: 'Rawalpindi',
    shortDesc: 'We are looking for talented Mobile App Developers.',
    fullDesc:
      "You should have experience in Flutter or React Native. You'll work on developing apps that deliver exceptional user experiences across Android and iOS.",
  },
  {
    title: 'UI/UX Designer',
    location: 'Rawalpindi',
    shortDesc: 'We are hiring creative UI/UX designers.',
    fullDesc:
      'Your role will focus on creating engaging, user-friendly interfaces. Experience with Figma, Adobe XD, and modern design trends is a plus.',
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover your next career move with one of the leading Tech Firms!
            </p>
            <a
              href="#vacancies"
              className="inline-block px-8 py-4 bg-accent-yellow text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join Us?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career development programs',
              },
              {
                title: 'Innovative Projects',
                description: 'Work on cutting-edge technologies and exciting projects',
              },
              {
                title: 'Great Team',
                description: 'Collaborate with talented and passionate professionals',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div id="vacancies" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {jobData.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setSelectedJob(selectedJob === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <FiBriefcase className="w-6 h-6 text-primary-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 ml-10">
                      <FiMapPin className="w-5 h-5" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mt-2 ml-10">{job.shortDesc}</p>
                  </div>
                  <FiChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      selectedJob === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedJob === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {job.fullDesc}
                      </p>
                      <button className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

