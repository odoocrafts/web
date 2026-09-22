"use client";

import { useSyncExternalStore } from "react";

/** Tiny external store so the hero can wait for the intro curtain to lift. */
let done = false;
const subs = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  subs.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  subs.add(fn);
  return () => {
    subs.delete(fn);
  };
}

export function useIntroDone() {
  return useSyncExternalStore(
    subscribe,
    () => done,
    () => false
  );
}
