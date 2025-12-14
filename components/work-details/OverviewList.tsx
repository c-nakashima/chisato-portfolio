import React from "react";
// Components
import { OverviewListItem } from "@/components/work-details";

// OverviewListItemに必要なデータ型を定義
type OverviewItemData = {
  labelText: string;
  content: React.ReactNode;
  description?: string;
};

/**
 * Overview List Component
 *  @property {OverviewItemData[]} data - Data for each list item
 */
type OverviewListProps = {
  data: OverviewItemData[];
  className?: string;
};

export default function OverviewList({ data, className }: OverviewListProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <ul className={`flex flex-row justify-center font-sans ${className || ""}`}>
      {data.map((item) => (
        <OverviewListItem
          key={item.labelText}
          labelText={item.labelText}
          content={item.content}
          description={item.description}
        />
      ))}
    </ul>
  );
}
