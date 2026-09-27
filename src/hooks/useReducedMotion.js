import { useMediaQuery } from "./useIsWide"

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
