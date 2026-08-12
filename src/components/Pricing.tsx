import { Check } from "@phosphor-icons/react/ssr";
import { Reveal } from "./Reveal";

type Tier = {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  features: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Your Website",
    tagline: "A website that finally pulls its weight.",
    setup: "£499",
    monthly: "£35",
    features: [
      "Website built for your trade",
      "Live within 3 to 5 days",
      "Your own personal URL included",
      "Hosting, management and technical support",
      "We keep it running, you focus on the work",
    ],
  },
  {
    name: "Website + AI Receptionist",
    tagline: "Get found and never miss a job.",
    setup: "£599",
    monthly: "£114",
    featured: true,
    features: [
      "Everything in Your Website",
      "AI agent answers every call, 24/7",
      "Handles enquiries and qualifies leads",
      "Books jobs straight into your calendar",
      "Complete hands-off solution",
    ],
  },
  {
    name: "The Complete Package",
    tagline: "Everything you need, included.",
    setup: "£700",
    monthly: "£250",
    features: [
      "Professional website",
      "AI chatbot integration",
      "WhatsApp Business setup",
      "Online calendar booking",
      "Google reviews system",
      "Unified chat dashboard",
      "SEO and local search",
      "Ongoing support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 max-w-md text-base text-text-muted">
            One setup fee, one monthly rate. No surprises on the invoice.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-accent/40 bg-surface-raised lg:-my-4 lg:py-12"
                    : "border-border bg-surface"
                }`}
              >
                {tier.featured && (
                  <span className="mb-5 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-text">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-text">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {tier.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-mono text-3xl font-semibold text-text">
                    {tier.setup}
                  </span>
                  <span className="text-sm text-text-faint">setup</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-mono text-base text-text-muted">
                    + {tier.monthly}
                  </span>
                  <span className="text-sm text-text-faint">/month</span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <Check
                        weight="bold"
                        className="mt-0.5 size-4 shrink-0 text-accent"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                    tier.featured
                      ? "bg-accent text-accent-text"
                      : "border border-border-strong text-text"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
