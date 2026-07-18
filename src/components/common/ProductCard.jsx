// import React from "react";
// import Button from "./Button";

// /**
//  * Reusable product tile.
//  * theme: "light" | "dark" controls text/background colors.
//  * size: "large" (spans 2 cols on desktop) | "normal"
//  */
// export default function ProductCard({
//   eyebrow,
//   title,
//   description,
//   image,
//   theme = "light",
//   links = [],
//   size = "normal",
//   className = "",
// }) {
//   const isDark = theme === "dark";

//   return (
//     <div
//       className={`relative flex flex-col overflow-hidden rounded-2xl ${
//         isDark ? "bg-black text-white" : "bg-apple-gray text-apple-dark"
//       } ${size === "large" ? "sm:col-span-2" : ""} min-h-[420px] ${className}`}
//     >
//       <div className="flex flex-col items-center text-center gap-1 pt-10 px-6">
//         {eyebrow && (
//           <span
//             className={`text-sm font-medium ${
//               isDark ? "text-gray-300" : "text-apple-gray-dark"
//             }`}
//           >
//             {eyebrow}
//           </span>
//         )}
//         <h3 className="text-2xl sm:text-3xl font-semibold">{title}</h3>
//         {description && (
//           <p
//             className={`text-base max-w-xs ${
//               isDark ? "text-gray-300" : "text-apple-gray-dark"
//             }`}
//           >
//             {description}
//           </p>
//         )}
//         {links.length > 0 && (
//           <div className="flex items-center gap-4 mt-3">
//             {links.map((link, i) => (
//               <Button key={i} variant={link.variant || "text"} href={link.href || "#"}>
//                 {link.label}
//               </Button>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="flex-1 flex items-end justify-center mt-6">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-auto max-h-[260px] object-contain select-none pointer-events-none"
//           draggable="false"
//         />
//       </div>
//     </div>
//   );
// }




import React from "react";
import Button from "./Button";

export default function ProductCard({ product }) {
  const { title, subtitle, theme = "light", image, links = [] } = product;
  const isDark = theme === "dark";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl lg:rounded-[28px] flex flex-col justify-between
        min-h-[420px] lg:min-h-[520px] px-6 pt-10 pb-8 lg:px-10 lg:pt-14
        ${isDark ? "bg-black text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}
    >
      <div className="text-center">
        <h3 className="text-2xl lg:text-4xl font-semibold tracking-tight">{title}</h3>
        <p className={`mt-1 text-base lg:text-xl ${isDark ? "text-gray-300" : "text-[#6e6e73]"}`}>
          {subtitle}
        </p>
        <div className="mt-4 flex justify-center gap-5">
          {links.map((l) => (
            <Button key={l.label} label={l.label} href={l.href} dark={isDark} />
          ))}
        </div>
      </div>

      <div
        className={`mt-8 flex-1 rounded-xl bg-gradient-to-b flex items-center justify-center ${
          isDark ? "from-gray-800 to-black" : "from-white to-[#e8e8ed]"
        }`}
      >
        {image ? (
          <img src={image} alt={title} className="max-h-[220px] lg:max-h-[320px] object-contain" />
        ) : (
          <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            {title} image
          </span>
        )}
      </div>
    </div>
  );
}