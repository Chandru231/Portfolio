import React from 'react';
import Reveal from './Reveal';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="py-8 px-6 md:px-16">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between relative">
                <div className="font-display text-2xl md:text-2xl tracking-tighter">
                    CHANDRU
                </div>
                <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 py-6 z-20">
                    {['WORK', 'ABOUT', 'CONTACT'].map((item, i) => (
                        <Reveal key={item} delay={600 + (i * 100)}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="relative px-6 py-2.5 rounded-full font-mono text-[10px] tracking-widest text-gray-400 hover:text-brutal-orange transition-colors duration-300 group"
                            >
                                {/* Glass Container - Separate from layout to fix rendering artifacts */}
                                <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/20 group-hover:bg-white/5 group-hover:backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(255,80,0,0.4),_inset_0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden pointer-events-none">
                                    {/* Top Glass Shine */}
                                    <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Bottom Orange Glow */}
                                    <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-brutal-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <span className="relative z-10">{item}</span>
                            </a>
                        </Reveal>
                    ))}
                </nav>
                <Reveal delay={900}>
                    {/* Social Icons - Hidden on Mobile (available in mobile menu) */}
                    <div className="hidden md:flex items-center gap-2">
                        <a href="https://github.com/Chandru231" target="_blank" rel="noopener noreferrer" className="p-2.5 text-gray-500 hover:text-brutal-orange transition-colors">
                            <Github size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/chandru-m-9149b1391" target="_blank" rel="noopener noreferrer" className="p-2.5 text-gray-500 hover:text-brutal-orange transition-colors">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Navbar;
