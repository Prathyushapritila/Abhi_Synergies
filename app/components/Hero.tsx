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
    <section id="home" className="relative section-padding bg-backgroundWarm overflow-hidden">
      {/* Frame border - echoing logo square */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-brandGray/20 rounded-sm"></div>
      </div>
      
      <div className="container-editorial relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-wider text-brandGray font-medium">
              ABHI SYNERGIES
            </div>
            
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-textMain leading-tight tracking-tight mb-3">
                Abhi Synergies brings construction, consultancy, digital, events, entertainment and F&B under one team.
              </h1>
              <div className="inline-block px-4 py-1.5 bg-brandOrange/10 text-brandOrange text-sm font-semibold rounded-full border border-brandOrange/20 mb-4">
                Rise Together
              </div>
            </div>
            
            <div className="space-y-4 text-lg text-brandGray leading-relaxed max-w-xl">
              <p>
                We plan and execute real-world projects – from buildings and business setups to events, branding and food services – so clients and partners rise together with one trusted team instead of five vendors.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-brandOrange text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                View all services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-brandGray text-brandGray font-semibold rounded-lg hover:border-brandOrange hover:text-brandOrange transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                Talk to our team
              </button>
            </div>
          </div>

          {/* Right Side - Offset Image Card */}
          <div className="relative hidden md:block">
            {/* Main image card with border and shadow */}
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-brandGray/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Construction project"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping project card - offset to the left */}
            <div className="absolute -bottom-8 -left-8 bg-surface border border-brandGray/20 rounded-lg p-6 shadow-lg max-w-[280px]">
              <div className="text-xs uppercase tracking-wide text-brandGray mb-2">Recent project</div>
              <div className="font-serif text-lg font-semibold text-textMain mb-2">
                Residential project + Launch event + F&B catering
              </div>
              <div className="text-sm text-brandGray">
                All managed by Abhi Synergies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
