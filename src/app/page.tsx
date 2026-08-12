import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TestLucySection } from "@/components/TestLucySection";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TestLucySection />
        <Pricing />
        <Process />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
