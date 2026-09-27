import { cn } from "@/lib/utils"

const SRC = {
  sprig: "/assets/sprig.svg",
  fern: "/assets/fern.svg",
  lavender: "/assets/lavender.svg",
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
        src={SRC[name]}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("w-full", imgClassName)}
      />
    </div>
  )
}
