import Image from 'next/image'

// BeforeYouGo Detail Component
export default function BeforeYouGoDetail() {
  const images = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <article className="flex justify-center items-center flex-col leading-relaxed text-neutral-800 dark:text-neutral-200 space-y-12 py-12 px-4">
      <div className="w-full max-w-3xl mx-auto text-left mb-4">
        <a
          href="https://github.com/c-nakashima/beforeyougo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#56303B] underline cursor-pointer text-small"
        >
          BeforeYouGo Github Repository
        </a>
      </div>
      {images.map((num) => (
        <figure key={num} className="w-full max-w-3xl">
          <Image
            src={`/tempslide/1-${num}.jpg`}
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
