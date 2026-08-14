import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The bloke behind the website | Not On Line Yet",
  description:
    "Why Jules Wood left the corporate world and started Not On Line Yet.",
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <Reveal className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-2xl border border-border lg:order-1">
            <Image
              src="/jules-and-len.jpg"
              alt="Jules and Len working remotely"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-cover"
              priority
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:order-2">
            <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              The bloke behind the website
            </h1>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-text-muted">
              <p>
                A few years ago I was deep in the corporate world. Then
                encephalitis stopped everything.
              </p>
              <p>
                Recovering from a serious brain illness has a way of
                rearranging your priorities. When you come out the other
                side, the big office and the long commute don&apos;t look
                the same way anymore.
              </p>
              <p>
                So I left. Packed up, took Len, my dog and unofficial
                business partner, and started moving. Since then
                I&apos;ve been working remotely from wherever we end up,
                building websites and learning everything I can about AI.
              </p>
              <p>
                What I found along the way was a gap. Thousands of
                brilliant tradespeople across the UK have a website, it
                just doesn&apos;t do anything. No AI, no automation,
                nobody answering the phone when they&apos;re up a ladder.
                Losing jobs every single day to a missed call, not
                because the site&apos;s missing, but because it&apos;s
                just sitting there.
              </p>
              <p>
                So that&apos;s what I do now. I get them online, I set up
                AI tools that handle their calls and bookings, and I
                charge a price that actually makes sense for a one-man
                band.
              </p>
              <p className="font-semibold text-text">
                No corporate markup. No agency fluff. Just me, my laptop,
                Len, and a genuine desire to help good tradespeople get
                the work they deserve.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Want to work with Jules?
              </h2>
              <p className="mt-4 text-base text-text-muted">
                Get in touch and let&apos;s get you online.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_8px_24px_rgba(91,157,240,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.4),0_10px_30px_rgba(91,157,240,0.45)] active:scale-[0.98]"
              >
                Let&apos;s get you online
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
