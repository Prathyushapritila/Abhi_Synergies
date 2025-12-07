'use client'

interface Service {
  id: string
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    id: 'constructions',
    title: 'Abhi Constructions and Innovations',
    description: 'End-to-end construction, renovation and infrastructure solutions for residential and commercial projects with a focus on quality and innovation.',
    icon: '🏗️',
  },
  {
    id: 'consultancy',
    title: 'Abhi Consultancy Services',
    description: 'Business and technical consulting, project planning, feasibility studies and strategic guidance to help clients make confident decisions.',
    icon: '💼',
  },
  {
    id: 'digital',
    title: 'Abhi Digital Services',
    description: 'Web design, branding, digital marketing, and technology integration to strengthen online presence and customer engagement.',
    icon: '💻',
  },
  {
    id: 'events',
    title: 'Abhi Event Management',
    description: 'Planning and execution of corporate events, private functions, product launches and community programs.',
    icon: '📅',
  },
  {
    id: 'entertainment',
    title: 'Abhi Entertainments',
    description: 'Stage shows, cultural programs, performances and entertainment experiences for events and celebrations.',
    icon: '✨',
  },
  {
    id: 'fnb',
    title: 'Abhi F&B Services',
    description: 'Catering, food stalls and customized dining experiences for corporate, social and private events.',
    icon: '🍽️',
  },
]

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="py-20 bg-sectionBackground">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-brandOrange mx-auto mb-6"></div>
          <p className="text-lg text-brandGray max-w-3xl mx-auto">
            Abhi Elite Services combines multiple service verticals under one trusted brand, providing comprehensive solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-backgroundMain rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl hover:border-brandOrange transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-textMain mb-3">
                {service.title}
              </h3>
              <p className="text-brandGray mb-6 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="text-brandOrange font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 rounded px-2 py-1"
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

