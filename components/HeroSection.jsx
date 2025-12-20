import React from 'react';
import Reveal from './Reveal';
import LightPillar from './LightPillar';
import Navbar from './Navbar';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full bg-[#050505] overflow-hidden">
            {/* LightPillar Background */}
            <LightPillar
                topColor="#cc2233"
                bottomColor="#ee6644"
                intensity={1.4}
                rotationSpeed={0.9}
                interactive={true}
                glowAmount={0.002}
                pillarWidth={5.3}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                mixBlendMode="screen"
                pillarRotation={25}
            />

            {/* Blur Overlay */}
            <div className="absolute inset-0 z-[1] backdrop-blur-[3px] pointer-events-none"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10 mix-blend-overlay"></div>

            {/* Vignette */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 20%, #050505 75%)'
            }}></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col">

                {/* Nav */}
                <Navbar />

                {/* Main Content - Centered */}
                <div className="flex-1 flex items-center justify-center px-6 md:px-16 overflow-visible">
                    <div className="text-center overflow-visible">

                        {/* Small Label */}


                        {/* Main Title */}
                        <Reveal delay={300} variant="fade" direction="left">
                            <h1 className="font-display leading-[0.85] mb-6 overflow-visible">
                                <span
                                    className="block text-[18vw] md:text-[11.8vw] lg:text-[9.8vw] text-white tracking-[0.15em] md:tracking-[0.13em] pt-4"
                                    style={{
                                        textShadow: '0 10px 30px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.5), 0 0 100px rgba(0,0,0,0.4)'
                                    }}
                                >
                                    CHANDRU
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal delay={400} variant="fade" direction="right">
                            <h1 className="font-display leading-[0.85] mb-6 overflow-visible">
                                <span
                                    className="block text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] mt-4 tracking-[0.1em]"
                                    style={{
                                        color: '#ff3300',
                                        textShadow: '0 0 20px rgba(255,51,0,0.8), 0 0 40px rgba(255,51,0,0.4), 0 2px 10px rgba(0,0,0,0.9)'
                                    }}
                                >
                                    FRONTEND DEVELOPER
                                </span>
                            </h1>
                        </Reveal>

                        {/* Tagline */}
                        <Reveal delay={400}>
                            <p className="font-mono text-sm md:text-base text-gray-300 max-w-lg mx-auto mb-10">
                                Crafting <span style={{ color: '#ff3300', textShadow: '0 0 15px rgba(255,51,0,0.6), 0 2px 6px rgba(0,0,0,0.8)' }}>immersive</span> digital experiences
                                with precision and performance
                            </p>
                        </Reveal>

                        {/* CTA */}
                        <Reveal delay={500}>
                            <div className="flex items-center justify-center gap-6">
                                <a
                                    href="#work"
                                    className="group px-8 py-4 bg-brutal-orange text-black font-mono text-[10px] tracking-widest uppercase flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,51,0,0.4)] transition-all"
                                >
                                    EXPLORE WORK
                                    <ArrowDown size={14} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-8 py-4 border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase hover:border-brutal-orange hover:text-brutal-orange transition-all flex items-center gap-3"
                                >
                                    RESUME
                                    <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </Reveal>

                    </div>
                </div>



            </div>

        </section>
    );
};

export default HeroSection;
