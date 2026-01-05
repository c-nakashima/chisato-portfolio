'use client'

// Components
import {
  SectionLabel,
  BlocLabel,
  ComparisonListItem,
} from '@/components/work-details'
// // Data
// import {
//   desktopResearchLivingCostData,
//   desktopResearchWebReviewData,
// } from '@/lib/flatmates/resources'

/**
 * Summary Section Component
 * - Flatmate detail page
 *
 */

export default function SummarySection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel number="10" labelText="SUMMARY" className="mb-10" />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Reccommendations" className="mb-4" />
        <p className="text-base font-sans font-light mb-4">
          Recommendations and next steps from this UX resaerch project.
        </p>
        <div className="py-4 space-y-6">
          <ComparisonListItem
            label="Recommendation 01"
            title="Enhance the Map View & Reduce Unnecessary Page Transitions"
            content={
              <ul className="list-disc font-light font-sans text-base leading-normal">
                <li>Add more detailed information to the map view.</li>
                <li>Add a save action to the map view.</li>
                <li>Add filters for the saved shortlist in the map view.</li>
                <li>Add a map view to the saved shortlist</li>
              </ul>
            }
            tailWindColorName="lime"
            className="w-full"
            imageSrc="/flatmates/clicked-map-view.png"
            imageAlt="Clicked Map View"
            isDetailOpen={true}
          />
          <ComparisonListItem
            label="Recommendation 02"
            title="Help Users Learn Features Easily and Explore Freely"
            content={
              <ul className="list-disc font-light font-sans text-base leading-normal">
                <li>Highlight the view switcher.</li>
                <li>
                  Organize list data to show information in a consistent
                  structure.
                </li>
              </ul>
            }
            tailWindColorName="lime"
            className="w-full"
            imageSrc="/flatmates/helper-features.png"
            imageAlt="Helper Features"
            isDetailOpen={true}
          />
        </div>
      </div>
    </section>
  )
}
