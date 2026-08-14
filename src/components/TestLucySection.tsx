import { Reveal } from "./Reveal";
import { CallLucyCard } from "./CallLucyCard";

export function TestLucySection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl min-w-0 gap-12 px-6 pt-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-12 lg:pb-28">
        <Reveal className="lg:order-2">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            It rings. Nobody picks up.
          </h2>
          <div className="mt-6 flex max-w-lg flex-col gap-4 text-base leading-relaxed text-text-muted">
            <p>
              Right now, somewhere, a customer is calling you. Their
              boiler&apos;s dead, or the job&apos;s urgent, and they need
              someone today.
            </p>
            <p>
              They don&apos;t leave a voicemail, they hang up and dial
              the next name on the list. No apology, no second chance, no
              idea it even happened.
            </p>
            <p>
              That&apos;s not a one-off. It happens every week, quietly,
              and you never see the jobs you lost, only the ones that
              got through.
            </p>
            <p className="text-xl font-semibold text-text">Meet Lucy.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:order-1">
          <div className="min-w-0 rounded-2xl border border-border bg-surface-raised p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold tracking-wide text-accent-strong uppercase">
                Step 1, Meet Lucy
              </p>
              <p className="mt-2 text-sm text-text-muted">
                She&apos;s an AI receptionist trained on exactly how your
                business works, quoting jobs, booking work, and handling
                whatever&apos;s thrown at her.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold tracking-wide text-accent-strong uppercase">
                Step 2, Test Lucy
              </p>
              <p className="mt-2 text-sm text-text-muted">
                She&apos;s live right now, answering as a fictional
                plumbing company that doesn&apos;t exist. Push her, ask
                about pricing, availability, booking a job. See if you can
                catch her out.
              </p>
              <div className="mt-5 -mx-12 sm:mx-0">
                <CallLucyCard />
              </div>
              <p className="mt-3 text-center text-xs text-text-faint">
                Not connecting? Call{" "}
                <a
                  href="tel:+447446914731"
                  className="text-accent-strong hover:underline"
                >
                  07446 914731
                </a>{" "}
                and we&apos;ll show you live.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold tracking-wide text-accent-strong uppercase">
                Step 3, Book a call
              </p>
              <p className="mt-2 text-sm text-text-muted">
                That&apos;s Lucy, answering as a fictional plumbing
                company. Impressed? Let&apos;s set her up on your
                business.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-text shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_8px_24px_rgba(91,157,240,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.4),0_10px_30px_rgba(91,157,240,0.45)] active:scale-[0.98]"
              >
                Book a call and let&apos;s set her up
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
