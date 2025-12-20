import React from 'react';
import Reveal from './Reveal';
import { ArrowDown, ArrowUp, Code2, Terminal } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t border-white/10 text-left">
            <Reveal delay={500}>
                <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <div className="font-display text-3xl mb-4 tracking-tight">
                            CHANDRU
                        </div>
                        <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-[200px]">
                            Frontend Developer based in the digital void. Crafting interfaces that bleed and breathe.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <div className="font-mono text-[10px] text-brutal-orange mb-6 uppercase tracking-widest">
                            System_Nav
                        </div>
                        <ul className="space-y-3 font-mono text-xs text-gray-400">
                            {['WORK', 'ABOUT', 'CONTACT'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                                        // {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <div className="font-mono text-[10px] text-brutal-orange mb-6 uppercase tracking-widest">
                            Resources
                        </div>
                        <ul className="space-y-3 font-mono text-xs text-gray-400">
                            <li>
                                <a href="/resume.pdf" className="hover:text-white transition-colors flex items-center gap-2">
                                    <ArrowDown size={12} /> RESUME.PDF
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                    <Code2 size={12} /> SOURCE_CODE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                    <Terminal size={12} /> CHANGELOG
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Meta */}
                    <div className="flex flex-col justify-between">

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-3 font-mono text-xs text-white hover:text-brutal-orange transition-colors"
                        >
                            BACK_TO_TOP
                            <div className="p-2 border border-white/20 group-hover:border-brutal-orange bg-white/5 transition-colors">
                                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-0 font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                    <div>
                        © 2025 CHANDRU.
                    </div>

                </div>
            </Reveal>
        </footer>
    );
};

export default Footer;
