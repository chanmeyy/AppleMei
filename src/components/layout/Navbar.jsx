import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Store", href: "#" },
  { label: "Mac", to: "/mac" },
  { label: "iPad", href: "#" },
  { label: "iPhone", to: "/iphone" },
  { label: "Watch", href: "#" },
  { label: "Vision", href: "#" },
  { label: "AirPods", href: "#" },
  { label: "TV & Home", href: "#" },
  { label: "Entertainment", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Support", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-gray">
      <nav className="max-w-wide mx-auto flex items-center justify-between h-11 px-4 sm:px-6">
        {/* Apple logo */}
        <Link to="/" aria-label="Apple Home" className="flex items-center">
          <svg
            width="15"
            height="18"
            viewBox="0 0 14 18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11.6 9.6c0-1.9 1.5-2.8 1.6-2.9-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.1 1.9-1.3 2.3-.3 5.7 1 7.6.6.9 1.3 1.9 2.3 1.9.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.9.7-1 1-2 1-2.1-.1 0-1.9-.7-1.9-2.9zM9.5 3.6c.5-.6.8-1.5.7-2.3-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.8 2.2.8.1 1.6-.4 2.2-1z" />
          </svg>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 text-xs font-normal">
          {NAV_LINKS.map((item) =>
            item.to ? (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right icons */}
        <div className="hidden lg:flex items-center gap-5">
          <button aria-label="Search" className="hover:text-gray-300">
            <Search size={15} />
          </button>
          <button aria-label="Bag" className="hover:text-gray-300">
            <ShoppingBag size={15} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            {NAV_LINKS.map((item) =>
              item.to ? (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className="block py-1">
                    {item.label}
                  </a>
                </li>
              )
            )}
            <li className="flex items-center gap-6 pt-2 border-t border-white/10">
              <button aria-label="Search" className="flex items-center gap-2 text-sm">
                <Search size={15} /> Search
              </button>
              <button aria-label="Bag" className="flex items-center gap-2 text-sm">
                <ShoppingBag size={15} /> Bag
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
