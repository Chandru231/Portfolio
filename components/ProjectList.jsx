import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, GitFork, Disc, CornerDownRight } from 'lucide-react';
import Reveal from './Reveal';

const ProjectList = () => {
    return (
        <div className="bg-[#050505] text-white py-32 relative overflow-hidden">




            <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-brutal-orange"></div>
                            <span className="font-mono text-[10px] tracking-[0.3em] text-brutal-orange uppercase">
                                My Work
                            </span>
                            <div className="w-12 h-px bg-brutal-orange"></div>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
                            SELECTED <span className="text-brutal-orange">WORKS</span>
                        </h2>
                    </Reveal>
                </div>

                {/* Projects Stack */}
                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.id} className="w-full">
                            <div className="group relative">

                                <div className="grid md:grid-cols-12 gap-8 items-start">

                                    {/* 1. Technical Sidebar (Sticky) */}
                                    <div className="hidden md:block md:col-span-2 font-mono text-[10px] text-gray-500 sticky top-32 text-right pr-8 border-r border-white/10 h-full min-h-[200px]">
                                        <div className="mb-4 text-white font-bold text-xl">0{index + 1}</div>

                                    </div>

                                    {/* 2. Main Content */}
                                    <div className="md:col-span-10 grid md:grid-cols-2 gap-12 items-center">

                                        {/* Visual Card */}
                                        <div className="relative order-1">
                                            <div className="relative border border-white/20 bg-[#0a0a0a] p-1 group-hover:border-brutal-orange/50 transition-colors duration-500">
                                                {/* Tech corners */}
                                                <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white group-hover:border-brutal-orange transition-colors"></div>
                                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white group-hover:border-brutal-orange transition-colors"></div>

                                                {/* Image Wrapper */}
                                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                                                    {/* Noise Overlay */}
                                                    <div className="absolute inset-0 z-20 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                                                    {/* Image */}
                                                    <img
                                                        src={project.imageUrl}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                                                    />

                                                    {/* Gradient Overlay on Hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-brutal-orange/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                                    {/* Corner Glow */}
                                                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brutal-orange/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                                                    {/* Light Sweep Animation */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text Info */}
                                        <div className="order-2 flex flex-col justify-center">
                                            <Reveal delay={100}>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="font-mono text-xs text-brutal-orange px-2 py-1 border border-brutal-orange/30 rounded-sm">
                                                        WEB_APP
                                                    </span>
                                                    <div className="h-px flex-1 bg-white/10"></div>
                                                </div>

                                                <h3 className="font-display text-5xl md:text-7xl mb-6 text-white group-hover:text-brutal-orange transition-colors duration-300">
                                                    {project.title}
                                                </h3>

                                                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-8 max-w-md">
                                                    {project.description}
                                                </p>

                                                {/* Stack Grid */}
                                                <div className="grid grid-cols-2 gap-y-2 gap-x-8 mb-8 font-mono text-xs text-gray-500 border-l-2 border-white/10 pl-4">
                                                    {project.techStack.map(stack => (
                                                        <div key={stack} className="flex items-center gap-2">
                                                            <CornerDownRight size={10} className="text-brutal-orange" />
                                                            {stack}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex gap-6">
                                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-brutal-orange transition-colors uppercase tracking-wider group/link">
                                                        Live Demo <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                    </a>
                                                </div>
                                            </Reveal>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default ProjectList;
