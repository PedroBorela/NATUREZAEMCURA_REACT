import { useCallback, useSyncExternalStore } from "react"

export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mq = window.matchMedia(query)
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    [query],
  )
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false)
}

// Layout "desktop" da referência: >= 1024px
export function useIsWide(minWidth = 1024) {
  return useMediaQuery(`(min-width: ${minWidth}px)`)
}

// Mouse/trackpad (efeitos de hover, cursor, tilt, magnético)
export function useFinePointer() {
  return useMediaQuery("(pointer: fine)")
}
