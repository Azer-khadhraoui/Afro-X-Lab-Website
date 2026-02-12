import type { Metadata } from "next";

import { ApproachBlock } from "@/components/blocks/ApproachBlock";
import { CtaBlock } from "@/components/blocks/CtaBlock";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { ServicesPreviewBlock } from "@/components/blocks/ServicesPreviewBlock";
import { SplitContentBlock } from "@/components/blocks/SplitContentBlock";
import marketingStrategy from "@/images/marketingstrategy.jpg";
import blogPhoto from "@/images/blogphoto.jpg";

export const metadata: Metadata = {
  title: "Agence digitale — Sites rapides & SEO",
  description:
    "Afro X Lab conçoit des sites web ultra-rapides et des identités fortes. Une exécution premium, SEO-friendly, pensée pour convertir.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroBlock
        headline="Accélérez votre Présence Digitale en Afrique"
        subheadline="Afro X Lab accompagne les marques et entreprises africaines dans leur transformation digitale avec des stratégies créatives, des sites web performants et des campagnes qui génèrent des résultats mesurables."
      />

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

        {/* Expertises (left → right) */}
        <section aria-label="Motion Expertises" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <ServicesPreviewBlock
              title="Des solutions digitales pensées pour votre croissance"
              subtitle="De la stratégie digitale à la création de sites web, en passant par les réseaux sociaux, le SEO/SEA et le contenu visuel — une offre complète pour booster votre visibilité."
            />
          </div>
        </section>

        {/* Notre démarche (right → left) */}
        <section aria-label="Motion Notre démarche" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <ApproachBlock
              title="Un guichet unique pour booster votre business"
              subtitle="Libérez votre potentiel : nous centralisons pour vous tous les services digitaux essentiels (création de site web, SEO/SEA, réseaux sociaux, contenu créatif) dans une offre unique. Vous gagnez du temps, de l’efficacité et maximisez vos résultats — sans complexité, sans stress."
              steps={[
                {
                  title: "Clarifier l’offre",
                  description:
                    "Value proposition, structure de page, hiérarchie H2/H3 et messages clés orientés conversion.",
                },
                {
                  title: "Concevoir le design",
                  description:
                    "UI moderne et minimaliste : typographie, rythme, et composants réutilisables.",
                },
                {
                  title: "Construire pour la performance",
                  description:
                    "Next.js App Router, SSG, HTML sémantique et images optimisées pour de très bons Core Web Vitals.",
                },
              ]}
            />
          </div>
        </section>
      </div>

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

        {/* Accélérateur (left → right) */}
        <section aria-label="Motion Accélérateur" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-lr_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <SplitContentBlock
            title="L'Accélérateur de votre Réussite"
            text={`Confiez-nous votre digitalisation et concentrez-vous sur l’essentiel : la croissance de votre business. Notre équipe pilote chaque étape : site web performant, visibilité optimisée, audiences engagées, contenus sur-mesure. Un seul partenaire, pour des résultats (Quantitatifs & Qualitatifs) visibles.`}
            buttonText="Essayez notre solution tout-en-un"
            buttonHref="/services"
            imgSrc={marketingStrategy}
            imgAlt="Femme avec portable"

          />
        </div>
      </section>

      <section aria-label="Motion Tremplin" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -inset-y-10 -left-1/2 w-[200%] bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_18%,rgb(15_94_106_/_0.70)_45%,rgb(15_94_106_/_0.16)_74%,transparent_100%)] opacity-55 blur-[2px] mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,transparent_86%)] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -inset-x-72 top-0 h-56 bg-[linear-gradient(90deg,transparent_0%,rgb(15_94_106_/_0.0)_30%,rgb(15_94_106_/_0.78)_55%,transparent_100%)] opacity-45 blur-2xl mix-blend-screen animate-[afrox-sweep-rl_4.8s_ease-in-out_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <SplitContentBlock
            title="Votre Tremplin vers le Marketing Digital"
            text={`Envie de maîtriser le marketing digital ? Découvrez notre blog dédié, conçu pour les étudiants et les passionnés qui souhaitent comprendre les nouvelles tendances, méthodes et outils du digital. Progressez à votre rythme, développez vos compétences et transformez votre curiosité en véritable expertise digitale.`}
            buttonText="Comment accéder au Blog ?"
            buttonHref="/blog"
            imgSrc={blogPhoto}
            imgAlt="Femme souriante au travail"
            reverse
          />
        </div>
      </section>
      </div>

      <CtaBlock
        title="Travaillons ensemble sur votre prochain projet"
        subtitle="Bénéficiez d’un accompagnement 360° : stratégie digitale, création de site web, réseaux sociaux, SEO et contenu créatif — tout est pensé pour votre projet."
      />
    </main>
  );
}
