import React from "react";

const categories = [
  "MacBook Air",
  "MacBook Pro",
  "iMac",
  "Mac mini",
  "Mac Studio",
  "Mac Pro",
  "Displays",
  "Accessories",
];

export default function MacHero() {
  return (
    <section className="max-w-wide mx-auto px-4 sm:px-6 pt-10 pb-6">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Mac</h1>
      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <div key={cat} className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-apple-gray flex items-center justify-center text-apple-dark text-xs font-semibold">
              {cat
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </div>
            <span className="text-xs text-apple-gray-dark whitespace-nowrap">
              {cat}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
