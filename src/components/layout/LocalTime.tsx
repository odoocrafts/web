"use client";

import { useEffect, useState } from "react";

/** Live IST clock for the footer. Renders a stable placeholder on the server. */
export default function LocalTime() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time} IST
    </span>
  );
}
