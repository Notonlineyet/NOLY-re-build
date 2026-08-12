# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

UK tradespeople across trades (not limited to plumbing) who already have a website that isn't bringing in work, and who lose jobs because they can't answer the phone while working. Multi-trade from day one — no trade picker or single-trade demo gating, unlike the sibling Astro build.

## Product Purpose

Not On Line Yet rebuilds a tradesperson's existing website so it actually generates leads, and pairs it with an AI phone/call-answering system so missed calls stop costing jobs. Success is fewer missed calls turning into missed jobs.

## Positioning

Rebuild-only, same mechanism as the sibling Astro build (github.com/Notonlineyet/trade-site-astro): every visitor already has a website. The pitch is never "get a website built," it's "make the one you have actually work" — get found on Google and never miss a call. Copy and pricing tiers that read as "build you a website from scratch" are a drift from this positioning and should be corrected toward the rebuild framing during future work on this surface.

## Operating Context

Tradespeople are hands-on and unavailable to answer the phone during jobs — a missed call is a lost job, not just a lost lead. The homepage leads with a Missed Call Calculator (missed calls/week, average job value, close rate → estimated annual lost revenue) as the hook, ahead of any AI-agent demo.

## Capabilities and Constraints

- Multi-trade positioning: general tradesperson audience, not gated to one trade like the Astro build's Plumber-only launch scope.
- Hero and ProblemSection copy reconciled to rebuild-only positioning on 2026-08-12 (no more "get you found on Google" / "no website means you don't exist" framing).
- Pricing simplified to two tiers on 2026-08-12: the website-only "Your Website" tier (£499/£35, no AI) was removed at the user's direction since it undercut the AI-inclusive positioning ("just a website" isn't the offer). Its website-build value folded into the base "Website + AI Receptionist" tier (£599/£114) instead, which is now the entry point; "The Complete Package" (£700/£250) remains the upsell.
- Visual direction: a bolder, distinctive "hand-painted shopfront signage" redesign (deep green ground, gold accent, Bevan/Archivo type) was built and reviewed on 2026-08-12, then explicitly rejected by the user in favor of the incumbent near-black/blue-accent look. Do not re-propose that direction; the incumbent SaaS-dark visual system is the confirmed standing preference.
- Legal pages exist (Privacy, Terms) but are scaffolded/placeholder-level, not reviewed.
- ProblemSection was replaced by TestLucySection on 2026-08-12: the diagnosis copy ("It rings. Nobody picks up.") now sits alongside a real, working Lucy demo — the same GoHighLevel voice-chat widget (widget ID `6a79aa9de427c78bb5bcaca5`) embedded on the sibling Astro build, answering as the fictional "ABC Plumbing, Watford." Pressing the phone genuinely places a voice call, not a mockup. The old Astro build's "Step 1 — Pick your trade" was deliberately dropped here (kept to Meet Lucy / Test Lucy / Book a call) since this build is confirmed multi-trade, not plumber-gated.
- The placeholder stock photo in the old ProblemSection is gone (removed along with that component) — no outstanding placeholder-photo evidence gap on the homepage now.

## Brand Commitments

- Business name: Not On Line Yet. Founder: Jules Wood, trading as Not On Line Yet, London N2, United Kingdom.
- Contact: 07446 914731, jules@notonlineyet.co.uk. Same contact details as the sibling Astro build — same business.
- Founder bio/story is intentionally not yet written (placeholder text in Founder.tsx and /story page). To be captured in a dedicated session, not invented here.

## Evidence on Hand

Pre-launch: no real testimonials, case studies, or results exist yet. The live Lucy voice-agent demo (see Capabilities) is real evidence, not a mockup — it's the one piece of the page that isn't a placeholder. Future work must not fabricate testimonials, customer counts, or results.

## Product Principles

- Assume the visitor already has a website — pitch "make the one you have work," never "get a website built." Reconcile the current website-only pricing tier and "get you found on Google" hero framing against this.
- Multi-trade, general-audience copy is deliberate here — don't narrow to a single trade or add trade-gating the way the Astro build does.
- Never fabricate proof (testimonials, results, customer counts, real photography) while pre-launch.
- Same founder/business identity as the Astro build (Jules Wood, same contact details) — treat them as one brand across two builds unless told otherwise.

## Accessibility & Inclusion

No specific standard mandated beyond normal good practice.
