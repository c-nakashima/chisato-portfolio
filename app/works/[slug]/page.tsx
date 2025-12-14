import { JSX } from "react";
import { notFound } from "next/navigation";
import {
  FlatmatesDetail,
  JessPortfolioDetail,
  DatavisDetail,
  CoffeeFlyerDetail,
} from "@/components/work-details";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // mapping: slug → JSX
  const detailComponents: { [key: string]: JSX.Element } = {
    flatmates: <FlatmatesDetail />,
    datavis: <DatavisDetail />,
    "jess-portfolio": <JessPortfolioDetail />,
    "coffee-flyer": <CoffeeFlyerDetail />,
  };

  const Detail = detailComponents[slug];

  if (!Detail) {
    notFound();
  }

  return (
    <main className="min-h-screen w-fullitems-center sm:items-start">
      {/* <main className="min-h-screen w-full max-w-3xl items-center justify-between sm:items-start"> */}
      {Detail}
    </main>
  );
}
