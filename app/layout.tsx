import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import WatermarkLayer from './components/WatermarkLayer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Abhi Synergies · Rise Together',
  description: 'One team for spaces, stories and celebrations. Abhi Synergies brings construction, consultancy, digital, events, entertainment and F&B under one team.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="relative font-sans antialiased text-ink">
        <WatermarkLayer />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
