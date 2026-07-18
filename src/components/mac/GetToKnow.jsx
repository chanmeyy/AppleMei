import React from "react";
import { getToKnowCards } from "../../data/macProducts";

export default function GetToKnow() {
  return (
    <section className="w-full bg-white py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        

        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {getToKnowCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="relative shrink-0 w-[220px] lg:w-auto aspect-[3/4] rounded-2xl overflow-hidden bg-black"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-xs uppercase tracking-wide opacity-80">
                  {card.eyebrow}
                </p>
                <h3 className="text-white text-lg font-semibold leading-tight mt-1">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}