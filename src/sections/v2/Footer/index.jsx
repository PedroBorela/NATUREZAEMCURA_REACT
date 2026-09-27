import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { useAmbient } from "@/hooks/useAmbient"
import { useFinePointer } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Container } from "@/components/v2/Typography"
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YoutubeIcon } from "@/components/v2/icons"
import { FOOTER as COPY } from "@/constants/v2/closing"
import { BRAND, CONTACT, NAV_LINKS, SOCIAL, waLink } from "@/constants/v2/contact"

const SOCIAL_LINKS = [
  { href: SOCIAL.instagram, label: "Instagram", icon: InstagramIcon, hover: "hover:bg-lavanda-600" },
  { href: SOCIAL.facebook, label: "Facebook", icon: FacebookIcon, hover: "hover:bg-lavanda-600" },
  { href: SOCIAL.youtube, label: "YouTube", icon: YoutubeIcon, hover: "hover:bg-lavanda-600" },
  { href: waLink(), label: "WhatsApp", icon: WhatsAppIcon, hover: "hover:bg-verde-700" },
]

// "Natureza em " em lilás, "Cura" em verde
const LETTERS = COPY.wordmark.split("").map((c, i) => ({ c: c === " " ? " " : c, green: i >= 12 }))

export default function Footer() {
  const ref = useRef(null)
  const wrap = useRef(null)
  const word = useRef(null)
  const fern = useRef(null)
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  useReveal(ref)
  useAmbient(ref)

  // Wordmark ocupa toda a largura disponível
  useEffect(() => {
    const fit = () => {
      const w = word.current
      w.style.fontSize = "100px"
      w.style.fontSize = `${Math.floor((100 * wrap.current.clientWidth * 0.98) / Math.max(1, w.scrollWidth))}px`
    }
    fit()
    window.addEventListener("resize", fit)
    document.fonts?.ready.then(fit)
    return () => window.removeEventListener("resize", fit)
  }, [])

  useGSAP(
    (_, contextSafe) => {
      if (reduce) return
      const letters = gsap.utils.toArray("[data-fl]", ref.current)
      const cleanups = []

      // Letras quicam ao entrar na tela
      gsap.set(letters, { yPercent: 110, rotation: () => gsap.utils.random(-20, 20), opacity: 0 })
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          io.disconnect()
          contextSafe(() => gsap.to(letters, { yPercent: 0, rotation: 0, opacity: 1, duration: 1.4, stagger: 0.045, ease: "elastic.out(1,.55)" }))()
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
      )
      io.observe(wrap.current)
      cleanups.push(() => io.disconnect())

      if (fine) {
        // Cada letra pula ao passar o mouse
        letters.forEach((l) => {
          const hop = contextSafe(() =>
            gsap
              .timeline()
              .to(l, { yPercent: -22, rotation: gsap.utils.random(-10, 10), scale: 1.08, duration: 0.22, ease: "power2.out", overwrite: true })
              .to(l, { yPercent: 0, rotation: 0, scale: 1, duration: 1, ease: "elastic.out(1,.3)" }),
          )
          l.addEventListener("mouseenter", hop)
          cleanups.push(() => l.removeEventListener("mouseenter", hop))
        })

        // A folha se inclina e desliza na direção do cursor
        const footer = ref.current
        const rot = gsap.quickTo(fern.current, "rotation", { duration: 1.2, ease: "power3" })
        const fx = gsap.quickTo(fern.current, "x", { duration: 1.2, ease: "power3" })
        const fy = gsap.quickTo(fern.current, "y", { duration: 1.2, ease: "power3" })
        const move = contextSafe((e) => {
          const r = footer.getBoundingClientRect()
          const mx = (e.clientX - r.left) / r.width - 0.5
          const my = (e.clientY - r.top) / r.height - 0.5
          rot(mx * 24)
          fx(mx * 30)
          fy(my * 20)
        })
        const leave = contextSafe(() => {
          rot(0)
          fx(0)
          fy(0)
        })
        footer.addEventListener("mousemove", move)
        footer.addEventListener("mouseleave", leave)
        cleanups.push(() => {
          footer.removeEventListener("mousemove", move)
          footer.removeEventListener("mouseleave", leave)
        })
      }

      return () => cleanups.forEach((fn) => fn())
    },
    { scope: ref, dependencies: [reduce, fine], revertOnUpdate: true },
  )

  return (
    <footer ref={ref} className="relative overflow-hidden bg-verde-rodape pb-[30px] pt-[clamp(70px,8vw,100px)] text-verde-salvia">
      <div data-blob="" aria-hidden className="pointer-events-none absolute -right-[10%] -top-[30%] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(140,108,230,.28),rgba(140,108,230,0)_65%)]" />
      <div data-blob="" aria-hidden className="pointer-events-none absolute -bottom-[30%] -left-[10%] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(157,205,90,.2),rgba(157,205,90,0)_65%)]" />
      <div ref={fern} aria-hidden className="pointer-events-none absolute -right-[30px] top-[30px] w-[150px] opacity-[.55]">
        <img data-sway="" src="/assets/fern.svg" alt="" width="220" height="380" loading="lazy" decoding="async" className="h-auto w-full -rotate-[150deg]" />
      </div>

      <Container>
        <div data-stagger="" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-10">
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-3">
              <img src={BRAND.logoSmall} alt="" width="54" height="54" loading="lazy" decoding="async" className="size-[54px] object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[22px] text-white">{BRAND.name}</span>
                <span className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[.16em] text-verde-300">{BRAND.tagline}</span>
              </span>
            </div>
            <p className="m-0 text-[14.5px] leading-[1.65] text-verde-musgo">{COPY.about}</p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-11 items-center justify-center rounded-full bg-white/[.08] text-white transition-[background-color,transform] ease-bounce [transition-duration:300ms,400ms] hover:-translate-y-[3px] hover:text-white ${hover}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Links rápidos" className="flex flex-col gap-3">
            <h2 className="m-0 mb-1.5 font-serif text-[19px] font-normal text-white">{COPY.linksTitle}</h2>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[14.5px] text-verde-musgo transition-[color,padding] duration-[400ms] hover:pl-1.5 hover:text-white">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 mb-1.5 font-serif text-[19px] font-normal text-white">{COPY.servicesTitle}</h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {COPY.services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-[14.5px] text-verde-musgo">
                  <span aria-hidden className="size-[5px] rounded-full bg-verde-350" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <address className="flex flex-col gap-3.5 not-italic">
            <h2 className="m-0 mb-1.5 font-serif text-[19px] font-normal text-white">{COPY.contactTitle}</h2>
            <span className="flex gap-2.5 text-[14.5px] leading-[1.5] text-verde-musgo">
              <MapPin size={18} aria-hidden className="mt-0.5 shrink-0 text-verde-350" />
              {CONTACT.address}
            </span>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 text-[14.5px] text-verde-musgo hover:text-white">
              <Phone size={18} aria-hidden className="shrink-0 text-verde-350" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex gap-2.5 text-[14.5px] text-verde-musgo hover:text-white">
              <Mail size={18} aria-hidden className="shrink-0 text-verde-350" />
              {CONTACT.email}
            </a>
          </address>
        </div>

        <div ref={wrap} className="mt-16 select-none overflow-hidden pb-[.06em] pt-[.12em] text-center">
          <p className="sr-only">{COPY.wordmark}</p>
          <div ref={word} aria-hidden className="inline-flex whitespace-nowrap font-serif text-[100px] leading-none tracking-[-0.02em]">
            {LETTERS.map((l, i) => (
              <span key={i} data-fl="" className={`inline-block cursor-default will-change-transform ${l.green ? "text-verde-300" : "text-lavanda-350"}`}>
                {l.c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-[#8FA886]">
          <span>{COPY.copyright}</span>
          <span>
            Desenvolvido por{" "}
            <a href={COPY.credit.href} target="_blank" rel="noopener noreferrer" className="text-verde-300 hover:text-white">
              {COPY.credit.label}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
