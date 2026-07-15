import React from "react";
import Button from "./Button";

/**
 * Reusable product tile.
 * theme: "light" | "dark" controls text/background colors.
 * size: "large" (spans 2 cols on desktop) | "normal"
 */
export default function ProductCard({
  eyebrow,
  title,
  description,
  image,
  theme = "light",
  links = [],
  size = "normal",
  className = "",
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl ${
        isDark ? "bg-black text-white" : "bg-apple-gray text-apple-dark"
      } ${size === "large" ? "sm:col-span-2" : ""} min-h-[420px] ${className}`}
    >
      <div className="flex flex-col items-center text-center gap-1 pt-10 px-6">
        {eyebrow && (
          <span
            className={`text-sm font-medium ${
              isDark ? "text-gray-300" : "text-apple-gray-dark"
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl font-semibold">{title}</h3>
        {description && (
          <p
            className={`text-base max-w-xs ${
              isDark ? "text-gray-300" : "text-apple-gray-dark"
            }`}
          >
            {description}
          </p>
        )}
        {links.length > 0 && (
          <div className="flex items-center gap-4 mt-3">
            {links.map((link, i) => (
              <Button key={i} variant={link.variant || "text"} href={link.href || "#"}>
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 flex items-end justify-center mt-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[260px] object-contain select-none pointer-events-none"
          draggable="false"
        />
      </div>
    </div>
  );
}
