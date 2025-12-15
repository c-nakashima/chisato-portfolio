// Data
import type { insightRecommendationPairItem } from '@/types'
// Components
import { ComparisonListItem } from '@/components/work-details'

/**
 * Comparison List Component
 *  @property { ComparisonItem[]} data - Data for each list item
 */
type Props = {
  pairData: insightRecommendationPairItem[]
  className?: string
}

export default function ComparisonList({ pairData, className }: Props) {
  if (!pairData || pairData.length === 0) {
    return null
  }

  return (
    <div>
      {pairData.map((p, index) => (
        <article
          key={index}
          className={`grid md:grid-cols-2 mb-1 ${className}`}
        >
          <ComparisonListItem
            label={`Insights 0${index + 1}`}
            title={p.insightTitle}
            content={p.insightContent}
            tailWindColorName="slate"
          />
          <ComparisonListItem
            label={`Recommendations 0${index + 1}`}
            title={p.recTitle}
            content={p.recContent}
            tailWindColorName="lime"
          />
        </article>
      ))}
    </div>
  )
}
