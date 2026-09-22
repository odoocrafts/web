import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeUp, Words } from "@/components/fx/Reveal";

/** Page gutter + max width used everywhere. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-8", className)}>{children}</div>;
}

/** Monospace index label, e.g. "01 — Services" */
export function Eyebrow({
  index,
  children,
  className = "",
  tone = "default",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "violet" | "ember";
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "violet" && "text-lilac",
        tone === "ember" && "text-ember",
        className
      )}
    >
      {index && <span className="text-cream/35">{index}</span>}
      {index && <span className="h-px w-6 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  );
}

/**
 * Section heading with an editorial split:
 * `title` is a plain sentence; wrap the accent word(s) in `accent` to render them in italic serif.
 */
export function Heading({
  title,
  accent,
  after,
  size = "lg",
  className = "",
  as: Tag = "h2",
  animate,
}: {
  title: string;
  accent?: string;
  after?: string;
  size?: "xl" | "lg" | "md";
  className?: string;
  as?: "h1" | "h2" | "h3";
  animate?: boolean;
}) {
  const sizes = {
    xl: "text-[clamp(2.75rem,8.4vw,8.25rem)] leading-[0.94]",
    lg: "text-[clamp(2.25rem,5.4vw,4.75rem)] leading-[1.0]",
    md: "text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.05]",
  };
  return (
    <Tag className={cn("font-medium tracking-[-0.03em] text-cream", sizes[size], className)}>
      <Words text={title} animate={animate} />
      {accent && (
        <>
          {" "}
          <Words
            text={accent}
            animate={animate}
            delay={0.12}
            wordClassName="serif-italic text-lilac pr-[0.06em]"
          />
        </>
      )}
      {after && (
        <>
          {" "}
          <Words text={after} animate={animate} delay={0.2} />
        </>
      )}
    </Tag>
  );
}

/** Standard header for inner pages. */
export function PageHeader({
  index,
  eyebrow,
  title,
  accent,
  after,
  description,
  children,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: string;
  accent?: string;
  after?: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <Container className={cn("relative", align === "center" && "text-center")}>
        <FadeUp>
          <Eyebrow index={index} className={cn(align === "center" && "justify-center")}>
            {eyebrow}
          </Eyebrow>
        </FadeUp>
        <Heading
          as="h1"
          size="xl"
          title={title}
          accent={accent}
          after={after}
          className={cn("mt-6 max-w-[16ch]", align === "center" && "mx-auto")}
        />
        {description && (
          <FadeUp delay={0.25}>
            <p
              className={cn(
                "mt-8 max-w-2xl text-lg leading-relaxed text-cream/65 md:text-xl",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          </FadeUp>
        )}
        {children && <FadeUp delay={0.35} className="mt-10">{children}</FadeUp>}
      </Container>
    </section>
  );
}
