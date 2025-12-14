// Data
import { featuredWorks } from "@/lib/works";
// Components
import { WorkDetailHero } from "@/components/work-details";
import {
  PersonaSection,
  OverviewSection,
} from "@/components/work-details/flatmates";

// Basic Data for flatmates
const flatmateWork = featuredWorks[0];

export default function FlatmatesDetail() {
  return (
    <article className="flex justify-center items-center flex-col leading-relaxed text-neutral-800 space-y-12">
      <WorkDetailHero featuredWork={flatmateWork} />
      <OverviewSection />
      <PersonaSection />
    </article>
  );
}
