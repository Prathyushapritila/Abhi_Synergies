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
            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
              All your construction, event and F&B needs in one place.
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Abhi Synergies is a Hyderabad-based team that helps with buildings, office setups, events, entertainment and food. Instead of coordinating many different vendors, you speak to one team that plans and manages everything from start to finish.
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
                className="px-8 py-4 border-2 border-ink text-ink font-semibold rounded-lg hover:bg-ink hover:text-white transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#EA6A1F] focus:ring-offset-2"
              >
                Talk to us
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                alt="Indian construction and celebration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
