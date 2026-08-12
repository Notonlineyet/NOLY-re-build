import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jules's Story | Not On Line Yet",
  description: "The story behind Not On Line Yet.",
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            My story
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-muted">
            Your website is no longer just a business card. It&apos;s your
            24/7 salesperson, your booking system, and how customers find
            and trust you.
          </p>
          <div className="mt-10 rounded-2xl border border-dashed border-border-strong bg-surface p-6 text-sm text-text-faint">
            Placeholder page. Replace this paragraph with your own write-up:
            why you started Not On Line Yet, who you help, and what changed
            for your first customers.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
