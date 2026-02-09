import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo.jpg";

import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent bg-[length:200%_100%] animate-[afrox-pan_9s_ease-in-out_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      />
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="group relative flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Afro X Lab, retour à l’accueil"
          >
            <span className="relative">
              <span
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue-600/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <Image
                src={logo}
                alt="Logo Afro X Lab"
                width={34}
                height={34}
                className="h-[34px] w-[34px] rounded-xl border border-foreground/10 object-cover"
                priority
              />
            </span>

            <span className="flex items-baseline gap-2">
              <span className="text-base font-semibold tracking-tight">
                Afro
              </span>
              <span className="text-base font-semibold tracking-tight text-blue-600">
                X Lab
              </span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                    <span
                      className="pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-600/0 via-blue-600/80 to-blue-600/0 transition-transform duration-300 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden sm:block">
            <ButtonLink href="/contact" variant="primary" className="px-4 py-2">
              Parler projet
            </ButtonLink>
          </div>

          <div className="sm:hidden">
            <ButtonLink href="/contact" variant="secondary" className="px-4 py-2">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
