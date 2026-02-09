import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
} & Omit<ComponentProps<typeof Link>, "className"> & {
    className?: string;
  };

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles: Record<Variant, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-blue-600/25 bg-background text-foreground hover:bg-blue-600/5",
  };

  return (
    <Link className={`${base} ${styles[variant]} ${className}`.trim()} {...props} />
  );
}
