// work type

/**
 * Data structure representing a single Work item.
 * Used in the Work section for listing and generating detail pages.
 *
 * @property {string} slug - A unique identifier used in URLs
 * @property {string} title - Work title
 * @property {string} subtitle - Work subtitle
 * @property {string[]} roles - Roles in the project
 * @property {string} term - Term of the work
 * @property {string} summary - Summary text
 * @property {string} thumbnail - Path to the thumbnail image
 */
export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  roles: string[];
  term: string;
  summary: string;
  thumbnail: string;
};
