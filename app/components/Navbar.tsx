'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'who-we-help', 'about', 'work', 'contact']
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
    { name: 'Who we help', href: '#who-we-help', id: 'who-we-help' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/85 border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="min-h-[96px] md:min-h-[120px] flex items-center justify-between">
          {/* Logo Block */}
          <Link 
            href="#home" 
            className="flex items-center"
            onClick={() => handleNavClick('home')}
            aria-label="Abhi Synergies Home"
          >
            <img
              src="/AbhiPng-12.png"
              alt="Abhi Synergies"
              className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
              style={{ display: 'block', maxWidth: 'none' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm md:text-base text-slate-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded px-2 py-1 ${
                  activeSection === link.id
                    ? 'text-[#EA6A1F]'
                    : 'hover:text-[#EA6A1F]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA6A1F]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-800 hover:text-[#EA6A1F] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
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
          <div className="md:hidden pb-6 border-t border-slate-200 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
                    activeSection === link.id
                      ? 'text-[#EA6A1F] bg-[#EA6A1F]/10'
                      : 'text-slate-800 hover:text-[#EA6A1F] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
