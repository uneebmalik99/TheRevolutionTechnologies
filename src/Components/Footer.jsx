'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/careers', label: 'Careers' },
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/contact', label: 'Contact Us' },
    ],
    company: [
      { href: '/company', label: 'About Company' },
      { href: '/services', label: 'Blockchain' },
      { href: '/services', label: 'Mobile App' },
      { href: '/services', label: 'UI/UX Design' },
      { href: '/services', label: 'Web Development' },
    ],
  }

  const socialLinks = [
    { href: 'https://www.facebook.com/TheRevolutionTechnologies', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://www.instagram.com', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.twitter.com', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.linkedin.com/company/therevolutiontechnologies/', icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-2xl font-extrabold text-white mb-4">The Revolution Technologies</h3>
            <div className="w-16 h-1 bg-accent-yellow rounded-full mb-4"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Revolution Technology Infinity Group is one of the leading providers of IT support in Islamabad. 
              Since 2015, we have provided award-winning IT support services to thousands of businesses across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-yellow transition-all duration-300 text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-yellow mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-yellow transition-all duration-300 text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-yellow mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Give us a call today and see what we can do for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors">
                  <MdLocationOn className="w-5 h-5 text-accent-yellow" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed pt-1.5">
                  Office no 12, Aries Tower Maryam Business Center, Murree Rd, Shamsabad, Rawalpindi
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors">
                  <MdEmail className="w-5 h-5 text-accent-yellow" />
                </div>
                <a
                  href="mailto:info@therevolutiontechnologies.tech"
                  className="text-gray-300 hover:text-accent-yellow transition-colors text-sm font-medium"
                >
                  info@therevolutiontechnologies.tech
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors">
                  <MdPhone className="w-5 h-5 text-accent-yellow" />
                </div>
                <div>
                  <a
                    href="tel:+92516112452"
                    className="block text-gray-300 hover:text-accent-yellow transition-colors text-sm font-medium"
                  >
                    051-611-2452
                  </a>
                  <a
                    href="tel:+923317766777"
                    className="block text-gray-300 hover:text-accent-yellow transition-colors text-sm font-medium"
                  >
                    +92-331-7766-777
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 pt-10 border-t border-gray-700/50">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 hover:bg-accent-yellow text-gray-300 hover:text-primary-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-yellow/20 border border-gray-700/50 hover:border-accent-yellow"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-accent-yellow text-primary-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            Copyright © {currentYear} The Revolution Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

