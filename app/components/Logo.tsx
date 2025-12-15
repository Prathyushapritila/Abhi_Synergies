import Image from 'next/image'

interface LogoProps {
  variant?: 'header' | 'footer' | 'contact'
  className?: string
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  // Responsive sizing: Header ~56-72px desktop, ~44-52px mobile
  // Footer: slightly smaller but readable
  const sizeClasses = {
    header: 'h-12 md:h-18 w-auto object-contain flex-shrink-0',
    footer: 'h-12 md:h-16 w-auto object-contain flex-shrink-0',
    contact: 'h-16 md:h-20 lg:h-24 w-auto object-contain flex-shrink-0',
  }

  return (
    <div className={`relative ${className}`} style={{ overflow: 'visible', background: 'transparent' }}>
      <Image
        src="/AbhiPng-12(1).png"
        alt="Abhi Synergies"
        width={variant === 'contact' ? 300 : variant === 'footer' ? 280 : 320}
        height={variant === 'contact' ? 120 : variant === 'footer' ? 72 : 80}
        className={sizeClasses[variant]}
        style={{ 
          filter: 'none', 
          opacity: 1, 
          background: 'transparent',
          maxWidth: 'none',
        }}
        priority={variant === 'header'}
      />
    </div>
  )
}

