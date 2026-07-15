import React from "react";
import sportIcon from "../../assets/images/sport.svg";

const tiles = [
  { title: "Apple TV+", subtitle: "Watch the new season", color: "from-purple-700 to-indigo-900" },
  { title: "Apple Arcade", subtitle: "Play something new", color: "from-pink-600 to-rose-800" },
  { title: "Apple Music", subtitle: "Your soundtrack, everywhere", color: "from-orange-600 to-red-800" },
];

export default function EntertainmentSection() {
  return (
    <section className="max-w-wide mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
        Endless entertainment.
      </h2>

      {/* Featured banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-orange-600 text-white h-64 sm:h-80 flex items-center px-8 mb-2">
        <img
          src={sportIcon}
          alt=""
          className="absolute right-4 bottom-0 h-full w-1/2 object-contain opacity-70"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wide mb-1">
            Apple TV+
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold max-w-sm">
            Major League Soccer. Every match, streaming now.
          </h3>
        </div>
      </div>

      {/* Sub-tiles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
        {tiles.map((tile) => (
          <div
            key={tile.title}
            className={`rounded-2xl h-40 bg-gradient-to-br ${tile.color} text-white flex flex-col justify-end p-5`}
          >
            <p className="font-semibold text-lg">{tile.title}</p>
            <p className="text-sm text-white/80">{tile.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
