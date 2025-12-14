import Image from "next/image";
// Components
import { SectionLabel, BlocLabel } from "@/components/work-details/";

/**
 * Persona Section Component
 * - Flatmate detail page
 *
 */

export default function PersonaSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel number="02" labelText="ASSUMED PERSONA" className="mb-10" />
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
  );
}
