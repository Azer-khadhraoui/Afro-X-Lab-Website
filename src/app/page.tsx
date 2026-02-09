import type { Metadata } from "next";

import { ApproachBlock } from "@/components/blocks/ApproachBlock";
import { CtaBlock } from "@/components/blocks/CtaBlock";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { ServicesPreviewBlock } from "@/components/blocks/ServicesPreviewBlock";

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
        headline="Une présence digitale premium, pensée pour performer."
        subheadline="Nous créons des identités claires et des sites ultra-rapides — optimisés SEO, accessibles, et conçus pour convertir."
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
              title="Des services simples, orientés résultat"
              subtitle="Une approche modulable (et future CMS-ready) : chaque section est un bloc réutilisable, facile à faire évoluer sans refonte."
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
              title="Une méthode claire, sans complexité"
              subtitle="Design premium, performance non négociable, et code propre : tout est fait pour une base durable et scalable."
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

      <CtaBlock
        title="Prêt à lancer une version V1 impeccable ?"
        subtitle="Dites-nous où vous voulez aller — on vous répond rapidement avec une proposition claire et actionnable."
      />
    </main>
  );
}
