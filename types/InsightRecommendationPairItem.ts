// Pair of Insight and Recommendation type

/**
 * Data structure representing a single Pair of Insight and Recommendation (Comparison).
 * Used in the Work detail page to show comparison.
 *
 * @property {string} title - Item Title text
 * @property {ReactNode} content -Item Content
 * @property {string} className - Item Class Name
 */
export type insightRecommendationPairItem = {
  insightTitle: string
  insightContent: React.ReactNode
  recTitle: string
  recContent: React.ReactNode
  defaultOpen?: boolean
  className?: string
}
