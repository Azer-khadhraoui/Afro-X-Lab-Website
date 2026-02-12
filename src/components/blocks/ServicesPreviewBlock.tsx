import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";

type Props = {
  title: string;
  subtitle: string;
};

export function ServicesPreviewBlock({ title, subtitle }: Props) {
  return (
    <section
      aria-label="Aperçu des services"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <header className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80">
              <span
                className="h-1.5 w-1.5 rounded-full bg-blue-600"
                aria-hidden="true"
              />
              Expertises
            </div>

            <h2 className="mt-4 text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-pretty text-base leading-7 text-foreground/70">
              {subtitle}
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Architecture SEO-ready et i18n-ready
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Performance (Core Web Vitals) en priorité
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Design premium + composants réutilisables
              </li>
            </ul>

            <div className="mt-8">
              <ButtonLink href="/services" variant="secondary">
                Découvrir tous les services
              </ButtonLink>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <ServiceCard
              title="Stratégie Digitale"
              description="Nous analysons votre marché, vos concurrents et vos objectifs pour créer une stratégie digitale sur mesure qui guide vos actions en ligne et maximise votre ROI."
            />
            <ServiceCard
              title="Sites Web Performants"
              description="Création de sites modernes, rapides et optimisés SEO — vitrines ou e‑commerce, solutions adaptées aux besoins des entreprises africaines."
            />
            <ServiceCard
              title="Gestion des Réseaux Sociaux"
              description="Création, planification et publication de contenu engageant, gestion de communauté et analyse des performances pour amplifier votre visibilité."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
