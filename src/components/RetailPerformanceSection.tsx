import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const METRICS = [
  { label: 'Annual Footfall', dm: '105M+', avg: '20–40M' },
  { label: 'Average Spend / Visitor', dm: 'High', avg: 'Medium' },
  { label: 'Luxury Brand Density', dm: 'Very High', avg: 'Moderate' },
  { label: 'Conversion Rate', dm: 'Above Avg', avg: 'Standard' },
  { label: 'Tenant Retention', dm: '98%', avg: '75–85%' },
  { label: 'Global Tourist Mix', dm: 'Exceptional', avg: 'Limited' },
  { label: 'Event-driven Traffic', dm: 'Year-round', avg: 'Seasonal' },
];

const RetailPerformanceSection = () => {
  return (
    <section id="retail-opportunities" className="relative py-24 md:py-48 bg-black overflow-hidden border-t border-white/5 selection:bg-white selection:text-black font-sans">
      <div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: MAIN COPY (THE SELL) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight font-display mb-8 leading-[1.05]">
              Where Global <br /> Retail Brands <br /> Outperform
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed font-light max-w-lg">
              Dubai Mall converts global footfall into measurable retail performance, making it one of the most commercially effective destinations for premium brands.
            </p>
            
            <ul className="space-y-6 mb-16">
              {[
                "105M+ high-intent annual visitors",
                "98% retention across premium tenants",
                "Top global location for luxury flagships",
                "Above-benchmark retail conversion"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 size-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Check className="size-3 text-white transition-opacity group-hover:opacity-100 opacity-40" />
                  </div>
                  <span className="text-zinc-300 text-base md:text-lg font-light leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <button className="group flex items-center gap-4 text-white font-black uppercase tracking-[0.25em] text-sm hover:translate-x-2 transition-all duration-300">
              Start Leasing Discussion
              <span className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="size-4" />
              </span>
            </button>
          </motion.div>

          {/* RIGHT SIDE: THE TABLE (THE WEAPON) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="mb-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1">Asset Intelligence</h3>
              <h4 className="text-2xl font-bold text-white tracking-tight">Performance vs Premium Retail Benchmarks</h4>
            </div>

            <div className="relative group/table">
              {/* Highlight Overlay for Dubai Mall Column */}
              <div className="absolute left-[33%] md:left-[35%] right-[33%] md:right-[30%] top-0 bottom-0 bg-white/[0.04] border-x border-white/10 z-0 transition-all duration-500 group-hover/table:bg-white/[0.07] shadow-[0_0_100px_rgba(255,255,255,0.03)]" />
              
              <div className="relative z-10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-3xl bg-black/40 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/10">
                      <th className="p-5 md:p-7 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Metric</th>
                      <th className="p-5 md:p-7 text-[9px] font-black uppercase tracking-[0.3em] text-white text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Dubai Mall</th>
                      <th className="p-5 md:p-7 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 text-right">Premium Avg</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {METRICS.map((m, i) => (
                      <motion.tr 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
                        className="hover:bg-white/[0.02] transition-colors group/row"
                      >
                        <td className="p-5 md:p-7 text-xs md:text-sm font-medium text-zinc-500 group-hover/row:text-zinc-300 transition-colors">
                          {m.label}
                        </td>
                        <td className="p-5 md:p-7 text-xs md:text-sm font-bold text-white text-center tracking-wide drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                          {m.dm}
                        </td>
                        <td className="p-5 md:p-7 text-xs md:text-sm font-light text-zinc-700 text-right italic group-hover/row:text-zinc-500 transition-colors">
                          {m.avg}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-10 text-center lg:text-left text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">
              A retail ecosystem engineered not just for presence, but for performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute -top-24 -right-24 size-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-[600px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default RetailPerformanceSection;
