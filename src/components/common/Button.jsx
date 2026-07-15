import React from "react";

/**
 * Reusable Apple-style pill button.
 * variant: "primary" (filled blue) | "text" (blue text link with chevron)
 */
export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}) {
  const base = "inline-flex items-center justify-center transition-colors duration-200 whitespace-nowrap";

  if (variant === "text") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${base} text-apple-blue hover:underline text-[17px] leading-none gap-1 ${className}`}
      >
        {children}
        <span aria-hidden="true">&rsaquo;</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} rounded-full bg-apple-blue hover:bg-apple-blue-hover text-white text-[17px] px-4 py-1.5 ${className}`}
    >
      {children}
    </a>
  );
}
