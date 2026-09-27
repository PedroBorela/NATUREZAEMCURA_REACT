import { cn } from "@/lib/utils"

// Dimensões do viewBox de cada SVG (width/height evitam layout shift)
const SRC = {
  sprig: { src: "/assets/sprig.svg", w: 320, h: 320 },
  fern: { src: "/assets/fern.svg", w: 220, h: 380 },
  lavender: { src: "/assets/lavender.svg", w: 120, h: 320 },
}

/*
 * Galho decorativo que balança (data-sway). O wrapper recebe o posicionamento
 * e atributos de movimento (data-parallax, data-depth…); a imagem recebe
 * rotação/escala via `imgClassName`.
 */
export default function Botanical({ name, className, imgClassName, sway = true, eager = false, ...props }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)} {...props}>
      <img
        {...(sway ? { "data-sway": "" } : null)}
        src={SRC[name].src}
        width={SRC[name].w}
        height={SRC[name].h}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-auto w-full", imgClassName)}
      />
    </div>
  )
}
