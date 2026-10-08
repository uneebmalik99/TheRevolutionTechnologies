'use client'

import Link from 'next/link'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const companyLinks = [
  { href: '/company', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/careers', label: 'Careers' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#web', label: 'Web Development' },
  { href: '/services#mobile', label: 'Mobile App Development' },
  { href: '/services#ai', label: 'AI Development' },
  { href: '/services#uiux', label: 'UI/UX Design' },
  { href: '/services#marketing', label: 'Social Media Marketing' },
  { href: '/services#custom', label: 'Custom Software Development' },
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/TheRevolutionTechnologies',
    icon: FaFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/company/therevolutiontechnologies/',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://wa.me/923490764229',
    icon: FaWhatsapp,
    label: 'Chat on WhatsApp',
  },
]

function LinkList({ title, links, children }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-accent-yellow"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        Follow us on social
      </h3>
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="text-white/70 transition-colors hover:text-accent-yellow"
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-44">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">The Revolution Technologies</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-accent-yellow" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A software and digital solutions company delivering web, mobile, AI, and custom
              product engineering for businesses since 2015.
            </p>
          </div>

          <LinkList title="Company" links={companyLinks} />
          <LinkList title="Services" links={serviceLinks}>
            <SocialLinks />
          </LinkList>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MdLocationOn className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-yellow" />
                <span className="leading-relaxed">
                  Office no 12, Aries Tower, Maryam Business Center, Murree Rd, Shamsabad,
                  Rawalpindi
                </span>
              </li>
              <li className="flex gap-3">
                <MdEmail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-yellow" />
                <a
                  href="mailto:info@therevolutiontechnologies.io"
                  className="transition-colors hover:text-accent-yellow"
                >
                  info@therevolutiontechnologies.io
                </a>
              </li>
              <li className="flex gap-3">
                <MdPhone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-yellow" />
                <span className="flex flex-col">
                  <a href="tel:+92516112452" className="transition-colors hover:text-accent-yellow">
                    051-611-2452
                  </a>
                  <a href="tel:+923490764229" className="transition-colors hover:text-accent-yellow">
                    0349-076-4229
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} The Revolution Technologies. All rights reserved.</p>
          <p>Web · Mobile · AI · Custom Software</p>
        </div>
      </div>
    </footer>
  )
}
