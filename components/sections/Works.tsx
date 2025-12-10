import type { Work } from "@/types/work";
// Components
import { SectionHeading, WorkCardList } from "@/components/ui";

/**
 * Featured Work Section Component
 *
 * @property {Work[]} featuredWorks - Array of featured works data
 */
type Props = {
  featuredWorks: Work[];
};

export default function WorksSection({ featuredWorks }: Props) {
  return (
    <section id="works" className="w-full mt-16 md:mt-24">
      <SectionHeading headingText="Works" />
      <WorkCardList featuredWorks={featuredWorks} />
    </section>
  );
}
