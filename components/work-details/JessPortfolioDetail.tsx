import Image from "next/image";

// Jess Portfolio Detail Component
export default function JessPortfolioDetail() {
  const images = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <article className="flex justify-center items-center flex-col leading-relaxed text-neutral-800 dark:text-neutral-200 space-y-12 py-12 px-4">
      <p className="font-sans font-light w-full max-w-3xl align-left">
        <a
          href="https://www.jessjaensch.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center mr- gap-1"
        >
          Jess J Support Coordination Website{" "}
          <span aria-hidden className="text-xs mr-1">
            ↗
          </span>{" "}
        </a>
      </p>
      {images.map((num) => (
        <figure key={num} className="w-full max-w-3xl">
          <Image
            src={`/tempslide/3-${num}.png`}
            alt={`Slide ${num}`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </figure>
      ))}
    </article>
  );
}
