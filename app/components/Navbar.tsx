'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'sectors', 'about', 'work', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    setIsOpen(false)
    setActiveSection(section)
  }

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Sectors', href: '#sectors', id: 'sectors' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-backgroundWarm/95 backdrop-blur-sm border-b border-brandGray/10">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link 
            href="#home" 
            className="flex items-center gap-3"
            onClick={() => handleNavClick('home')}
            aria-label="Abhi Synergies Home"
          >
            <div className="relative w-16 h-16">
              <Image
                src="/abhi-logo.png"
                alt="Abhi Synergies"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="font-serif text-lg font-semibold text-textMain">Abhi Synergies</div>
              <div className="text-xs text-brandGray tracking-wide">Rise Together</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 rounded px-2 py-1 ${
                  activeSection === link.id
                    ? 'text-brandOrange'
                    : 'text-brandGray hover:text-brandOrange'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brandOrange"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-brandGray hover:text-brandOrange focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-brandGray/10 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 ${
                    activeSection === link.id
                      ? 'text-brandOrange bg-brandOrange/10'
                      : 'text-brandGray hover:text-brandOrange hover:bg-brandGray/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
