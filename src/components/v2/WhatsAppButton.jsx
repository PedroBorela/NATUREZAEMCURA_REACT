import { useRef } from "react"
import { useAmbient } from "@/hooks/useAmbient"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"
import { WhatsAppIcon } from "./icons"

// Botão flutuante do WhatsApp com anel pulsante
export default function WhatsAppButton() {
  const ref = useRef(null)
  useAmbient(ref)

  return (
    <div ref={ref}>
      <a
        href={waLink(WA_MESSAGES.float)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-[22px] right-[22px] z-[800] flex size-[60px] items-center justify-center rounded-full bg-verde-900 text-white shadow-[0_14px_30px_-10px_rgba(27,94,32,.7)] transition-colors hover:bg-verde-700 hover:text-white"
      >
        <span data-pulse="" aria-hidden className="pointer-events-none absolute inset-0 rounded-full border-2 border-verde-500" />
        <WhatsAppIcon size={26} />
      </a>
    </div>
  )
}
