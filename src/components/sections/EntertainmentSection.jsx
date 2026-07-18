import React from "react";
import sportIcon from "../../assets/images/sport.svg";

// Paste your featured banner image URL here (or import from data/homeProducts.js)
export const FEATURED_BANNER_IMAGE = "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/78/57/f6/7857f6ec-a4ed-87dc-dea9-a6ed02888722/ebd59c17-8e95-49b1-aec0-44aec57388ee.png/1376x736sr.jpg";


export const tiles = [
  {
    title: "Apple TV+",
    subtitle: "Watch the new season",
    color: "from-purple-700 to-indigo-900",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/7b/5d/49/7b5d490a-a9b8-15e0-19d0-70e1f2c760d6/d675e2a7-8bb6-40e0-aa60-296128bb9668.png/376x508nr.jpg",
  },
  {
    title: "Apple Arcade",
    subtitle: "Play something new",
    color: "from-pink-600 to-rose-800",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/0e/3e/4c/0e3e4ce2-e5ff-45d8-d4d8-0821233ce59c/952c77af-ffb4-4f40-b65a-256e406a6374.png/244x244SC.DN01.jpg?l=en-US",
    
  },
  {
    title: "Apple Music",
    subtitle: "Your soundtrack, everywhere",
    color: "from-orange-600 to-red-800",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/63/a6/e1/63a6e126-da51-a55e-4d50-ef2b4bf6d561/6e933542-2c36-428b-a36c-cee2b1cf9847.png/376x508sr.jpg",
  },
];

export default function EntertainmentSection() {
  return (
    <section className="max-w-wide mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
        Endless entertainment.
      </h2>

      {/* Featured banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-orange-600 text-white h-80 sm:h-[400px] flex items-center px-8 mb-2">
        <img
          src={FEATURED_BANNER_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-[130%] object-cover object-center md:object-right"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

      </div>

      Sub-tiles grid
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
        {tiles.map((tile) => (
          <div key={tile.title} className="rounded-2xl h-40 overflow-hidden relative">
            {tile.image ? (
              <>
                <img
                  src={tile.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`} />
                <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
                  <p className="font-semibold text-lg">{tile.title}</p>
                  <p className="text-sm text-white/80">{tile.subtitle}</p>
                </div>
              </>
            ) : (
              <div className={`h-full bg-gradient-to-br ${tile.color} text-white flex flex-col justify-end p-5`}>
                <p className="font-semibold text-lg">{tile.title}</p>
                <p className="text-sm text-white/80">{tile.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
