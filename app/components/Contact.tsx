'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Abhi Constructions and Innovations',
    'Abhi Consultancy Services',
    'Abhi Digital Services',
    'Abhi Event Management',
    'Abhi Entertainments',
    'Abhi F&B Services',
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

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
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
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
        serviceType: '',
        message: '',
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-sectionBackground">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4">
            Contact and Enquiries
          </h2>
          <div className="w-24 h-1 bg-brandOrange mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-textMain mb-6">
              Get in Touch
            </h3>
            <p className="text-brandGray mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our services, need a quote, or want to discuss your project, our team is ready to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-brandOrange mr-3 text-xl">📞</span>
                <div>
                  <p className="font-semibold text-textMain">Phone</p>
                  <p className="text-brandGray">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brandOrange mr-3 text-xl">✉️</span>
                <div>
                  <p className="font-semibold text-textMain">Email</p>
                  <p className="text-brandGray">info@abhieliteservices.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brandOrange mr-3 text-xl">🕒</span>
                <div>
                  <p className="font-semibold text-textMain">Service Hours</p>
                  <p className="text-brandGray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-brandGray">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold text-lg mb-2">✓ Thank you for your message!</p>
                <p className="text-green-700">We'll get back to you soon.</p>
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-textMain mb-2">
                    Service Type <span className="text-brandOrange">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandOrange ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brandOrange text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

