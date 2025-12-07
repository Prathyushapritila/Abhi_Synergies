'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-sectionBackground via-backgroundMain to-sectionBackground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #6A6A6A 25%, transparent 25%), linear-gradient(-45deg, #6A6A6A 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #6A6A6A 75%), linear-gradient(-45deg, transparent 75%, #6A6A6A 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-textMain leading-tight">
              Abhi Elite Services
            </h1>
            <p className="text-lg sm:text-xl text-brandGray leading-relaxed max-w-xl">
              A single trusted partner for construction, consultancy, digital, events, entertainment, and F&B services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-brandOrange text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-brandGray text-brandGray font-semibold rounded-lg hover:border-brandOrange hover:text-brandOrange transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side - Abstract Illustration */}
          <div className="hidden md:block relative">
            <div className="relative w-full h-96">
              {/* Overlapping boxes representing different services */}
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-brandGray rounded-sm bg-white shadow-lg transform rotate-6 flex items-center justify-center">
                <span className="text-4xl">🏗️</span>
              </div>
              <div className="absolute top-16 right-8 w-32 h-32 border-2 border-brandOrange rounded-sm bg-white shadow-lg transform -rotate-6 flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <div className="absolute bottom-20 left-12 w-32 h-32 border-2 border-brandGray rounded-sm bg-white shadow-lg transform rotate-12 flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-brandOrange rounded-sm bg-white shadow-lg transform -rotate-12 flex items-center justify-center">
                <span className="text-4xl">🍽️</span>
              </div>
              {/* Center connecting element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-brandGray rounded-sm bg-sectionBackground shadow-md flex items-center justify-center">
                <span className="text-3xl font-serif font-bold text-brandOrange">ABHI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

