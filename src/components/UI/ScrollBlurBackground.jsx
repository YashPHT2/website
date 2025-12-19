import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollBlurBackground = () => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;

        // Animate blur and darkness based on scroll
        gsap.to(overlay, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "+=1000",
                scrub: 1, // Add a bit of smoothing
            },
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(3, 3, 3, 0.6)", // Slightly darker
            ease: "power2.out"
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
                backdropFilter: 'blur(0px)',
                backgroundColor: 'rgba(3, 3, 3, 0)'
            }}
        />
    );
};

export default ScrollBlurBackground;
