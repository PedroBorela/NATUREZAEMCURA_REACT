import { useState } from "react";
import { navLinks } from "../../constants";
import './navbar.css';

const NavItems = ({ isMobile = false, onClick,corTexto }) => {
    return (
        <ul className={isMobile ? "flex flex-col gap-4" : "nav-ul"}>
            {navLinks.map(({ id, href, name }) => (
                <li key={id}>
                    <a
                        href={href}
                        className={`nav-link nav-li_a ${corTexto} hover:text-verdeEsmeralda-500 ${isMobile ? 'block text-base px-3 py-2 ' : ''}`}
                        onClick={onClick}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed w-full bg-white bg-opacity-80 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center" id="logo">
                        <span className="text-2xl font-bold text-verdeEsmeralda-400 hover:cursor-pointer" >
                            Natureza
                        </span>
                        <span className="text-2xl font-bold text-orquideaLilas hover:cursor-pointer">
                            emCura
                        </span>
                    </div>

                    <nav className="hidden md:block">
                        <NavItems corTexto={'text-gray-700'} />
                    </nav>

                    <div className="md:hidden">
                        <button
                            className="mobile-menu-button p-2 rounded-md text-gray-700 hover:text-verdeEsmeralda-400 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <div className={`nav-sidebar sm:block md:hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems corTexto={'text-white'} isMobile={true} onClick={closeMenu} />
                </nav>
            </div>

        </header>
    );
};

export default Navbar;
