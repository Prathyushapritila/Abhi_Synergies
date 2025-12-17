import Image from 'next/image'

interface LogoProps {
  variant?: 'header' | 'footer' | 'contact'
  className?: string
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  // Header: Bigger and readable
  if (variant === 'header') {
    return (
      <div className={`relative ${className}`} style={{ overflow: 'visible', background: 'transparent', maxWidth: '100%' }}>
        <Image
          src="/AbhiPng-13.png"
          alt="Abhi Synergies"
          width={320}
          height={80}
          className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-none object-contain flex-shrink-0"
          style={{ 
            filter: 'none', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
            height: 'auto',
          }}
          priority={true}
        />
      </div>
    )
  }

  // Contact: Must fit the contact card width and height without overflow
  if (variant === 'contact') {
    return (
      <div className={`w-full max-w-[520px] mx-auto mb-4 ${className}`} style={{ background: 'transparent' }}>
        <Image
          src="/AbhiPng-13.png"
          alt="Abhi Synergies"
          width={520}
          height={130}
          className="w-full h-auto object-contain"
          style={{ 
            filter: 'none', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
          }}
        />
      </div>
    )
  }

  // Footer: Fit within footer column width
  if (variant === 'footer') {
    return (
      <div className={`w-full max-w-[360px] mx-auto md:mx-0 ${className}`} style={{ background: 'transparent' }}>
        <Image
          src="/AbhiPng-13.png"
          alt="Abhi Synergies"
          width={360}
          height={90}
          className="w-full h-auto object-contain"
          style={{ 
            filter: 'none', 
            opacity: 1, 
            background: 'transparent',
            maxWidth: '100%',
          }}
        />
      </div>
    )
  }

  return null
}

