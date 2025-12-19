import React, { useEffect, useRef } from 'react';
import { Target, Activity } from 'lucide-react';
import gsap from 'gsap';
import powerGraph from '../../assets/power-graph.jpg';

const Energy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Text Reveal
            gsap.fromTo(".section-text-reveal",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );

            // 2. Panel Entrance
            gsap.fromTo(".glass-panel",
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                    },
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }
            );

            // 3. Grid Spinner Animation
            gsap.fromTo(".grid-spinner",
                { scale: 0, opacity: 0, rotation: -180 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)"
                }
            );

            // 4. Bars filling up
            gsap.utils.toArray(".energy-bar").forEach(bar => {
                const width = bar.getAttribute("data-width");
                gsap.fromTo(bar,
                    { width: "0%" },
                    {
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 85%",
                        },
                        width: width,
                        duration: 1.5,
                        ease: "power2.out"
                    }
                );
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);
    return (
        <section id="energy" className="py-32 relative z-10 border-b border-white/5" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Visual (Left) */}
                    <div className="lg:col-span-7 order-2 lg:order-1 relative group">
                        <div
                            className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        </div>

                        <div
                            className="glass-panel rounded-xl p-1 transform transition-all duration-700 hover:-rotate-y-2 hover:scale-[1.01] will-change-transform">
                            <div className="bg-obsidian/90 rounded-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={powerGraph}
                                    alt="Power Grid Analysis - Actual vs Predicted"
                                    className="w-full h-auto block"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 order-1 lg:order-2 section-text relative">
                        {/* Radial Gradient Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(245,158,11,0.15)_0%,transparent_100%)] blur-xl"></div>

                        <div className="relative z-10">
                            <div
                                className="section-text-reveal flex items-center gap-2 text-amber-500 font-mono text-[10px] mb-4 uppercase tracking-widest">
                                <span className="w-2 h-px bg-amber-500"></span> Module 01
                            </div>
                            <h2 className="section-text-reveal text-4xl font-medium text-white tracking-tight mb-6">Power</h2>
                            <p className="section-text-reveal text-sm text-neutral-400 leading-relaxed mb-8">
                                Time‑series comparison of predicted and actual Market Clearing Prices (MCP), illustrating how closely forecasts track real prices while revealing underlying volatility and sharp price swings.
                            </p>

                            <div className="space-y-3 section-text-reveal">
                                <div
                                    className="p-3 border border-white/5 bg-white/[0.02] rounded flex items-center gap-3 group hover:border-amber-500/30 transition-colors">
                                    <Target size={18} className="text-neutral-500 group-hover:text-amber-500 transition-colors" />
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-white mb-1">
                                            <span>24h Predicted MCP</span>
                                            <span className="font-mono text-amber-500">3.78k</span>
                                        </div>
                                        <div className="w-full bg-neutral-800 h-0.5 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500 energy-bar" style={{ width: 0 }} data-width="75%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="p-3 border border-white/5 bg-white/[0.02] rounded flex items-center gap-3 group hover:border-amber-500/30 transition-colors">
                                    <Activity size={18} className="text-neutral-500 group-hover:text-amber-500 transition-colors" />
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-white mb-1">
                                            <span>24h Actual MCP</span>
                                            <span className="font-mono text-amber-500">3.88k</span>
                                        </div>
                                        <div className="w-full bg-neutral-800 h-0.5 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500 energy-bar" style={{ width: 0 }} data-width="82%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Energy;
