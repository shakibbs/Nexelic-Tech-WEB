import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect on client (no flicker), useEffect on server (no SSR warning)
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
