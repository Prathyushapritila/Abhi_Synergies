interface Project {
  category: string
  title: string
  description: string
  gradient: string
}

const projects: Project[] = [
  {
    category: 'Construction',
    title: 'Modern Office Complex',
    description: 'Complete design and construction of a 5-story commercial building with sustainable features and modern amenities.',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    category: 'Event',
    title: 'Corporate Annual Summit',
    description: 'End-to-end planning and execution of a 500-person corporate event including venue, catering, and entertainment.',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    category: 'Digital Services',
    title: 'E-commerce Platform',
    description: 'Full-stack web development with custom branding, payment integration, and digital marketing strategy.',
    gradient: 'from-green-400 to-green-600',
  },
  {
    category: 'F&B',
    title: 'Wedding Catering Service',
    description: 'Customized menu planning and execution for a 300-guest wedding celebration with multiple cuisine options.',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    category: 'Entertainment',
    title: 'Cultural Festival',
    description: 'Stage production, lighting, sound, and performance coordination for a week-long cultural festival.',
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    category: 'Consultancy',
    title: 'Business Expansion Strategy',
    description: 'Comprehensive market analysis, feasibility study, and strategic planning for multi-location expansion.',
    gradient: 'from-indigo-400 to-indigo-600',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-backgroundMain">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-brandOrange mx-auto mb-6"></div>
          <p className="text-lg text-brandGray max-w-3xl mx-auto">
            Explore some of our recent work across different service verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-backgroundMain rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-white text-6xl opacity-50">📸</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-brandOrange text-white text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-textMain mb-2">
                  {project.title}
                </h3>
                <p className="text-brandGray leading-relaxed">
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

