import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({ 
  value, 
  duration = 2 
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const hasNumber = /\d/.test(value);
  const numericValue = hasNumber ? parseInt(value.replace(/\D/g, '')) : 0;
  const prefix = value.match(/^[^\d]*/)?.[0] || '';
  const suffix = value.match(/[^\d]+$/)?.[0] || value.replace(/[\d,]+/, '').replace(prefix, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center space-y-2"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
        {hasNumber && numericValue > 0 ? (
          <>
            {prefix}
            <AnimatedNumber value={numericValue} />
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-sm md:text-base lg:text-lg text-muted-foreground font-medium uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
};

interface ImpactPanelProps {
  headline?: string;
  stats?: Array<{ value: string; label: string }>;
  supportingText?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

const ImpactPanel: React.FC<ImpactPanelProps> = ({
  headline = "The World's Most Visited Retail Destination",
  stats = [
    { value: "100M+", label: "Annual Visitors" },
    { value: "1,200+", label: "Retail Outlets" },
    { value: "Top Global", label: "Luxury Hub" },
    { value: "Downtown", label: "Dubai Location" }
  ],
  supportingText = "A global platform where retail, entertainment, and culture converge at unmatched scale.",
  ctaText = "Explore Retail Opportunities",
  ctaLink = "#",
  backgroundImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
  backgroundVideo
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && backgroundVideo) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay prevented');
      });
    }
  }, [backgroundVideo]);

  return (
    <div id="overview-impact" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 text-white">
        {backgroundVideo ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            {!isVideoLoaded && backgroundImage && (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
            )}
          </>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center space-y-16 md:space-y-20">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-display uppercase">
              {headline}
            </h1>
          </motion.div>

          {/* Stats Grid */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-3xl"
          >
            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light">
              {supportingText}
            </p>
          </motion.div>

          {/* CTA Button */}
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group text-base md:text-lg px-8 py-6 rounded-full bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest"
                asChild
              >
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0 z-[5] pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default ImpactPanel;
