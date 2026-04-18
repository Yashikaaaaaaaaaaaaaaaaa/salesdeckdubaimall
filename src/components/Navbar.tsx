'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/src/components/ui/navigation-menu';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Target, 
  TrendingUp, 
  Crown, 
  CalendarDays, 
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const SECTIONS = [
  'Overview',
  'Retail Opportunities',
  'Event Platform',
  'Audience & Reach'
];

interface BusinessContent {
  title: string;
  hook: string;
  icon: React.ElementType;
}

const businessSections: { [key: string]: BusinessContent[] } = {
  leasing: [
    { 
      title: 'Global Retail Hub', 
      hook: 'Position your brand in the epicentre of international luxury commerce.', 
      icon: Crown 
    },
    { 
      title: 'Leasing Portfolio', 
      hook: 'Bespoke flagship units designed for multi-million annual turnover.', 
      icon: Target 
    },
    { 
      title: 'Market Performance', 
      hook: 'Unprecedented footfall conversion data per category.', 
      icon: TrendingUp 
    },
  ],
  events: [
    { 
      title: 'Global Event Highlights', 
      hook: 'World-class activations that set global standard.', 
      icon: Zap 
    },
    { 
      title: 'Book This Venue', 
      hook: 'Convert square footage into 360-degree brand experiences.', 
      icon: CalendarDays 
    },
    { 
      title: 'Venue Portfolio', 
      hook: 'High-tech spaces optimized for scale and visual impact.', 
      icon: Building2 
    },
  ]
};

interface SalesItemProps {
  title: string;
  hook: string;
  icon: any;
  key?: React.Key;
}

function SalesItem({ title, hook, icon: Icon }: SalesItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href="#"
          className={cn(
            "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/5"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Icon className="size-4 text-white/50 group-hover:text-white transition-colors" />
            </div>
            <div className="text-sm font-semibold text-white tracking-wide">{title}</div>
          </div>
          <p className="line-clamp-2 text-[11px] leading-relaxed text-zinc-500 font-light mt-2 group-hover:text-zinc-300 transition-colors">
            {hook}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    setActiveSection((prev) => (prev + 1) % SECTIONS.length);
  };

  const handlePrev = () => {
    setActiveSection((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.div 
        animate={{ 
          y: isScrolled ? 12 : 24,
          padding: isScrolled ? '0px 12px' : '0px 24px',
          width: isScrolled ? '90%' : '100%'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full max-w-7xl flex justify-center"
      >
        <nav className={cn(
          "flex items-center justify-between w-full px-8 transition-all duration-500 rounded-3xl pointer-events-auto",
          isScrolled 
            ? "py-3 bg-black/80 backdrop-blur-3xl border border-white/5 shadow-2xl" 
            : "py-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        )}>
          
          {/* BRANDING: DUBAI MALL */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveSection(0)}>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.1em] text-white font-display uppercase leading-none">
                DUBAI <span className="text-white/40 font-light">MALL</span>
              </span>
              <span className="text-[7px] font-bold tracking-[0.5em] text-white/30 uppercase mt-1">Partnership Hub</span>
            </div>
          </div>

          {/* CONTROLLED NARRATIVE NAVIGATION */}
          <NavigationMenu delayDuration={150}>
            <NavigationMenuList className="gap-1 lg:gap-2 group/navlist">
              
              {SECTIONS.map((section, index) => {
                const isActive = activeSection === index;
                const isRetail = section === 'Retail Opportunities';
                
                return (
                  <NavigationMenuItem key={section}>
                    {section === 'Retail Opportunities' || section === 'Event Platform' ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "font-display uppercase text-[9px] tracking-[0.25em] transition-all duration-500 relative",
                            isActive ? "text-white" : "text-white/40 group-hover/navlist:text-white/20 hover:!text-white",
                             isRetail && "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
                          )}
                          onClick={() => setActiveSection(index)}
                        >
                          <span className={cn(isRetail && "font-bold text-white")}>
                            {section}
                          </span>
                          {isActive && (
                            <motion.div 
                              layoutId="activeGlow"
                              className="absolute inset-0 bg-white/5 rounded-md -z-10 blur-sm"
                            />
                          )}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid grid-cols-[220px_350px] overflow-hidden rounded-2xl shadow-2xl">
                            <div className="bg-zinc-900/50 p-6 flex flex-col justify-end border-r border-white/5 relative group/hero">
                              <div className={cn(
                                "absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-1000 group-hover/hero:scale-110",
                                isRetail 
                                  ? "bg-[url('https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800')]" 
                                  : "bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800')]"
                              )} />
                              <div className="relative z-10">
                                <div className="text-[9px] font-bold text-white mb-2 uppercase tracking-[0.3em] text-white/50">
                                  {isRetail ? 'Revenue Engine' : 'Brand Impact'}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight font-display italic leading-tight">
                                  {isRetail ? 'Dominate the Luxury Sector' : 'Immersive Event Architecture'}
                                </h3>
                                <button className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest hover:translate-x-1 transition-all group/btn">
                                  Access Deck <ChevronRight className="size-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                            <ul className="p-4 grid gap-1 bg-black/60 backdrop-blur-2xl">
                              {(isRetail ? businessSections.leasing : businessSections.events).map((item) => (
                                <SalesItem 
                                  key={item.title} 
                                  title={item.title}
                                  hook={item.hook}
                                  icon={item.icon}
                                />
                              ))}
                            </ul>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink 
                        href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setActiveSection(index)}
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          "font-display uppercase text-[9px] tracking-[0.25em] transition-all duration-500 relative",
                          isActive ? "text-white" : "text-white/40 group-hover/navlist:text-white/20 hover:!text-white"
                        )}
                      >
                        {section}
                        {isActive && (
                          <motion.div 
                            layoutId="activeGlow"
                            className="absolute inset-0 bg-white/5 rounded-md -z-10 blur-sm"
                          />
                        )}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}

            </NavigationMenuList>
          </NavigationMenu>

          {/* PRESENTATION FLOW CONTROLS */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <button 
                onClick={handlePrev}
                className="p-1.5 hover:text-white text-white/30 transition-all active:scale-90 group"
              >
                <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <button 
                onClick={handleNext}
                className="p-1.5 hover:text-white text-white/30 transition-all active:scale-90 group"
              >
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <a href="#partnership" className="relative group px-6 py-2.5 overflow-hidden rounded-full bg-white text-black text-[9px] font-black tracking-[0.3em] uppercase transition-all shadow-xl shadow-white/10 hover:shadow-white/20">
              <span className="relative z-10">START PARTNERSHIP</span>
              <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-20" />
            </a>
          </div>
        </nav>
      </motion.div>
    </div>
  );
}


