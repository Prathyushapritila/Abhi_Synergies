'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
}

const services: Service[] = [
  {
    id: 'constructions',
    title: 'Constructions & Innovations',
    description: 'Residential and commercial projects, renovations, interiors and on-site coordination.',
    imageUrl: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=400&q=80',
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description: 'Planning, approvals, budgeting and vendor coordination so projects move smoothly.',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  },
  {
    id: 'digital',
    title: 'Digital Services',
    description: 'Brand identity, websites, social media and digital setup for your business or event.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
  },
  {
    id: 'events',
    title: 'Event Management',
    description: 'Stage, sound, decor and coordination for launches, weddings and corporate events.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  },
  {
    id: 'entertainment',
    title: 'Entertainments',
    description: 'Cultural programs, live performances and custom entertainment line-ups.',
    imageUrl: 'https://images.unsplash.com/photo-1464375117522-1311dd6d0cd7?w=400&q=80',
  },
  {
    id: 'fnb',
    title: 'F&B Services',
    description: 'Catering, food counters and curated menus for any size of gathering.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Intro Text */}
          <div>
            <SectionHeader
              label="SERVICES"
              title="Services under Abhi Synergies"
              description="One company covering multiple verticals. Instead of coordinating with separate teams for construction, events, digital work and catering, you work with one trusted partner who understands how these pieces fit together."
            />
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex gap-4 p-5 rounded-lg border border-brandGray/10 hover:border-brandOrange/40 hover:shadow-md transition-all duration-300 bg-surface hover:-translate-y-1"
              >
                {/* Image Thumbnail with border */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-brandGray/10">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-textMain mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brandGray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
