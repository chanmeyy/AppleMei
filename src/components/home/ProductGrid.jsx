import React from "react";
import ProductCard from "../common/ProductCard";

/**
 * Responsive CSS grid showcasing secondary products (MacBook Pro, AirPods, etc.)
 * 1 column on mobile, 2 columns from small breakpoint up — mirrors Apple's home grid.
 */
export default function ProductGrid({ products }) {
  return (
    <section className="max-w-wide mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            eyebrow={product.eyebrow}
            title={product.title}
            image={product.image}
            theme={product.theme}
            links={product.links}
          />
        ))}
      </div>
    </section>
  );
}
