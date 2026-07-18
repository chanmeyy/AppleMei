// import React from "react";
// import ProductCard from "../common/ProductCard";

// /**
//  * Responsive CSS grid showcasing secondary products (MacBook Pro, AirPods, etc.)
//  * 1 column on mobile, 2 columns from small breakpoint up — mirrors Apple's home grid.
//  */
// export default function ProductGrid({ products }) {
//   return (
//     <section className="max-w-wide mx-auto px-4 sm:px-6 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             eyebrow={product.eyebrow}
//             title={product.title}
//             image={product.image}
//             theme={product.theme}
//             links={product.links}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import ProductCard from "../common/ProductCard";
// import InfoCard from "../common/InfoCard";
// import { gridProducts } from "../../data/homeProducts";

// export default function ProductGrid() {
//   const bigCards = gridProducts.filter((p) => !p.small);
//   const smallCards = gridProducts.filter((p) => p.small);

//   return (
//     <section className="w-full bg-white px-4 lg:px-8 py-6 lg:py-8">
//       <div className="max-w-[1440px] mx-auto flex flex-col gap-4 lg:gap-5">
//         {Array.from({ length: Math.ceil(bigCards.length / 2) }).map((_, rowIdx) => (
//           <div key={rowIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
//             {bigCards.slice(rowIdx * 2, rowIdx * 2 + 2).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         ))}

//         {smallCards.length > 0 && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
//             {smallCards.map((product) => (
//               <InfoCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React from "react";
import Button from "../common/Button";
import { gridProducts } from "../../data/homeProducts";

function ProductCard({ product }) {
  const { title, subtitle, theme, image, links = [] } = product;

  // 1. DYNAMIC THEMING: Configure text colors depending on "dark" or "light" values
  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-[#1d1d1f]";
  const subColor = isDark ? "text-neutral-400" : "text-[#6e6e73]";
  const bgFallback = isDark ? "bg-black" : "bg-[#f5f5f7]";

  return (
    /* CONTAINER: Grid item with aspect ratio and absolute centering capabilities */
    <div className={`relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-[28px] overflow-hidden ${bgFallback}`}>
      
      {/* 2. TEXT LAYER: Leviting perfectly over the upper area of the card block */}
      <div className="absolute top-10 left-0 right-0 text-center px-6 z-20 pointer-events-none">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight ${textColor}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-1 sm:mt-2 text-sm sm:text-base md:text-lg tracking-tight ${subColor}`}>
            {subtitle}
          </p>
        )}
        
        {/* BUTTON CONTROLS */}
        <div className="mt-3 flex justify-center gap-4 pointer-events-auto">
          {links.map((l) => {
            const isBuy = l.label.toLowerCase() === "learn more";
            return (
              <Button
                key={l.label}
                label={l.label}
                href={l.href}
                className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  isBuy
                    ? "bg-[#0071e3] text-white hover:bg-[#0077ed]" // Solid button for Buy
                    : "bg-transparent text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-white" // Border button for Learn More
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* 3. IMAGE COMPONENT: Fills the card base layer underneath the floating text stack */}
      <div className="absolute inset-0 w-full h-full flex items-end justify-center z-10">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-bottom select-none"
          />
        ) : (
          /* Placeholder container mapping custom Apple gradients inside text block */
          <div className="w-full h-1/2 flex items-center justify-center text-neutral-500 text-xs opacity-40">
            {title} asset rendering frame
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-3 md:px-4">
      {gridProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}