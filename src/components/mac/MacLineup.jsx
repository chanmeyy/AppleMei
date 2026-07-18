import React, { useRef, useState } from "react";
import Button from "../common/Button";
import { macLineup } from "../../data/macProducts";

const FILTERS = [
    { id: "all", label: "All products" },
    { id: "laptop", label: "Laptops" },
    { id: "desktop", label: "Desktops" },
    { id: "display", label: "Displays" },
];

export default function MacLineup() {
    const [active, setActive] = useState("all");
    const scrollRef = useRef(null);

    const products =
        active === "all" ? macLineup : macLineup.filter((p) => p.category === active);

    const scrollByCard = (dir) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.firstChild;
        const cardWidth = card ? card.offsetWidth + 16 : 300;
        scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-[#f5f5f7] py-10 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-[#1d1d1f] text-left">
                    Explore the lineup.
                </h2>

                {/* Filter tabs */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {FILTERS.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setActive(f.id)}
                            className={`shrink-0 px-4 py-1.5 rounded-full text-sm border transition-colors ${active === f.id
                                ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                                : "bg-white text-[#1d1d1f] border-gray-300 hover:border-gray-400"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Card carousel */}
                <div
                    ref={scrollRef}
                    className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="snap-start shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] bg-white rounded-2xl px-6 pt-8 pb-8 flex flex-col items-center text-center"
                        >
                            <div className="h-[160px] lg:h-[190px] flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {product.colors && (
                                <div className="mt-4 flex gap-1.5">
                                    {product.colors.map((c) => (
                                        <span
                                            key={c}
                                            className="w-2.5 h-2.5 rounded-full border border-black/10"
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            )}

                            <h3 className="mt-4 text-xl lg:text-2xl font-semibold text-[#1d1d1f]">
                                {product.name}
                            </h3>
                            <p className="mt-2 text-sm lg:text-base font-semibold text-[#1d1d1f]">
                                {product.tagline}
                            </p>

                            <p className="mt-4 text-xs lg:text-sm text-[#6e6e73] leading-snug">
                                From {product.priceFrom} or {product.priceMonthly}
                            </p>

                            <div className="mt-5 flex items-center gap-5">
                                <Button label="Learn more" href={product.href} variant="solid" />
                                <Button label="Buy" href={product.href} variant="link" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prev/next arrows, desktop only */}
                <div className="mt-4 hidden lg:flex justify-end gap-2">
                    <button
                        onClick={() => scrollByCard(-1)}
                        aria-label="Previous"
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => scrollByCard(1)}
                        aria-label="Next"
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}