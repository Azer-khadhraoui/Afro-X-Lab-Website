import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import logo from "@/images/logo.png";
import womenThinking from "@/images/womenthinking.jpg";

export const metadata: Metadata = {
  title: "À propos — Afro X Lab | Studio digital Branding & Web",
  description:
    "Découvrez Afro X Lab : agence de marketing digital spécialisée en stratégie digitale, réseaux sociaux, sites web et branding. Un partenaire dédié à votre croissance.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section aria-label="À propos" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F5E6A]/[0.10] via-[#0F5E6A]/[0.03] to-transparent animate-[afrox-fade-in-up_0.8s_ease-out] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0F5E6A]/12 blur-3xl"
          aria-hidden="true"
        />

        <Container>
          <div className="relative py-16 sm:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center animate-[afrox-fade-in-up_0.8s_ease-out_0.1s] animate-fill-both motion-reduce:animate-none">
              {/* Contenu texte */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/5 px-3 py-1 text-xs font-medium text-foreground/80">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-blue-600"
                    aria-hidden="true"
                  />
                  À propos
                </div>

                <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  À propos d'Afro X Lab – Agence de marketing et communication
                  digitale
                </h1>

                <p className="mt-6 text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
                  Chez Afro X Lab, nous aidons les entreprises à accélérer leur
                  croissance grâce à des stratégies marketing modernes, mesurables
                  et adaptées au marché tunisien et international. Notre mission
                  est simple : transformer vos idées en résultats concrets grâce à
                  une approche basée sur la créativité, la performance et la
                  technologie.
                </p>

                <p className="mt-4 text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
                  Depuis notre création, nous accompagnons les marques dans leur
                  développement digital en proposant des services complets :
                  création de sites web, gestion des réseaux sociaux, publicité
                  Facebook et Google, branding, stratégie digitale et organisation
                  d'événements professionnels.
                </p>

                <p className="mt-4 text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
                  Découvrez ci-dessous notre histoire, nos valeurs et ce qui fait
                  de nous une agence engagée au service de votre réussite. Vous
                  pouvez aussi consulter nos{" "}
                  <Link
                    href="/services"
                    className="font-medium text-blue-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    services
                  </Link>
                  {" "}pour en savoir plus.
                </p>
              </div>

              {/* Logo prestigieux */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  {/* Glow background */}
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 via-blue-600/5 to-transparent opacity-60 blur-2xl transition-opacity group-hover:opacity-80"
                    aria-hidden="true"
                  />
                  
                  {/* Logo container */}
                  <div className="relative rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-background via-background to-blue-600/[0.02] p-8 shadow-xl backdrop-blur-sm transition-all group-hover:border-blue-600/20 group-hover:shadow-2xl sm:p-12">
                    <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent p-6 ring-1 ring-inset ring-blue-600/10">
                      <Image
                        src={logo}
                        alt="Afro X Lab Logo"
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                        priority
                      />
                    </div>
                    
                    {/* Accent decorations */}
                    <div
                      className="pointer-events-none absolute -top-2 -right-2 h-24 w-24 rounded-full bg-blue-600/10 blur-2xl"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -bottom-2 -left-2 h-32 w-32 rounded-full bg-blue-600/5 blur-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="relative overflow-hidden border-y border-foreground/10 bg-[#0F5E6A]/[0.014]">
        {/* Ambient background (shared) */}
        <div
          className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_28%,transparent_0deg,rgb(15_94_106_/_0.22)_70deg,transparent_150deg,rgb(15_94_106_/_0.16)_230deg,transparent_360deg)] opacity-55 blur-2xl mix-blend-screen animate-[afrox-wobble_10s_ease-in-out_infinite] [mask-image:radial-gradient(80%_70%_at_50%_18%,#000_58%,transparent_100%)] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-64 -top-64 h-[46rem] w-[46rem] rounded-full bg-[#0F5E6A]/14 blur-3xl opacity-80 animate-[afrox-drift-x_16s_ease-in-out_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-80 -right-72 h-[52rem] w-[52rem] rounded-full bg-[#0F5E6A]/12 blur-3xl opacity-80 animate-[afrox-drift-y_18s_ease-in-out_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        />

        {/* Notre histoire (left → right) */}
        <section aria-label="Motion Notre histoire" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div className="relative z-10 py-16 sm:py-20">
            <Container>
              {/* Image d'en-tête */}
              <div className="mb-12 animate-[afrox-fade-in-up_0.8s_ease-out_0.15s] animate-fill-both motion-reduce:animate-none">
                <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-blue-600/5 to-transparent shadow-xl">
                  <div className="aspect-[21/9] relative">
                    <Image
                      src={womenThinking}
                      alt="Notre équipe en réflexion stratégique"
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-12 lg:items-start animate-[afrox-fade-in-up_0.8s_ease-out_0.2s] animate-fill-both motion-reduce:animate-none">
                <header className="lg:col-span-4">
                  <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Notre histoire
                  </h2>
                  <p className="mt-3 text-pretty text-base leading-7 text-foreground/70">
                    Afro X Lab est née d'une vision : offrir aux entreprises de
                    toutes tailles un accompagnement stratégique de qualité,
                    accessible et orienté résultats. L'agence combine expertise
                    marketing, innovation technologique et compréhension des enjeux
                    réels des entreprises modernes.
                  </p>
                </header>

                <div className="lg:col-span-8">
                  <p className="text-pretty text-base leading-7 text-foreground/70">
                    Depuis sa création, Afro X Lab s'est développée avec une approche
                    centrée sur :
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                      la performance mesurable
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                      l'écoute client
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                      l'innovation permanente
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                      l'adaptation aux nouvelles tendances du marketing digital
                    </li>
                  </ul>

                  <p className="mt-6 text-pretty text-base leading-7 text-foreground/70">
                    Nous nous positionnons comme un partenaire de confiance pour les
                    entreprises souhaitant structurer leur présence en ligne.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Mission & Vision + Valeurs (right → left) */}
        <section aria-label="Motion Mission & Valeurs" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="relative py-16 sm:py-20">
              {/* Background effect pour Mission & Vision */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(15_94_106_/_0.08)_0%,transparent_65%)] opacity-60"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-blue-600/5 blur-3xl"
                aria-hidden="true"
              />
              
              <Container>
                <div className="relative grid gap-8 lg:grid-cols-12 animate-[afrox-fade-in-up_0.8s_ease-out_0.3s] animate-fill-both motion-reduce:animate-none">
                  <header className="lg:col-span-4">
                    <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Notre mission et notre vision
                    </h2>
                  </header>

                  <div className="grid gap-6 lg:col-span-8 sm:grid-cols-2">
                    <article className="group rounded-3xl border border-foreground/10 bg-background p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-blue-600/20">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        Notre mission
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        Offrir à chaque entreprise une stratégie digitale adaptée,
                        claire et performante pour l'aider à atteindre ses objectifs :
                        visibilité, acquisition, notoriété, vente ou fidélisation.
                      </p>
                    </article>

                    <article className="group rounded-3xl border border-foreground/10 bg-background p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-blue-600/20">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        Notre vision
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        Construire un écosystème digital où toute entreprise tunisienne,
                        quelle que soit sa taille, peut accéder à des solutions
                        marketing modernes, efficaces et mesurables.
                      </p>
                    </article>
                  </div>
                </div>
              </Container>
            </div>

            <div className="relative py-16 sm:py-20">
              {/* Background effect pour Nos valeurs */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/[0.02] via-transparent to-blue-600/[0.02]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-20 right-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-600/10 to-transparent blur-3xl opacity-50"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 left-1/4 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tl from-blue-600/8 to-transparent blur-3xl opacity-50"
                aria-hidden="true"
              />
              
              <Container>
                <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start animate-[afrox-fade-in-up_0.8s_ease-out_0.4s] animate-fill-both motion-reduce:animate-none">
                  <header className="lg:col-span-4">
                    <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Nos valeurs
                    </h2>
                  </header>

                  <div className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
                    <article className="group rounded-3xl bg-gradient-to-br from-blue-600/20 via-foreground/10 to-blue-600/10 p-px transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="rounded-3xl bg-background p-6 shadow-sm transition-all group-hover:bg-blue-600/[0.02]">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          Transparence
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                          Nous communiquons clairement les résultats, les actions
                          menées et les recommandations pour garantir une
                          collaboration saine et durable.
                        </p>
                      </div>
                    </article>

                    <article className="group rounded-3xl bg-gradient-to-br from-blue-600/20 via-foreground/10 to-blue-600/10 p-px transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="rounded-3xl bg-background p-6 shadow-sm transition-all group-hover:bg-blue-600/[0.02]">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          Créativité
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                          Nous transformons les idées en concepts visuels et
                          stratégiques qui marquent les esprits.
                        </p>
                      </div>
                    </article>

                    <article className="group rounded-3xl bg-gradient-to-br from-blue-600/20 via-foreground/10 to-blue-600/10 p-px transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="rounded-3xl bg-background p-6 shadow-sm transition-all group-hover:bg-blue-600/[0.02]">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          Innovation
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                          Nous utilisons les meilleures technologies marketing pour
                          créer des solutions intelligentes et efficaces.
                        </p>
                      </div>
                    </article>

                    <article className="group rounded-3xl bg-gradient-to-br from-blue-600/20 via-foreground/10 to-blue-600/10 p-px transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="rounded-3xl bg-background p-6 shadow-sm transition-all group-hover:bg-blue-600/[0.02]">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          Engagement
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                          Nous travaillons comme un véritable partenaire, impliqué
                          dans la réussite de chaque projet.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </section>

        {/* Ce qui nous distingue & Équipe (left → right) */}
        <section aria-label="Motion Distingue & Équipe" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="py-16 sm:py-20">
              <Container>
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start animate-[afrox-fade-in-up_0.8s_ease-out_0.5s] animate-fill-both motion-reduce:animate-none">
                  <header className="lg:col-span-4">
                    <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Ce qui nous distingue
                    </h2>
                  </header>

                  <div className="lg:col-span-8">
                    <ul className="grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
                      <li className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        Un accompagnement personnalisé
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        Une équipe passionnée
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        Des stratégies basées sur les données
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        Des résultats mesurés et suivis en continu
                      </li>
                    </ul>

                    <p className="mt-8 text-pretty text-sm text-foreground/70">
                      Découvrez nos études de cas{" "}
                      <Link
                        href="/realisations"
                        className="font-medium text-blue-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        (Réalisations)
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </Container>
            </div>

            <div className="py-16 sm:py-20">
              <Container>
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start animate-[afrox-fade-in-up_0.8s_ease-out_0.6s] animate-fill-both motion-reduce:animate-none">
                  <header className="lg:col-span-4">
                    <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Une équipe à votre service
                    </h2>
                  </header>

                  <div className="lg:col-span-8">
                    <p className="text-pretty text-base leading-7 text-foreground/70">
                      Afro X Lab réunit des spécialistes du marketing digital, du
                      design, du contenu, du développement web et de la communication
                      événementielle. Chacun contribue à offrir une expérience
                      complète et professionnelle, orientée performance.
                    </p>

                    <p className="mt-6 text-pretty text-sm text-foreground/70">
                      En savoir plus sur nos{" "}
                      <Link
                        href="/services"
                        className="font-medium text-blue-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        services
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </section>
      </div>

      <section aria-label="Conclusion" className="relative overflow-hidden py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5E6A]/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="relative rounded-3xl border border-foreground/10 bg-background p-8 shadow-sm sm:p-10 animate-[afrox-fade-in-up_0.8s_ease-out_0.7s] animate-fill-both motion-reduce:animate-none">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Conclusion
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-foreground/70">
              Afro X Lab, ce n'est pas seulement une agence de marketing : c'est
              un partenaire stratégique dédié à la croissance de votre
              entreprise. Nous combinons expertise, innovation et accompagnement
              pour vous permettre d'atteindre vos objectifs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                Contactez-nous pour un diagnostic gratuit
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Voir les services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
