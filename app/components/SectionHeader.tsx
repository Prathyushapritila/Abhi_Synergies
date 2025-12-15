interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 lg:mb-16 max-w-2xl">
      <div className="inline-flex items-center bg-[#EA6A1F]/10 text-[#EA6A1F] uppercase text-[11px] tracking-[0.25em] px-3 py-1 rounded-full mb-3">
        {label}
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-ink mb-4 leading-tight">
        <span className="text-teal-600">{title}</span>
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
