"use client"

import React from "react"
import { motion } from "framer-motion"
import { Globe } from "@/src/components/ui/cobe-globe"
import { Users, Globe2, Zap, Target } from "lucide-react"

const markers = [
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number], label: "Sydney" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai Hub" },
  { id: "paris", location: [48.8566, 2.3522] as [number, number], label: "Paris" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "mumbai", location: [19.076, 72.8777] as [number, number], label: "Mumbai" },
]

const arcs = [
  { id: "dubai-london", from: [25.2048, 55.2708] as [number, number], to: [51.5074, -0.1278] as [number, number] },
  { id: "dubai-tokyo", from: [25.2048, 55.2708] as [number, number], to: [35.6762, 139.6503] as [number, number] },
  { id: "dubai-nyc", from: [25.2048, 55.2708] as [number, number], to: [40.7128, -74.006] as [number, number] },
  { id: "dubai-sydney", from: [25.2048, 55.2708] as [number, number], to: [-33.8688, 151.2093] as [number, number] },
  { id: "dubai-paris", from: [25.2048, 55.2708] as [number, number], to: [48.8566, 2.3522] as [number, number] },
]

export default function AudienceSection() {
  return (
    <section id="audience-&-reach" className="relative py-24 md:py-48 bg-black overflow-hidden border-t border-white/5 selection:bg-white selection:text-black font-sans">
      <div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: GLOBE (THE VISUAL PROOF) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-xl mx-auto">
              <Globe
                markers={markers}
                arcs={arcs}
                markerColor={[1, 1, 1]}
                baseColor={[0.1, 0.1, 0.1]}
                arcColor={[1, 1, 1]}
                glowColor={[0.2, 0.2, 0.2]}
                dark={1}
                mapBrightness={2}
                markerSize={0.04}
                speed={0.002}
                className="opacity-90"
              />
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.1] pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.25] pointer-events-none" />
            </div>
            
            {/* Visual labels for the globe */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden xl:block">
               <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Global Traffic</p>
                  <p className="text-xl font-bold text-white">200+ Nationalities</p>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: COPY (THE DATA) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1">Universal Influence</h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight font-display mb-8 leading-[1.05]">
              Capture the <br /> Global <br /> Consumer
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed font-light max-w-lg">
              Dubai Mall is the world's commercial crossroads. We provide brands with unparalleled access to a diverse, high-net-worth audience from every corner of the planet.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-16">
              {[
                { label: "Tourist Mix", value: "40%", icon: Globe2, sub: "International" },
                { label: "Daily Reach", value: "300K", icon: Users, sub: "Avg. Footfall" },
                { label: "Purchase Intent", value: "High", icon: Target, sub: "Retail Focused" },
                { label: "Social Impact", value: "Viral", icon: Zap, sub: "Highly Shareable" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="size-4 text-white/20 group-hover:text-white transition-colors" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">{item.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-[10px] text-zinc-600 font-medium group-hover:text-zinc-400 transition-colors uppercase tracking-widest mt-1">{item.sub}</div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 text-white font-black uppercase tracking-[0.25em] text-sm hover:translate-x-2 transition-all duration-300">
              Explore Audience Data
              <span className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                 <Globe2 className="size-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}
