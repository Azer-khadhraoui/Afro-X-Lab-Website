import Image from "next/image";

import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

import heroBackground from "@/images/Image-5.jpg";

type Props = {
  headline: string;
  subheadline: string;
};

export function HeroBlock({ headline, subheadline }: Props) {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Équipe en séance de travail, ambiance studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-background/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F5E6A]/[0.10]" />
      </div>

      <Container>
        <div className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/5 px-3 py-1 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
              Studio digital • Branding • Web
            </div>

            <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
              {subheadline}
            </p>

            <div className="relative mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl"
                aria-hidden="true"
              />
              <ButtonLink href="/contact" variant="primary">
                Parler de votre projet
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Voir les services
              </ButtonLink>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium text-foreground/60">
                  Focus
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Branding + Web
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-foreground/60">
                  Méthode
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Design → Build → Launch
                </dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs font-medium text-foreground/60">
                  Qualité
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  SEO + Perf
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
