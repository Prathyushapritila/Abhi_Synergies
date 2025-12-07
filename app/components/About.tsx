export default function About() {
  const facts = [
    'Multi-domain expertise',
    'Client-centric planning',
    'Execution support from start to finish',
  ]

  return (
    <section id="about" className="py-20 bg-sectionBackground">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-6">
              About Abhi Elite Services
            </h2>
            <div className="space-y-4 text-brandGray leading-relaxed">
              <p>
                Abhi Elite Services represents a unique approach to business services, bringing together construction, consultancy, digital solutions, event management, entertainment, and food & beverage services under one unified brand. This integrated model allows us to serve clients comprehensively, understanding their needs across multiple domains.
              </p>
              <p>
                Our foundation is built on trust, quality, and long-term relationships. We believe that by offering diverse yet interconnected services, we can provide more value to our clients, streamline project coordination, and ensure consistent quality across all touchpoints.
              </p>
              <p>
                Whether you're building a new facility, launching a digital presence, organizing a corporate event, or planning a celebration, Abhi Elite Services is your single point of contact for excellence across all these verticals.
              </p>
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="bg-backgroundMain rounded-lg p-8 shadow-lg border border-gray-200">
            <h3 className="font-serif text-2xl font-semibold text-textMain mb-6">
              What We Offer
            </h3>
            <ul className="space-y-4">
              {facts.map((fact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brandOrange mr-3 text-xl">✓</span>
                  <span className="text-brandGray text-lg">{fact}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-textMain font-semibold mb-2">Our Commitment</p>
              <p className="text-brandGray">
                Delivering integrated solutions with attention to detail, professional expertise, and a commitment to exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

