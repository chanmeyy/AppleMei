import React from "react";

/**
 * Reusable section heading used across pages (Home, Mac, iPhone).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClass} gap-2 ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold text-apple-gray-dark uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-apple-dark text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-apple-gray-dark max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
