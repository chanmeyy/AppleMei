




import React from "react";
import Button from "../common/Button";
import { heroSlides } from "../../data/homeProducts";


/** Renders a single full-bleed hero banner (MacBook Air, iPhone, iPad Air…) */
/** Renders a single full-bleed hero banner (MacBook Air, iPhone, iPad Air…) */
function HeroBanner({ slide }) {
  const { title, subtitle, image, links = [] } = slide;

  return (
    <section className="w-full bg-[#f5f5f7] mb-3">
      {/* 1. RELATIVE WRAPPER: This container adapts perfectly to the image size */}
      <div className="relative w-full overflow-hidden flex flex-col items-center">

        {/* 2. TEXT LAYER: Absolutely positioned at the top center of this specific image */}
        <div className="absolute top-8 sm:top-12 lg:top-16 left-0 right-0 text-center px-4 z-20 pointer-events-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-[#6e6e73] tracking-tight">
              {subtitle}
            </p>
          )}
          {/* pointer-events-auto ensures the links remain clickable even with the overlay */}
          {/* pointer-events-auto ensures the links remain clickable even with the overlay */}
          <div className="mt-4 flex justify-center gap-4 pointer-events-auto">
            {links.map((l) => {
              const isBuy = l.label.toLowerCase() === "buy";
              
              return (
                <Button
                  key={l.label}
                  label={l.label}
                  href={l.href}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isBuy
                      ? "bg-transparent text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3]/10" // Bordered style for "Buy"
                      : "bg-[#0071e3] text-white hover:bg-[#0077ed]" // Solid blue style for "Learn more"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* 3. IMAGE LAYER: Renders normally, setting the exact height of the banner */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain block select-none z-10"
          />
        ) : (
          <div className="w-full h-[300px] sm:h-[450px] bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center text-gray-400 text-sm">
            {title} image placeholder
          </div>
        )}
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <div className="space-y-10 lg:space-y-14">
      {heroSlides.map((slide) => (
        <HeroBanner key={slide.id} slide={slide} />
      ))}
    </div>
  );
}