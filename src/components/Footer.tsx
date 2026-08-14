import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-base">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Not On Line Yet"
                width={28}
                height={28}
                className="size-7"
              />
              <p className="text-sm font-semibold text-text">
                Not On Line Yet
              </p>
            </div>
            <p className="mt-2 max-w-xs text-sm text-text-muted">
              Websites and AI answering for UK tradespeople.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-sm text-text-muted">
                <Phone className="size-4 shrink-0 text-text-faint" />
                <a
                  href="tel:07446914731"
                  className="transition-colors hover:text-text"
                >
                  07446 914731
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-muted">
                <EnvelopeSimple className="size-4 shrink-0 text-text-faint" />
                <a
                  href="mailto:jules@notonlineyet.co.uk"
                  className="transition-colors hover:text-text"
                >
                  jules@notonlineyet.co.uk
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-muted">
                <MapPin className="size-4 shrink-0 text-text-faint" />
                London N2, United Kingdom
              </li>
            </ul>
          </div>

          <div className="sm:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-faint">
              Quick links
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-8 text-xs text-text-faint">
          © {year} Jules Wood, trading as Not On Line Yet. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
