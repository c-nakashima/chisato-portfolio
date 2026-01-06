import { JSX } from "react";
import { notFound } from "next/navigation";
import {
  FlatmatesDetail,
  JessPortfolioDetail,
  DatavisDetail,
  CoffeeFlyerDetail,
} from "@/components/work-details";
import { featuredWorks } from "@/lib/works";

// Generate static params for all work slugs
export async function generateStaticParams() {
  return featuredWorks.map((work) => ({
    slug: work.slug,
  }));
}

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
    <main className="min-h-screen w-full items-center sm:items-start">
      {Detail}
    </main>
  );
}
