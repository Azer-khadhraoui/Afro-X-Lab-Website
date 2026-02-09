type Props = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: Props) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-background p-6 transition-colors hover:bg-foreground/[0.02]">
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-foreground/70">
        {description}
      </p>
    </article>
  );
}
