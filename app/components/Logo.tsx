import Image from 'next/image'

interface LogoProps {
  variant?: 'header' | 'footer' | 'contact'
  className?: string
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  // Size configurations for each variant
  // header: 40-52px mobile, 56-72px desktop
  // footer: 48-64px
  // contact: 80-120px
  const sizeClasses = {
    header: 'h-10 sm:h-12 md:h-14 lg:h-[72px] w-auto max-w-none',
    footer: 'h-12 md:h-16 w-auto max-w-none',
    contact: 'h-20 md:h-24 lg:h-[120px] w-auto max-w-none',
  }

  return (
    <div className={`relative flex-shrink-0 ${sizeClasses[variant]} ${className}`} style={{ overflow: 'visible' }}>
      <Image
        src="/AbhiPng-5-mainLogo.png"
        alt="Abhi Synergies"
        width={variant === 'contact' ? 300 : variant === 'footer' ? 250 : 220}
        height={variant === 'contact' ? 112 : variant === 'footer' ? 64 : 72}
        className="object-contain w-full h-full"
        style={{ objectFit: 'contain', filter: 'none', opacity: 1 }}
        priority={variant === 'header'}
      />
    </div>
  )
}

