import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

type Props = {
  title: string;
  subtitle: string;
};

export function CtaBlock({ title, subtitle }: Props) {
  return (
    <section aria-label="Appel à l’action" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-8 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-pretty text-base leading-7 text-foreground/70">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/realisations" variant="secondary">
                Voir des projets
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
