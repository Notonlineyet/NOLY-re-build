import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Not On Line Yet",
  description: "How Not On Line Yet handles your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-10 rounded-2xl border border-dashed border-border-strong bg-surface p-6 text-sm leading-relaxed text-text-faint">
            Placeholder page. Add your real privacy policy here, covering
            what data you collect through the site and calculator, how
            enquiries are stored, and how customers can contact you about
            their data. A solicitor or a service such as Termly can help you
            draft this properly before launch.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
