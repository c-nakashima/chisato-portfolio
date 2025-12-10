import type { Work } from "@/types/work";
//Components
import { WorkCard } from "@/components/ui";

/**
 * Work Image Card List Component
 * -- List of Work Image Card (WorkCard Component)
 *
 * @property {Work[]} featuredWorks - Work data
 */
type Props = {
  featuredWorks: Work[];
};

export default function WorkCardList({ featuredWorks }: Props) {
  return (
    <div className="mt-10 space-y-8">
      {featuredWorks.map((work) => (
        <WorkCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
