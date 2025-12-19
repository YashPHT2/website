import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import ComingSoonPanel from '../UI/ComingSoonPanel';

const Commodities = () => {
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

            gsap.utils.toArray(".bar-anim").forEach(bar => {
                const width = bar.style.getPropertyValue("--width");
                gsap.fromTo(bar,
                    { width: "0%" },
                    {
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 85%"
                        },
                        width: width,
                        duration: 1.5,
                        ease: "power3.out"
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="commodities" className="py-32 relative z-10 border-b border-white/5" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Content */}
                    <div className="lg:col-span-5 section-text relative">
                        {/* Radial Gradient Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(16,185,129,0.15)_0%,transparent_100%)] blur-xl"></div>

                        <div className="relative z-10">
                            <div
                                className="section-text-reveal flex items-center gap-2 text-emerald-500 font-mono text-[10px] mb-4 uppercase tracking-widest">
                                <span className="w-2 h-px bg-emerald-500"></span> Module 03
                            </div>
                            <h2 className="section-text-reveal text-4xl font-medium text-white tracking-tight mb-6">Commodities</h2>

                        </div>
                    </div>

                    {/* Visual */}
                    <div className="lg:col-span-7 relative group">
                        <div
                            className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        </div>

                        <ComingSoonPanel color="emerald" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commodities;
