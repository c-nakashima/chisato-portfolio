// Data
import { featuredWorks } from "@/lib/works";
// Components
import { Hero, Works } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full max-w-3xl items-center justify-between sm:items-start">
        <Hero />
        <Works featuredWorks={featuredWorks} />
      </main>
    </div>
  );
}
