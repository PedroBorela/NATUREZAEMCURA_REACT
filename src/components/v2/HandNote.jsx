import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { useIsWide } from "@/hooks/useIsWide"

/*
 * Anotação manuscrita (Caveat). Só aparece a partir de 1180px, como na referência.
 *   glass     cartão de vidro que "pula" (data-pop) e flutua (data-float)
 *   reveal    entra com data-reveal
 *   rotate    classe de rotação aplicada ao texto/cartão
 * `className` posiciona (ex.: "absolute left-[4%] top-40"); demais props
 * (ex.: data-depth) vão para o wrapper.
 */
export default function HandNote({ lines, glass = false, reveal = false, rotate, className, ...props }) {
  const show = useIsWide(1180)
  if (!show) return null

  const text = lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ))

  if (glass) {
    return (
      <div data-pop="" aria-hidden className={className} {...props}>
        <div data-float="">
          <div
            className={cn(
              "rounded-[18px] border border-white/90 bg-white/70 px-[18px] py-3.5 text-center font-hand text-[25px] leading-none text-lavanda-600 shadow-[0_20px_40px_-18px_rgba(42,27,94,.35)] backdrop-blur-[14px]",
              rotate,
            )}
          >
            {text}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      {...(reveal ? { "data-reveal": "" } : null)}
      aria-hidden
      className={cn("font-hand text-[28px] text-lavanda-600", rotate, className, !/(^|\s)leading-/.test(className ?? "") && "leading-none")}
      {...props}
    >
      {text}
    </div>
  )
}
