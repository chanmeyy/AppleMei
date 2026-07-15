import macbookPro from "../assets/images/macbook-pro.svg";
import airpods from "../assets/images/airpods.svg";
import watch from "../assets/images/watch.svg";
import ipad from "../assets/images/ipad.svg";
import tradein from "../assets/images/tradein.svg";
import card from "../assets/images/card.svg";

export const heroSlides = [
  {
    id: "macbook-air",
    eyebrow: "MacBook Air",
    title: "Now supercharged by M4.",
    image: "macbook",
    theme: "light",
    links: [
      { label: "Learn more", href: "#", variant: "text" },
      { label: "Buy", href: "#", variant: "text" },
    ],
  },
  {
    id: "iphone",
    eyebrow: "iPhone",
    title: "Meet the latest iPhone lineup.",
    image: "iphone-triple",
    theme: "light",
    links: [
      { label: "Learn more", href: "#", variant: "text" },
      { label: "Shop iPhone", href: "#", variant: "text" },
    ],
  },
  {
    id: "ipad-air",
    eyebrow: "iPad Air",
    title: "Now supercharged by M3.",
    image: "ipad",
    theme: "light",
    links: [
      { label: "Learn more", href: "#", variant: "text" },
      { label: "Buy", href: "#", variant: "text" },
    ],
  },
];

export const productGrid = [
  {
    id: "macbook-pro",
    eyebrow: "MacBook Pro",
    title: "Hello M5 Pro and M5 Max.",
    image: macbookPro,
    theme: "dark",
    links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
  },
  {
    id: "airpods-pro",
    eyebrow: "AirPods Pro 3",
    title: "The world's best audio, way ahead.",
    image: airpods,
    theme: "dark",
    links: [{ label: "Learn more", href: "#" }],
  },
  {
    id: "watch",
    eyebrow: "Apple Watch Series 11",
    title: "The ultimate way to watch your health.",
    image: watch,
    theme: "light",
    links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
  },
  {
    id: "ipad-pro",
    eyebrow: "iPad Pro",
    title: "Absurd amounts of performance and prime-time storage.",
    image: ipad,
    theme: "dark",
    links: [{ label: "Learn more", href: "#" }, { label: "Buy", href: "#" }],
  },
  {
    id: "trade-in",
    eyebrow: "Apple Trade In",
    title: "Get up to $985-$1665 in credit when you trade in iPhone 15 or higher.",
    image: tradein,
    theme: "light",
    links: [{ label: "Learn more", href: "#" }],
  },
  {
    id: "card",
    eyebrow: "Apple Card",
    title: "Get up to 3% Daily Cash back with every purchase.",
    image: card,
    theme: "light",
    links: [{ label: "Learn more", href: "#" }],
  },
];
