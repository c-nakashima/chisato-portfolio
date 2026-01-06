import Image from 'next/image'

// Datavis Detail Component
export default function DatavisDetail() {
  const images = Array.from({ length: 9 }, (_, i) => i + 1)

  return (
    <article className="flex justify-center items-center flex-col leading-relaxed text-neutral-800 space-y-12 py-12 px-4">
      {images.map((num) => (
        <figure key={num} className="w-full max-w-3xl">
          <Image
            src={`/tempslide/2-${num}.png`}
            alt={`Slide ${num}`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </figure>
      ))}
    </article>
  )
}
