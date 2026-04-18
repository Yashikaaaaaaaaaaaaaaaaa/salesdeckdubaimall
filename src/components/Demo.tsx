'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/src/components/ui/scroll-expansion-hero';
import ImpactPanel from '@/src/components/ImpactPanel';
import RetailPerformanceSection from '@/src/components/RetailPerformanceSection';
import EventSection from '@/src/components/EventSection';
import AudienceSection from '@/src/components/AudienceSection';
import CTASection from '@/src/components/CTASection';

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
}

const dubaiMallMedia: MediaContent = {
  src: 'https://www.pexels.com/download/video/34529274/',
  poster: 'https://spidubai.ae/wp-content/uploads/2024/06/snapedit_1717494153462.png',
  background: 'https://spidubai.ae/wp-content/uploads/2024/06/snapedit_1717494153462.png',
  title: 'DUBAI MALL',
  date: 'THE CENTRE OF NOW',
  scrollToExpand: 'SCROLL TO EXPLORE',
};

export const Demo = () => {
  return (
    <div className="bg-black">
      {/* SECTION: OVERVIEW */}
      <div id="overview">
        {/* HERO SECTION WITH IMPACT PANEL AS CONTENT */}
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc={dubaiMallMedia.src}
          posterSrc={dubaiMallMedia.poster}
          bgImageSrc={dubaiMallMedia.background}
          title={dubaiMallMedia.title}
          date={dubaiMallMedia.date}
          scrollToExpand={dubaiMallMedia.scrollToExpand}
          textBlend
        >
          <ImpactPanel 
            headline="The World's Most Visited Retail Destination"
            stats={[
              { value: "105M+", label: "Annual Footfall" },
              { value: "1,200+", label: "Premium Outlets" },
              { value: "98%", label: "Brand Retention" },
              { value: "Global", label: "Luxury Icon" }
            ]}
            supportingText="Dubai Mall is not just a shopping destination; it is a global landmark where culture, luxury, and digital innovation converge to create an unmatched retail ecosystem."
            ctaText="START PARTNERSHIP"
            ctaLink="#contact"
            backgroundVideo="https://www.pexels.com/download/video/35128760/"
          />
        </ScrollExpandMedia>
      </div>

      {/* SECTION: RETAIL OPPORTUNITIES (SALES WEAPON) */}
      <RetailPerformanceSection />

      {/* SECTION: EVENT PLATFORM */}
      <EventSection />

      {/* SECTION: AUDIENCE & REACH */}
      <AudienceSection />

      {/* SECTION: FINAL CTA */}
      <CTASection />
    </div>
  );
};

export default Demo;
