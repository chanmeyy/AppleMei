// import React from "react";

// /**
//  * Small feature tile used in "Why Apple", "Get to know" and similar grids.
//  * theme: "light" | "dark"
//  */
// export default function InfoCard({ title, subtitle, theme = "light", className = "" }) {
//   const isDark = theme === "dark";
//   return (
//     <div
//       className={`rounded-2xl p-6 h-48 flex flex-col justify-end ${
//         isDark
//           ? "bg-apple-dark text-white"
//           : "bg-apple-gray text-apple-dark"
//       } ${className}`}
//     >
//       <h4 className="font-semibold text-lg leading-snug">{title}</h4>
//       {subtitle && (
//         <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-apple-gray-dark"}`}>
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }




import React from "react";
import Button from "./Button";

export default function InfoCard({ product, title, subtitle, theme = "light", className = "" }) {
  const cardTitle = title ?? product?.title;
  const cardSubtitle = subtitle ?? product?.subtitle;
  const links = product?.links ?? [];
  const icon = product?.icon;
  const isDark = theme === "dark" || product?.theme === "dark";

  return (
    <div
      className={`rounded-2xl px-6 py-8 lg:px-10 lg:py-10 flex flex-col items-center text-center min-h-[220px] justify-center ${isDark ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
        } ${className}`}
    >
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h3 className="text-xl lg:text-2xl font-semibold">{cardTitle}</h3>
      {cardSubtitle && (
        <p className="mt-1 text-sm lg:text-base text-[#6e6e73] max-w-xs">{cardSubtitle}</p>
      )}
      {links.length > 0 && (
        <div className="mt-3 flex gap-4 flex-wrap justify-center">
          {links.map((l) => (
            <Button key={l.label} label={l.label} href={l.href} />
          ))}
        </div>
      )}
    </div>
  );
}