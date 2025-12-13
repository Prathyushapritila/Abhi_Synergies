'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Project {
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: 'Apartment launch with housewarming function',
    description: 'Site readiness, ribbon-cutting event, guest flow and buffet, all handled as one connected plan.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Office setup with small opening event',
    description: 'Interior finishing, soft opening, launch event and digital announcement posts coordinated together.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    title: 'Restaurant launch with branding and music',
    description: 'Planning, vendor coordination and phased setup to help a growing team move in smoothly.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    title: 'Family function with stage, lights and buffet',
    description: 'Stage, lights, entertainment and food for a relaxed, intimate gathering.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
  },
]

export default function Work() {
  return (
    <section 
      id="work" 
      className="py-16 md:py-20 relative"
      style={{
        backgroundImage: 'url(/images/projects-bg-warm.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          label="PROJECTS"
          title="Examples of how we combine services"
          description="These are sample ways we mix construction, events, digital and F&B together. Your plan can be similar or fully different — we listen first and then suggest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {/* Background Image */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Content - bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
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
