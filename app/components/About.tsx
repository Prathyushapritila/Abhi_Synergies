'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

export default function About() {
  const benefits = [
    'One person to call',
    'Clear timelines and budgets',
    'Support from planning to wrap-up',
  ]

  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image (slightly outside container) */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-brandGray/20 shadow-xl md:-ml-8">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-brandGray/10 bg-backgroundWarm rounded-sm -z-10 hidden md:block"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            <SectionHeader
              label="ABOUT"
              title="Built to simplify real-world projects."
            />
            
            <div className="space-y-6 text-brandGray leading-relaxed mb-8">
              <p className="text-lg">
                Most projects need multiple services. A new office needs construction, digital branding, and maybe a launch event. A wedding needs event planning, entertainment, and catering. Usually, that means juggling 4–5 different vendors – a builder, a decorator, an event person, a caterer, a digital guy.
              </p>
              <p>
                Abhi Synergies brings these under one team. Same communication style, same quality standards, same responsibility. We believe in rising together with our clients and partners – you get smoother coordination, fewer misunderstandings, and one person to call when something needs attention.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brandOrange mr-3 text-xl mt-1">✓</span>
                  <span className="text-textMain font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Founder Card */}
            <div className="bg-backgroundWarm border border-brandGray/20 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/abhi-logo.png"
                    alt="Abhi Synergies"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-brandGray mb-1">Founder</div>
                  <h3 className="font-serif text-xl font-semibold text-textMain mb-2">Srikant Pritila</h3>
                  <div className="space-y-1.5 text-sm text-brandGray">
                    <a 
                      href="tel:+919666155296" 
                      className="block hover:text-brandOrange transition-colors"
                    >
                      +91 96661 55296
                    </a>
                    <a 
                      href="mailto:abhignainnovations@gmail.com" 
                      className="block hover:text-brandOrange transition-colors"
                    >
                      abhignainnovations@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
