// import React from "react";

// /**
//  * Reusable section heading used across pages (Home, Mac, iPhone).
//  */
// export default function SectionHeading({
//   eyebrow,
//   title,
//   subtitle,
//   align = "center",
//   className = "",
// }) {
//   const alignClass =
//     align === "left" ? "text-left items-start" : "text-center items-center";

//   return (
//     <div className={`flex flex-col ${alignClass} gap-2 ${className}`}>
//       {eyebrow && (
//         <span className="text-sm font-semibold text-apple-gray-dark uppercase tracking-wide">
//           {eyebrow}
//         </span>
//       )}
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-apple-dark text-balance">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="text-lg sm:text-xl text-apple-gray-dark max-w-2xl text-balance">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }



import React from "react";

export default function SectionHeading({ title, subtitle, dark = false }) {
  return (
    <div className="text-center px-4">
      <h2
        className={`text-3xl md:text-5xl font-semibold tracking-tight ${
          dark ? "text-white" : "text-[#1d1d1f]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-lg md:text-2xl ${dark ? "text-gray-300" : "text-[#6e6e73]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

