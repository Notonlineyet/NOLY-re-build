import type { Metadata } from "next";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CallLucyCard } from "@/components/CallLucyCard";

const ENQUIRY_WIDGET_ID = "6a7f08c932ce808db2dd579f";

export const metadata: Metadata = {
  title: "Contact | Not On Line Yet",
  description: "Talk to Lucy and get your website and AI agent booked in.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto max-w-3xl overflow-x-hidden px-6 py-20 text-center lg:px-8 lg:py-28">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Let&apos;s get you online.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-text-muted">
              Talk to Lucy, my AI receptionist, and she&apos;ll get you
              booked in for a call. No forms, no waiting on hold.
            </p>

            <div className="mt-10 -mx-8 sm:mx-auto sm:max-w-[380px]">
              <CallLucyCard
                widgetId={ENQUIRY_WIDGET_ID}
                label="Talk to Lucy"
              />
            </div>
          </Reveal>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <Reveal>
              <p className="text-sm text-text-muted">
                Prefer to talk to Jules directly?
              </p>

              <div className="mx-auto mt-6 grid max-w-xl gap-6 sm:grid-cols-2">
                <a
                  href="tel:+447446914731"
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-raised p-8 transition-colors duration-200 hover:border-accent-strong/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
                    <Phone weight="bold" className="size-6" />
                  </span>
                  <span className="text-sm font-semibold text-text">
                    07446 914731
                  </span>
                  <span className="text-xs text-text-faint">
                    Call or text, any time
                  </span>
                </a>

                <a
                  href="mailto:jules@notonlineyet.co.uk"
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-raised p-8 transition-colors duration-200 hover:border-accent-strong/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
                    <EnvelopeSimple weight="bold" className="size-6" />
                  </span>
                  <span className="text-sm font-semibold text-text">
                    jules@notonlineyet.co.uk
                  </span>
                  <span className="text-xs text-text-faint">
                    Usually replies same day
                  </span>
                </a>
              </div>

              <p className="mt-10 flex items-center justify-center gap-2 text-sm text-text-faint">
                <MapPin className="size-4 shrink-0" />
                London N2, United Kingdom, working remotely
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
