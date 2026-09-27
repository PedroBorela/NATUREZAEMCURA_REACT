import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks } from "../../constants";
import { BackgroundHero } from "./background-hero";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <BackgroundHero />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Navegação */}
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-4">
          <div className="flex items-center gap-3">
            <img
              src="/imgs/logoICone.png"
              alt="Logo Natureza em Cura"
              className="h-12 w-12 rounded-full object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-800">Natureza em Cura</span>
              <span className="text-xs text-gray-500 italic">Desde 2018</span>
            </div>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              {navLinks.slice(1, 5).map((link) => (
                <NavItem key={link.id} label={link.name} href={link.href} />
              ))}
            </div>
            <a
              href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
              className="h-11 rounded-full bg-gray-900 px-6 text-sm font-semibold text-white hover:bg-gray-700 transition-colors flex items-center"
            >
              Quero me inscrever!
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </nav>

        {/* Menu mobile com animação */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-6 bg-white/97 backdrop-blur-sm md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/imgs/logoICone.png"
                    alt="Logo"
                    className="h-10 w-10 rounded-full object-contain"
                  />
                  <span className="text-lg font-bold text-gray-800">Natureza em Cura</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-800" />
                </button>
              </div>
              <div className="mt-10 flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <MobileNavItem
                    key={link.id}
                    label={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                <div className="pt-4">
                  <a
                    href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full h-12 rounded-full bg-gray-900 px-8 text-base font-semibold text-white hover:bg-gray-700 flex items-center justify-center transition-colors"
                  >
                    Quero me inscrever!
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo central */}
        <div className="mx-auto mt-8 flex justify-center">
          <img
            src="/imgs/logoNova.svg"
            alt="Logo Natureza em Cura"
            className="h-[400px] w-auto object-contain"
          />
        </div>

        {/* Hero principal */}
        <div className="container mx-auto mt-10 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl" style={{ color: '#AC62EA' }}>
            Yoga, Psicologia e Terapias Alternativas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-800 leading-relaxed">
            Aulas de Yoga, Cursos de Reiki, Cerimônias Espirituais Indígenas, Cacau Medicinal e Encontros Exclusivos — ciência moderna e sabedoria ancestral em união.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
              className="h-12 rounded-full bg-gray-900 px-8 text-base font-semibold text-white hover:bg-gray-700 transition-colors flex items-center"
            >
              Quero me inscrever!
            </a>
            <a
              href="#servicos"
              className="h-12 rounded-full border border-gray-300 px-8 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors flex items-center"
            >
              Saiba mais
            </a>
          </div>

          {/* Imagem hero */}
          <div className="relative mx-auto my-16 w-full max-w-2xl">
            <div className="absolute inset-0 rounded-2xl bg-purple-300 blur-[6rem] opacity-30" />
            <img
              src="/imgs/allanb.jpg"
              alt="Allan Borela - Natureza em Cura"
              className="relative w-full h-auto max-h-[520px] object-cover object-top rounded-2xl shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({ label, href }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
    >
      {label}
    </a>
  );
}

function MobileNavItem({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between border-b border-gray-200 pb-3 text-base text-gray-800 hover:text-gray-600 transition-colors"
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </a>
  );
}

export { Hero2 };
