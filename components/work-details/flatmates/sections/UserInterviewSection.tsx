import Image from 'next/image'
// Data
import {
  userInterviewConditionsData,
  insightRecommendationPairsData,
} from '@/lib/flatmates/userinterview'
// Components
import {
  SectionLabel,
  BlocLabel,
  AccordionList,
  ComparisonList,
} from '@/components/work-details'

/**
 * Desktop Research Section Component
 * - Flatmate detail page
 *
 */

export default function UserInterviewSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="04"
        labelText="DESKTOP RESEARCH"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Conditions and Questions" className="mb-4" />
        <p className="mt-0 font-serif text-2xl mb-4">
          One-on-one interview with 3 participants
        </p>
        <div className="mt-6 p-2">
          <AccordionList data={userInterviewConditionsData} />
        </div>
      </div>
      <div className="px-4">
        <BlocLabel labelText="Affinity Mapping" className="mb-6" />
        <p className="font-sans font-light">
          Synthesized their answers with an{' '}
          <a
            href="https://www.figma.com/file/PjileseBrSZP4iQD7TODpA/affinity-mapping?node-id=0%3A1&t=eU4j2ZiWwQMU8Ch9-1&fuid=992836180276873275"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            affinity mapping
            <span aria-hidden className="text-xs mr-1">
              ↗
            </span>
          </a>
          and gathered common sharing
        </p>
        <figure className="py-10 px-4">
          <Image
            src="/flatmates/affinity-mapping.png"
            alt="Affinity Mapping"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <figcaption className="sr-only">Affinity Mapping</figcaption>
        </figure>
      </div>
      <div>
        <BlocLabel labelText="Insights and Recommendations" className="mb-6" />
        <ComparisonList pairData={insightRecommendationPairsData} />
      </div>
    </section>
  )
}
