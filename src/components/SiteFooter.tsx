import Link from "next/link";

import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Afro X Lab. Tous droits réservés.
          </p>

          <nav aria-label="Liens de pied de page">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-foreground/70 hover:text-foreground"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground/70 hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/70 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
