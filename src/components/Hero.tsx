import { ArrowRight } from "@phosphor-icons/react/ssr";
import { MissedCallCalculator } from "./MissedCallCalculator";
import { FadeIn } from "./FadeIn";
import { NetworkPulse } from "./NetworkPulse";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NetworkPulse />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(91,157,240,0.16),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(7,9,13,0.9),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-16 pb-10 lg:grid-cols-[1.1fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-20 lg:pb-12">
        <FadeIn>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Are you the weakest link in your business?
          </h1>
          <p className="mt-6 max-w-md text-lg text-text-muted">
            It&apos;s not your prices. It&apos;s not your team.
            It&apos;s the phone nobody answers.
          </p>
          <p className="mt-4 max-w-md text-xl font-semibold text-text">
            Stop missing calls.
          </p>
          <p className="mt-4 max-w-md text-base text-text-muted">
            We rebuild the website you&apos;ve already got and back it
            with an AI that answers every call you&apos;d otherwise miss.
          </p>
          <div className="mt-9">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-text shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_8px_24px_rgba(91,157,240,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.4),0_10px_30px_rgba(91,157,240,0.45)] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight weight="bold" className="size-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <MissedCallCalculator />
        </FadeIn>
      </div>
    </section>
  );
}
