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
  return (
    <div className={`bg-${tailWindColorName}-50 p-4 ${className}`}>
      <p
        className={`text-${tailWindColorName}-700 text-sm font-sans font-base mb-4`}
      >
        {label}
      </p>
      <p className="mt-2 font-serif text-lg font-medium mb-2">{title}</p>
      <details className="font-sans font-light group">
        <summary
          className={`cursor-pointer text-sm text-${tailWindColorName}-600 hover:underline mb-2 flex items-center gap-2 list-none [&::-webkit-details-marker]:hidden`}
        >
          <span className={`text-${tailWindColorName}-800`}>Details</span>
          <FiChevronDown
            aria-hidden
            className={`text-${tailWindColorName}-500 transition-transform duration-200 group-open:rotate-180`}
          />
        </summary>
        <div className="pl-5">{content}</div>
      </details>
    </div>
  )
}
