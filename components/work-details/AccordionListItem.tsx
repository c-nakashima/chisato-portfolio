import { FiChevronDown } from 'react-icons/fi'

/**
 * Accordion List Item Component
 * - Title and content are displayed in an accordion
 *
 * @property {string} title - Title Text
 * @property {ReactNode} content - Content inside the accordion
 * @property {string} className - Class Name
 */
type Props = {
  title: string
  content: React.ReactNode
  className?: string
}

export default function AccordionListItem({
  title,
  content,
  className,
}: Props) {
  return (
    <details className="group border border-neutral-100">
      <summary
        className={`cursor-pointer list-none 
          text-gray-600 bg-neutral-50 leading-snug 
          py-3 px-4 
          font-sans text-sm
          flex justify-between items-center ${className}`}
      >
        <span>{title}</span>
        <span className="transition-transform group-open:rotate-180">
          {' '}
          <FiChevronDown
            className="
            transition-transform duration-200
            group-open:rotate-180
            text-xl"
            aria-hidden
          />
        </span>
      </summary>
      <div className="bg-white text-neutral-700 font-sans text-sm font-light px-6 py-5 space-y-4">
        {content}
      </div>
    </details>
  )
}
