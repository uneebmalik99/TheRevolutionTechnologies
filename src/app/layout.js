import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Fab from '@/components/Fab'

export const metadata = {
  title: 'The Revolution Technologies - Digital Solutions & IT Services',
  description: 'Leading provider of IT support, web development, mobile apps, and digital solutions in Islamabad since 2015.',
  keywords: 'IT support, web development, mobile apps, digital solutions, Islamabad',
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

