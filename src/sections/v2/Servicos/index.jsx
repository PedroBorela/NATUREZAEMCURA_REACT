import { useRef } from "react"
import { ArrowUpRight, Leaf, Sparkles } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { useAmbient } from "@/hooks/useAmbient"
import { useFinePointer, useIsWide } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import MagneticButton from "@/components/v2/MagneticButton"
import Marquee from "@/components/v2/Marquee"
import { WhatsAppIcon } from "@/components/v2/icons"
import { ALSO_OFFER, SERVICES, SERVICES_COPY as COPY } from "@/constants/v2/services"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

const fade = "[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"

export default function Servicos() {
  const ref = useRef(null)
  const list = useRef(null)
  const float = useRef(null)
  const wide = useIsWide()
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const followCursor = wide && fine && !reduce
  useReveal(ref)
  useAmbient(ref)

  // Foto do serviço segue o cursor sobre a lista
  useGSAP(
    (_, contextSafe) => {
      if (!followCursor) return
      const el = list.current
      const fl = float.current
      const img = fl.querySelector("img")
      const fx = gsap.quickTo(fl, "x", { duration: 0.6, ease: "power3" })
      const fy = gsap.quickTo(fl, "y", { duration: 0.6, ease: "power3" })
      gsap.set(fl, { scale: 0.6 })

      let preloaded = false
      const move = contextSafe((e) => {
        const r = el.getBoundingClientRect()
        fx(e.clientX - r.left)
        fy(e.clientY - r.top)
      })
      const enterList = () => {
        if (preloaded) return
        preloaded = true
        SERVICES.forEach((s) => (new Image().src = s.img))
      }
      const enterRow = contextSafe((e) => {
        const row = e.target.closest("[data-svc-row]")
        if (!row) return
        img.src = row.dataset.img
        gsap.to(fl, { autoAlpha: 1, scale: 1, rotation: gsap.utils.random(-6, 6), duration: 0.5, ease: "back.out(1.8)" })
      })
      const leave = contextSafe(() => gsap.to(fl, { autoAlpha: 0, scale: 0.6, duration: 0.35 }))

      el.addEventListener("mousemove", move)
      el.addEventListener("mouseenter", enterList)
      el.addEventListener("mouseover", enterRow)
      el.addEventListener("mouseleave", leave)
      return () => {
        el.removeEventListener("mousemove", move)
        el.removeEventListener("mouseenter", enterList)
        el.removeEventListener("mouseover", enterRow)
        el.removeEventListener("mouseleave", leave)
      }
    },
    { scope: ref, dependencies: [followCursor], revertOnUpdate: true },
  )

  return (
    <section ref={ref} id="servicos" aria-labelledby="servicos-title" className="relative overflow-hidden bg-lavanda-bg py-[clamp(90px,10vw,140px)]">
      <Botanical name="fern" data-parallax="0.3" className="-left-[50px] top-[120px] w-[170px]" imgClassName="rotate-[30deg]" />
      <HandNote reveal lines={COPY.note} rotate="rotate-[7deg]" className="absolute right-[5%] top-[120px] text-right" />

      <Container>
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-4">
            <Eyebrow data-reveal="" className="self-start">
              {COPY.eyebrow}
            </Eyebrow>
            <Heading data-reveal="" id="servicos-title" title={COPY.title} className="text-wrap" />
          </div>
          <p data-reveal="" className="m-0 max-w-[360px] text-[17px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
        </div>

        <div ref={list} className="relative border-t border-lavanda-200">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              data-svc-row=""
              data-img={s.img}
              href={waLink(WA_MESSAGES.service(s.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="relative grid grid-cols-[32px_minmax(0,1fr)_44px] items-center gap-x-4 gap-y-2 border-b sm:grid-cols-[minmax(0,56px)_minmax(0,1.3fr)_minmax(0,1fr)_56px] sm:gap-5 border-lavanda-200 px-3 py-7 text-ink transition-[background-color,padding] ease-spring [transition-duration:400ms,500ms] hover:bg-lavanda-50 hover:pl-7 hover:text-ink"
            >
              <span className="text-[13px] font-bold tracking-[.1em] text-lavanda-600">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex flex-wrap items-center gap-2.5">
                <span className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.1]">{s.title}</span>
                {s.tag && <span className="rounded-full bg-lavanda-100 px-2.5 py-1 text-[11px] font-bold tracking-[.06em] text-lavanda-600">{s.tag}</span>}
              </span>
              <span className="col-start-2 row-start-2 text-[14.5px] leading-[1.55] text-muted sm:col-start-3 sm:row-start-1">{s.desc}</span>
              <span aria-hidden className="col-start-3 row-start-1 flex size-11 items-center justify-center justify-self-end rounded-full border border-lavanda-300 text-verde-900 sm:col-start-4 sm:size-[52px]">
                <ArrowUpRight size={22} />
              </span>
            </a>
          ))}
          {followCursor && (
            <div
              ref={float}
              aria-hidden
              className="pointer-events-none invisible absolute left-0 top-0 z-[5] -ml-[130px] -mt-[160px] h-[320px] w-[260px] overflow-hidden rounded-3xl opacity-0 shadow-[0_30px_60px_-20px_rgba(42,27,94,.5)]"
            >
              <img alt="" src={SERVICES[0].img} decoding="async" className="size-full object-cover" />
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
          <div data-reveal="" className="relative flex flex-col gap-3.5 overflow-hidden rounded-[30px] bg-verde-900 p-[34px] text-white">
            <img
              src="/imgs/florBack-700.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] opacity-[.14] invert"
            />
            <h3 className="relative m-0 font-serif text-[clamp(26px,2.6vw,34px)] font-normal text-white">{COPY.help.title}</h3>
            <p className="relative m-0 max-w-[420px] text-[15.5px] leading-[1.6] text-verde-salvia">{COPY.help.text}</p>
            <MagneticButton href={waLink(WA_MESSAGES.servicesHelp)} variant="white" className="mt-2 h-[52px] self-start px-[22px]">
              <WhatsAppIcon size={18} />
              <span>{COPY.help.cta}</span>
            </MagneticButton>
          </div>

          <div data-reveal="" className="flex flex-col justify-center gap-4 overflow-hidden rounded-[30px] border border-lavanda-150 bg-white/60 py-[30px]">
            <span className="px-[30px] text-xs font-bold uppercase tracking-[.18em] text-lavanda-600">{COPY.alsoTitle}</span>
            <Marquee
              items={ALSO_OFFER[0]}
              direction={-1}
              speed={30}
              pauseOnHover
              className={fade}
              trackClassName="gap-2.5 pr-2.5"
              renderItem={(t, i, clone) => (
                <span
                  key={`${t}-${i}`}
                  aria-hidden={clone || undefined}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-lavanda-75 px-4 py-3 text-sm font-semibold text-ink"
                >
                  <Sparkles size={16} aria-hidden className="text-lavanda-600" />
                  {t}
                </span>
              )}
            />
            <Marquee
              items={ALSO_OFFER[1]}
              direction={1}
              speed={34}
              pauseOnHover
              className={fade}
              trackClassName="gap-2.5 pr-2.5"
              renderItem={(t, i, clone) => (
                <span
                  key={`${t}-${i}`}
                  aria-hidden={clone || undefined}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-verde-50 px-4 py-3 text-sm font-semibold text-verde-900"
                >
                  <Leaf size={16} aria-hidden />
                  {t}
                </span>
              )}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
