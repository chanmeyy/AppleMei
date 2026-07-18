// import React from "react";
// import { whyAppleCards } from "../../data/macProducts";

// export default function WhyAppleSection() {
//   return (
//     <section className="w-full bg-[#fafafa] py-10 lg:py-16">
//       <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
//         <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
//           Why Apple is the best place to buy Mac.
//         </h2>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//           {whyAppleCards.map((card) => (
//             <div key={card.id} className="rounded-2xl bg-white overflow-hidden flex flex-col">
//               <div className="p-5 lg:p-6">
//                 <h3 className="text-base lg:text-lg font-semibold text-[#1d1d1f]">
//                   {card.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-[#6e6e73]">{card.subtitle}</p>
//               </div>
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-[140px] lg:h-[160px] object-cover mt-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }