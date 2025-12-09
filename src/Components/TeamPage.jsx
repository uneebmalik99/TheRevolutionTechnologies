'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FiLinkedin,
  FiMail,
  FiGithub,
  FiTwitter,
  FiStar,
  FiAward
} from 'react-icons/fi'

const teamMembers = [
  {
    image: '/images/uneeb.png',
    name: 'Uneeb Ghazanfer',
    designation: 'Chief Executive Officer',
    role: 'Leadership',
    icon: '/images/ceo.png',
    bio: 'Driving business growth and excellence',
    email: 'uneebmalik99@gmail.com',
  },
  {
    image: '/images/haseeb.png',
    name: 'Haseeb Malik',
    designation: 'Managing Director',
    role: 'Leadership',
    icon: '/images/md.png',
    bio: 'Leading innovation and strategic vision',
  },

  {
    image: "/images/shifa.jpeg",
    name: 'Shifa Masood',
    designation: "MERN Stack Developer",
    role: 'Team',
    icon: "/images/web_developer.png",
    bio: 'Building scalable web solutions',
  },
  {
    image: "/images/asif.png",
    name: 'Muhammad Asif',
    designation: "MERN Stack Developer",
    role: 'Team',
    icon: "/images/web_developer.png",
    bio: 'Building scalable web solutions',
  },
  {
    image: "/images/razik.jpeg",
    name: 'Abdul Razik',
    designation: "React Native Developer",
    role: 'Team',
    icon: "/images/web_developer.png",
    bio: 'Building scalable Application solutions',
  },
  {
    image: "/images/fa.jpeg",
    name: 'Farhan',
    designation: "React Native Developer",
    role: 'Team',
    icon: "/images/web_developer.png",
    bio: 'Building scalable Application solutions',
  },
  
]

// Separate leadership
const leadership = teamMembers.filter(m => m.role === 'Leadership')
const otherMembers = teamMembers.filter(m => m.role !== 'Leadership')

// Group others by role
const groupedByRole = otherMembers.reduce((acc, member) => {
  if (!acc[member.role]) {
    acc[member.role] = []
  }
  acc[member.role].push(member)
  return acc
}, {})

export default function TeamPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-black text-primary-900 mb-6 tracking-tight">
              Our Team
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Passionate professionals dedicated to delivering exceptional digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <FiAward className="w-5 h-5 text-primary-900" />
              <span className="text-sm font-bold text-primary-900 uppercase tracking-wider">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary-900">
              Visionary Leaders
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {leadership.map((member, index) => (
              <LeaderCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members by Department */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedByRole).map(([role, members]) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 last:mb-0"
            >
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-primary-900 mb-2">
                  {role}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-primary-900 to-accent-yellow rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    onHover={() => setHoveredMember(member.name)}
                    onLeave={() => setHoveredMember(null)}
                    isHovered={hoveredMember === member.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">{teamMembers.length}+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">6</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Departments</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">8+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">150+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LeaderCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative w-80 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100">
        {/* Image with circular frame */}
        <div className="relative h-80 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center p-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-accent-yellow/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-primary-300/20 rounded-full blur-xl"></div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-2xl font-black text-primary-900 mb-1">
            {member.name}
          </h3>
          <p className="text-primary-700 font-semibold mb-3">
            {member.designation}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            {member.bio}
          </p>
          
          {/* Social Links */}
          {member.name === 'Uneeb Ghazanfer' && (
            <div className="flex justify-center gap-3">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary-900 hover:text-white transition-colors">
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={member.email ? `mailto:${member.email}` : '#'}
                className="p-2 bg-gray-100 rounded-full hover:bg-primary-900 hover:text-white transition-colors"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Badge */}
        <div className="absolute top-6 right-6">
          <div className="px-3 py-1 bg-accent-yellow rounded-full">
            <span className="text-xs font-black text-primary-900 uppercase">Leader</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function TeamMemberCard({ member, index, onHover, onLeave, isHovered }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
        {/* Circular Image */}
        <div className="relative pt-8 pb-4 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-900 transition-all duration-500">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
          </div>
          {/* Role Icon Badge */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="p-2 bg-white rounded-full shadow-lg border-2 border-primary-100">
              <Image
                src={member.icon}
                alt={member.role}
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-6 pb-5 px-4 text-center">
          <h3 className="text-lg font-black text-primary-900 mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-gray-600 font-medium mb-3">
            {member.designation}
          </p>
          
          {/* Bio on hover */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0
            }}
            className="text-xs text-gray-500 mb-3 overflow-hidden"
          >
            {member.bio}
          </motion.p>

          {/* Social Links */}
          {member.name === 'Uneeb Ghazanfer' && (
            <div className="flex justify-center gap-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 bg-gray-50 rounded-full hover:bg-primary-900 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <FiLinkedin className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href={member.email ? `mailto:${member.email}` : '#'}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 bg-gray-50 rounded-full hover:bg-primary-900 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <FiMail className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          )}
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  )
}
