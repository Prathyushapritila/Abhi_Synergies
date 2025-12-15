interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 lg:mb-16 max-w-2xl">
      <div className="text-xs tracking-[0.25em] text-[#EA6A1F] uppercase mb-2">
        {label}
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-ink mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
