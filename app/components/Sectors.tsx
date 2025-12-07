'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Sector {
  title: string
  description: string
  services: string[]
  imageUrl: string
}

const sectors: Sector[] = [
  {
    title: 'Homes & apartments',
    description: 'When building or renovating a home, you often need construction, interior design, digital branding (for renting or selling), and sometimes event planning for housewarming. We handle all of it.',
    services: ['Construction + Interiors + Digital branding'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    title: 'Businesses & offices',
    description: 'Setting up a new office or expanding? We combine consultancy for planning and approvals, digital services for your online presence, and event management for launches or team gatherings.',
    services: ['Consultancy + Digital + Events'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    title: 'Functions & celebrations',
    description: 'Weddings, corporate launches, anniversaries – these need event coordination, entertainment, and food service working together seamlessly. One team, one point of contact.',
    services: ['Events + Entertainment + F&B'],
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="section-padding bg-backgroundWarm relative">
      {/* Subtle corner accent */}
      <div className="absolute top-12 right-12 w-32 h-32 border-l border-t border-brandGray/10 rounded-tl-sm hidden lg:block"></div>
      
      <div className="container-editorial relative">
        <SectionHeader
          label="SECTORS"
          title="Where our services fit best"
          description="Real projects usually need more than one service. Here's how we combine our offerings for common scenarios."
        />

        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-0 items-center bg-surface rounded-lg overflow-hidden border border-brandGray/10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image with border */}
              <div className={`relative h-64 md:h-80 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-r border-brandGray/10"></div>
              </div>
              
              {/* Content */}
              <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-textMain mb-4">
                  {sector.title}
                </h3>
                <p className="text-brandGray leading-relaxed mb-6">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.services.map((service, i) => (
                    <span
                      key={i}
                      className="inline-block px-4 py-2 bg-brandOrange/10 text-brandOrange text-sm font-medium rounded-full border border-brandOrange/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
