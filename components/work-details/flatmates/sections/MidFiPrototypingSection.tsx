'use client'

import Image from 'next/image'
// Components
import { SectionLabel, BlocLabel } from '@/components/work-details'

/**
 * Medium Fidelity Prototyping Section Component
 * - Flatmate detail page
 *
 */

export default function MidFiPrototypingSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="09"
        labelText="REVISED PROTOTYPING"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Medium fidelity prototype" className="mb-4" />
        <p className="font-sans font-light">
          Created a{' '}
          <a
            href="https://www.figma.com/proto/iQVAApzn7E8wVZYgKHgapS/RMIT_milestones?type=design&node-id=230-611&scaling=min-zoom&page-id=230%3A603&starting-point-node-id=230%3A611&fuid=992836180276873275"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            medium-fidelity prototype
            <span aria-hidden className="text-xs mr-1">
              ↗
            </span>{' '}
          </a>
          to refine the initial prototype and improve the user experience.
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/mid-fi-prototype.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/mid-fi-prototype.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Medium Fidelity Prototype in new window"
          >
            <Image
              src="/flatmates/mid-fi-prototype.png"
              alt="Medium Fidelity Prototype"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">Low Fidelity Prototype</figcaption>
        </figure>
      </div>
      <div className="px-4 pb-4">
        <BlocLabel labelText="Detailed User Flow" className="mb-4" />
        <p className="font-sans font-light">
          Visualized the{' '}
          <a
            href="https://www.figma.com/file/MkUhvRAZgqSkwzWeztCAZZ/User-Flow?node-id=0-1&t=ctSMlt1HKtulRayB-0&fuid=992836180276873275"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            user flow
            <span aria-hidden className="text-xs mr-1">
              ↗
            </span>{' '}
          </a>
          of the presented idea.{' '}
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/detailed-revised-user-flow.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/detailed-revised-user-flow.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Detailed User Flow in new window"
          >
            <Image
              src="/flatmates/detailed-revised-user-flow.png"
              alt="Detailed User Flow"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">Detailed User Flow</figcaption>
        </figure>
      </div>
    </section>
  )
}
