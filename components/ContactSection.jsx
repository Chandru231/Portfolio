import React from 'react';
import Reveal from './Reveal';
import Footer from './Footer';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-16 border-t border-white/10 bg-[#050505] relative">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Section Header */}
                <Reveal>
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-brutal-orange"></div>
                        <span className="font-mono text-[10px] tracking-[0.3em] text-brutal-orange uppercase">
                            Get In Touch
                        </span>
                        <div className="w-12 h-px bg-brutal-orange"></div>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
                        LET'S <span className="text-brutal-orange">WORK</span><br />
                        TOGETHER
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Have a project in mind? Let's create something amazing together.
                    </p>
                </Reveal>

                <Reveal delay={300}>
                    <a
                        href="mailto:chandrum.dev@gmail.com"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-brutal-orange text-black font-mono text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,51,0,0.4)] transition-all mb-16"
                    >
                        Say Hello
                        <ArrowDown size={16} className="rotate-[-90deg]" />
                    </a>
                </Reveal>

                {/* Social Links */}
                <Reveal delay={400}>
                    <div className="flex justify-center gap-6 mb-20">
                        <a href="https://github.com/Chandru231" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/20 hover:border-brutal-orange hover:text-brutal-orange transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/chandru-m-9149b1391" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/20 hover:border-brutal-orange hover:text-brutal-orange transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </Reveal>

                {/* Footer */}
                <Footer />
            </div>
        </section>
    );
};

export default ContactSection;
