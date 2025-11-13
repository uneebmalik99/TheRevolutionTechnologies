import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustIndicators from '@/components/TrustIndicators'
import Process from '@/components/Process'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import Projects from '@/components/Projects'
import StatsCounter from '@/components/StatsCounter'
import Insights from '@/components/Insights'
import Testimonials from '@/components/Testimonials'
import Expert from '@/components/Expert'
import CtaBanner from '@/components/CtaBanner'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Home - The Revolution Technologies',
  description: 'Leading provider of IT support, web development, mobile apps, and digital solutions',
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <Process />
      <FeaturedCaseStudy />
      <Projects />
      <StatsCounter />
      <Insights />
      <Testimonials />
      <Expert />
      <CtaBanner />
      <ContactForm />
    </>
  )
}

