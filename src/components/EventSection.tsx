import React, { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { ArrowRight, Users, Calendar, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventSectionProps {
  heroTitle?: string;
  heroSubtitle?: string;
  ctaText?: string;
  videoUrl?: string;
  imageUrl?: string;
  proofPoints?: Array<{ icon: React.ReactNode; text: string }>;
  eventImage?: string;
  actionOptions?: Array<{ title: string; description: string }>;
}

const EventSection: React.FC<EventSectionProps> = ({
  heroTitle = "Where Brands Become Experiences",
  heroSubtitle = "At Dubai Mall, events are not moments — they are spectacles seen by millions.",
  ctaText = "Book Your Event",
  videoUrl = "",
  imageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
  proofPoints = [
    { icon: <Users className="w-4 h-4" />, text: "10,000+ Capacity Zones" },
    { icon: <Calendar className="w-4 h-4" />, text: "Year-Round Programming" },
    { icon: <Globe className="w-4 h-4" />, text: "Global Audience Reach" }
  ],
  eventImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  actionOptions = [
    { title: "Global Event Highlights", description: "See how brands activate at global scale" },
    { title: "Book This Venue", description: "Turn your event into a high-impact experience" },
    { title: "Venue Portfolio", description: "Spaces designed for visibility, scale, and engagement" }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="event-platform" className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Full-Screen Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out hover:scale-105"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          )}
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight font-display uppercase">
              {heroTitle}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {heroSubtitle}
            </p>
            <Button 
              size="lg" 
              className="group text-base md:text-lg px-8 py-6 bg-white text-black hover:bg-white/90 rounded-full font-bold uppercase tracking-widest"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proof Strip */}
      <section 
        className="relative z-20 -mt-20 mx-6 md:mx-12 lg:mx-24"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 px-10 py-8">
            {proofPoints.map((point, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-4 text-white">
                  <div className="p-2 bg-white/5 rounded-lg text-white/60">{point.icon}</div>
                  <span className="text-sm md:text-base font-medium tracking-wide uppercase text-white/80">
                    {point.text}
                  </span>
                </div>
                {index < proofPoints.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-white/10" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Action Module */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-32">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card 
            className="overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/[0.08] hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Visual */}
              <div className="relative h-[400px] md:h-auto overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${eventImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 z-10">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-2 block">Immersive Platform</span>
                   <h2 className="text-3xl font-bold text-white tracking-tight">Spectacle Architecture</h2>
                </div>
              </div>

              {/* Right: Options */}
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-6">
                {actionOptions.map((option, index) => (
                  <button
                    key={index}
                    className="group text-left p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 hover:translate-x-2 relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors tracking-tight">
                        {option.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed font-light">
                        {option.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                        Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Hover light effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-40 -left-40 size-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 size-[600px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};

export default EventSection;
