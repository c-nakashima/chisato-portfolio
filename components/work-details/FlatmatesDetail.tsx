import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

// Data
import { featuredWorks } from "@/lib/works";
import { overviewData } from "@/lib/flatmates/overview";
// Components
import {
  WorkDetailHero,
  SectionLabel,
  BlocLabel,
  OverviewList,
} from "@/components/work-details";

// Basic Data for flatmates
const flatmateWork = featuredWorks[0];

export default function FlatmatesDetail() {
  return (
    <article className="flex justify-center items-center flex-col leading-relaxed text-neutral-800 space-y-12">
      <WorkDetailHero featuredWork={flatmateWork} />

      <section className="w-full max-w-3xl space-y-8 px-4">
        <SectionLabel
          number="01"
          labelText="ABOUT THE PROJECT"
          className="mb-10"
        />
        <div className="px-4">
          <BlocLabel labelText="Objective" className="mb-4" />
          <p className="mt-0 font-serif text-2xl mb-6">
            Improving the User Experience of Flatmates.com.au
          </p>
          <p className="font-sans font-light">
            As a part of the RMIT Online User Experience Course, I focused on
            improving the user experience of Flatmates.com, a web application
            for roommate’s matching. Based on the hunch that I have gotten from
            this application, I conducted UX researches like desk research, user
            interviews, ideation, prototyping, etc. This project shows the UX
            research process and prototype of my revised idea based on the
            research.
          </p>
        </div>
        <div className="px-4">
          <BlocLabel labelText="Target Application" className="mb-4" />
          <Link
            href="https://flatmates.com.au/"
            className="flex items-baseline font-serif text-2xl underline-offset-1 hover:underline mt-0 mb-2"
            target="_blank"
          >
            <span className="font-serif text-2xl mr-2">Flatmates.com.au</span>
            <FiExternalLink size={20} className="pt-1" />
          </Link>
          <p className="font-sans text-lg font-light mb-5">
            - An application to search Ideal Rooms and Housemates
          </p>
          <p className="font-sans font-light">
            “Flatmates.com.au is a peer-to-peer listing platform for those
            looking for shared homes or those looking for a flatmate. It’s easy
            to use: simply create a listing, search and connect.” ({" "}
            <Link
              href="https://flatmates.com.au/info/how-does-it-work"
              className="hover:underline italic"
              target="_blank"
            >
              How does it work? - Flatmates.com
            </Link>
            )
          </p>
        </div>
        <div className="px-4">
          <BlocLabel labelText="Overview" className="mb-6" />
          <OverviewList data={overviewData} className="py-10" />
        </div>
        <div className="px-4">
          <BlocLabel labelText="Design Process" className="mb-6" />
          <figure className="py-10 px-4">
            <Image
              src="/flatmates/design-process.png"
              alt="Design process: defining the problem, research, interviews..."
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Design process showing iterative research and prototyping phases
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="w-full max-w-3xl space-y-8 px-4">
        <SectionLabel
          number="02"
          labelText="ASSUMED PERSONA"
          className="mb-10"
        />
        <div className="flex flex-row px-4 gap-8">
          <div className="font-sans py-4">
            <figure className="mb-4">
              <Image
                src="/flatmates/persona.png"
                alt="Design process: defining the problem, research, interviews..."
                width={330}
                height={330}
                className="min-w-[200] h-auto object-cover"
              />
              <figcaption className="sr-only">Persona photo</figcaption>
            </figure>
            <p className="font-semibold text-xl mb-2">Megan (24)</p>
            <p className="text-sm font-light">
              Working as an internship at an accounting office in the city /
              Part-time Master’s student{" "}
            </p>
          </div>
          <div>
            <div className="relative mb-8">
              {/* decolative quotation */}
              <span
                aria-hidden
                className=" absolute top-0 left-[-16px]
              font-serif text-[220px] text-neutral-200 opacity-50 leading-none z-[-1]"
              >
                “
              </span>
              <BlocLabel labelText="Goals and Motivations" className="mb-4" />
              <p className="font-serif text-2xl pl-4 pt-3 mt-0 mb-6">
                I want to rent a room which has convenient access to both my
                office and school at affordable price
              </p>
            </div>
            <div className="relative">
              {/* decolative quotation */}
              <span
                aria-hidden
                className=" absolute top-2 left-[-8px]
              font-serif text-[180px] text-neutral-200 opacity-50 leading-none z-[-1]"
              >
                “
              </span>
              <BlocLabel labelText="Frastrations" className="mb-4" />
              <p className="font-serif text-xl pl-4 pt-3 mt-0 mb-6">
                <span className="text-indigo-600">
                  The map view changes to the list view automatically
                </span>{" "}
                after changing filter search condition
              </p>
            </div>
            <div className="relative">
              {/* decolative quotation */}
              <span
                aria-hidden
                className=" absolute top-[-40] left-[-8px]
              font-serif text-[180px] text-neutral-200 opacity-50 leading-none z-[-1]"
              >
                “
              </span>
              <p className="font-serif text-xl pl-4 pt-3 mt-0 mb-6">
                <span className="text-indigo-600">
                  Since I can NOT search the route
                </span>{" "}
                I need to open the google map every time
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
    </article>
  );
}
