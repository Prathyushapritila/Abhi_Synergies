import Image from 'next/image'

interface LogoProps {
  variant?: 'header' | 'footer' | 'contact'
  className?: string
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  // Header: Bigger and readable with proper touch targets and accessibility
  if (variant === 'header') {
    return (
      <div 
        className={`relative ${className}`} 
        style={{ overflow: 'visible', background: 'transparent' }}
        role="img"
        aria-label="Abhi Synergies - Integrated Services Company"
      >
        <Image
          src="/abhi-synergies-logo.png"
          alt="Abhi Synergies - Integrated Services Company providing construction, consultancy, digital services, events, entertainment, and F&B solutions"
          width={320}
          height={80}
          className="h-16 md:h-20 w-auto object-contain flex-shrink-0 min-h-[44px] min-w-[120px]"
          style={{ 
            filter: 'none', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
            height: 'auto',
          }}
          priority={true}
          quality={90}
          loading="eager"
        />
      </div>
    )
  }

  // Contact: Must fit the contact card width and height without overflow
  if (variant === 'contact') {
    return (
      <div 
        className={`w-full max-w-[520px] mx-auto mb-4 ${className}`} 
        style={{ background: 'transparent' }}
        role="img"
        aria-label="Abhi Synergies Logo"
      >
        <Image
          src="/abhi-synergies-logo.png"
          alt="Abhi Synergies - Integrated Services Company"
          width={520}
          height={130}
          className="w-full h-auto object-contain min-h-[60px]"
          style={{ 
            filter: 'none', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
          }}
          quality={90}
        />
      </div>
    )
  }

  // Footer: Fit within footer column width with enhanced visibility
  if (variant === 'footer') {
    return (
      <div 
        className={`w-full max-w-[360px] mx-auto md:mx-0 ${className}`} 
        style={{ background: 'transparent' }}
        role="img"
        aria-label="Abhi Synergies Logo"
      >
        <Image
          src="/abhi-synergies-logo.png"
          alt="Abhi Synergies - Integrated Services Company"
          width={360}
          height={90}
          className="w-full h-auto object-contain min-h-[50px]"
          style={{ 
            filter: 'brightness(1.2) contrast(1.3) saturate(1.1) drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
          }}
          quality={90}
        />
      </div>
    )
  }

  return null
}

