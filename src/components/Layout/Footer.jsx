import React, { useEffect, useRef } from 'react';
import { ArrowRight, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate main columns
            gsap.fromTo(".footer-col",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );

            // Animate bottom bar
            gsap.fromTo(".footer-bottom",
                { y: 20, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power2.out"
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="relative z-10 border-t border-white/5 bg-black pt-20 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 footer-col">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                Intellexia AI
                            </span>
                        </div>
                        <p className="text-white text-sm leading-relaxed mb-8 max-w-sm">
                            AI-Powered Market Insights
                        </p>
                        <div className="flex gap-4">
                            <a href="https://x.com/_IntellexiaAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/intellexiatech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.instagram.com/_intellexiaai_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.youtube.com/@IntellexiaAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 footer-col">
                        <h4 className="font-mono text-sm text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Power', 'Stock', 'Commodities', 'API Documentation', 'System Status'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 footer-col">
                        <h4 className="font-mono text-sm text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Intellexia', 'Research Labs', 'Careers', 'Brand Assets', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 footer-col">
                        <h4 className="font-mono text-sm text-white mb-6">Stay Synchronized</h4>
                        <p className="text-xs text-neutral-500 mb-6">
                            Receive high-priority intelligence briefs and API version updates directly to your terminal.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter corporate email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white-[0.07] transition-all"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-white/5 hover:bg-blue-500 rounded-md flex items-center justify-center text-white transition-all group-focus-within:bg-blue-500">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-neutral-600">
                        © 2025 Intellexia AI Inc. All systems nominal.
                    </div>
                    <div className="flex gap-8 text-xs text-neutral-600">
                        <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
