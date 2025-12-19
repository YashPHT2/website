import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundAmbience = () => {
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);
    const glow3Ref = useRef(null);
    const glow4Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Retain glow animations for extra ambience
            // Glow 1
            gsap.to(glow1Ref.current, {
                opacity: 0.5,
                scale: 1,
                duration: 5,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1
            });

            gsap.to(glow1Ref.current, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2
                },
                y: 300,
                x: 100
            });

            // Glow 2
            gsap.to(glow2Ref.current, {
                opacity: 0.4,
                scale: 1,
                duration: 6,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1
            });

            // Glow 3
            gsap.to(glow3Ref.current, {
                opacity: 0.3,
                scale: 1.2,
                duration: 8,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: 2
            });

            // Glow 4
            gsap.to(glow4Ref.current, {
                opacity: 0.25,
                scale: 1.1,
                duration: 7,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: 3
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Background Video */}
            <div className="absolute inset-0 z-[-1]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                {/* Glass overlay + Blue tint */}
                <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[4px]"></div>
            </div>

            <div className="absolute inset-0 bg-grid opacity-30"></div>

            {/* Original Glows kept for extra depth, potentially adjust opacity if too busy */}
            <div ref={glow1Ref} className="absolute -top-[20%] left-[20%] w-[800px] h-[800px] bg-blue-600/15 blur-[150px] rounded-full mix-blend-screen opacity-0 scale-50"></div>
            <div ref={glow2Ref} className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-600/15 blur-[130px] rounded-full mix-blend-screen opacity-0 scale-50"></div>
            <div ref={glow3Ref} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-400/10 blur-[100px] rounded-full mix-blend-screen opacity-0"></div>
            <div ref={glow4Ref} className="absolute top-[70%] left-[10%] w-[300px] h-[300px] bg-cyan-600/10 blur-[80px] rounded-full mix-blend-screen opacity-0"></div>
        </div>
    );
};

export default BackgroundAmbience;
