import Image from 'next/image'

interface LogoProps {
  variant?: 'header' | 'footer' | 'contact'
  className?: string
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  // Exact size configurations as specified
  // header: Mobile 56px (h-14), Desktop 80px (h-20)
  // footer: Mobile 56px (h-14), Desktop 72px (h-[72px])
  // contact: 80-120px
  const sizeClasses = {
    header: 'h-14 md:h-20 w-auto object-contain',
    footer: 'h-14 md:h-[72px] w-auto object-contain',
    contact: 'h-20 md:h-24 lg:h-[120px] w-auto object-contain',
  }

  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ overflow: 'visible', background: 'transparent' }}>
      <Image
        src="/AbhiPng-12.png"
        alt="Abhi Synergies"
        width={variant === 'contact' ? 300 : variant === 'footer' ? 280 : 320}
        height={variant === 'contact' ? 120 : variant === 'footer' ? 72 : 80}
        className={sizeClasses[variant]}
        style={{ filter: 'none', opacity: 1, background: 'transparent' }}
        priority={variant === 'header'}
      />
    </div>
  )
}

