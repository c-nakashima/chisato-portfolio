import Image from "next/image";

// Hero Section Component
export default function Hero() {
  return (
    <div className="flex flex-row py-24 px-4">
      <div>
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="max-w-s text-4xl leading-12 font-serif">
            Hi, I’m Chisato.
            <br />I work on UI/UX Design and
            <br />
            Software Engineering
          </h1>
          <p className="max-w-md text-lg font-sans font-light">
            Bridging UX strategy and frontend development to deliver clear,
            scalable digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-50 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
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
        className="w-[200px] h-auto rounded-full mx-8"
        priority
      />
    </div>
  );
}
