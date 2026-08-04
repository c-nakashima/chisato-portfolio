// types
import { OverviewItem } from "@/types";
// icons
import { Wrench } from "lucide-react";

// flatmate's overview data
export const overviewData: OverviewItem[] = [
  {
    labelText: "Term",
    content: (
      <p className="font-bold text-3xl">
        1.5<span className="text-base ml-1">mo</span>
      </p>
    ),
    description: "Mar 2023 - May 2023",
  },
  {
    labelText: "Member",
    content: <p className="font-bold text-3xl">1</p>,
    description: "Worked by myself",
  },
  {
    labelText: "Main Tasks",
    content: (
      <Wrench className="text-3xl text-neutral-700 dark:text-neutral-300" />
    ),
    description: "UX research, Prototyping",
  },
];
