import React from "react";
import Button from "../common/Button";

// Image URLs as string constants
const IMAGES = {
  macbook: "https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_largetall_2x.jpg",
  "iphone-triple": "https://www.apple.com/v/iphone-16-pro/a/images/overview/hero/iphone_16pro_hero__e5l2jlbjv3ye_largetall_2x.jpg",
  ipad: "https://www.apple.com/v/ipad-air/a/images/overview/hero/ipad_air_hero__g3jqx1au52q2_largetall_2x.jpg",
};

/**
 * Renders a single full-bleed hero banner. Reusable across product lines.
 */
function HeroBanner({ slide, bg }) {
  const imgUrl = IMAGES[slide.image];
  return (
    <section
      className={`w-full relative overflow-hidden flex items-center justify-center ${bg}`}
    >
      {/* Background Image - fills the entire card */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgUrl}
          alt={slide.title}
          className="w-full h-full object-cover"
          draggable="false"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content - overlayed on top of image */}
      <div className="relative z-10 flex flex-col items-center text-center py-16 px-4 md:py-24">
        <span className="text-sm sm:text-base font-medium text-white/90">
          {slide.eyebrow}
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 mb-4 text-white text-balance max-w-2xl">
          {slide.title}
        </h1>
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          {slide.links.map((link, i) => (
            <Button key={i} variant="text" href={link.href} className="text-white hover:text-white/80">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection({ slides }) {
  const bgCycle = ["bg-white", "bg-apple-gray", "bg-white"];
  return (
    <div className="space-y-0">
      {slides.map((slide, i) => (
        <HeroBanner key={slide.id} slide={slide} bg={bgCycle[i % bgCycle.length]} />
      ))}
    </div>
  );
}