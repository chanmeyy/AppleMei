// import React from "react";

// const categories = [
//   "MacBook Air",
//   "MacBook Pro",
//   "iMac",
//   "Mac mini",
//   "Mac Studio",
//   "Mac Pro",
//   "Displays",
//   "Accessories",
// ];

// export default function MacHero() {
//   return (
//     <section className="max-w-wide mx-auto px-4 sm:px-6 pt-10 pb-6">
//       <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Mac</h1>
//       <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
//         {categories.map((cat) => (
//           <div key={cat} className="flex flex-col items-center gap-2 shrink-0">
//             <div className="w-10 h-10 rounded-full bg-apple-gray flex items-center justify-center text-apple-dark text-xs font-semibold">
//               {cat
//                 .split(" ")
//                 .map((w) => w[0])
//                 .join("")
//                 .slice(0, 2)}
//             </div>
//             <span className="text-xs text-apple-gray-dark whitespace-nowrap">
//               {cat}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { macCategories } from "../../data/macProducts";

export default function MacHero() {
  return (
    <section className="w-full bg-white pt-8 pb-6 lg:pt-14 lg:pb-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f]">
          Mac
        </h1>
        {/* <p className="mt-1 text-sm lg:text-base text-[#6e6e73] max-w-md">
          The most powerful Mac laptops and desktops ever, supercharged by Apple silicon.
        </p> */}

        <div className="mt-6 lg:mt-10 flex gap-6 lg:gap-10 overflow-x-auto pb-2">
          {macCategories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="flex flex-col items-center gap-2 shrink-0 text-center"
            >
              {cat.image ? (
                <span className="w-16 h-16 lg:w-24 lg:h-12 overflow-hidden border border-[#e5e5e7] bg-white rounded-md">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </span>
              ) : (
                <span className="w-12 h-12 lg:w-24 lg:h-12 rounded-md bg-[#f5f5f7] flex items-center justify-center text-lg lg:text-2xl">
                  {cat.icon}
                </span>
              )}
              <span className="text-[11px] lg:text-xs text-[#1d1d1f] whitespace-nowrap">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}