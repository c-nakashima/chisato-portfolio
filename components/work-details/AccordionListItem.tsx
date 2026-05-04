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
  defaultOpen?: boolean
  className?: string
}

export default function AccordionListItem({
  title,
  content,
  defaultOpen = false,
  className,
}: Props) {
  return (
    <details
      {...(defaultOpen && { open: true })}
      className="group border border-neutral-100 dark:border-neutral-700"
    >
      <summary
        className={`cursor-pointer list-none 
          text-gray-600 bg-neutral-50 dark:bg-zinc-800 dark:text-neutral-300 leading-snug 
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
      <div className="bg-white text-neutral-700 dark:bg-zinc-800 dark:text-neutral-200 font-sans text-sm font-light px-6 py-5 space-y-4">
        {content}
      </div>
    </details>
  )
}
