import Image from "next/image";
import type { Solution } from "@/data/solutions";
import { cn } from "@/lib/utils";

/**
 * Icon tile for a solution card. Renders the brand image when the solution
 * has one (e.g. Sellora's app icon), otherwise the Lucide icon in a bordered tile.
 */
export default function SolutionMark({
  solution,
  size = "md",
  className = "",
}: {
  solution: Solution;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = { sm: "h-11 w-11 rounded-xl", md: "h-12 w-12 rounded-2xl", lg: "h-20 w-20 rounded-3xl" }[size];
  const glyph = { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-9 w-9" }[size];
  const px = { sm: 44, md: 48, lg: 80 }[size];

  if (solution.image) {
    return (
      <Image
        src={solution.image}
        alt=""
        width={px}
        height={px}
        className={cn(box, "shrink-0 shadow-[0_8px_30px_-10px_rgba(56,189,248,0.6)]", className)}
      />
    );
  }

  const Icon = solution.icon;
  return (
    <span
      className={cn(
        box,
        "inline-flex shrink-0 items-center justify-center border border-[var(--line-strong)] bg-ink/50",
        solution.accent,
        className
      )}
    >
      <Icon className={glyph} />
    </span>
  );
}
