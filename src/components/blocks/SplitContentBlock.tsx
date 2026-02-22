import Image, { type StaticImageData } from "next/image";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import defaultImg from "@/images/Image-5.jpg";

type Props = {
  title: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  reverse?: boolean;
  badge?: string;
};

export function SplitContentBlock({
  title,
  text,
  buttonText,
  buttonHref = "/contact",
  imgSrc = defaultImg,
  imgAlt = "Illustration",
  reverse = false,
  badge,
}: Props) {
  return (
    <section aria-label={title} className="py-16 sm:py-20">
      <Container>
        <div className={`grid gap-8 lg:grid-cols-12 lg:items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`lg:col-span-6 ${reverse ? "lg:col-start-7" : ""}`}>
            {badge ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/5 px-3 py-1 text-xs font-medium text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                {badge}
              </div>
            ) : null}

            <h2 className="mt-4 text-pretty text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-blue-600/70" aria-hidden="true" />

            <p className="mt-4 text-pretty text-base leading-7 text-foreground/70">
              {text}
            </p>

            {buttonText ? (
              <div className="mt-8">
                <ButtonLink href={buttonHref} variant="primary">
                  {buttonText}
                </ButtonLink>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600/30 via-foreground/10 to-blue-600/20 p-px">
              <div className="rounded-3xl bg-gradient-to-br from-background via-background to-blue-600/[0.03] overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-64 sm:h-80 lg:h-72 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SplitContentBlock;
