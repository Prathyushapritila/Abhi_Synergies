'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Sector {
  title: string
  description: string
  imageUrl: string
}

const sectors: Sector[] = [
  {
    title: 'Homes & Apartments',
    description: 'Individuals and families undertaking new construction or renovation of flats and independent houses, with additional support for interiors and housewarming arrangements.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    title: 'Businesses & Offices',
    description: 'Owners setting up offices, clinics, showrooms or small businesses who need space, staff, setup and branding with the option of launch events.',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80',
  },
  {
    title: 'Functions & Celebrations',
    description: 'Families or companies planning engagements, birthdays, anniversaries, annual days or cultural programs with stage, sound, entertainment and food.',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
  },
]

export default function Sectors() {
  return (
    <section id="who-we-help" className="py-16 md:py-20 bg-white/85">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          label="WHO WE HELP"
          title="Who usually works with Abhi Synergies?"
          description="Most of our clients are people who don't want to deal with 4–5 different vendors. They want one team that can see the full picture."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3 group-hover:text-[#EA6A1F] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
