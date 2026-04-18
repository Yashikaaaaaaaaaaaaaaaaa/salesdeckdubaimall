"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AuroraCanvas from '@/src/components/ui/ambient-aurora';

const CTASection = () => {
    return (
        <section id="partnership" className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden selection:bg-white selection:text-black">
            
            {/* BACKGROUND: REFINED AURORA */}
            <div className="absolute inset-0 z-0">
                <AuroraCanvas />
                {/* DARK OVERLAY FOR DEPTH AND CONTRAST */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* LIGHT CONVERGENCE (SUBTLE VIGNETTE BRIGHTNESS TOWARD CENTER) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* CONTENT */}
            <div className="relative z-10 container max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-display mb-8 leading-tight">
                        Bring Your Brand to the <br /> World’s Stage
                    </h2>
                    
                    <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto italic">
                        Join a global platform built for visibility, scale, and impact.
                    </p>

                    <div className="relative inline-block group">
                        {/* BUTTON GLOW EFFECT */}
                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <button className="relative px-12 py-5 bg-white text-black text-sm font-black tracking-[0.3em] uppercase rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-2xl flex items-center gap-4">
                            Start Partnership
                            <ArrowRight className="size-4" />
                        </button>
                    </div>

                    {/* MICRO-LINE */}
                    <div className="mt-16 flex items-center justify-center gap-6 md:gap-12">
                        {['Retail', 'Events', 'Sponsorships'].map((item, i) => (
                            <React.Fragment key={item}>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                                    {item}
                                </span>
                                {i < 2 && <div className="size-1 rounded-full bg-white/5" />}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* DECORATIVE DEPTH LAYER */}
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default CTASection;
