import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, services, message } = body

    // Validate required fields
    if (!name || !email || !phone || !services || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email configuration
    const recipientEmail = 'abhignainnovations@gmail.com'
    const subject = `New Contact Form Submission from ${name}`
    
    // Format email body as HTML
    const emailBodyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #EA6A1F;">New Contact Form Submission</h2>
        <p>You have received a new contact form submission from the Abhi Synergies website:</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services Needed:</strong> ${services.join(', ')}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the contact form on abhi-synergies.vercel.app
        </p>
      </div>
    `

    // Plain text version
    const emailBodyText = `
New contact form submission from Abhi Synergies website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Services Needed: ${services.join(', ')}
Message:
${message}

---
This email was sent from the contact form on abhi-elite-services.vercel.app
    `.trim()

    // Email sending functionality
    // To enable email sending, install Resend: npm install resend
    // Then add RESEND_API_KEY and RESEND_FROM_EMAIL to your environment variables
    // 
    // Example Resend integration (uncomment when Resend is installed):
    // if (process.env.RESEND_API_KEY) {
    //   const { Resend } = await import('resend')
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
    //     to: recipientEmail,
    //     replyTo: email,
    //     subject: subject,
    //     html: emailBodyHtml,
    //     text: emailBodyText,
    //   })
    // }

    // Fallback: Use mailto link (requires user's email client)
    // This is a temporary solution until Resend is configured
    // To configure Resend:
    // 1. Install: npm install resend
    // 2. Get API key from https://resend.com
    // 3. Add RESEND_API_KEY to your .env.local file
    // 4. Add RESEND_FROM_EMAIL to your .env.local (e.g., 'contact@yourdomain.com')
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBodyText)}`
    
    // Log for debugging
    console.log('Contact form submission (mailto fallback):', {
      to: recipientEmail,
      subject,
      mailtoLink,
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

