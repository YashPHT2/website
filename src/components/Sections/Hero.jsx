import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, PlayCircle } from 'lucide-react';
import gsap from 'gsap';

const Hero = ({ show }) => {
    const containerRef = useRef(null);
    const tickerRef = useRef(null);

    const tickerData = [
        { s: "AAPL", p: "+1.2%", v: "182.52" },
        { s: "BTC", p: "+0.8%", v: "43,250" },
        { s: "ETH", p: "-0.2%", v: "2,280" },
        { s: "XAU", p: "+0.4%", v: "2,024" },
        { s: "OIL", p: "+2.1%", v: "78.45" },
        { s: "NGAS", p: "+5.4%", v: "2.89" },
        { s: "EUR/USD", p: "-0.1%", v: "1.0892" },
        { s: "NVDA", p: "+3.2%", v: "495.22" },
        { s: "TSLA", p: "-1.2%", v: "252.64" },
        { s: "MSFT", p: "+0.9%", v: "374.58" },
        { s: "SPY", p: "+0.5%", v: "475.32" }
    ];

    useEffect(() => {
        if (show) {
            const ctx = gsap.context(() => {
                // 2. Hero Text Reveal (Split Line Effect)
                gsap.utils.toArray(".hero-line span").forEach((line, i) => {
                    gsap.to(line, {
                        y: 0,
                        duration: 1.4,
                        ease: "expo.out",
                        delay: 0.3 + (i * 0.12)
                    });
                });

                // 3. Hero Fade Elements
                gsap.to(".hero-reveal", {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    delay: 0.9,
                    ease: "power2.out"
                });
            }, containerRef);
            return () => ctx.revert();
        }
    }, [show]);

    return (
        <main className="relative z-10 pt-40 pb-20 overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center relative">

                    {/* Main Title */}
                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
                        <span className="hero-line block overflow-hidden"><span
                            className="block transform translate-y-full text-white font-bold pb-4">Tradelexia</span></span>
                    </h1>

                    <p
                        className="hero-reveal opacity-0 translate-y-[30px] text-sm md:text-base text-white font-medium max-w-lg mx-auto mb-12 leading-relaxed">
                        AI-Powered Market Insights
                    </p>

                    {/* UI Interactions */}
                    <div className="hero-reveal opacity-0 translate-y-[30px] flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                        <button
                            className="btn-primary group relative px-8 py-3.5 text-black text-xs font-bold tracking-widest rounded-lg overflow-hidden shadow-lg shadow-white/10 hover:shadow-white/25 transition-shadow interactive">
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles size={14} />
                                INITIALIZE DEMO
                            </span>
                        </button>
                        <button
                            className="group px-8 py-3.5 text-neutral-400 text-xs font-medium hover:text-white transition-all flex items-center gap-2 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 backdrop-blur-sm interactive">
                            <PlayCircle size={16} className="group-hover:scale-110 transition-transform glow-pulse text-blue-400" />
                            WATCH SEQUENCE
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Visualization (Abstract Data Stream) */}
            <div
                className="mt-24 w-full border-y border-white/5 bg-transparent backdrop-blur-[2px] overflow-hidden h-32 flex items-center relative group shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian z-20 pointer-events-none">
                </div>
                <div className="flex gap-12 animate-[marquee_60s_linear_infinite] opacity-100 items-center" id="ticker-belt">
                    {/* Repeat content 5 times for smooth loop */}
                    {[...Array(5)].map((_, i) => (
                        <React.Fragment key={i}>
                            {tickerData.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-3 py-1 transition-all duration-300 group cursor-pointer min-w-max">
                                    <span className="text-xs font-mono text-white tracking-wider font-semibold opacity-100">{item.s}</span>
                                    <span className="text-[10px] font-mono text-slate-400 opacity-100">${item.v}</span>
                                    <span className={`text-xs font-mono font-medium ${item.p.includes('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{item.p}</span>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </main>
    );
};

export default Hero;
