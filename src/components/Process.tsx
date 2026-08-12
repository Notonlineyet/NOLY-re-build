import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery call",
    body: "We have a quick chat about your trade, your customers, and what you need. No jargon, no pressure.",
  },
  {
    number: "02",
    title: "Your package plan",
    body: "We put together a clear plan showing exactly what you'll get, the timeline, and the cost.",
  },
  {
    number: "03",
    title: "Build and launch",
    body: "We build your site, AI chat, and booking systems, then launch your complete package to the world.",
  },
  {
    number: "04",
    title: "Ongoing support",
    body: "We're here for the long run. Updates, tweaks, and technical support whenever you need it.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Working with us is easy.
          </h2>
          <p className="mt-4 max-w-md text-base text-text-muted">
            From first conversation to launch and beyond, here&apos;s how we
            work together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="border-t-2 border-accent pt-5">
                <span className="font-mono text-sm text-text-faint">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
