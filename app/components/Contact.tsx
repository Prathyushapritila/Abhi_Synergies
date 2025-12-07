'use client'

import { useState, FormEvent } from 'react'
import SectionHeader from './SectionHeader'

interface FormData {
  name: string
  email: string
  phone: string
  services: string[]
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  services?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Constructions & Innovations',
    'Consultancy Services',
    'Digital Services',
    'Event Management',
    'Entertainments',
    'F&B Services',
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: [],
        message: '',
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-editorial">
        <SectionHeader
          label="CONTACT"
          title="Share your plan, we'll shape the rest."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="mb-6">
              <h3 className="font-serif text-xl font-semibold text-textMain mb-2">Abhi Synergies</h3>
              <p className="text-sm text-brandGray mb-1">Rise Together</p>
            </div>
            
            <p className="text-lg text-brandGray mb-8 leading-relaxed">
              Tell us about your project – whether it's construction, an event, digital work, or a combination. We'll get back to you within 1–2 working days.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-semibold text-textMain mb-1">Phone</p>
                <a 
                  href="tel:+919666155296" 
                  className="text-brandGray hover:text-brandOrange transition-colors"
                >
                  +91 96661 55296
                </a>
              </div>
              <div>
                <p className="font-semibold text-textMain mb-1">Email</p>
                <a 
                  href="mailto:abhignainnovations@gmail.com" 
                  className="text-brandGray hover:text-brandOrange transition-colors"
                >
                  abhignainnovations@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-textMain mb-2">Address</p>
                <div className="text-brandGray text-sm leading-relaxed">
                  <p>Block: AG8</p>
                  <p>Mathrus Apartment</p>
                  <p>Opp: Zudio showroom Hyderguda Basheerbagh Road</p>
                  <p>Hyderguda</p>
                  <p>Hyderabad, Telangana 500029</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-textMain mb-1">Response time</p>
                <p className="text-brandGray">We typically respond within 1–2 working days.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-brandOrange/10 border border-brandOrange/30 rounded-lg p-6 text-center">
                <p className="text-brandOrange font-semibold text-lg mb-2">✓ Thank you for your message!</p>
                <p className="text-brandGray">We'll get back to you within 1–2 working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-textMain mb-2">
                    Name <span className="text-brandOrange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all ${
                      errors.name ? 'border-red-500' : 'border-brandGray/30'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-textMain mb-2">
                    Email <span className="text-brandOrange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all ${
                      errors.email ? 'border-red-500' : 'border-brandGray/30'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-textMain mb-2">
                    Phone Number <span className="text-brandOrange">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all ${
                      errors.phone ? 'border-red-500' : 'border-brandGray/30'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-textMain mb-3">
                    Service(s) needed <span className="text-brandOrange">*</span>
                  </label>
                  <div className="space-y-2">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-backgroundWarm transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(option)}
                          onChange={() => handleServiceToggle(option)}
                          className="w-4 h-4 text-brandOrange border-brandGray/30 rounded focus:ring-brandOrange"
                        />
                        <span className="text-brandGray">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-textMain mb-2">
                    Message <span className="text-brandOrange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all ${
                      errors.message ? 'border-red-500' : 'border-brandGray/30'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brandOrange text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
                >
                  Send Message
                </button>
                
                <p className="text-xs text-brandGray text-center">
                  We reply in 1–2 working days, usually sooner.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
