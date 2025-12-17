import Image from 'next/image'

// Hero Section Component
export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-16 py-12 md:py-24 px-4 md:px-8">
      <div className="text-center md:text-left space-y-6 md:space-y-8">
        <div className="flex flex-col gap-5">
          <h1 className="max-w-xl text-3xl sm:text-4xl leading-tight font-serif">
            Hi, I’m Chisato.
            <br />I work on UI/UX Design and
            <br />
            Software Engineering
          </h1>
          <p className="max-w-xl text-base sm:text-lg font-sans font-light text-neutral-700">
            Bridging UX strategy and frontend development to deliver clear,
            scalable digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row sm:justify-center md:justify-start">
          <a
            className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="mailto:huomentachisato@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </a>
        </div>
      </div>
      <Image
        src="/portrait.png"
        alt="Portrait"
        width={1019}
        height={1509}
        className="w-40 sm:w-48 md:w-[220px] h-auto rounded-full mx-auto md:mx-0"
        priority
      />
    </div>
  )
}
