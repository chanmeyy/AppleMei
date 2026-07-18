// import React from "react";
// import CardPromo from "../../components/home/CardPromo"; // Correct import
// import ProductGrid from "../../components/home/ProductGrid";
// import EntertainmentSection from "../../components/sections/EntertainmentSection";
// import { heroSlides, productGrid } from "../../data/homeProducts";

// export default function Home() {
//   return (
//     <main>
//       <CardPromo /> {/* Use the correct component name */}
//       {/* <HeroSection slides={heroSlides} /> */}
//      <section>
//       <CardPromo /> {/* Use the correct component name */}
//      </section>
//       <ProductGrid products={productGrid} />
//       <EntertainmentSection />
//     </main>
//   );
// }

import React from "react";
import HeroSection from "../../components/home/HeroSection";
import ProductGrid from "../../components/home/ProductGrid";
import EntertainmentSection from "../../components/sections/EntertainmentSection";
import CardPromo from "../../components/home/CardPromo";

export default function Home() {
  
  return (
    <main className="w-full bg-white">
    
      <HeroSection />
      <ProductGrid />
      <EntertainmentSection />
      <CardPromo />
      
    </main>
  );
}
