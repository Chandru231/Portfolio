import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin } from 'lucide-react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['WORK', 'ABOUT', 'CONTACT'];

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const openMenu = useCallback(() => setIsOpen(true), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        closeMenu();
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }, [closeMenu]);

    return (
        <>
            {/* Custom Hamburger Button - Only visible on mobile */}
            <button
                onClick={isOpen ? closeMenu : openMenu}
                className="md:hidden fixed top-6 right-6 z-[100] w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-[#050505]/80 backdrop-blur-sm border border-white/10 rounded-lg hover:border-brutal-orange/50 transition-all group"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                {/* Animated Hamburger Lines */}
                <span
                    className={`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                />
                <span
                    className={`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                        }`}
                />
                <span
                    className={`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                />
            </button>

            {/* Fullscreen Overlay Menu */}
            <div
                className={`md:hidden fixed inset-0 z-[90] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
            >
                {/* Backdrop - INSTANT appearance */}
                <div
                    className={`absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={closeMenu}
                />

                {/* Decorative glow */}
                <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brutal-orange/10 rounded-full blur-[100px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`} />

                {/* Menu Content */}
                <div className="relative h-full flex flex-col justify-center items-center gap-8">
                    {/* Nav Links with hover glow effect */}
                    {navItems.map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                            className={`font-display text-7xl text-white hover:text-brutal-orange transition-all duration-300 tracking-tighter transform hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,51,0,0.6)] ${isOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                                }`}
                            style={{
                                transitionDelay: isOpen ? `${index * 80 + 100}ms` : '0ms',
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Divider */}
                    <div
                        className={`w-20 h-px bg-white/20 my-4 transition-all duration-500 ${isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                            }`}
                        style={{ transitionDelay: isOpen ? '350ms' : '0ms' }}
                    />

                    {/* Social Links with hover glow */}
                    <div
                        className={`flex gap-6 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
                    >
                        <a
                            href="https://github.com/Chandru231"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-white/20 rounded-xl text-gray-400 hover:text-brutal-orange hover:border-brutal-orange hover:bg-brutal-orange/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,51,0,0.4)] transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/chandru-m-9149b1391"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-white/20 rounded-xl text-gray-400 hover:text-brutal-orange hover:border-brutal-orange hover:bg-brutal-orange/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,51,0,0.4)] transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                    {/* Status Indicator */}
                    <div
                        className={`flex items-center gap-2 mt-4 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase">Available for work</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
