import Image from 'next/image'
import type { Work } from '@/types/work'

/**
 * Work Detail Page's Hero Section Component
 *
 * @property {string} featuredWork - Featured work item
 */
type Props = {
  featuredWork: Work
}

export default function WorkDetailHero({ featuredWork }: Props) {
  return (
    <section className="w-full bg-neutral-900">
      <figure className="group relative w-full min-h-[70vh] bg-neutral-900">
        <Image
          src={featuredWork.thumbnail}
          alt={featuredWork.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/60 flex items-center justify-center">
          <div className="text-neutral-100  w-full max-w-3xl px-8 py-6 space-y-3">
            <p className="font-sans text-sm opacity-90">{featuredWork.term}</p>
            <h1 className="font-serif md:text-5xl sm: text-4xl leading-tight">
              {featuredWork.title}
            </h1>
            <p className="font-sans text-sm opacity-90">
              {featuredWork.roles.join(' · ')}
            </p>
            {featuredWork.summary && (
              <p className="font-sans text-sm opacity-80 mt-2">
                {featuredWork.summary}
              </p>
            )}
          </div>
        </div>
      </figure>
    </section>
  )
}
