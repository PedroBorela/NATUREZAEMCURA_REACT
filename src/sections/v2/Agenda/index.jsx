import { useMemo, useRef, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import { AGENDA_COPY as COPY, EVENT_TYPES, EVENTS } from "@/constants/v2/agenda"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

const pad = (n) => String(n).padStart(2, "0")
// Chave YYYY-MM-DD no fuso local (toISOString usaria UTC)
const dateKey = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`
const parseKey = (key) => new Date(`${key}T12:00:00`)

// Enriquecidos uma vez com cores, rótulos em pt-BR e link do WhatsApp
const EVENTS_VIEW = EVENTS.map((e) => {
  const d = parseKey(e.date)
  return {
    ...e,
    ...EVENT_TYPES[e.type],
    day: d.getDate(),
    month: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    weekday: d.toLocaleDateString("pt-BR", { weekday: "long" }),
    href: waLink(WA_MESSAGES.event(e.title, d.toLocaleDateString("pt-BR"))),
  }
})

export default function Agenda() {
  const ref = useRef(null)
  const today = new Date()
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate())
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const [selected, setSelected] = useState(null)
  useReveal(ref)
  useAmbient(ref)

  const shiftMonth = (k) =>
    setView(({ y, m }) => {
      const next = new Date(y, m + k, 1)
      return { y: next.getFullYear(), m: next.getMonth() }
    })

  const days = useMemo(() => {
    const first = new Date(view.y, view.m, 1).getDay()
    const count = new Date(view.y, view.m + 1, 0).getDate()
    return [
      ...Array.from({ length: first }, () => null),
      ...Array.from({ length: count }, (_, i) => {
        const key = dateKey(view.y, view.m, i + 1)
        return { d: i + 1, key, events: EVENTS_VIEW.filter((e) => e.date === key) }
      }),
    ]
  }, [view])

  const monthLabel = new Date(view.y, view.m, 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
  const list = selected ? EVENTS_VIEW.filter((e) => e.date === selected) : EVENTS_VIEW.filter((e) => e.date >= todayKey).slice(0, 5)
  const listTitle = selected ? `Eventos em ${parseKey(selected).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })}` : COPY.upcoming

  return (
    <section ref={ref} id="agenda" aria-labelledby="agenda-title" className="relative overflow-hidden bg-lavanda-bg py-[clamp(90px,10vw,140px)]">
      <Botanical name="lavender" data-parallax="0.25" className="-left-[30px] bottom-[60px] w-[150px]" imgClassName="w-1/2 -rotate-[14deg]" />

      <Container>
        <div className="mb-[50px] flex flex-col items-center gap-4 text-center">
          <Eyebrow data-reveal="">{COPY.eyebrow}</Eyebrow>
          <Heading data-reveal="" id="agenda-title" title={COPY.title} className="text-wrap" />
          <p data-reveal="" className="m-0 max-w-[560px] text-[17px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[22px]">
          <div
            data-reveal=""
            className="rounded-[30px] border border-lavanda-150 bg-white/[.72] p-6 shadow-[inset_0_1px_0_#fff,0_30px_60px_-40px_rgba(76,52,160,.55)] backdrop-blur-[16px]"
          >
            <div className="mb-[18px] flex items-center justify-between">
              <button
                type="button"
                onClick={() => shiftMonth(-1)}
                aria-label="Mês anterior"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-lavanda-200 bg-white text-lavanda-600 transition-colors hover:bg-lavanda-75"
              >
                <ChevronLeft size={18} aria-hidden />
              </button>
              <span aria-live="polite" className="font-serif text-[22px] capitalize text-ink">
                {monthLabel}
              </span>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
                aria-label="Próximo mês"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-lavanda-200 bg-white text-lavanda-600 transition-colors hover:bg-lavanda-75"
              >
                <ChevronRight size={18} aria-hidden />
              </button>
            </div>

            <div aria-hidden className="mb-1.5 grid grid-cols-7 gap-1.5">
              {COPY.weekdays.map((w) => (
                <span key={w} className="py-1.5 text-center text-[11.5px] font-bold uppercase tracking-[.08em] text-lavanda-500">
                  {w}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {days.map((day, i) => {
                if (!day) return <span key={`empty-${i}`} aria-hidden />
                const isSel = selected === day.key
                const isToday = day.key === todayKey
                const past = day.key < todayKey
                const n = day.events.length
                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => setSelected(isSel ? null : day.key)}
                    aria-pressed={isSel}
                    aria-label={`${parseKey(day.key).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })}${n ? `, ${n} evento${n > 1 ? "s" : ""}` : ""}`}
                    className={cn(
                      "relative flex aspect-square min-h-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-[14px] border-[1.5px] text-sm font-bold transition-[background-color,transform] ease-bounce [transition-duration:250ms,350ms] hover:scale-[1.06]",
                      isSel ? "bg-lavanda-600 text-white" : n ? "bg-[#F7F4FE] text-ink" : "bg-white text-ink",
                      isToday ? "border-verde-500" : isSel ? "border-lavanda-600" : "border-[#F0EBFC]",
                      past && !isToday && "opacity-[.45]",
                    )}
                  >
                    <span>{day.d}</span>
                    <span aria-hidden className="flex h-1.5 gap-[3px]">
                      {day.events.slice(0, 3).map((e) => (
                        <span key={e.title} className="size-1.5 rounded-full" style={{ background: isSel ? "#fff" : e.color }} />
                      ))}
                    </span>
                  </button>
                )
              })}
            </div>

            <ul className="m-0 mt-[18px] flex list-none flex-wrap gap-3.5 border-t border-lavanda-150 p-0 pt-4">
              {Object.entries(EVENT_TYPES).map(([type, { color }]) => (
                <li key={type} className="flex items-center gap-1.5 text-[12.5px] text-muted">
                  <span aria-hidden className="size-2 rounded-full" style={{ background: color }} />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="" className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3 px-1.5 pb-1.5">
              <h3 className="m-0 font-serif text-2xl font-normal text-ink">{listTitle}</h3>
              {selected && (
                <button type="button" onClick={() => setSelected(null)} className="cursor-pointer border-none bg-transparent text-[13px] font-bold text-lavanda-600">
                  {COPY.showUpcoming}
                </button>
              )}
            </div>

            {list.map((e) => (
              <a
                key={`${e.date}-${e.title}`}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-4 rounded-[22px] border border-lavanda-150 bg-white py-3.5 pl-3.5 pr-4 text-ink shadow-[0_18px_40px_-34px_rgba(76,52,160,.6)] transition-[transform,border-color] ease-spring [transition-duration:450ms,300ms] hover:translate-x-1.5 hover:border-lavanda-350 hover:text-ink"
              >
                <span className="flex h-16 flex-col items-center justify-center rounded-2xl leading-none" style={{ background: e.soft }}>
                  <strong className="font-serif text-[26px] font-normal" style={{ color: e.color }}>
                    {e.day}
                  </strong>
                  <span className="mt-1 text-[11px] font-bold uppercase tracking-[.08em]" style={{ color: e.color }}>
                    {e.month}
                  </span>
                </span>
                <span className="flex min-w-0 flex-col gap-[5px]">
                  <strong className="text-[15.5px] leading-[1.3]">{e.title}</strong>
                  <span className="flex flex-wrap gap-2.5 text-[12.5px] text-muted">
                    <span className="capitalize">{e.weekday}</span>
                    <span aria-hidden>·</span>
                    <span>{e.time}</span>
                    <span aria-hidden>·</span>
                    <span className="font-bold" style={{ color: e.color }}>
                      {e.type}
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-bold text-verde-900">
                  {COPY.cta} <ArrowUpRight size={16} aria-hidden />
                </span>
              </a>
            ))}

            {list.length === 0 && <div className="rounded-[22px] bg-lavanda-50 p-[26px] text-[14.5px] text-muted">{COPY.empty}</div>}
          </div>
        </div>
      </Container>
    </section>
  )
}
