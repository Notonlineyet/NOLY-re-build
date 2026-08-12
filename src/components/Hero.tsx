import { ArrowRight } from "@phosphor-icons/react/ssr";
import { MissedCallCalculator } from "./MissedCallCalculator";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-16 pb-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.1fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
      <FadeIn>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Every missed call is a missed job.
        </h1>
        <p className="mt-6 max-w-md text-lg text-text-muted">
          We rebuild the website you&apos;ve already got so it actually
          brings in work, and back it with an AI that answers every call
          you&apos;d otherwise miss.
        </p>
        <div className="mt-9">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-text transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Get Started
            <ArrowRight weight="bold" className="size-4" />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <MissedCallCalculator />
      </FadeIn>
    </section>
  );
}
