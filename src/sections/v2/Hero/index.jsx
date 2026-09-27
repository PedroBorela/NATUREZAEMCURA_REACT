import { useEffect, useRef } from "react"
import { ArrowDownRight, Leaf, Sprout } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { useAmbient } from "@/hooks/useAmbient"
import { useFinePointer } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { Container } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import MagneticButton from "@/components/v2/MagneticButton"
import { WhatsAppIcon } from "@/components/v2/icons"
import { HERO } from "@/constants/v2/hero"
import { BRAND, WA_MESSAGES, waLink } from "@/constants/v2/contact"

const SEAL_PATH_ID = "hero-seal-path"
const glass = "border border-white/90 bg-white/70 shadow-float backdrop-blur-[14px]"

/*
 * `intro` vem do Loader:
 *   idle    conteúdo renderizado normalmente sob o loader (pinta cedo → LCP bom)
 *   cover   tela ainda coberta: aplica o estado inicial da animação, pausada
 *   reveal  cortina subindo: toca a timeline de entrada
 */
export default function Hero({ intro = "reveal" }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  useAmbient(ref, { enabled: intro === "reveal" })

  const tlRef = useRef(null)
  const started = intro !== "idle"

  // Timeline montada uma vez (na fase "cover") e só tocada no "reveal"
  useGSAP(
    () => {
      if (reduce || !started) return
      const tl = gsap.timeline({ paused: true })
      tl.from("[data-hero-line]", { yPercent: 118, rotate: 2.5, duration: 1.2, stagger: 0.085, ease: "expo.out" })
        .from("[data-hero-photo]", { y: 90, scale: 0.9, opacity: 0, duration: 1.5, ease: "expo.out" }, "<")
        .from("[data-hero-img]", { scale: 1.35, duration: 1.8, ease: "expo.out" }, "<")
        .from("[data-hero-fade]", { y: 26, opacity: 0, duration: 0.9, stagger: 0.07, ease: "power3.out" }, "<.25")
        .from("[data-pop]", { scale: 0, opacity: 0, duration: 1.1, stagger: 0.12, ease: "elastic.out(1,.5)" }, "<.3")

      const path = ref.current.querySelector("[data-draw-hero]")
      const len = path.getTotalLength()
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      tl.to(path, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=1.2")
      tlRef.current = tl

      gsap.to("[data-hero-photo-wrap]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      })
      return () => (tlRef.current = null)
    },
    { scope: ref, dependencies: [reduce, started], revertOnUpdate: true },
  )

  useEffect(() => {
    if (intro === "reveal") tlRef.current?.play()
  }, [intro])

  // Camadas com profundidade seguem o mouse
  useGSAP(
    (_, contextSafe) => {
      if (reduce || !fine) return
      const section = ref.current
      const movers = gsap.utils.toArray("[data-depth]", section).map((el) => ({
        depth: Number(el.dataset.depth),
        x: gsap.quickTo(el, "x", { duration: 1, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 1, ease: "power3" }),
      }))
      const move = contextSafe((e) => {
        const r = section.getBoundingClientRect()
        const mx = (e.clientX - r.left) / r.width - 0.5
        const my = (e.clientY - r.top) / r.height - 0.5
        movers.forEach((m) => {
          m.x(mx * m.depth * 30)
          m.y(my * m.depth * 30)
        })
      })
      section.addEventListener("mousemove", move)
      return () => section.removeEventListener("mousemove", move)
    },
    { scope: ref, dependencies: [reduce, fine], revertOnUpdate: true },
  )

  return (
    <section
      ref={ref}
      id="inicio"
      data-hero=""
      aria-labelledby="hero-title"
      className="relative min-h-screen overflow-hidden bg-lavanda-bg pb-[90px] pt-[150px]"
    >
      <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-[20%] size-[60vw] rounded-full bg-[radial-gradient(circle,rgba(185,162,243,.45),rgba(185,162,243,0)_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-[25%] -left-[15%] size-[55vw] rounded-full bg-[radial-gradient(circle,rgba(156,204,101,.28),rgba(156,204,101,0)_65%)]" />
      <Botanical
        name="sprig"
        eager
        data-depth="-0.6"
        className="-left-10 top-[70px] z-[1] w-[clamp(160px,18vw,260px)]"
        imgClassName="origin-[20%_90%] rotate-[95deg]"
      />
      <Botanical
        name="fern"
        eager
        data-depth="0.8"
        className="-bottom-10 -right-[30px] z-[1] w-[clamp(150px,16vw,240px)]"
        imgClassName="origin-bottom -rotate-[28deg]"
      />

      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-[clamp(40px,5vw,72px)]">
        <div className="flex flex-col gap-[26px]">
          <div data-hero-fade="" className="flex flex-wrap items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[.2em] text-lavanda-600">
            {HERO.eyebrow.map((item, i) => (
              <span key={item} className="contents">
                {i > 0 && <span aria-hidden className="size-[5px] rounded-full bg-verde-500" />}
                <span>{item}</span>
              </span>
            ))}
          </div>

          <h1 id="hero-title" className="m-0 font-serif text-[clamp(38px,4.3vw,62px)] font-normal leading-[1.04] tracking-[-0.02em] text-ink">
            {HERO.titleLines.map((line, i) => (
              <span key={line} className={i === 0 ? "block overflow-hidden pb-[.14em]" : "block overflow-hidden pb-[.06em]"}>
                <span data-hero-line="" className={i === 0 ? "relative inline-block text-verde-700" : "inline-block"}>
                  {line}
                  {i === 0 && (
                    <svg
                      aria-hidden
                      viewBox="0 0 420 24"
                      preserveAspectRatio="none"
                      className="absolute -bottom-[.1em] left-0 h-[.3em] w-full overflow-visible"
                    >
                      <path
                        data-draw-hero=""
                        d="M4 16 C 90 4, 200 4, 300 12 S 400 18, 416 8"
                        fill="none"
                        stroke="#8C6CE6"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-fade="" className="m-0 max-w-[560px] text-pretty text-[clamp(17px,1.35vw,19px)] leading-[1.55] text-ink">
            {HERO.lead}
          </p>
          <p data-hero-fade="" className="m-0 max-w-[560px] text-pretty text-[15px] leading-[1.7] text-muted">
            {HERO.body}
          </p>

          <div data-hero-fade="" className="flex flex-wrap gap-3">
            <MagneticButton href={waLink(WA_MESSAGES.hero)}>
              <WhatsAppIcon size={20} />
              <span>{HERO.ctaPrimary}</span>
            </MagneticButton>
            <MagneticButton href="#metodo" variant="ghost" className="px-6">
              <span>{HERO.ctaSecondary}</span>
              <ArrowDownRight size={18} aria-hidden />
            </MagneticButton>
          </div>

          <ul data-hero-fade="" className="m-0 flex list-none flex-wrap gap-[22px] p-0 pt-1.5">
            {HERO.badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-[13px] font-semibold text-ink">
                <span className="flex size-[38px] items-center justify-center rounded-full bg-lavanda-100 text-lavanda-600">
                  <Icon size={18} aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <p data-hero-fade="" className="m-0 flex items-center gap-2.5 font-hand text-[28px] text-lavanda-600">
            {HERO.signature}
            <Leaf size={16} aria-hidden className="text-verde-700" />
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] self-start">
          <div data-depth="0.3" aria-hidden className="pointer-events-none absolute inset-[-6%_-8%_-4%_-8%]">
            <img data-spin="60" src="/imgs/mandala-700.webp" alt="" className="size-full object-contain opacity-[.13]" />
          </div>

          <div data-hero-photo-wrap="">
            <div
              data-hero-photo=""
              className="relative aspect-[4/5] overflow-hidden rounded-[280px_280px_36px_36px] border-[6px] border-white/85 shadow-photo"
            >
              <img
                data-hero-img=""
                src={HERO.photo.src}
                srcSet={HERO.photo.srcSet}
                sizes="(min-width: 1024px) 540px, 92vw"
                alt={HERO.photo.alt}
                fetchPriority="high"
                decoding="async"
                width="1200"
                height="900"
                className="size-full object-cover object-[72%_center]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(42,27,94,.35)] to-transparent" />
            </div>
          </div>

          <Botanical
            name="lavender"
            eager
            data-depth="1.2"
            className="-right-[18px] bottom-[24%] w-[clamp(120px,14vw,170px)]"
            imgClassName="ml-auto w-2/5 rotate-12"
          />

          <div data-pop="" data-depth="1" className="absolute -left-[6%] bottom-[8%]">
            <div data-float="" className={`flex items-center gap-3 rounded-[20px] py-3 pl-3 pr-[18px] backdrop-blur-[16px] backdrop-saturate-[1.6] ${glass}`}>
              <span className="flex size-11 items-center justify-center rounded-[14px] bg-verde-100 text-verde-900">
                <Sprout size={22} aria-hidden />
              </span>
              <span className="flex flex-col gap-0.5">
                <strong className="text-[15px] text-ink">{HERO.statCard.title}</strong>
                <span className="text-xs text-muted">{HERO.statCard.text}</span>
              </span>
            </div>
          </div>

          <div data-pop="" data-depth="-0.8" aria-hidden className="absolute -right-[4%] top-[6%]">
            <div data-float="" className={`relative flex size-32 items-center justify-center rounded-full ${glass}`}>
              <svg data-spin="18" viewBox="0 0 128 128" className="absolute inset-0 size-full">
                <defs>
                  <path id={SEAL_PATH_ID} d="M64 64 m -48 0 a 48 48 0 1 1 96 0 a 48 48 0 1 1 -96 0" />
                </defs>
                <text className="fill-lavanda-600 text-[10.5px] font-bold uppercase tracking-[2.6px]">
                  <textPath href={`#${SEAL_PATH_ID}`}>{HERO.seal}</textPath>
                </text>
              </svg>
              <img src={BRAND.logoSmall} alt="" width="52" height="52" className="size-[52px] object-contain" />
            </div>
          </div>

          <HandNote glass lines={HERO.note} data-depth="0.6" rotate="-rotate-6" className="absolute -left-[14%] top-[22%]" />
        </div>
      </Container>
    </section>
  )
}
