//Data
import type { OverviewItem } from '@/types'
// Components
import { OverviewListItem } from '@/components/work-details'

/**
 * Overview List Component
 *  @property { OverviewItem[]} data - Data for each list item
 */
type Props = {
  data: OverviewItem[]
  className?: string
}

export default function OverviewList({ data, className }: Props) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <ul className={`flex flex-row justify-center font-sans ${className || ''}`}>
      {data.map((item) => (
        <OverviewListItem
          key={item.labelText}
          labelText={item.labelText}
          content={item.content}
          description={item.description}
        />
      ))}
    </ul>
  )
}
