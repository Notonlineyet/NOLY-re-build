import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Stop losing jobs.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-base text-text-muted">
            Get your rebuilt website and AI agent live this week.
          </p>
          <div className="mt-9">
            <a
              href="tel:07446914731"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
