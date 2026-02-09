import { Container } from "@/components/Container";

type Step = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle: string;
  steps: Step[];
};

export function ApproachBlock({ title, subtitle, steps }: Props) {
  return (
    <section
      aria-label="Notre approche"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <header className="max-w-xl lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/5 px-3 py-1 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
              Notre démarche
            </div>

            <h2 className="mt-4 text-pretty text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <div
              className="mt-4 h-1 w-16 rounded-full bg-blue-600/70"
              aria-hidden="true"
            />
            <p className="mt-3 text-pretty text-base leading-7 text-foreground/70">
              {subtitle}
            </p>
          </header>

          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute bottom-2 left-4 top-2 hidden w-px bg-gradient-to-b from-blue-600/0 via-blue-600/35 to-blue-600/0 sm:block"
              aria-hidden="true"
            />

            <ol className="grid gap-4">
              {steps.map((step, idx) => (
                <li key={step.title} className="group relative">
                  <div className="rounded-3xl bg-gradient-to-br from-blue-600/30 via-foreground/10 to-blue-600/20 p-px">
                    <article className="rounded-3xl bg-gradient-to-br from-background via-background to-blue-600/[0.03] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="relative hidden h-9 w-9 shrink-0 items-center justify-center sm:flex">
                          <div
                            className="absolute inset-0 rounded-full bg-blue-600/20 blur"
                            aria-hidden="true"
                          />
                          <div
                            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold tracking-tight text-white"
                            aria-hidden="true"
                          >
                            {idx + 1}
                          </div>
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
                            ÉTAPE {String(idx + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {step.description}
                      </p>
                    </article>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
