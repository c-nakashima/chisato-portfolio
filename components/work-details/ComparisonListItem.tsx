//Icon
import { FiChevronDown } from 'react-icons/fi'

/**
 * Comparison List Item Component
 *  @property {string} label - Label for each list item
 *  @property {string} title - Title for each list item
 *  @property {string} content - Content for each list item
 *  @property {string} tailWindColorName - Tailwind's color name for the item's theme
 */
type Props = {
  label: string
  title: string
  content: React.ReactNode
  tailWindColorName?: string
  className?: string
}

export default function ComparisonListItem({
  label,
  title,
  content,
  tailWindColorName = 'slate',
  className,
}: Props) {
  // Tailwindの動的クラス名を完全なクラス名にマッピング
  const colorClasses = {
    slate: {
      bg: 'bg-slate-50',
      label: 'text-slate-700',
      summary: 'text-slate-600',
      details: 'text-slate-800',
      icon: 'text-slate-500',
    },
    lime: {
      bg: 'bg-lime-50',
      label: 'text-lime-800',
      summary: 'text-lime-900',
      details: 'text-lime-900',
      icon: 'text-lime-700',
    },
    red: {
      bg: 'bg-red-50',
      label: 'text-red-700',
      summary: 'text-red-600',
      details: 'text-red-800',
      icon: 'text-red-500',
    },
  }

  const colors =
    colorClasses[tailWindColorName as keyof typeof colorClasses] ||
    colorClasses.slate

  return (
    <div className={`${colors.bg} p-4 ${className}`}>
      <p className={`${colors.label} text-sm font-sans font-base mb-4`}>
        {label}
      </p>
      <p className="mt-2 font-serif text-lg font-medium mb-2">{title}</p>
      <details className="font-sans font-light group">
        <summary
          className={`cursor-pointer text-sm ${colors.summary} hover:underline mb-2 flex items-center gap-2 list-none [&::-webkit-details-marker]:hidden`}
        >
          <span className={colors.details}>Details</span>
          <FiChevronDown
            aria-hidden
            className={`${colors.icon} transition-transform duration-200 group-open:rotate-180`}
          />
        </summary>
        <div className="pl-5">{content}</div>
      </details>
    </div>
  )
}
