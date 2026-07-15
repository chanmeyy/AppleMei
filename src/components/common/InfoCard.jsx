import React from "react";

/**
 * Small feature tile used in "Why Apple", "Get to know" and similar grids.
 * theme: "light" | "dark"
 */
export default function InfoCard({ title, subtitle, theme = "light", className = "" }) {
  const isDark = theme === "dark";
  return (
    <div
      className={`rounded-2xl p-6 h-48 flex flex-col justify-end ${
        isDark
          ? "bg-apple-dark text-white"
          : "bg-apple-gray text-apple-dark"
      } ${className}`}
    >
      <h4 className="font-semibold text-lg leading-snug">{title}</h4>
      {subtitle && (
        <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-apple-gray-dark"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
