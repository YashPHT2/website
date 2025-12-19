import React, { useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';
import gsap from 'gsap';
import ComingSoonPanel from '../UI/ComingSoonPanel';

const Equities = () => {
    const sectionRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 6. Chart Line Animation (Draw SVG)
            gsap.to(".chart-path", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                strokeDashoffset: 0,
                duration: 2.5,
                ease: "power2.out"
            });

            gsap.to(".chart-area", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                opacity: 0.6,
                duration: 1.5,
                delay: 0.5
            });

            // 7. Chart Tooltip
            gsap.to(".chart-tooltip", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: 1.5,
                ease: "back.out(1.7)"
            });

            // 8. Number Counters
            gsap.utils.toArray(".counter").forEach(counter => {
                const target = counter.getAttribute("data-target");
                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 85%",
                    },
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power2.out"
                });
            });


            // 1. Text Reveal Animation
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

            // 2. Panel Scale/Fade In
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

            // 10. 3D Card Hover Effect using Mouse Movement (Subtle)
            const container = sectionRef.current.querySelector('.perspective-container');
            const panel = container.querySelector('.glass-panel');

            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -3;
                const rotateY = ((x - centerX) / centerX) * 3;

                gsap.to(panel, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    duration: 0.5,
                    ease: "power1.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(panel, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5
                });
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup listeners in revert not needed if scoped properly but strict mode might
            // Actually React handles event listeners better, but since this is manual
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="stocks" className="py-32 relative z-10 border-b border-white/5" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Content */}
                    <div className="lg:col-span-5 section-text relative">
                        {/* Radial Gradient Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.15)_0%,transparent_100%)] blur-xl"></div>

                        <div className="relative z-10">
                            <div
                                className="section-text-reveal flex items-center gap-2 text-blue-500 font-mono text-[10px] mb-4 uppercase tracking-widest">
                                <span className="w-2 h-px bg-blue-500"></span> Module 02
                            </div>
                            <h2 className="section-text-reveal text-4xl font-medium text-white tracking-tight mb-6">Stock</h2>

                        </div>
                    </div>

                    {/* Visual */}
                    <div className="lg:col-span-7 relative group perspective-container">
                        <div
                            className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        </div>

                        <ComingSoonPanel color="blue" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Equities;
