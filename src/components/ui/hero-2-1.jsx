import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navLinks } from "../../constants";
import { hero, WHATSAPP_URL } from "../../constants/copy";

const EASE = [0.22, 1, 0.36, 1];

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <div id="home" className="relative overflow-hidden bg-surface">
      {/* Fundo decorativo leve (substitui o vídeo — melhor LCP) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-container/30 blur-3xl animate-float-slower" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-secondary-fixed/60 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-tertiary-fixed/50 blur-3xl" />
      </div>

      {/* Navbar fixa com efeito de vidro ao rolar */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-surface/85 shadow-ambient backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="section-shell flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/imgs/logoICone.png"
              alt="Logo Natureza em Cura"
              width="48"
              height="48"
              className="h-11 w-11 rounded-full object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-ink">Natureza em Cura</span>
              <span className="text-xs italic text-ink-muted">Desde 2018</span>
            </span>
          </a>

          {/* Links desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-1">
              {navLinks.slice(1, 6).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-primary-container/20 hover:text-primary-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-ambient transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-ambient-lg"
            >
              Agendar atendimento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            className="rounded-full p-2 transition-colors hover:bg-primary-container/20 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-ink" />
            ) : (
              <Menu className="h-6 w-6 text-ink" />
            )}
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-surface p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/imgs/logoICone.png"
                  alt="Logo"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <span className="font-display text-lg font-semibold text-ink">Natureza em Cura</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
                className="rounded-full p-2 hover:bg-primary-container/20"
              >
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <div className="mt-10 flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={reduce ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35, ease: EASE }}
                  className="flex items-center justify-between border-b border-outline-variant/50 py-4 text-base font-medium text-ink transition-colors hover:text-primary"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-4 w-4 text-ink-muted" />
                </motion.a>
              ))}
              <div className="pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-white shadow-ambient transition-colors hover:bg-primary-dark"
                >
                  Agendar atendimento
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero principal */}
      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center gap-12 pb-16 pt-28 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-32">
        {/* Texto */}
        <div className="flex max-w-2xl flex-col items-start text-left">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full bg-primary-container/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark ring-1 ring-primary-container/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hero.brand}
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Yoga, Meditação, Psicologia e{" "}
            <span className="relative isolate inline-block text-primary">
              Terapias Integrativas
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute -bottom-[0.08em] left-0 -z-10 h-[0.32em] w-full fill-primary-container/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>{" "}
            para Transformar Sua Saúde Mental
          </motion.h1>

          <motion.p {...fadeUp(0.22)} className="mt-6 text-lg font-medium leading-relaxed text-ink-soft sm:text-xl">
            {hero.subtitle}
          </motion.p>

          <motion.p {...fadeUp(0.32)} className="mt-4 text-base leading-relaxed text-ink-muted">
            {hero.intro}
          </motion.p>

          <motion.div {...fadeUp(0.42)} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-ambient-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-full border border-outline-variant bg-surface-lowest/70 px-8 py-3.5 text-base font-medium text-ink-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-container hover:text-primary-dark"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.52)} className="mt-8 flex flex-wrap gap-2">
            {["Yoga", "Meditação", "Psicologia ACT", "Terapias Integrativas", "Atendimento Humanizado"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-lowest/80 px-3.5 py-1.5 text-xs font-medium text-ink-soft ring-1 ring-outline-variant/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary-container/40 via-secondary-fixed/50 to-tertiary-fixed/40 blur-2xl"
          />
          <img
            src="/imgs/allanb.jpg"
            alt="Allan Borela, psicólogo e professor de yoga do Natureza em Cura"
            width="640"
            height="720"
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-[2.5rem_2.5rem_2.5rem_6rem] object-cover object-top shadow-ambient-lg"
          />
          {/* Cartão flutuante */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-surface-lowest/95 px-5 py-4 shadow-ambient-lg backdrop-blur sm:-left-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-container/40 text-xl">
              🌿
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-ink">+2.500 pessoas atendidas</span>
              <span className="text-xs text-ink-muted">Ciência moderna e saberes ancestrais</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export { Hero2 };
