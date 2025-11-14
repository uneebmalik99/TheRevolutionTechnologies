'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMapPin, 
  FiBriefcase, 
  FiChevronDown,
  FiCode,
  FiTarget,
  FiSend,
  FiMail,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiHeart,
  FiZap,
  FiDollarSign,
  FiCoffee,
  FiBookOpen,
  FiGlobe
} from 'react-icons/fi'

const jobData = [
  {
    id: 1,
    title: 'Web Developer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Development',
    shortDesc: 'We are looking for a skilled Full Stack Developer.',
    fullDesc: 'We are looking for a Full Stack Developer skilled in React, Node.js, and modern frameworks. You will collaborate with designers and developers to build high-quality web applications.',
    requirements: [
      '3+ years of experience in web development',
      'Proficiency in React, Node.js, and modern JavaScript',
      'Experience with databases (MongoDB, PostgreSQL)',
      'Strong problem-solving skills',
      'Excellent communication skills'
    ],
    icon: FiCode,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Development',
    shortDesc: 'We are looking for talented Mobile App Developers.',
    fullDesc: "You should have experience in Flutter or React Native. You'll work on developing apps that deliver exceptional user experiences across Android and iOS.",
    requirements: [
      '2+ years of mobile app development experience',
      'Proficiency in Flutter or React Native',
      'Experience with native iOS/Android development',
      'Understanding of mobile UI/UX principles',
      'Portfolio of published apps'
    ],
    icon: FiCode,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'Rawalpindi',
    type: 'Full-time',
    department: 'Design',
    shortDesc: 'We are hiring creative UI/UX designers.',
    fullDesc: 'Your role will focus on creating engaging, user-friendly interfaces. Experience with Figma, Adobe XD, and modern design trends is a plus.',
    requirements: [
      '2+ years of UI/UX design experience',
      'Proficiency in Figma, Adobe XD, or Sketch',
      'Strong portfolio showcasing design skills',
      'Understanding of user-centered design principles',
      'Experience with prototyping tools'
    ],
    icon: FiTarget,
    color: 'from-orange-500 to-red-500'
  },
]

const benefits = [
  {
    icon: FiTrendingUp,
    title: 'Career Growth',
    description: 'Continuous learning and clear progression paths',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiZap,
    title: 'Innovative Projects',
    description: 'Work on cutting-edge technologies',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: FiUsers,
    title: 'Great Team',
    description: 'Collaborate with talented professionals',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: FiAward,
    title: 'Recognition',
    description: 'Your contributions are valued',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FiHeart,
    title: 'Work-Life Balance',
    description: 'Flexible hours and supportive environment',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: FiDollarSign,
    title: 'Competitive Salary',
    description: 'Attractive compensation packages',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: FiBookOpen,
    title: 'Learning Budget',
    description: 'Invest in your professional development',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: FiGlobe,
    title: 'Remote Options',
    description: 'Work from anywhere flexibility',
    gradient: 'from-violet-500 to-purple-500'
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Design */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
              >
                <FiBriefcase className="w-4 h-4 text-accent-yellow" />
                Join Our Team
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-clip-text text-transparent">
                  Dream Career
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Join a team of innovators, creators, and problem-solvers. Work on exciting projects, grow your skills, and make a real impact.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#jobs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50"
                >
                  <span>View Openings</span>
                  <FiArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <FiMail className="w-5 h-5" />
                  <span>Send Resume</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '35+', label: 'Team Members', icon: FiUsers },
                { value: '150+', label: 'Projects', icon: FiAward },
                { value: '8+', label: 'Years', icon: FiTrendingUp },
                { value: '98%', label: 'Satisfaction', icon: FiHeart },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-accent-yellow mx-auto mb-3" />
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary-900 mb-4">
              Perks & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team's success with comprehensive benefits and growth opportunities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="h-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-primary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find the perfect role to advance your career.
            </p>
          </motion.div>

          <div className="space-y-6">
            <AnimatePresence>
              {jobData.map((job, index) => {
                const Icon = job.icon
                const isOpen = selectedJob === job.id
                
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`bg-gradient-to-br ${job.color} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}>
                      <button
                        onClick={() => setSelectedJob(isOpen ? null : job.id)}
                        className="w-full p-8 text-left"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-black text-white mb-2">
                                  {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-white/90">
                                  <div className="flex items-center gap-2">
                                    <FiMapPin className="w-4 h-4" />
                                    <span className="font-semibold">{job.location}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FiClock className="w-4 h-4" />
                                    <span className="font-semibold">{job.type}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FiBriefcase className="w-4 h-4" />
                                    <span className="font-semibold">{job.department}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-lg text-white/90 ml-20">
                              {job.shortDesc}
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 ml-4"
                          >
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                              <FiChevronDown className="w-6 h-6 text-white" />
                            </div>
                          </motion.div>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 bg-white/95 backdrop-blur-sm">
                              <div className="pt-6 space-y-6">
                                <div>
                                  <h4 className="text-xl font-black text-primary-900 mb-3">Job Description</h4>
                                  <p className="text-gray-700 leading-relaxed">{job.fullDesc}</p>
                                </div>
                                
                                <div>
                                  <h4 className="text-xl font-black text-primary-900 mb-3">Requirements</h4>
                                  <ul className="space-y-2">
                                    {job.requirements.map((req, idx) => (
                                      <li key={idx} className="flex items-start gap-3">
                                        <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{req}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-all duration-300 hover:shadow-xl"
                                  >
                                    <FiSend className="w-5 h-5" />
                                    <span>Apply Now</span>
                                  </a>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-yellow text-primary-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-yellow/50"
              >
                <FiMail className="w-5 h-5" />
                <span>Send Your Resume</span>
              </motion.a>
              <motion.a
                href="/team"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <FiUsers className="w-5 h-5" />
                <span>Meet The Team</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
