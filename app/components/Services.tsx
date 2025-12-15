'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
  backgroundImage: string
}

const services: Service[] = [
  {
    id: 'constructions',
    title: 'Constructions & Innovations',
    description: 'We support you with constructions and interiors and basic setup for homes, apartments, offices and shops.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80', // Modern building construction site
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description: 'We assist with project planning, approvals, budgeting and vendor coordination. Our team also supports complete recruitment needs, covering both IT roles and non-IT hiring such as local vendors, technicians and on-site staff.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80', // Business consulting meeting
  },
  {
    id: 'digital',
    title: 'Digital Services',
    description: 'We create simple, clean branding and online presence – logos, posts or basic websites – so people can find your project or business.',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Digital marketing workspace
  },
  {
    id: 'events',
    title: 'Event Management',
    description: 'We plan and run events such as launches, family functions and office gatherings – from stage and sound to timing and flow.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80', // Corporate event stage setup
  },
  {
    id: 'entertainment',
    title: 'Entertainments',
    description: 'We arrange artists, cultural programs, DJs or anchors to match the mood of your event.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80', // Live music event with lights
  },
  {
    id: 'fnb',
    title: 'F&B Services',
    description: 'We set up food counters or buffets with clean service and simple menus that guests enjoy.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80', // Professional catering buffet setup
  },
]

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-16 md:py-20 bg-white/85"
    >
      {/* Content layer */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Intro Text */}
          <div>
            <SectionHeader
              label="SERVICES"
              title="Services from Abhi Synergies"
              description="These are the main services we provide. You can choose just one, or combine many based on your need."
            />
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
              >
                {/* Content wrapper */}
                <div className="relative z-10 flex gap-4 w-full">
                  {/* Image Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-ink mb-1.5 group-hover:text-[#EA6A1F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
