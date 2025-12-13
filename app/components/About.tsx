'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

export default function About() {
  const benefits = [
    'Single point of contact',
    'One team, many services',
    'Support from planning to event day',
  ]

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#FFF1E6' }}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/about-bg-abstract.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=90"
                alt="Organized workspace: unified project planning combining construction, events, digital, and F&B services"
                fill
                className="object-cover"
              />
              {/* Subtle overlay for depth and brand consistency */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/5"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <SectionHeader
              label="ABOUT"
              title="Why Abhi Synergies was started"
            />
            
            <div className="space-y-5 text-muted leading-relaxed mb-8">
              <p>
                Many people get tired during a project because every small part has a different person – one for construction, one for sound, one for food, one for digital work. The work itself is okay, but handling everyone becomes stressful.
              </p>
              <p>
                Abhi Synergies was started to reduce this stress. We bring multiple services under one team so that planning is easier, follow-up is simple and you always know who to call if something changes.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#EA6A1F] mr-3 text-xl mt-1">✓</span>
                  <span className="text-ink font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
