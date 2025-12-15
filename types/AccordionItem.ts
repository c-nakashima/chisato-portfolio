// Accordion Item type

/**
 * Data structure representing a single accordion item.
 * Used in the Work detail page to show accordion.
 *
 * @property {string} title - Item Title text
 * @property {ReactNode} content -Item Content
 * @property {string} className - Item Class Name
 */
export type AccordionItem = {
  title: string
  content: React.ReactNode
  defaultOpen: boolean
  className?: string
}
