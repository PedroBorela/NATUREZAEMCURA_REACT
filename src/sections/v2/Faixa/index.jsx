import Marquee from "@/components/v2/Marquee"
import { MARQUEE_WORDS } from "@/constants/v2/hero"
import { BRAND } from "@/constants/v2/contact"

// Faixa verde inclinada logo abaixo do hero
export default function Faixa() {
  return (
    <div className="relative z-[3] -mt-[30px] -rotate-[1.6deg] overflow-hidden bg-verde-900 py-2.5 shadow-[0_20px_40px_-20px_rgba(27,94,32,.6)]">
      <Marquee
        items={MARQUEE_WORDS}
        direction={-1}
        speed={38}
        renderItem={(word, i, clone) => (
          <div
            key={`${word}-${i}`}
            aria-hidden={clone || undefined}
            className="flex items-center gap-7 whitespace-nowrap px-3.5 font-serif text-[clamp(22px,2.6vw,34px)] text-[#F3F9EC]"
          >
            <span>{word}</span>
            <img src={BRAND.logoSmall} alt="" width="30" height="30" loading="lazy" decoding="async" className="size-[30px] object-contain saturate-[1.2]" />
          </div>
        )}
      />
    </div>
  )
}
