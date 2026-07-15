import React from "react";
import HeroSection from "../../components/home/HeroSection";
import ProductGrid from "../../components/home/ProductGrid";
import EntertainmentSection from "../../components/sections/EntertainmentSection";
import { heroSlides, productGrid } from "../../data/homeProducts";

export default function Home() {
  return (
    <main>
      <HeroSection slides={heroSlides} />
      <ProductGrid products={productGrid} />
      <EntertainmentSection />
    </main>
  );
}
