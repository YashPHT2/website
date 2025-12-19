import React from 'react';
import { Cpu, Shield, Zap, Globe } from 'lucide-react';

const BentoFeatures = () => {
    return (
        <section className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-2xl font-medium text-white mb-12 text-center tracking-tight">System Architecture</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">

                    {/* Card 1 */}
                    <div
                        className="md:col-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4">
                                <Cpu size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-2">Neural Core</h4>
                                <p className="text-xs text-neutral-400 max-w-sm">Self-improving trading algorithms that rewrite
                                    their own weights based on market success rates.</p>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-900/10 to-transparent">
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="absolute inset-0 bg-grid opacity-50"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4">
                                <Shield size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-2">Zero-Knowledge</h4>
                                <p className="text-xs text-neutral-400">Military-grade encryption for all proprietary datasets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4">
                                <Zap size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-2">14ms Latency</h4>
                                <p className="text-xs text-neutral-400">Direct fiber connections to NY4 and LD4 data centers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="md:col-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4">
                                <Globe size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-2">Global API</h4>
                                <p className="text-xs text-neutral-400 max-w-sm">Unified REST and WebSocket endpoints for all
                                    three intelligence modules.</p>
                            </div>
                        </div>
                        {/* Decorative Map Dots */}
                        <div
                            className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [backgroundSize:10px_10px]">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
