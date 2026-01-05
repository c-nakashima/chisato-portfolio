'use client'

import Image from 'next/image'
// Data
import { userTestingConditionsData } from '@/lib/flatmates/usertesting'
// Components
import {
  SectionLabel,
  BlocLabel,
  AccordionList,
} from '@/components/work-details'

/**
 * User Testing Section Component
 * - Flatmate detail page
 *
 */

export default function UserTestingSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="08"
        labelText="USER TESTING AND INSIGHTS"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="User Testing Conditions" className="mb-4" />
        <p className="mt-0 font-sans font-light text-base mb-4">
          We asked participants about their experience interacting with the
          lo-fi prototype.
        </p>
        <div className="mt-6 p-2">
          <AccordionList data={userTestingConditionsData} />
        </div>
      </div>
      <div className="px-4">
        <BlocLabel labelText="Synthesized Answers" className="mb-6" />
        <p className="mt-0 font-sans font-light text-base mb-4">
          Participants&apos; responses were synthesized using{' '}
          <a
            href="https://www.figma.com/file/d3AFUIb8LhTDrsROxsHNAv/Lo-fi-prototype?type=whiteboard&node-id=0-1&t=K3tIKA1hG9YsIFqt-0&fuid=992836180276873275"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            affinity mapping
            <span aria-hidden className="text-xs mr-1">
              ↗
            </span>
          </a>
          to discover common patterns.
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/common-sharing.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/common-sharing.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Affinity Mapping in new window"
          >
            <Image
              src="/flatmates/common-sharing.png"
              alt="Affinity Mapping"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">Affinity Mapping</figcaption>
        </figure>
      </div>
      <div className="px-4">
        <BlocLabel labelText="Insights for Revision" className="mb-6" />
        <ul className="list-disc font-light font-serif text-xl  leading-normal space-y-2 ml-5">
          <li>Difficult to find the view switcher (list to map).</li>
          <li>
            Users may not message directly from the map view, as they want to
            compare candidates before messaging.
          </li>
          <li>Bills and photos are important information as rent.</li>
          <li>The pop-up window confirming a saved post is not necessary.</li>
          <li>
            The saved list can be more similar to the list view and also include
            a map view, or the map view can include saved items or filters.
          </li>
        </ul>
      </div>
    </section>
  )
}
