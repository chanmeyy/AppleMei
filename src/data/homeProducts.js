// import macbookPro from "../assets/images/macbook-pro.svg";
// import airpods from "../assets/images/airpods.svg";
// import watch from "../assets/images/watch.svg";
// import ipad from "../assets/images/ipad.svg";
// import tradein from "../assets/images/tradein.svg";
// import card from "../assets/images/card.svg";

// export const heroSlides = [
//   {
//     id: "macbook-air",
//     eyebrow: "MacBook Air",
//     title: "Now supercharged by M4.",
//     image: "macbook",
//     theme: "light",
//     links: [
//       { label: "Learn more", href: "#", variant: "text" },
//       { label: "Buy", href: "#", variant: "text" },
//     ],
//   },
//   {
//     id: "iphone",
//     eyebrow: "iPhone",
//     title: "Meet the latest iPhone lineup.",
//     image: "iphone-triple",
//     theme: "light",
//     links: [
//       { label: "Learn more", href: "#", variant: "text" },
//       { label: "Shop iPhone", href: "#", variant: "text" },
//     ],
//   },
//   {
//     id: "ipad-air",
//     eyebrow: "iPad Air",
//     title: "Now supercharged by M3.",
//     image: "ipad",
//     theme: "light",
//     links: [
//       { label: "Learn more", href: "#", variant: "text" },
//       { label: "Buy", href: "#", variant: "text" },
//     ],
//   },
// ];

// export const productGrid = [
//   {
//     id: "macbook-pro",
//     eyebrow: "MacBook Pro",
//     title: "Hello M5 Pro and M5 Max.",
//     image: macbookPro,
//     theme: "dark",
//     links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
//   },
//   {
//     id: "airpods-pro",
//     eyebrow: "AirPods Pro 3",
//     title: "The world's best audio, way ahead.",
//     image: airpods,
//     theme: "dark",
//     links: [{ label: "Learn more", href: "#" }],
//   },
//   {
//     id: "watch",
//     eyebrow: "Apple Watch Series 11",
//     title: "The ultimate way to watch your health.",
//     image: watch,
//     theme: "light",
//     links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
//   },
//   {
//     id: "ipad-pro",
//     eyebrow: "iPad Pro",
//     title: "Absurd amounts of performance and prime-time storage.",
//     image: ipad,
//     theme: "dark",
//     links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
//   },
//   {
//     id: "trade-in",
//     eyebrow: "Apple Trade In",
//     title: "Get up to $985-$1665 in credit when you trade in iPhone 15 or higher.",
//     image: tradein,
//     theme: "light",
//     links: [{ label: "Learn more", href: "#" }],
//   },
//   {
//     id: "card",
//     eyebrow: "Apple Card",
//     title: "Get up to 3% Daily Cash back with every purchase.",
//     image: card,
//     theme: "light",
//     links: [{ label: "Learn more", href: "#" }],
//   },
// ];





export const heroSlides = [
  {
    id: "macbook-air",
    title: "MacBook Air",
    subtitle: "Now supercharged by M5.",
    image: "https://www.apple.com/v/home/images/macbook-air-m5/a/hero_macbook_air_m5__eb1idggd120y_medium_2x.jpg", // replace with real image URL
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "iphone",
    title: "iPhone",
    subtitle: "Meet the latest iPhone",
    image: "https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_medium_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "ipad-air",
    title: "iPad Air",
    subtitle: "Now supercharged by the M3 chip.",
    image: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
];

export const gridProducts = [
  {
    id: "macbook-pro",
    title: "MacBook Pro",
    subtitle: "Now with M5, M5 Pro, and M5 Max.",
    theme: "dark",
    image: "https://www.apple.com/v/home/images/macbook-pro/a/promo_macbook_pro__c9td9w1mc8ia_small_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "airpods-pro",
    title: "iPad air",
    subtitle: "Now supercharged by M4.",
    // theme: "dark",
    image: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_medium_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "apple-watch",
    title: "Apple Watch Series 11",
    subtitle: "The ultimate way to watch your health.",
    theme: "light",
    image: "https://www.apple.com/v/home/images/apple-watch-series-11/a/promo_apple_watch_series_11__gnlwqxe1jlu2_medium_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "ipad-pro",
    title: "iPad Pro",
    subtitle: "Avanced AI performance and game-changing capabilities.",
    theme: "light",
    image: "https://www.apple.com/v/home/images/ipad-pro/a/promo_ipad_pro__emtduc920o02_medium_2x.jpg",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "trade-in",
    title: "Trade In",
    image: "https://www.apple.com/v/home/images/iphone-tradein/a/promo_iphone_tradein__e4hrjxmgmf0i_small_2x.jpg",
    subtitle: "Get up to $195-$695 in credit when you trade in iPhone 15 or higher.",
    small: true,
    icon: "♻️",
    links: [{ label: "Get your estimate", href: "#" }],
  },
  {
    id: "apple-card",
    title: "Apple Card",
    image: "https://www.apple.com/v/home/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_medium_2x.jpg",
    subtitle: "Get up to 3% Daily Cash back with every purchase.",
    small: true,
    icon: "💳",
    links: [{ label: "Learn more", href: "Apply now" }],
  },
];

export const promoCards = [

];