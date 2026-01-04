'use client'

import Image from 'next/image'
// // Data
// import {
//   userInterviewConditionsData,
//   insightRecommendationPairsData,
// } from '@/lib/flatmates/userinterview'
// Components
import { SectionLabel, BlocLabel } from '@/components/work-details'

/**
 * Desktop Research Section Component
 * - Flatmate detail page
 *
 */

export default function ConceptDevelopmentSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="06"
        labelText="CONCEPT DEVELOPMENT"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Ideation" className="mb-4" />
        <p className="font-sans text-base font-light">
          Run a Crazy Eights ideation session (Generate 8 ideas related to my
          recommendations in 8 minutes)
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/ideation.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/ideation.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Affinity Mapping in new window"
          >
            <Image
              src="/flatmates/ideation.png"
              alt="Affinity Mapping"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">Affinity Mapping</figcaption>
        </figure>
      </div>
      <div className="px-4 pb-4">
        <BlocLabel labelText="Prioritization" className="mb-4" />
        <p className="font-sans text-base font-light">
          Prioritized ideas from Crazy 8 ideation using the Effort vs Impact
          method
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/prioritization.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/prioritization.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Prioritization in new window"
          >
            <Image
              src="/flatmates/prioritization.png"
              alt="Prioritization"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">Prioritization</figcaption>
        </figure>
      </div>
      <div className="px-4 pb-4">
        <BlocLabel
          labelText="Key Ideas from Ideation and Prioritization"
          className="mb-4"
        />
        <p className="font-sans text-base font-light mb-5">
          Key ideas selected through Crazy Eights and Impact–Effort
          prioritization
        </p>
        <div className="mt-6 px-2 py-6">
          <ul className="font-serif text-2xl leading-normal pl-5 space-y-3">
            <li>1. Showing more detailed information in the map view</li>
            <li>
              2. Letting users take actions in the map view while browsing
              different posts
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
