import React from "react";
import CardPromo from "../../components/home/CardPromo"; // Correct import
import ProductGrid from "../../components/home/ProductGrid";
import EntertainmentSection from "../../components/sections/EntertainmentSection";
import { heroSlides, productGrid } from "../../data/homeProducts";

export default function Home() {
  return (
    <main>
      <CardPromo /> {/* Use the correct component name */}
      {/* <HeroSection slides={heroSlides} /> */}
     <section>
      <CardPromo /> {/* Use the correct component name */}
     </section>
      <ProductGrid products={productGrid} />
      <EntertainmentSection />
    </main>
  );
}