"use client";

import Image from "next/image";
// Components
import { SectionLabel, BlocLabel } from "@/components/work-details";

/**
 * Problem Statement Section Component
 * - Flatmate detail page
 *
 */

export default function ProblemStatementSection() {
  return (
    <section className="w-full max-w-3xl space-y-8 px-4">
      <SectionLabel
        number="03"
        labelText="PROBLEM STATEMENT"
        className="mb-10"
      />
      <div className="px-4 pb-4">
        <BlocLabel labelText="Assumed Problem" className="mb-4" />
        <p className="mt-0 font-serif text-2xl">
          Too many transitions when searching by the map view
        </p>
      </div>
      <div className="px-4">
        <BlocLabel labelText="Detailed Current User Flow" className="mb-6" />
        <p className="font-sans font-light">
          The current user flow requires users to navigate through too many
          screens., which may reduces the comfortable browsing and comparing.
        </p>
        <figure className="py-10 px-4">
          <a
            href="/flatmates/current-user-flow.png"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "/flatmates/current-user-flow.png",
                "_blank",
                "width=1200,height=800,scrollbars=yes,resizable=yes",
              );
            }}
            className="block cursor-pointer w-full"
            aria-label="Open Detailed Current User Flow in new window"
          >
            <Image
              src="/flatmates/current-user-flow.png"
              alt="Detailed Current User Flow"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </a>
          <figcaption className="sr-only">
            Detailed Current User Flow
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
