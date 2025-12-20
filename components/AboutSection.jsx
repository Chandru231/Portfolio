import React from 'react';
import Reveal from './Reveal';

const AboutSection = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-16 border-t border-white/10 bg-[#080808] relative">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">

                    <Reveal delay={200}>
                        <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-8">
                            WHO I <span className="text-brutal-orange">AM</span>
                        </h2>
                    </Reveal>
                </div>

                {/* Bio Content */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <Reveal delay={300}>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                            I'm <span className="text-white font-semibold">Chandru</span>, a passionate frontend developer
                            who crafts <span className="text-brutal-orange">pixel-perfect</span> interfaces
                            and immersive web experiences. I believe in clean code, bold design,
                            and pushing the boundaries of what's possible on the web.
                        </p>
                    </Reveal>
                    <div className="space-y-6">
                        <Reveal delay={400}>
                            <div className="flex items-center gap-6 p-6 border border-white/10 hover:border-brutal-orange/50 transition-colors">
                                <div className="text-4xl font-display text-brutal-orange">1</div>
                                <div>
                                    <div className="text-white font-semibold">Years Experience as a Freelancer</div>
                                    <div className="text-gray-500 text-sm font-mono">Building for the web</div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={500}>
                            <div className="flex items-center gap-6 p-6 border border-white/10 hover:border-brutal-orange/50 transition-colors">
                                <div className="text-4xl font-display text-brutal-orange">20+</div>
                                <div>
                                    <div className="text-white font-semibold">Projects Completed</div>
                                    <div className="text-gray-500 text-sm font-mono">From concept to launch</div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Skills */}
                <div className="text-center">
                    <Reveal delay={600}>
                        <div className="mb-12">
                            <span className="font-mono text-xs tracking-widest text-gray-500">TECH STACK</span>
                        </div>
                    </Reveal>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js'].map((skill, i) => (
                            <Reveal key={skill} delay={700 + (i * 50)}>
                                <span
                                    className="px-6 py-3 border border-white/20 font-mono text-sm hover:border-brutal-orange hover:text-brutal-orange transition-colors inline-block"
                                >
                                    {skill}
                                </span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
