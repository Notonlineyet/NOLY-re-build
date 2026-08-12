import Image from "next/image";
import { Reveal } from "./Reveal";

export function ProblemSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="https://picsum.photos/seed/notonlineyet-van-callout/1000/1250"
            alt="Tradesperson taking a call between jobs"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="lg:order-2">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Your site&apos;s already live. It&apos;s just not working.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted">
            Most tradespeople have a website already, it just sits there.
            Word of mouth and Facebook carry the rest, until someone calls
            while you&apos;re up a ladder and moves straight on to the next
            name on the list. A site that doesn&apos;t rank means fewer
            calls come in at all. A call that isn&apos;t answered means the
            ones that do come in still walk. It happens dozens of times a
            year, and that&apos;s real money, gone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
