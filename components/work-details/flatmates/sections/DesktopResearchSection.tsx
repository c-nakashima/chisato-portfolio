// Components
import {
  SectionLabel,
  BlocLabel,
  AccordionList,
} from '@/components/work-details'
// Data
import {
  desktopResearchLivingCostData,
  desktopResearchWebReviewData,
} from '@/lib/flatmates/resources'

/**
 * Desktop Research Section Component
 * - Flatmate detail page
 *
 */

export default function DesktopResearchSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="04"
        labelText="DESKTOP RESEARCH"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Finding - 01" className="mb-4" />
        <p className="mt-0 font-serif text-2xl mb-4">
          Living cost has been increasing
        </p>
        <p className="font-sans font-light">
          Users might need to compromise some requirements because of the
          increase in rent and living cost, which makes it more difficult to
          meet their requirement with limited budget
        </p>
        <div className="mt-6 p-2">
          <h4 className="font-sans text-lg font-light text-neutral-500 mb-4">
            Resources
          </h4>
          <AccordionList data={desktopResearchLivingCostData} />
        </div>
      </div>
      <div className="px-4 pb-4">
        <BlocLabel labelText="Finding - 02" className="mb-4" />
        <p className="mt-0 font-serif text-2xl mb-4">
          Users seem not being able to eliminate unwanted post
        </p>
        <p className="font-sans font-light">
          Users can’t eliminate unmatched posts using the search filter, which
          might result in no response, time consuming, and unreliable
          information because users may send messages randomly, including
          unmatched posts
        </p>
        <div className="mt-6 p-2">
          <h4 className="font-sans text-lg font-light text-neutral-500 mb-4">
            Resources
          </h4>
          <AccordionList data={desktopResearchWebReviewData} />
        </div>
      </div>
    </section>
  )
}
