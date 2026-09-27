import { cn } from "@/lib/utils"

// Container padrão das seções (max 1240px + gutter fluido)
export function Container({ className, children, ...props }) {
  return (
    <div className={cn("relative z-[2] mx-auto max-w-[1240px] px-[clamp(20px,4vw,40px)]", className)} {...props}>
      {children}
    </div>
  )
}

// Pílula com ponto verde acima dos títulos
export function Eyebrow({ className, dotClassName, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-lavanda-100 px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[.18em] text-lavanda-600",
        className,
      )}
      {...props}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full bg-verde-500", dotClassName)} />
      {children}
    </span>
  )
}

// tailwind-merge descarta o leading-* quando recebe um text-[tamanho] depois;
// por isso o leading padrão só entra se o className não trouxer o seu
const withLeading = (className, fallback) => (/(^|\s)leading-/.test(className ?? "") ? null : fallback)

// Título de seção com trecho destacado em verde: { before, accent, after }
export function Heading({ as: Tag = "h2", title, className, accentClassName, ...props }) {
  return (
    <Tag
      className={cn(
        "m-0 text-balance font-serif text-[clamp(34px,4.4vw,58px)] font-normal tracking-[-0.015em] text-ink",
        className,
        withLeading(className, "leading-[1.05]"),
      )}
      {...props}
    >
      {title.before}
      <span className={cn("text-verde-700", accentClassName)}>{title.accent}</span>
      {title.after}
    </Tag>
  )
}
