// Overview Item type

/**
 * Data structure representing a single overview item.
 * Used in the Work detail page to show overview.
 *
 * @property {string} labelText - Item Label text
 * @property {ReactNode} content -Item Content
 * @property {string} descroption - Item Description
 */
export type OverviewItem = {
  labelText: string;
  content: React.ReactNode;
  description?: string;
};
