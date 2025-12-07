interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🤝',
    title: 'One Stop Partner',
    description: 'Access all services from construction to events under one roof, simplifying coordination and ensuring seamless execution.',
  },
  {
    icon: '⭐',
    title: 'Consistent Quality',
    description: 'Maintain the same high standards across all service lines, backed by experienced teams and proven methodologies.',
  },
  {
    icon: '👥',
    title: 'Reliable Team',
    description: 'Work with dedicated professionals committed to delivering excellence and building long-term relationships.',
  },
  {
    icon: '🎯',
    title: 'Flexible Custom Solutions',
    description: 'Get tailored solutions that fit your specific needs, budget, and timeline, with personalized attention to detail.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-backgroundMain">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4">
            Why Choose Abhi Synergies
          </h2>
          <div className="w-24 h-1 bg-brandOrange mx-auto mb-6"></div>
          <p className="text-lg text-brandGray max-w-3xl mx-auto">
            Experience the advantage of working with a unified service provider that understands your complete vision and delivers integrated solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-textMain mb-3">
                {feature.title}
              </h3>
              <p className="text-brandGray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

