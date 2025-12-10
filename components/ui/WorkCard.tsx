import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/types/work";

/**
 * Work Image Card Component
 * -- Show title and details with hover
 * -- and navigate to the work detail pafe
 *
 * @property {Work} work - single item from featuredWorks item
 */
type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
  return (
    <article key={work.slug} className="w-full">
      <Link
        href={`/works/${work.slug}`}
        className="group block relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
      >
        {/* Thumbnail wrapper */}
        <figure className="relative w-full overflow-hidden bg-neutral-200">
          <Image
            src={work.thumbnail}
            alt={work.title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
          />

          {/* Overlay（hover） */}
          <div
            className="
                  absolute inset-0 
                  bg-black/60
                  opacity-0 
                  transition-opacity 
                  duration-500
                  group-hover:opacity-100
                  flex items-center
                "
          >
            <div className="px-8 py-6 space-y-2 text-neutral-100 max-w-xl">
              <p className="font-sans text-xs md:text-sm opacity-90">
                {work.term}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                {work.title}
              </h3>
              <p className="font-sans text-xs md:text-sm opacity-90">
                {work.roles.join(" · ")}
              </p>
              {work.summary && (
                <p className="font-sans text-xs md:text-sm opacity-80 mt-2">
                  {work.summary}
                </p>
              )}
            </div>
          </div>
        </figure>

        {/* text（optional）
              <div className="mt-4 space-y-1 max-w-3xl">
                <h3 className="font-serif text-xl md:text-2xl">{work.title}</h3>
                <p className="text-xs text-neutral-500">
                  {work.term} · {work.roles[0]}
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {work.summary}
                </p>
              </div> */}
      </Link>
    </article>
  );
}
