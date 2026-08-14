import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section className="border-t border-border bg-base">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
            &ldquo;Thousands of brilliant tradespeople have a website —
            it just doesn&apos;t do anything. They&apos;re losing jobs
            every single day to a missed call, not because the site&apos;s
            missing, but because it&apos;s just sitting there.&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <span className="flex size-11 items-center justify-center rounded-full bg-surface-raised text-sm font-semibold text-text">
                JW
              </span>
              <div>
                <p className="text-sm font-semibold text-text">
                  Jules Wood
                </p>
                <p className="text-xs text-text-faint">
                  Founder, Not On Line Yet
                </p>
              </div>
            </div>

            <Link
              href="/story"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-accent"
            >
              Read my story
              <ArrowRight weight="bold" className="size-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
