import React, { useEffect, useRef } from 'react';
import { Aperture } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ show }) => {
    const navRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (show) {
            // Initial Fade In
            gsap.to(".nav-item", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Scroll Animation (Water Pill Effect)
            const nav = navRef.current;
            const container = containerRef.current;

            gsap.to(nav, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "200px top", // Complete transformation after 200px scroll
                    scrub: 1,
                },
                top: "1.25rem", // 20px (from top-8/32px)
                borderRadius: "9999px", // Ensure it stays full rounded
                backgroundColor: "rgba(3, 3, 3, 0.6)", // darken slightly
                borderColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                ease: "power2.out"
            });

            // Animate internal spacing/height to shrink the pill
            gsap.to(container, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "200px top",
                    scrub: 1,
                },
                height: "3rem", // h-12 (48px) from h-16
                paddingLeft: "1.5rem", // px-6 from px-10
                paddingRight: "1.5rem",
                gap: "2rem", // gap-8 from gap-16
                ease: "power2.out"
            });
        }
    }, [show]);

    return (
        <nav
            ref={navRef}
            className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto rounded-full border border-white/5 bg-obsidian/30 backdrop-blur-sm transition-all shadow-none">
            <div
                ref={containerRef}
                className="px-10 h-20 flex items-center justify-between md:gap-20 transition-all">
                <div className="flex items-center group cursor-pointer opacity-0 nav-item translate-y-[-10px]">
                    <span className="font-semibold tracking-wide text-xs text-white font-sans">Intellexia AI</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-wide items-center uppercase text-neutral-500">
                    <a href="#energy" className="hover:text-white transition-colors nav-item opacity-0 translate-y-[-10px]">Power</a>
                    <a href="#stocks" className="hover:text-white transition-colors nav-item opacity-0 translate-y-[-10px]">Stock</a>
                    <a href="#commodities" className="hover:text-white transition-colors nav-item opacity-0 translate-y-[-10px]">Commodities</a>
                </div>

                <div className="flex items-center gap-4 opacity-0 nav-item translate-y-[-10px]">
                    <button className="text-[11px] font-medium text-neutral-400 hover:text-white transition-colors">LOGIN</button>
                    <button className="bg-white/10 border border-white/10 text-white text-[11px] font-medium px-3 py-1.5 rounded hover:bg-white/20 transition-all">
                        ACCESS
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
