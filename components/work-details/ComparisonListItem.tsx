'use client'

//Icon
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

/**
 * Comparison List Item Component
 *  @property {string} label - Label for each list item
 *  @property {string} title - Title for each list item
 *  @property {string} content - Content for each list item
 *  @property {string} tailWindColorName - Tailwind's color name for the item's theme
 *  @property {string} imageSrc - Optional image source path
 *  @property {string} imageAlt - Optional image alt text
 *  @property {boolean} isDetailOpen - Whether the details element should be open by default
 */
type Props = {
  label: string
  title: string
  content: React.ReactNode
  tailWindColorName?: string
  className?: string
  imageSrc?: string
  imageAlt?: string
  isDetailOpen?: boolean
}

export default function ComparisonListItem({
  label,
  title,
  content,
  tailWindColorName = 'slate',
  className,
  imageSrc,
  imageAlt,
  isDetailOpen = false,
}: Props) {
  return (
    <div className={`bg-${tailWindColorName}-50 p-4 ${className}`}>
      <p
        className={`text-${tailWindColorName}-700 text-sm font-sans font-base mb-4`}
      >
        {label}
      </p>
      <div className="mt-2 mb-2 flex flex-col sm:flex-row gap-3 items-start">
        <div className="flex-1">
          <p className="font-serif text-lg font-medium">{title}</p>
          <details
            className="font-sans font-light group mt-2"
            {...(isDetailOpen && { open: true })}
          >
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
        {imageSrc && (
          <a
            href={imageSrc}
            onClick={(e) => {
              e.preventDefault()
              window.open(
                imageSrc,
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full sm:w-[45%] sm:flex-shrink-0"
            aria-label={`Open ${imageAlt || 'image'} in new window`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
        )}
      </div>
    </div>
  )
}
