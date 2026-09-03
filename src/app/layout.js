import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Fab from '@/components/Fab'

export const metadata = {
  metadataBase: new URL('https://therevolutiontechnologies.io'),
  title: {
    default: 'The Revolution Technologies - Digital Solutions & Software Development',
    template: '%s | The Revolution Technologies',
  },
  description:
    'The Revolution Technologies designs and builds web platforms, mobile apps, AI solutions, and custom software for businesses. Delivering digital solutions since 2015.',
  keywords:
    'software development, web development, mobile apps, AI development, custom software, UI/UX design, digital solutions, Rawalpindi, Islamabad',
  openGraph: {
    type: 'website',
    siteName: 'The Revolution Technologies',
    title: 'The Revolution Technologies - Digital Solutions & Software Development',
    description:
      'Web platforms, mobile apps, AI solutions, and custom software for businesses. Delivering digital solutions since 2015.',
    url: 'https://therevolutiontechnologies.io',
    images: [{ url: '/images/logo12.png', width: 1200, height: 630, alt: 'The Revolution Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Revolution Technologies - Digital Solutions & Software Development',
    description:
      'Web platforms, mobile apps, AI solutions, and custom software for businesses since 2015.',
    images: ['/images/logo12.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo12.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo12.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/logo12.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo12.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo12.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [
      { url: '/images/logo12.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Fab />
      </body>
    </html>
  )
}

