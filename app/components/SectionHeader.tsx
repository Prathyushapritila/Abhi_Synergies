interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      <div className="text-xs uppercase tracking-wider text-brandGray font-medium mb-3">
        {label}
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4">
        {title}
      </h2>
      {description && (
        <div className="w-16 h-0.5 bg-brandOrange mb-4"></div>
      )}
      {description && (
        <p className="text-lg text-brandGray leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

