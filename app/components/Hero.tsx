'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center bg-[#EA6A1F]/10 text-[#EA6A1F] uppercase text-[11px] tracking-[0.25em] px-3 py-1 rounded-full">
              Multi-service team
            </div>
            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
              All your construction, event and F&B needs in one place.
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Abhi Synergies is a Hyderabad-based team that helps with constructions and interiors, from office setup to recruitment, event planning, entertainment and food. Instead of coordinating multiple vendors, clients work with one team that plans and manages everything from start to finish.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-[#EA6A1F] text-white font-semibold rounded-lg shadow-md hover:bg-[#EA6A1F]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA6A1F] focus:ring-offset-2"
              >
                View our services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border border-[#EA580C] text-[#EA580C] font-semibold rounded-lg hover:bg-[#EA580C] hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA580C] focus:ring-offset-2"
              >
                Talk to us
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=90"
                alt="Premium multi-service hero: construction, events, digital services, consultancy, entertainment, and F&B"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay - left side clean for text, right side maintains visual weight */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
