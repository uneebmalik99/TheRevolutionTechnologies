'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    image: '/images/haseeb.png',
    name: 'Haseeb Malik',
    designation: 'MD',
    icon: '/images/md.png',
  },
  {
    image: '/images/uneeb.png',
    name: 'Uneeb Ghazanfer',
    designation: 'CEO',
    icon: '/images/ceo.png',
  },
  {
    image: "/images/shifa.jpeg",
    name: 'Shifa Masood',
    designation: "MERN Stack Developer",
    alt: "Shifa Masood",
    icon: "/images/web_developer.png",
  },
  {
    image: '/images/awais.png',
    name: 'Awais',
    designation: 'Business Developer',
    icon: '/images/bd.png',
  },
  {
    image: '/images/saqib.png',
    name: 'Saqib',
    designation: 'SEO',
    icon: '/images/seo.png',
  },
  {
    image: '/images/rimsha.png',
    name: 'Rimsha Javid',
    designation: 'UX/UI & Graphic Designer',
    icon: '/images/graphic.png',
  },
  {
    image: '/images/jawad.png',
    name: 'Jawad Khan',
    designation: 'UX/UI & Graphic Designer',
    icon: '/images/graphic.png',
  },
  {
    image: '/images/falak.png',
    name: 'Falak Maraj Mughal',
    designation: 'Web Developer',
    icon: '/images/web_developer.png',
  },
  {
    image: '/images/umera.png',
    name: 'Umme Umera',
    designation: 'Content Writer',
    icon: '/images/content_writer.png',
  },
  {
    image: '/images/aamir_yasin.png',
    name: 'Aamir Yasin',
    designation: 'Web Developer',
    icon: '/images/web_developer.png',
  },
  {
    image: '/images/usama.png',
    name: 'Muhammad Usama',
    designation: 'Web Developer',
    icon: '/images/web_developer.png',
  },
  {
    image: '/images/ayesha.png',
    name: 'Ayesha Zia',
    designation: 'Content Writer',
    icon: '/images/content_writer.png',
  },
  {
    image: '/images/hamid.png',
    name: 'Hamid Nasir',
    designation: 'Business Developer',
    icon: '/images/bd.png',
  },
]

export default function TeamPage() {
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
            Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make The Revolution Technologies a leader in digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={member.icon}
                      alt={member.designation}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-white text-sm font-medium">
                      {member.designation}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

