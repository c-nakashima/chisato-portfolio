// Types
import type { AccordionItem } from '@/types'
// Components
import { AccordionListItem } from '@/components/work-details'

/**
 * Accordion List Component
 *  @property {AccordionItem[]} data - Data for each list item
 */
type Props = {
  data: AccordionItem[]
  className?: string
}

export default function AccordionList({ data, className }: Props) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <ul className={`flex flex-col justify-center ${className || ''}`}>
      {data.map((item, index) => (
        <AccordionListItem
          key={index}
          title={item.title}
          content={item.content}
          defaultOpen={item.defaultOpen}
          className={item.className}
        />
      ))}
    </ul>
  )
}
