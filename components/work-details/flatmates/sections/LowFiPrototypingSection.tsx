'use client'

import Image from 'next/image'
// Components
import { SectionLabel, BlocLabel } from '@/components/work-details'

/**
 * Low Fi Prototyping Section Component
 * - Flatmate detail page
 *
 */

export default function LowFiPrototypingSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="07"
        labelText="FIRST PROTOTYPING"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Low Fidelity Prototype" className="mb-4" />
        <p className="font-sans font-light">
          Created a low-fidelity prototype to demonstrate the key ideas.
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/low-fi-prototype.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/low-fi-prototype.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Low Fidelity Prototype in new window"
          >
            <Image
              src="/flatmates/low-fi-prototype.png"
              alt="Low Fidelity Prototype"
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
            href="https://www.figma.com/file/MkUhvRAZgqSkwzWeztCAZZ/User-Flow?type=whiteboard&node-id=6%3A356&t=ByO4OwjbKgenFMTh-1"
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
            href="/flatmates/detailed-user-flow.png"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                '/flatmates/detailed-user-flow.png',
                '_blank',
                'width=1200,height=800,scrollbars=yes,resizable=yes'
              )
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Detailed User Flow in new window"
          >
            <Image
              src="/flatmates/detailed-user-flow.png"
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
