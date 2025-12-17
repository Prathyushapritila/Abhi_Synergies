'use client'

import { useState, FormEvent } from 'react'
import SectionHeader from './SectionHeader'
import Logo from './Logo'

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
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok) {
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
        } else {
          alert(data.error || 'Failed to send message. Please try again.')
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Failed to send message. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
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
    <section id="contact" className="py-14 md:py-16 bg-white/85">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          label="CONTACT"
          title="Tell us what you are planning"
        />

        <div className="mb-12 max-w-2xl">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Share basic details about your plan. It can be a rough idea — we will call or message you back, ask a few questions and then suggest what services are really needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Column - Founder & Contact Card */}
          <div className="space-y-6">
            {/* Founder Card */}
            <div className="bg-[#FFF8F0] border border-slate-200 rounded-2xl p-6 shadow-sm">
              <Logo variant="contact" />
              <div className="flex items-start gap-4 mt-4">
                <div className="flex-1">
          <div className="text-[10px] uppercase tracking-wide text-ink mb-1 underline decoration-2 font-semibold">Founder</div>
          <h3 className="brand-font text-2xl md:text-3xl text-blue-900 mb-2">SRIKANTH PRITILA</h3>
          <div className="text-sm text-muted space-y-1">
            <a 
              href="tel:+919666155296" 
              className="block hover:text-[#EA6A1F] transition-colors"
            >
              Contact: +91 96661 55296
            </a>
            <a 
              href="mailto:abhisynergies@gmail.com" 
              className="block hover:text-[#EA6A1F] transition-colors"
            >
              Mail ID: abhisynergies@gmail.com
            </a>
          </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#FFF8F0] border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-ink mb-4 underline">Address:</h4>
              <div className="text-sm text-muted leading-relaxed space-y-1">
                <p>Matrusree Apartments</p>
                <p>Opposite: Zudio Showroom</p>
                <p>Hyderguda, Basheerbagh</p>
                <p>Telangana 500029</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-[#EA6A1F]/10 border border-[#EA6A1F]/30 rounded-2xl p-6 text-center">
                <p className="text-[#EA6A1F] font-semibold text-lg mb-2">✓ Thank you.</p>
                <p className="text-muted">We'll review your message and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                    Name <span className="text-[#EA6A1F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA6A1F] transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                    Email <span className="text-[#EA6A1F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA6A1F] transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
                    Phone Number <span className="text-[#EA6A1F]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA6A1F] transition-all ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-3">
                    Service(s) needed <span className="text-[#EA6A1F]">*</span>
                  </label>
                  <div className="space-y-2">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-[#FFF8F0] transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(option)}
                          onChange={() => handleServiceToggle(option)}
                          className="w-4 h-4 text-[#EA6A1F] border-slate-300 rounded focus:ring-[#EA6A1F]"
                        />
                        <span className="text-muted">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                    Message <span className="text-[#EA6A1F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA6A1F] transition-all ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#EA6A1F] text-white font-semibold rounded-lg shadow-md hover:bg-[#EA6A1F]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA6A1F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
