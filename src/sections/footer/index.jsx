import { FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { navLinks } from "../../constants";
import { WHATSAPP_URL } from "../../constants/copy";

const servicosFooter = [
    "Yoga e Meditação",
    "Atendimento Psicológico — ACT",
    "Atendimento Domiciliar",
    "Encontros Terapêuticos",
    "Cursos e Produtos Digitais",
];

const Footer = () => {
    return (
        <footer className="bg-surface-inverse text-white/80">
            <div className="section-shell py-14 sm:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Marca */}
                    <div className="lg:pr-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/imgs/logoICone.png"
                                alt="Logo Natureza em Cura"
                                className="h-11 w-11 rounded-full object-contain"
                                loading="lazy"
                            />
                            <h3 className="font-display text-xl font-semibold text-white">
                                Natureza em Cura
                            </h3>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                            Yoga, Meditação, Psicologia e Terapias Integrativas para transformar sua saúde
                            mental, emocional e qualidade de vida.
                        </p>
                        <div className="mt-5 flex gap-3">
                            {[
                                { href: "https://www.instagram.com/naturezaemcura/", Icon: FaInstagram, label: "Instagram" },
                                { href: "https://www.facebook.com/naturezaemcura", Icon: FaFacebookF, label: "Facebook" },
                                { href: "https://www.youtube.com/@Natureza_em_Cura", Icon: FaYoutube, label: "YouTube" },
                                { href: WHATSAPP_URL, Icon: FaWhatsapp, label: "WhatsApp" },
                            ].map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:text-primary-onContainer"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links rápidos */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-white">Links Rápidos</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="transition-colors duration-300 hover:text-primary-fixed"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-white">Serviços</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {servicosFooter.map((s) => (
                                <li key={s} className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-white">Contato</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary-container" />
                                <span>Rua da Conceição, 170 — Manhuaçu, MG</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <FaPhoneAlt className="mt-0.5 shrink-0 text-primary-container" />
                                <a href="tel:+5533984385658" className="transition-colors hover:text-primary-fixed">
                                    (33) 98438-5658
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <FaEnvelope className="mt-0.5 shrink-0 text-primary-container" />
                                <a
                                    href="mailto:contato@curaintegral.com.br"
                                    className="break-all transition-colors hover:text-primary-fixed"
                                >
                                    contato@curaintegral.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/60">
                    <p>&copy; {new Date().getFullYear()} Natureza em Cura. Todos os direitos reservados.</p>
                    <p className="mt-2">Desenvolvido por Pedro Borela</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
