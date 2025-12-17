'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative py-14 md:py-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-fade-in relative z-20">
            <div className="inline-flex items-center bg-[#EA6A1F]/10 text-[#EA6A1F] uppercase text-[11px] tracking-[0.25em] px-3 py-1 rounded-full">
              Multi-service team
            </div>
            {/* Main heading - Exactly 2 lines */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-semibold text-ink leading-tight tracking-tight">
              <span className="text-blue-900 block">
                {/* Line 1: One Partner. One Vision. */}
                <span className="block">One Partner. One Vision.</span>
                {/* Line 2: One Team. Complete Execution. */}
                <span className="block">One Team. Complete Execution.</span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Abhi Synergies is a Hyderabad-based integrated services company delivering construction, interiors, events, staffing, entertainment, and F&amp;B solutions, seamlessly managed under one roof.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-[#EA6A1F] text-white font-semibold rounded-lg shadow-md hover:bg-[#EA6A1F]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA6A1F] focus:ring-offset-2"
              >
                Explore Our Solutions
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border border-[#EA580C] text-[#EA580C] font-semibold rounded-lg hover:bg-[#EA580C] hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA580C] focus:ring-offset-2"
              >
                Get a Free Quote
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full mt-8 md:mt-0 z-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
              <Image
                src="/hero-image.jpeg"
                alt="Premium multi-service hero: construction, events, digital services, consultancy, entertainment, and F&B"
                fill
                className="object-cover object-center"
                style={{
                  filter: 'brightness(1.2) contrast(1.2) saturate(1.3)',
                }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
