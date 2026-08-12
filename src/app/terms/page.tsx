import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms | Not On Line Yet",
  description: "Terms of service for Not On Line Yet.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Terms
          </h1>
          <div className="mt-10 rounded-2xl border border-dashed border-border-strong bg-surface p-6 text-sm leading-relaxed text-text-faint">
            Placeholder page. Add your real terms of service here, covering
            setup fees, monthly billing, cancellation, and what happens to a
            customer&apos;s site if they stop paying. Worth having a
            solicitor check this before launch.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
