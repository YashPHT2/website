import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ComingSoonPanel = ({ color = "blue" }) => {
    const containerRef = useRef(null);

    // Color definitions for text outline/glow
    const theme = {
        blue: {
            text: "text-blue-500",
            stroke: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50",
        },
        emerald: {
            text: "text-emerald-500",
            stroke: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50",
        },
        amber: {
            text: "text-amber-500",
            stroke: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 opacity-50",
        }
    }[color] || theme.blue;

    useEffect(() => {
        const ctx = gsap.context(() => {

            // "COMING SOON" Blur Reveal Effect
            // Words start blurry and spaced out, then focus and come together
            gsap.fromTo(".reveal-text",
                {
                    y: 20,
                    opacity: 0,
                    filter: "blur(15px)",
                    letterSpacing: "0.5em"
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%", // Start revealing sooner
                        end: "center 60%", // finish reveal sooner
                        scrub: 1, // Faster scrub response
                    },
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    letterSpacing: "0em", // Tight spacing for impact
                    ease: "power2.out"
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-[420px] flex flex-col items-center justify-center relative overflow-hidden select-none">

            {/* Minimal Blur-Reveal Text - MUCH LARGER & BRIGHTER */}
            <h2 className="reveal-text text-6xl md:text-9xl font-black font-sans text-white tracking-tighter text-center leading-none opacity-0">
                COMING<br />SOON
            </h2>

            <div className={`reveal-text mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-${color}-500 to-transparent opacity-0`}></div>

            <p className={`reveal-text mt-4 text-sm font-mono uppercase tracking-[0.5em] ${theme.text} opacity-0`}>
                Development in Progress
            </p>
        </div>
    );
};

export default ComingSoonPanel;
