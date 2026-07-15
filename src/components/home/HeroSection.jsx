import React from "react";
import Button from "../common/Button";
import macbook from "../../assets/images/macbook.svg";
import iphoneTriple from "../../assets/images/iphone-triple.svg";
import ipad from "../../assets/images/ipad.svg";

const IMAGES = {
  macbook,
  "iphone-triple": iphoneTriple,
  ipad,
};

/**
 * Renders a single full-bleed hero banner. Reusable across product lines.
 */
function HeroBanner({ slide, bg }) {
  const img = IMAGES[slide.image];
  return (
    <section
      className={`w-full flex flex-col items-center text-center pt-14 pb-6 px-4 ${bg}`}
    >
      <span className="text-sm sm:text-base font-medium text-apple-gray-dark">
        {slide.eyebrow}
      </span>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mt-1 mb-3 text-apple-dark text-balance max-w-xl">
        {slide.title}
      </h1>
      <div className="flex items-center gap-6 mb-6">
        {slide.links.map((link, i) => (
          <Button key={i} variant="text" href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>
      <div className="w-full max-w-3xl text-apple-dark">
        <img
          src={img}
          alt={slide.title}
          className="w-full h-auto max-h-[320px] object-contain mx-auto"
          draggable="false"
        />
      </div>
    </section>
  );
}

export default function HeroSection({ slides }) {
  const bgCycle = ["bg-white", "bg-apple-gray", "bg-white"];
  return (
    <div>
      {slides.map((slide, i) => (
        <HeroBanner key={slide.id} slide={slide} bg={bgCycle[i % bgCycle.length]} />
      ))}
    </div>
  );
}
