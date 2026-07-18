// import React from "react";
// import Button from "../common/Button";

// /**
//  * Card-Promo Component - Single promo card with image background
//  * and overlaid text content
//  */
// export default function CardPromo({ 
//   eyebrow = "iPhone",
//   title = "Meet the latest iPhone lineup.",
//   imageUrl = "https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_largetall_2x.jpg",
//   links = [
//     { label: "Learn more", href: "/iphone", variant: "text" },
//     { label: "Shop iPhone", href: "/shop/iphone", variant: "primary" }
//   ],
//   className = "",
//   aspectRatio = "1440/692",
//   minHeight = "692px",
//   maxWidth = "1440px"
// }) {
//   return (
//     <div 
//       className={`relative w-full overflow-hidden rounded-3xl mx-auto ${className}`}
//       style={{ 
//         aspectRatio: aspectRatio, 
//         minHeight: minHeight,
//         maxWidth: maxWidth,
//         width: "100%"
//       }}
//     >
//       {/* Background Image - fills entire card */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover"
//           draggable="false"
//         />
//         {/* Gradient overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//       </div>

//       {/* Content - positioned higher on the card */}
//       <div className="relative z-10 flex flex-col items-center justify-start text-center w-full h-full pt-2 md:pt- lg:pt-90 px-6">
//         <div className="max-w-3xl mx-auto">
//           {/* Eyebrow / Category */}
//           <span className="inline-block text-base sm:text-lg font-medium text-white/90 mb-2 tracking-wide">
//             {eyebrow}
//           </span>

//           {/* Title - Larger for desktop */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white text-balance leading-tight mb-6">
//             {title}
//           </h2>

//           {/* Links / Buttons - Apple style */}
//           <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
//             {links.map((link, i) => (
//               <Button 
//                 key={i} 
//                 variant={link.variant || "text"} 
//                 href={link.href}
//                 className={`transition-all duration-300 text-base md:text-lg font-medium ${
//                   link.variant === "primary" 
//                     ? "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl" 
//                     : "text-white hover:text-white/80 hover:underline underline-offset-4"
//                 }`}
//               >
//                 {link.label}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { promoCards } from "../../data/homeProducts";

export default function CardPromo() {
  return (
    <section className="w-full bg-white px-4 lg:px-8 pb-10 lg:pb-14">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {promoCards.map((card) => (
          <a
            key={card.id}
            href={card.href || "#"}
            className="aspect-square rounded-xl overflow-hidden flex items-end p-3 text-white text-xs lg:text-sm font-medium"
            style={{ backgroundImage: `linear-gradient(135deg, ${card.colorFrom}, ${card.colorTo})` }}
          >
            {card.label}
          </a>
        ))}
      </div>
    </section>
  );
}