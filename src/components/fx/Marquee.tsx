import { ReactNode } from "react";

/** CSS-only infinite marquee (GPU transform, pauses on hover). */
export default function Marquee({
  children,
  className = "",
  slow = false,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={`pause-on-hover mask-fade-x relative flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 items-center ${slow ? "animate-marquee-slow" : "animate-marquee"} will-change-transform`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
