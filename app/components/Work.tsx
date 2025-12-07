'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Project {
  category: string
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    category: 'Construction + Event',
    title: 'Apartment launch + branding + launch event',
    description: 'Complete building construction, digital branding for sales, and a launch event with catering for 200 guests.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    category: 'Digital + Event',
    title: 'Restaurant opening campaign',
    description: 'Brand identity, website, social media setup, and grand opening event with live entertainment and F&B service.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    category: 'Construction + Consultancy',
    title: 'Office renovation project',
    description: 'Planning and approvals, interior renovation, and digital setup for the new workspace.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    category: 'Event + F&B',
    title: 'Corporate annual dinner',
    description: 'Full event coordination, stage setup, entertainment program, and multi-cuisine catering for 300 attendees.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
  },
  {
    category: 'Construction + Digital',
    title: 'Residential complex branding',
    description: 'Building construction, interior design, and complete digital presence for property sales.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    category: 'Event + Entertainment',
    title: 'Cultural festival production',
    description: 'Week-long festival with stage production, lighting, sound, and multiple performance line-ups.',
    imageUrl: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="section-padding bg-backgroundWarm">
      <div className="container-editorial">
        <SectionHeader
          label="PROJECTS"
          title="A few ways we've helped clients"
          description="Real projects that combined multiple services under one team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden border border-brandGray/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-textMain/85 via-textMain/40 to-transparent"></div>
              
              {/* Content - bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block px-3 py-1 bg-brandOrange text-white text-xs font-semibold rounded-full mb-2 border border-brandOrange/20">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg font-semibold mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
